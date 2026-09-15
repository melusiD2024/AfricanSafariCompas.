import crypto from 'node:crypto';

export const randomToken=(bytes=32)=>crypto.randomBytes(bytes).toString('base64url');
export const digest=value=>crypto.createHash('sha256').update(value).digest('hex');
export const verificationCode=()=>String(crypto.randomInt(100000,1000000));
export const constantTimeEqual=(left,right)=>{
  const a=Buffer.from(String(left)),b=Buffer.from(String(right));
  return a.length===b.length&&crypto.timingSafeEqual(a,b);
};
export const maskContact=value=>{
  const text=String(value||'');
  if(text.includes('@')){const [name,domain]=text.split('@');return `${name.slice(0,2)}***@${domain}`}
  return text.length>4?`${'*'.repeat(Math.max(3,text.length-4))}${text.slice(-4)}`:'***';
};
