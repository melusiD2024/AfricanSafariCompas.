import fs from 'node:fs';import path from 'node:path';import vm from 'node:vm';
const root=process.cwd(),dist=path.join(root,'dist'),html=fs.readFileSync(path.join(dist,'index.html'),'utf8'),errors=[];
const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(match=>match[1]),duplicates=[...new Set(ids.filter((id,index)=>ids.indexOf(id)!==index))];if(duplicates.length)errors.push(`Duplicate IDs: ${duplicates.join(', ')}`);
const refs=[...html.matchAll(/(?:src|href)="([^"#?]+)(?:\?[^"#]*)?"/g)].map(match=>match[1]).filter(ref=>!ref.includes('://'));for(const ref of refs)if(!fs.existsSync(path.join(dist,ref)))errors.push(`Missing local asset: ${ref}`);
const scripts=fs.readdirSync(dist).filter(file=>file.endsWith('.js'));for(const file of scripts){try{new vm.Script(fs.readFileSync(path.join(dist,file),'utf8'),{filename:file})}catch(error){errors.push(`${file}: ${error.message}`)}}
const worker=fs.readFileSync(path.join(dist,'service-worker.js'),'utf8'),assetList=worker.match(/const ASSETS=\[(.*?)\];/s)?.[1]||'';for(const match of assetList.matchAll(/'\.\/([^']+)'/g))if(!fs.existsSync(path.join(dist,match[1])))errors.push(`Service worker asset missing: ${match[1]}`);
for(const required of ['pocketbook','explore','field','map','journal','sosDialog'])if(!ids.includes(required))errors.push(`Required screen missing: ${required}`);
if(!html.includes('viewport-fit=cover'))errors.push('Safe-area viewport support missing');
for(const required of ['mobile-stability.css','app-stability.js'])if(!html.includes(required))errors.push(`Mobile stability asset not loaded: ${required}`);
if(html.indexOf('mobile-stability.css')<html.lastIndexOf('<link rel="stylesheet"'))errors.push('Mobile stability stylesheet must be the final stylesheet');
if(!worker.includes("'./mobile-stability.css'")||!worker.includes("'./app-stability.js'"))errors.push('Mobile stability assets missing from offline cache');
const mobileCss=fs.readFileSync(path.join(dist,'mobile-stability.css'),'utf8'),stickyCss=fs.readFileSync(path.join(dist,'sticky-controls.css'),'utf8'),realMap=fs.readFileSync(path.join(dist,'real-map.js'),'utf8');
if(!stickyCss.includes('.sticky-controls{position:sticky')||!stickyCss.includes('env(safe-area-inset-top'))errors.push('Pinned mobile discovery controls missing');
if(!mobileCss.includes('overflow-x:clip'))errors.push('Viewport overflow must not create a sticky-breaking scroll container');
if(!mobileCss.includes('[hidden]{display:none!important}'))errors.push('Native hidden states must override component display rules');
if((realMap.match(/revealMap\(\)/g)||[]).length<3||!realMap.includes("scrollIntoView({behavior:'smooth',block:'start'})"))errors.push('Map result selection must reveal the geographic map');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log(`Validated ${ids.length} IDs, ${refs.length} local references and ${scripts.length} scripts.`);
