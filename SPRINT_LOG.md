# African Safari Pocketbook sprint

## Cycle 61 — Safari feature discovery on the native map

- Added one-tap discovery for real parks and reserves, safari stays and airstrips within the visible native map area.
- Restricted discovery searches to the current African viewport rather than returning unrelated global places.
- Plotted live geographic results as native markers and automatically centred the best match.
- Added accessible result lists, empty states, zoom/move guidance and resilient network failure states.
- Kept curated ecosystem markers, native MapLibre interaction, Circle, Pocketbook, journal and floating SOS intact.
- Bumped Android to 1.71.0 and offline cache to v80.

## Cycle 60 — Native safari map foundation

- Added a dedicated native Android MapLibre map instead of placing the primary map interaction inside the WebView page.
- Connected the permanent Map tab and Open safari map control directly to the native map on Android while retaining the web map as a browser fallback.
- Added a full-screen OpenFreeMap basemap, Africa camera bounds, native touch gestures, compass and attribution.
- Added native curated markers for key safari ecosystems across Africa and automatic marker focus from type-ahead search.
- Added credential-free live Africa search for parks, reserves, lodges, towns and countries through Nominatim, with the best result centred automatically.
- Added explicit loading, empty and connectivity states and a persistent close control.
- Bumped Android to 1.70.0 and offline cache to v79.

## Cycle 59 — Search-driven map focus

- Made exact and unambiguous offline country or destination searches automatically drive the map after a short typing debounce.
- Added a visible amber country-outline highlight rather than only updating a result list.
- Made connected Africa-wide searches automatically select, centre and open the best geographic result.
- Kept alternative matches tappable and retained the full-screen map workspace, offline index and floating SOS.
- Bumped Android to 1.69.0 and offline cache to v78.

## Cycle 58 — Full-screen mobile map workspace

- Replaced the awkward touch-toggle map with a dedicated full-screen mobile map mode.
- Kept the inline map as a scroll-safe preview; panning and zooming only activate after opening the map workspace.
- Moved the existing Africa search, live/offline results and selected-place card into the full-screen map while it is open.
- Added a persistent Close map control and Android Back handling that exits the map before leaving the Map page.
- Kept the map constrained to Africa and preserved bundled country outlines, offline destination search and connected OpenStreetMap detail.
- Preserved the raised floating SOS above the full-screen map.
- Bumped Android to 1.68.0 and offline cache to v77.

## Cycle 1 — Pocketbook foundation

- Repositioned the product from an itinerary-first planner to African Safari Pocketbook.
- Added a new home surface for places, wildlife, offline maps, journey tools and field essentials.
- Changed primary mobile navigation to Home, Places, Wildlife, Map and Plan.
- Added unified search hand-off from the home screen to either the country atlas or wildlife guide.
- Renamed install metadata and Android launcher label while retaining the established application ID for upgrade compatibility.
- Preserved trip planning, country atlas, Botswana catalogue, wildlife guide, map, offline packs and SOS.
- Bumped Android to 1.9.0 and offline cache to v19.

## Next priorities

1. Deep country and destination reference entry model with sourced, dated facts.
2. Wildlife profile expansion and resilient media handling.
3. Offline data packaging and saved field notes.

## Cycle 2 — Trustworthy country intelligence

- Rebuilt country entries to distinguish reference facts, curated destination content and live official advisory information.
- Removed Wikipedia text from the political and social context section.
- Added current GOV.UK FCDO advisory retrieval with its publication/update date and direct official links.
- Added World Bank population values with the observation year where available.
- Added WHO country-health and outbreak links.
- Added a visible source register, retrieval timestamp and explicit verification limits to every live entry.
- Added a clear offline state and retry action; cached destination highlights remain available without masquerading as current advice.
- Bumped Android to 1.10.0 and offline cache to v20.

## Next priorities after cycle 2

1. Wildlife profiles with resilient photographs, field marks, range and conservation sourcing.
2. Meaningful offline data packaging rather than downloaded-state labels alone.
3. Personal sightings, saved places and field notes.

## Cycle 3 — Sourced wildlife field entries

- Added full, tappable wildlife profiles to every curated species card.
- Added live GBIF Checklist Bank taxonomy matching and scientific classification.
- Added GBIF occurrence-country evidence with record counts and a warning that occurrence records are not complete range maps.
- Added resilient descriptive-reference and photograph retrieval with an honest offline fallback.
- Added direct GBIF taxon and IUCN Red List searches without inventing or caching conservation categories.
- Added identification cautions, source registers and retrieval timestamps.
- Retained real animal calls and the country-filtered full biodiversity search.
- Bumped Android to 1.11.0 and offline cache to v21.

## Next priorities after cycle 3

1. Meaningful offline data packaging and transparent storage state.
2. Personal sightings, saved places and field notes.
3. Map search and destination-detail depth.

## Cycle 4 — Real offline regional packs

- Replaced cosmetic local-storage flags with versioned regional datasets stored in IndexedDB.
- Each pack now contains its actual country reference rows, mapped destination index and complete curated wildlife index.
- Added truthful per-pack country, mapped-place, species and stored-size reporting.
- Added total pack and device-storage reporting, pack removal and remove-all controls.
- Migrated previously selected regions into real stored packs.
- Clearly distinguished stored editorial reference from live advisories, health notices, biodiversity results, photographs and map tiles.
- Added all pack code to the service-worker shell cache so pack management itself works offline.
- Bumped Android to 1.12.0 and offline cache to v22.

## Next priorities after cycle 4

1. Personal sightings, saved places and field notes.
2. Map search and destination-detail depth.
3. Safety-centre configuration and emergency readiness checks.

## Cycle 5 — Private field journal

- Added a first-class Field Journal to home, desktop and mobile navigation.
- Added offline sightings with animal, local date/time, place, notes and optional device coordinates.
- Added one-tap “Sighting” actions to curated wildlife cards.
- Added saved destinations directly from the map and a saved-place collection in the journal.
- Added journal counts, empty states, deletion controls and a portable JSON backup export.
- Clearly disclosed that journal records remain on the device unless exported.
- Added datalist suggestions from the full curated wildlife guide and mapped destination index.
- Bumped Android to 1.13.0 and offline cache to v23.

## Next priorities after cycle 5

1. Map search and destination-detail depth.
2. Safety-centre configuration and emergency readiness checks.
3. Accessibility and complete mobile regression testing.

## Cycle 6 — Continent-wide geographic search

- Added explicit live “Search all Africa” map search for parks, lodges, towns and countries through OpenStreetMap Nominatim.
- Restricted live results to African country codes and added clear loading, offline, no-result and failure states.
- Added selectable live results, geographic markers, coordinates, feature type and direct OpenStreetMap source links.
- Distinguished live geographic results from curated Pocketbook recommendations and warned users to verify access and boundaries.
- Added direct country-brief access to curated destination details.
- Added the ability to save live map results into the private Field Journal.
- Retained curated map filtering and offline destination lists when live search is unavailable.
- Bumped Android to 1.14.0 and offline cache to v24.

## Next priorities after cycle 6

1. Safety-centre configuration and emergency readiness checks.
2. Accessibility and complete mobile regression testing.
3. Final content, installation and release-path review.

## Cycle 7 — Configurable field safety centre

- Rebuilt the SOS dialog around an honest four-part readiness check: destination, trusted contact, guide/lodge contact and locally verified emergency number.
- Added per-country safety profiles stored only on the device.
- Added explicit verification confirmation and verification date for user-entered emergency numbers.
- Warned when an emergency number was last checked more than 90 days ago.
- Added direct calling for configured guide/lodge and emergency numbers through the Android dialler.
- Improved SOS sharing with destination, coordinates, accuracy and an explicit receipt-confirmation request.
- Retained a clear statement that the app does not dispatch or certify emergency services.
- Added complete unconfigured, permission-denied, stale-number and sharing-failure states.
- Bumped Android to 1.15.0 and offline cache to v25.

## Final-run priorities

1. End-to-end navigation, mobile safe-area and accessibility regression.
2. Repair defects without removing breadth.
3. Build and publish the final stable APK with documented limitations.

## Cycle 8 — Final regression and release

- Added a repeatable build-gating validator for duplicate IDs, missing local references, JavaScript syntax, service-worker assets, required screens and safe-area support.
- Added the validator to GitHub Actions before every Android build.
- Enabled full edge-to-edge safe-area viewport handling and moved the bottom navigation and SOS control clear of Android system controls.
- Added visible keyboard focus, larger mobile tap targets and reduced-motion support.
- Corrected the Android status bar to the Pocketbook brown-black brand palette.
- Replaced stale prototype and pre-launch wording with accurate availability statements.
- Fixed journal backup on Android by routing it through the native share/save sheet instead of an unsupported WebView blob download.
- Bumped Android to 1.16.0 and offline cache to v26.

## Known release limitations

- Live country intelligence, biodiversity results, photographs, recordings, OpenStreetMap search and uncached map tiles require connectivity and their upstream services may be unavailable.
- Regional packs store reference indexes, not complete offline raster/vector maps.
- Lodge coverage outside the expanded Botswana catalogue remains editorially incomplete.
- Only three curated animal-call recordings are presently licensed and connected; other profiles say recording unavailable.
- Safety contacts and emergency numbers are user-entered and must be independently verified; the app does not dispatch assistance.
- Journal and safety data are device-local and have no encrypted account sync.
- The published APK is debug-signed for direct testing rather than Play Store production signing.

## Cycle 9 — Immersive Field Edition identity

- Removed the numeric 01–04 labels from every Pocketbook home action.
- Rebuilt the opening experience around original photographic safari artwork, field-guide typography, canvas and leather tones, grass texture, and restrained motion.
- Added a live Field Pulse with local time, natural-light period and honest connectivity status.
- Added a device-local Field Kit summary for offline regions, sightings and saved places.
- Refined action language around the safari journey: discover, identify, navigate and remember.
- Kept motion optional through the device reduced-motion preference and preserved mobile safe areas.
- Bumped Android to 1.17.0 and offline cache to v27.

## Cycle 10 — Product integrity and country wildlife

- Corrected the repeated 71-species defect: offline packs now describe the wildlife content as one continent-wide starter guide, never a national species total.
- Added country browsing of the most frequently published animal occurrence records through GBIF, without requiring users to guess a search term.
- Added explicit caveats that database records reflect reporting effort and are not complete inventories or range assessments.
- Removed unsupported claims about verified operators and offline destination maps.
- Removed the non-functional operator lead form and replaced it with honest independent-verification guidance.
- Relabelled the wildlife modes and added a prominent scope statement.
- Bumped Android to 1.18.0 and offline cache to v28.

## Cycle 11 — Country languages and phrase notebooks

- Removed the internal “first complete country model” development label from Botswana.
- Added Languages & Local Etiquette to every country profile using the country-language fields returned by REST Countries.
- Cached successfully retrieved language lists for later offline country-profile use.
- Added six practical phrase-note prompts per country for translations confirmed with a guide, host or fluent speaker.
- Added device-local phrase persistence and optional device-generated pronunciation.
- Clearly distinguished device speech from native-speaker recordings and avoided invented machine translations.
- Bumped Android to 1.19.0 and offline cache to v29.

## Cycle 12 — Structured country field profiles

- Added a consistent field-profile structure to all 54 country entries with direct Wildlife, Map, Languages and Safety actions.
- Added expanded editorial profiles for Botswana, South Africa, Namibia, Zimbabwe and Zambia covering gateways, landscape systems, safari regions and broad seasonal patterns.
- Linked expanded profiles to official national tourism, protected-area and environment sources.
- Kept bundled editorial guidance visibly separate from live political, security, health and operational information.
- Used honest “Core country profile” language for entries still awaiting deeper regional research rather than presenting the atlas as complete.
- Made the new field profiles available inside offline country entries and offline regional packs.
- Bumped Android to 1.20.0 and offline cache to v30.

## Cycle 13 — East African field profiles

- Expanded Kenya, Tanzania, Uganda, Rwanda and Ethiopia to the full field-profile structure.
- Added country-specific gateways, ecosystem summaries, six regional landscape entries and broad seasonal context.
- Connected each entry to its national wildlife, parks or official tourism authority.
- Added explicit climate and wildlife-event caveats so seasonal editorial guidance is never presented as a forecast or guarantee.
- Preserved direct country actions for wildlife records, maps, language notes and safety setup.
- Bumped Android to 1.21.0 and offline cache to v31.

## Release delivery repair

- Added a proper versioned GitHub Release with an APK asset to every successful Android build.
- Retained the repository stable-download copy as a fallback while avoiding dependence on the intermittently overloaded raw-content cache.

## Cycle 14 — App-wide mobile stabilization

- Replaced competing phone modal dimensions with one full-screen mobile-sheet contract for country, wildlife and safety windows.
- Added physical viewport, display-cutout and Android navigation-area handling across dialogs, navigation, SOS and notifications.
- Made close controls persist while long profiles scroll and added Android back-button support for closing sheets before exiting the app.
- Removed horizontal overflow paths from grids, long source links, map details, forms, itinerary cards and narrow-screen branding.
- Reflowed country facts, wildlife classifications, language notes, safety fields, map actions, journal controls and route cards for narrow phones.
- Prevented Android input zoom, improved tap targets and added graceful broken-image handling.
- Added build-gating checks for the final mobile stylesheet, interaction script and offline-cache registration.
- Bumped Android to 1.22.0 and offline cache to v32.

## Final installation hardening

- Preserved the Android testing keystore between automated builds so releases after 1.23.0 can upgrade in place instead of receiving unrelated test signatures.
- Published 1.23.0 as the new stable installation baseline; older test builds may require one final uninstall before installation.

## Cycle 15 — Places hierarchy repair

- Rebuilt Places around the 54-country atlas as the immediate primary surface.
- Added visible region filters directly above country results and retained country/destination search.
- Removed the six broad promotional region cards that interrupted the path to individual countries.
- Moved Botswana’s detailed region, lodge, camp and access-point catalogue inside the Botswana country profile.
- Added a clear progression from Africa to region, country and detailed field tools.
- Bumped Android to 1.24.0 and offline cache to v33.

## Cycle 16 — Persistent SOS access

- Restored the floating SOS control above the bottom navigation on every primary screen.
- Added a persistent SOS shortcut inside full-screen country and wildlife sheets, where Android’s top-layer dialog would otherwise cover the global button.
- Made the shortcut close the current information sheet before opening the Safety Centre, avoiding stacked inaccessible dialogs.
- Bumped Android to 1.25.0 and offline cache to v34.

## Cycle 17 — Pinned discovery controls and collision-free SOS

- Kept the country and wildlife search/filter controls visible while long result sets scroll beneath them.
- Added live result counts and one-tap clear actions to both country and wildlife discovery.
- Kept the map search and regional filters anchored above its result lists.
- Moved SOS into its own reserved mobile-navigation cell, eliminating its ability to cover Map, Journal or page actions.
- Preserved a floating desktop SOS control and the existing emergency shortcut inside full-screen information sheets.
- Bumped Android to 1.26.0 and offline cache to v35.

## Cycle 18 — Restore floating emergency control

- Restored the prominent red floating SOS button above the mobile navigation at the user’s request.
- Returned the navigation to five evenly sized destinations while preserving sticky search and filter controls.
- Retained the mobile safe-area offset so SOS remains above the phone navigation area and app tabs.
- Bumped Android to 1.27.0 and offline cache to v36.

## Cycle 19 — Mobile discovery and map-flow repair

- Removed the horizontal overflow scroll-container condition that prevented sticky controls from adhering reliably in Android WebView.
- Kept country and wildlife search/filter panels pinned directly beneath the app header during page scrolling.
- Made curated and live destination selections automatically move the real geographic map into the viewport.
- Increased the mobile map to a useful viewport-relative height and constrained its information card so the geography remains visible.
- Reduced nonessential Map-page introduction content on phones so map tools are reached sooner.
- Bumped Android to 1.28.0 and offline cache to v37.

## Cycle 20 — Compact persistent search and SOS clearance

- Removed the internal wildlife-scope disclaimer from the consumer interface.
- Reduced persistent controls to the search row and result count only; modes, country selectors and category filters now scroll normally.
- Applied the same compact search-only behaviour to Places and Map.
- Raised the floating SOS button fully above the navigation bar so Journal remains visible and tappable.
- Enforced the native hidden state so country-record controls no longer appear while the starter guide is selected.
- Bumped Android to 1.29.0 and offline cache to v38.

## Cycle 21 — Africa-wide destination directory

- Turned every country’s curated highlights into individual, tappable destination entries instead of a single line of text.
- Added consistent place classification for protected areas, water and coast, mountains, desert and landscape entries.
- Linked every destination directly to live Africa-wide geographic search and the real map.
- Added a country-wide map search action to every one of the 54 country profiles.
- Kept the complete directory available in offline country profiles while clearly reserving live map lookup for connected use.
- Preserved all v1.29 navigation, SOS, sticky search, journal, wildlife and country-intelligence behaviour.
- Bumped Android to 1.30.0 and offline cache to v39.

## Cycle 22 — Wildlife breadth and media provenance

- Expanded the offline curated field guide from 64 to 104 African wildlife entries without removing the live country-record browser.
- Added overlooked small carnivores, antelope, primates, reptiles, birds and marine species across African habitats.
- Made opened profiles prefer still images attached to GBIF occurrence records, with Wikimedia imagery retained as a fallback.
- Added visible image provider, contributor or rightsholder, licence and direct media-record attribution beneath each profile photograph.
- Kept taxonomy, occurrence evidence and current conservation searches clearly separated, with no invented conservation status.
- Preserved the floating red SOS, compact sticky searches, real map, country profiles, languages, offline packs and private journal.
- Bumped Android to 1.31.0 and offline cache to v40.

## Cycle 23 — Genuine offline geographic map

- Bundled Leaflet inside the Android package so the interactive map engine no longer depends on a CDN at startup.
- Added a compact Natural Earth geographic country-outline dataset to the APK as an offline base map, with visible source attribution.
- Kept curated destination markers positioned by real latitude and longitude while offline.
- Limited OpenStreetMap tile requests to connected sessions; detailed map tiles and live place search remain clearly identified as online features.
- Rewrote offline-map and regional-pack messaging to state exactly what is available without connectivity.
- Added regression checks for the local map engine, geographic dataset, offline layer and conditional tile loading.
- Preserved the floating red SOS, compact sticky searches, map reveal behaviour, country profiles, languages, wildlife and journal.
- Bumped Android to 1.32.0 and offline cache to v41.

## Cycle 24 — Offline map discovery

- Connected the Map search field to the complete 54-country Pocketbook atlas and its curated destination index, even without connectivity.
- Added offline result cards that clearly distinguish country outlines from country-level destination locators.
- Made geographic country shapes tappable and linked supported shapes directly to their country Pocketbook entry.
- Added automatic map fitting and map reveal for offline country and destination selections.
- Kept the separate “Search all Africa” action for exact live OpenStreetMap geography, with an honest offline response instead of erasing local results.
- Preserved detailed online tiles, curated coordinate markers, floating red SOS, compact sticky searches and all v1.29–v1.32 features.
- Bumped Android to 1.33.0 and offline cache to v42.

## Cycle 25 — Complete country and language foundation

- Removed the deprecated REST Countries v3 dependency that had begun breaking country profiles.
- Bundled a dated, licensed Africa reference snapshot covering capitals, currencies, calling codes, driving side and language fields for every atlas country.
- Kept population, political, security and health information outside the static snapshot; current values continue to come from dated live sources or display as unavailable.
- Added ISO country codes to all 54 Pocketbook entries so every profile can open country-specific wildlife records.
- Replaced incomplete-profile labels with one consistent country-profile structure across Africa.
- Added neutral destination context and direct Protected Planet and GBIF starting points to countries that do not yet have bespoke editorial profiles.
- Made the language component available from bundled data offline, while retaining user-verified phrase notes and honest device-voice disclosure.
- Preserved the floating red SOS, slim persistent searches, offline map, map discovery, journal and existing bespoke country profiles.
- Bumped Android to 1.34.0 and offline cache to v43.

## Cycle 26 — Real-device security and accessibility

- Removed the intrusive Android location prompt at app startup; location permission is now requested only after the user taps a location action.
- Added a native-to-web permission result bridge so SOS coordinates and journal sightings retry correctly after permission is granted.
- Accepted approximate-location permission where the user declines precise location.
- Tightened the trusted WebView origin check, disabled file and universal file URL access, disabled script-opened windows and enabled Android Safe Browsing.
- Blocked insecure HTTP navigation from the native shell while retaining HTTPS, telephone and email intents.
- Added a restrictive browser Content Security Policy and referrer policy for app content and known live data services.
- Added keyboard skip navigation, current-page semantics, coarse-pointer touch targets, reduced-motion compatibility and high-contrast/forced-colour support.
- Preserved the floating red SOS, slim persistent searches, offline maps, country and language profiles, wildlife and journal.
- Bumped Android to 1.35.0 and offline cache to v44.

## Cycle 27 — Private journal backup and recovery

- Added journal restore from a user-selected JSON backup on Android and the web build.
- Validated the Pocketbook backup marker, required arrays, dates, coordinates, field types and a 5 MB file-size ceiling before writing anything.
- Sanitised and length-limited restored notes, names and place fields.
- Merged valid sightings and saved places without overwriting current data, while skipping duplicate observations and place names.
- Added a deliberate, confirmed erase-all control and clear success, empty and invalid-backup states.
- Added an Android system document picker without requesting storage permission.
- Preserved the floating red SOS, slim persistent searches, offline maps, country and language profiles and all existing journal capture features.
- Bumped Android to 1.36.0 and offline cache to v45.

## Cycle 28 — SOS vertical clearance adjustment

- Raised the floating red SOS control by approximately 5 mm on mobile displays at the user’s request.
- Preserved its right-edge position, safe-area calculation, size, appearance and emergency behaviour.
- Retained clear separation from the bottom navigation and Android system controls.
- Bumped Android to 1.37.0 and offline cache to v46.

## Cycle 29 — Africa-wide destination-first Places search

- Upgraded the persistent Places search to return individual destination results across the complete bundled atlas, not only country cards.
- Kept matching country entries and destination entries visually distinct.
- Added region and country context to every destination result.
- Made destination results open the real Map with the exact place and country already searched.
- Kept all 54 country profiles, region filters and offline search behaviour intact.
- Preserved the raised floating red SOS, persistent search, wildlife, language, journal and safety features.
- Bumped Android to 1.38.0 and offline cache to v47.

## Cycle 30 — Second SOS clearance adjustment

- Raised the floating red SOS control by a further approximate 5 mm on mobile displays at the user’s request.
- Preserved the control’s size, right-edge alignment, safe-area calculation and emergency behaviour.
- Kept the SOS independent of the bottom navigation and Android system controls.
- Bumped Android to 1.39.0 and offline cache to v48.

## Cycle 31 — Data, privacy and source transparency

- Added a first-class Data, Privacy & Sources centre accessible from the Pocketbook home screen.
- Disclosed exactly which journal, safety, language and offline selections remain on the device.
- Disclosed the app's use of internet, network-state and on-demand location permissions.
- Identified connected OpenStreetMap, Nominatim, GBIF, World Bank, GOV.UK FCDO and WHO services and explained that live requests are governed by those services.
- Added direct access to bundled country-data, Natural Earth and Leaflet licence notices.
- Connected journal export and deliberate erase controls to the privacy centre and displayed current on-device record totals.
- Clearly labelled the APK as a field-testing release and retained explicit editorial and current-information limitations.
- Preserved the raised floating red SOS, persistent searches, offline maps and all existing Pocketbook features.
- Bumped Android to 1.40.0 and offline cache to v49.

## Cycle 32 — Offline-pack mobile layout repair

- Reproduced the narrow-screen defect shown on a physical Android device where “Save guide + map” actions extended beyond the viewport.
- Stacked offline-pack content and actions on mobile, with a full-width wrapping action that cannot exceed its card.
- Added lower content clearance so the raised floating SOS does not permanently obscure the final offline-pack controls.
- Kept the compact bottom navigation, SOS safe-area calculation and all download behaviour intact.
- Added a regression gate for narrow-screen offline-pack action sizing.
- Bumped Android to 1.41.0 and offline cache to v50.

## Cycle 33 — Genuine device-local My Trip companion

- Removed the hard-coded Botswana–Kenya–Tanzania trip, fictional next flight and pretend document counts.
- Connected the route builder's actual title, countries, duration, style and day-by-day stops to a device-local saved trip.
- Added an honest empty state when the traveller has not saved a route.
- Added a user-selected start date, private trip notes and six preparation reminders without claiming that any requirement has been verified.
- Added trip sharing through the Android share sheet and deliberate removal that leaves journal records untouched.
- Kept planning guidance visibly separate from confirmed bookings, access, border, health, weather and safety conditions.
- Added regression checks preventing the old demonstration travel claims from returning.
- Preserved the raised floating SOS, persistent searches, real maps, privacy centre, wildlife and journal.
- Bumped Android to 1.42.0 and offline cache to v51.

## Cycle 34 — Broader Africa-wide wildlife field guide

- Expanded the offline wildlife guide from 104 to 172 distinct field entries.
- Added 68 mammals, birds, reptiles and marine animals without duplicating existing entries.
- Broadened representation across North, West, Central, East, Southern and island Africa, including small carnivores, primates, antelope, wetland birds, raptors, snakes, tortoises, sharks, rays, turtles and whales.
- Kept common and scientific-name search, category filters and the existing sourced GBIF field-profile and attributable photograph workflow.
- Kept the curated list explicitly separate from live country occurrence records and avoided unsupported conservation or range-status claims.
- Added regression checks for catalogue size, duplicates, all four categories and representative additions.
- Preserved the raised floating SOS, persistent searches, offline maps, My Trip, country profiles, language guide and journal.
- Bumped Android to 1.43.0 and offline cache to v52.

## Cycle 35 — Structured wildlife field craft

- Added a structured field-craft section to every one of the 172 curated animal profiles.
- Added practical identification, behaviour, feeding-evidence, tracks-and-signs and similar-species observation prompts tailored to mammals, birds, reptiles and marine animals.
- Worded prompts as safe observation methodology rather than unsupported species-specific claims.
- Clearly separated offline observation guidance from live descriptive, taxonomy, occurrence and conservation sources.
- Added a one-tap “Record this sighting” action inside every wildlife profile and connected it to the private field journal.
- Added responsive cards, keyboard focus treatment and single-column mobile presentation.
- Added regression checks protecting all five field-guide components and journal integration.
- Preserved 172 wildlife entries, sourced media, the raised SOS, persistent searches, offline maps, My Trip, languages and country profiles.
- Bumped Android to 1.44.0 and offline cache to v53.

## Cycle 36 — Attributed offline wildlife photographs

- Added deliberate one-tap offline photograph saving inside every wildlife profile when a sourced image is available.
- Store the exact image request in a dedicated device cache rather than implying every online thumbnail is already offline.
- Preserve provider, contributor, licence, source-record link and save date with each cached photograph.
- Prefer a previously saved photograph when reopening its field entry without connectivity.
- Added honest unsupported, download-failure, retry and already-saved states.
- Updated the privacy disclosure to identify saved wildlife media as device-local data.
- Added responsive mobile controls and regression checks for the offline-media cache and attribution record.
- Preserved all 172 animals, field-craft tools, sourced live profiles, raised SOS, persistent searches, offline maps, My Trip, languages and journal.
- Bumped Android to 1.45.0 and offline cache to v54.

## Cycle 37 — Attributed wildlife recording discovery

- Added an in-profile Wikimedia Commons audio finder for all 172 curated wildlife entries.
- Search by common and scientific name and return playable audio with filename, contributor, licence and source-page access.
- Preserved the three manually connected reference recordings and clearly distinguish them from automated search matches.
- Explicitly warn that matching audio is not automatically a verified animal call and require the user to inspect its description before identification use.
- Added loading, empty, service-unavailable and repeat-search states without weakening the offline field guide.
- Added Commons API access to the restrictive content-security policy and recorded the source in every profile.
- Added responsive audio cards and regression checks for attribution and verification warnings.
- Preserved all 172 animals, field craft, offline photographs, raised SOS, persistent searches, maps, My Trip, languages and journal.
- Bumped Android to 1.46.0 and offline cache to v55.

## Cycle 38 — Final regression and offline-release integrity

- Performed end-to-end source regression review across navigation, persistent searches, SOS clearance, wildlife, media, audio, map, countries, languages, journal, My Trip and Android security configuration.
- Found and fixed six newer CSS and JavaScript files that were loaded by the app but absent from the offline application shell.
- Unified every local stylesheet and script on release token v56 so an upgraded phone cannot retain stale interfaces from earlier APKs.
- Added regression enforcement requiring every HTML CSS/JS dependency to exist in the offline shell.
- Added regression enforcement for a single current asset token, matching displayed and Android versions, disabled Android backups and blocked cleartext traffic.
- Revalidated all 172 unique wildlife entries, all 54 country records, offline map assets, viewport containment, pinned searches and journal data safeguards.
- Preserved the raised floating SOS, attributed photographs and recordings, field craft, maps, Places, languages, My Trip and private journal.
- Bumped Android to 1.47.0 and offline cache to v56.

## Cycle 39 — Reliable country pocketbook opening

- Replaced the 54 visually clickable country articles with semantic buttons that work consistently with touch, keyboard and accessibility services.
- Connected the country action directly to the country-pocketbook controller instead of relying on a second script's inferred heading click.
- Made country entries open immediately with their name and curated highlights while the bundled reference record and live, dated services load.
- Prevented repeated taps from throwing when the country dialog is already open and reset every newly opened entry to its top.
- Removed the obsolete mutation observer and duplicate country click handler.
- Added release validation for the 54-country action contract and immediate offline content.
- Preserved the raised SOS, persistent searches, 172 wildlife entries, maps, languages, My Trip and private journal.
- Bumped Android to 1.48.0 and offline cache to v57.

## Cycle 40 — Flight and safari-stay booking interface

- Added a dedicated Journey Desk for flight, hotel, camp and safari-lodge searches.
- Added mobile-friendly flight search fields for origin, destination, dates and travellers.
- Added stay search fields for destination, dates, guests and safari accommodation type.
- Search hand-offs open established travel search pages with the traveller's criteria; the interface never invents prices or availability.
- Added explicit notices that payment, ticketing, changes, refunds and listing accuracy remain with the chosen external provider.
- Added a private on-device booking wallet for confirmed flights, accommodation, activities and transfers.
- Added provider, confirmation reference, date and detail fields with deletion and empty states.
- Connected Bookings from Home, desktop navigation and My Trip while preserving the five-tab field navigation.
- Bundled the entire interface for offline access and updated the privacy disclosure.
- Preserved the raised SOS, persistent searches, 54 country entries, 172 wildlife profiles, maps, languages and journal.
- Bumped Android to 1.49.0 and offline cache to v58.

## Cycle 41 — Airport autocomplete

- Converted both flight route fields into accessible airport comboboxes.
- Suggestions appear after two characters and match IATA code, airport name, city or country.
- Bundled major African safari gateways and common international connection hubs for offline selection.
- Added throttled live OpenStreetMap airport discovery for wider worldwide searches when connected.
- Display airport code, name, city, country and whether a result came from live map data.
- Added touch selection, keyboard arrows, Enter, Escape, focus management and honest offline fallback.
- Preserved the booking wallet, external live booking hand-off, raised SOS and all existing Pocketbook features.
- Bumped Android to 1.50.0 and offline cache to v59.

## Cycle 42 — Native booking journey interface

- Removed the Google Flights and Google Hotels hand-offs completely.
- Added in-app flight and accommodation result layouts driven by the traveller's search criteria.
- Added selection, itinerary review, traveller details and payment-stage interfaces without leaving the Pocketbook.
- Kept live fares, availability, provider identity, booking conditions and payment inactive until accredited APIs are connected rather than fabricating commercial data.
- Prevented traveller details entered into the unfinished booking flow from being transmitted or stored.
- Kept the separate private booking wallet for genuine confirmations made through an external provider in the interim.
- Added regression enforcement preventing Google travel redirects from returning.
- Preserved airport autocomplete, raised SOS, country profiles, wildlife, maps, My Trip and journal.
- Bumped Android to 1.51.0 and offline cache to v60.

## Cycle 43 — Non-blocking country profiles

- Fixed every country profile remaining indefinitely on “Loading the complete country reference”.
- Rendered the complete bundled country essentials, destinations, languages and research sections before starting any live request.
- Moved World Bank population and official travel-advisory retrieval into a separate enhancement pass with bounded timeouts.
- Prevented a slow response for one country from overwriting a different country opened afterward.
- Added an actionable recovery state if the bundled country reference itself cannot be read.
- Preserved the raised SOS, persistent searches, bookings, 172 wildlife profiles, offline map, My Trip and journal.
- Bumped Android to 1.52.0 and offline cache to v61.

## Cycle 44 — Botswana offline wildlife field guide

- Replaced Botswana’s bird-heavy live-record list with a curated offline country index drawn from the 172-entry master field guide.
- Added 78 Botswana-relevant mammals, birds and reptiles, including lion, leopard, African buffalo, African bush elephant, black rhinoceros and white rhinoceros.
- Added visible Big Five markers without treating the two rhinoceros species as separate members of the traditional five.
- Made country wildlife searching work immediately offline; GBIF remains evidence and discovery support for countries whose curated index is still pending.
- Added species-specific offline identification, behaviour, diet, tracks and signs, and similar-species guidance for all Big Five profiles.
- Preserved sourced live taxonomy, occurrence evidence, photographs, recordings, journal actions and conservation links.
- Bumped Android to 1.53.0 and offline cache to v62.

## Cycle 45 — Free Safari Circle foundation

- Introduced Safari Circle as the app’s safari-focused community landing space while keeping the Pocketbook one tap away.
- Added free on-device member onboarding with traveller, photographer, filmmaker, guide, researcher, conservation and enthusiast identities.
- Added structured posts for sightings, stories, questions, photography and film, with species, country and place context.
- Added public, followers-only and private visibility choices plus default protection that removes specific location details from sensitive posts.
- Added privacy-conscious photograph processing that resizes media and re-encodes it to remove embedded location metadata before local storage.
- Added an on-device field feed with appreciation, comments, filtering and post deletion.
- Added interest following and honest empty member discovery without fabricated users, posts, follower counts or engagement.
- Added profile editing and complete Circle data deletion from the device.
- Kept Circle data local until secure accounts, moderation and community infrastructure are connected.
- Preserved the raised SOS, Pocketbook, 54 countries, wildlife, offline maps, bookings, My Trip and journal.
- Bumped Android to 1.54.0 and offline cache to v63.

## Cycle 46 — Launch-state product language

- Established full service connectivity as a launch requirement rather than a qualification repeated throughout the interface.
- Removed future-tense “will activate when connected”, “connection pending” and similar contingent statements from Safari Circle and Bookings.
- Replaced development explanations with normal product instructions, operational empty states and service-availability states.
- Removed fabricated-looking booking availability language while retaining the complete search, results, traveller and payment interface structure.
- Reframed privacy information around user controls, publication choices and separation of private field data from Circle posts.
- Added regression enforcement preventing launch-contingent phrases from returning.
- Preserved Safari Circle, the raised SOS, Pocketbook, wildlife, countries, maps, bookings, My Trip and journal.
- Bumped Android to 1.55.0 and offline cache to v64.

## Cycle 47 — Pocketbook-first identity and trusted Circle registration

- Restored the African Safari Pocketbook as the application landing screen and primary Home tab.
- Kept Safari Circle prominent inside the Pocketbook without turning the product into a social-first app.
- Replaced lightweight local profile creation with a structured account journey covering legal and public identity, unique handle, date of birth, country and member role.
- Added selectable email or mobile verification, a six-digit verification step, resend and contact-change actions.
- Added strong password validation, confirmation and explicit terms, privacy and community-guideline consent.
- Added returning-member sign-in and verified-contact account recovery interfaces.
- Prevented the client from creating verification codes or marking accounts verified without a successful server response.
- Preserved existing on-device Circle posts and profiles, displaying legacy profiles honestly as requiring verification.
- Preserved the floating SOS, five-tab mobile navigation, persistent searches, bookings, wildlife, countries, maps, My Trip and journal.
- Bumped Android to 1.56.0 and offline cache to v65.

## Cycle 48 — Restore permanent Circle navigation

- Restored Safari Circle as a permanent button in the mobile app navigation.
- Kept the Pocketbook Home button active by default so Circle remains a major capability rather than the product landing page.
- Expanded the navigation grid to six equal, narrow-screen-safe destinations without moving or covering the floating SOS.
- Added regression protection so future navigation changes cannot silently remove Circle again.
- Bumped Android to 1.57.0 and offline cache to v66.

## Cycle 49 — Progressive Circle account entry

- Reworked the unauthenticated Circle landing screen into a clean welcome state with only Create account and Sign in choices.
- Kept all registration fields hidden until Create account is deliberately selected.
- Kept all login fields hidden until Sign in is deliberately selected.
- Returned members to the clean choice screen after removing their local Circle account data.
- Preserved the robust identity, verification, recovery and password flow behind those choices.
- Preserved Pocketbook-first launch, permanent Circle navigation and all existing app capabilities.
- Added regression protection for the progressive account-entry behaviour.
- Bumped Android to 1.58.0 and offline cache to v67.


## Cycle 50 — Species-specific wildlife depth I

- Added dedicated offline identification, behaviour, diet-evidence, tracks/signs and similar-species guidance for cheetah, African wild dog, spotted hyena, giraffe, hippopotamus, plains zebra, common warthog and Nile crocodile.
- Preserved all 172 animals and all existing functionality.
- Avoided unsupported current range or conservation claims.
- Bumped Android to 1.59.0 and offline cache to v68.


## Cycle 51 — Species-specific wildlife depth II

- Added complete offline field profiles for impala, greater kudu, blue wildebeest, sable antelope, roan antelope, common eland, springbok, gemsbok, waterbuck and red lechwe.
- Each entry now has dedicated identification, behaviour, diet-evidence, tracks/signs and similar-species guidance.
- Preserved all 172 animals and every existing feature without adding current range or conservation claims.
- Bumped Android to 1.60.0 and offline cache to v69.

## Cycle 52 — Species-specific wildlife depth III

- Added complete offline field profiles for 12 distinctive African birds: common ostrich, secretarybird, African fish eagle, martial eagle, bateleur, saddle-billed stork, southern ground hornbill, lilac-breasted roller, shoebill, greater flamingo, kori bustard and African skimmer.
- Each profile now provides species-specific identification, behaviour, feeding evidence, tracks or nesting signs and similar-species guidance.
- Included disturbance cautions around nests, colonies, wetlands and breeding sandbanks.
- Preserved all 172 wildlife entries and every existing app feature without adding unsupported current range or conservation claims.
- Added regression coverage for all 12 deep bird profiles.
- Bumped Android to 1.61.0 and offline cache to v70.

## Cycle 53 — Species-specific wildlife depth IV

- Added complete offline field profiles for 12 African primates: mountain gorilla, western lowland gorilla, chimpanzee, bonobo, gelada, mandrill, ring-tailed lemur, indri, Barbary macaque, vervet monkey, mantled guereza and patas monkey.
- Each profile now provides species-specific identification, behaviour, feeding evidence, tracks or other signs and similar-species guidance.
- Added viewing cautions covering guide distances, feeding, playback, nests, habituation and avoiding interference with animal movement.
- Preserved all 172 wildlife entries and every existing app feature without adding unsupported current range or conservation claims.
- Added regression coverage for all 12 deep primate profiles.
- Bumped Android to 1.62.0 and offline cache to v71.

## Cycle 54 — Africa-wide Places identity

- Removed the Botswana-specific lodge-catalogue wording from the Home Places card.
- Replaced it with continent-wide language covering 54 countries, destinations, parks and safari stays.
- Preserved the substantive Botswana lodge catalogue inside Places while preventing one country from defining the app's Africa-wide identity.
- Bumped Android to 1.63.0 and offline cache to v72.

## Cycle 55 — Species-specific wildlife depth V

- Added complete offline field profiles for 12 distinctive African carnivores: serval, caracal, African golden cat, bat-eared fox, honey badger, fennec fox, aardwolf, black-footed cat, African civet, fossa, meerkat and brown hyena.
- Each profile now provides species-specific identification, behaviour, feeding evidence, tracks or other signs and similar-species guidance.
- Added ethical observation cautions around dens, dependent young, baiting, feeding, spotlighting and animals conditioned around camps.
- Preserved all 172 wildlife entries, the Africa-wide Places wording and every existing app feature without adding unsupported current range or conservation claims.
- Added regression coverage for all 12 deep carnivore profiles.
- Bumped Android to 1.64.0 and offline cache to v73.

## Cycle 56 — Map interface hierarchy

- Rebuilt the phone layout around a clear search → map → selected place → discovery sequence.
- Moved curated filters and destination lists below the map on mobile so results no longer push the geography out of view.
- Kept the slim map search pinned above the map and added a compact narrow-phone search action.
- Removed the permanent default destination card from the map; place details now appear only after selection and can be dismissed to expose the map.
- Collapsed regional offline packs into a secondary expandable section instead of presenting six competing cards alongside map discovery.
- Tightened mobile spacing, status, legend and overlay sizing while preserving OpenStreetMap detail, offline Natural Earth outlines, live and offline search, saved places and the floating SOS.
- Added regression checks for the new hierarchy and bumped Android to 1.65.0 and offline cache to v74.

## Cycle 57 — Fixed English Africa map

- Locked the overview to one stable Africa-wide frame with no drag, pinch, wheel, keyboard or double-tap zoom behaviour.
- Restored normal vertical page scrolling over the map so touch gestures no longer trap phone users inside the geographic canvas.
- Removed the multilingual OpenStreetMap visual tile layer from the overview while retaining OpenStreetMap as the live place-search source.
- Added permanent English country labels from the bundled Natural Earth geography, with dedicated labels and tap targets for Cabo Verde, São Tomé and Príncipe, Comoros, Mauritius and Seychelles.
- Kept country shapes and destination markers selectable without moving the map, and disabled popup auto-panning.
- Preserved live coordinate search, saved places, offline maps, the reorganised map interface and floating SOS.
- Added regression checks enforcing the fixed viewport and local English labels.
- Bumped Android to 1.66.0 and offline cache to v75.

## Cycle 58 — Restore the real map with deliberate mobile interaction

- Reversed the v1.66 removal of the OpenStreetMap layer and restored the proven interactive map from v1.65.
- Added an explicit “Explore map” control on phones: page scrolling remains normal until the user deliberately activates map pan and zoom.
- Added a visible “Done” state that releases touch control back to the page instead of trapping navigation inside the map.
- Restored programmatic zooming to selected countries, curated destinations and live search results.
- Constrained interactive movement to the Africa region while retaining useful detail zoom levels.
- Kept English app-rendered country names in country tooltips without corrupting the internal country-profile identifiers.
- Preserved the improved search → map → selected place → discovery hierarchy, dismissible place sheet, offline packs and floating SOS.
- Added regression checks for both interaction states and bumped Android to 1.67.0 and offline cache to v76.

## Cycle 62 — Attributed wildlife sound library

- Replaced disabled “No recording yet” controls across the 172-species catalogue with working sound-entry actions.
- Animal and country wildlife cards can now open directly at the sound section of the selected field profile.
- Profiles automatically discover playable Wikimedia Commons audio using both scientific and common names.
- Increased discovery breadth, removes duplicate recordings and shows contributor, licence and source-page details beside every result.
- Added deliberate offline sound saving with a local attribution index; saved recordings are restored in the correct species profile without connectivity.
- Preserved the three manually connected reference recordings and clearly distinguishes them from discovered results.
- Added ethical playback guidance and honest online, offline, empty and failure states.
- Bumped Android to 1.72.0 and offline cache to v81.

## Cycle 63 — Genuine offline sounds and complete reptile field depth

- Bundled four source-verified recordings inside the APK for immediate offline playback: African bush elephant, spotted hyena, ring-tailed lemur and vervet monkey.
- Added visible creator, licence and source-page attribution to every bundled recording and included a permanent in-package sound licence register.
- Removed the previously connected Grévy’s zebra file after its source description revealed that it was an artificial hippo-and-donkey sound effect rather than a field recording.
- Retained online attributed discovery and user-selected offline saving as expansion layers.
- Completed species-specific offline profiles for all 21 reptiles in the Pocketbook catalogue; the remaining 20 now join Nile crocodile with dedicated identification, behaviour, diet evidence, tracks/signs and similar-species guidance.
- Added package-integrity regression checks for every sound file, its offline cache entry, the artificial-effect exclusion and all reptile profiles.
- Preserved all 172 species and existing map, Circle, SOS, booking, journal, country and language functionality.
- Bumped Android to 1.73.0 and offline cache to v82.

## Cycle 64 — Complete marine field-guide depth

- Completed species-specific offline field profiles for all 18 marine animals in the Pocketbook catalogue: whale shark, African manatee, dugong, humpback whale, four sea turtles, bottlenose dolphin, two manta rays, coelacanth, four large sharks, southern right whale and Bryde's whale.
- Each profile now includes dedicated identification, behaviour, feeding evidence, tracks or other observable signs and similar-species guidance instead of the generic marine framework.
- Added responsible marine-viewing guidance covering vessel approach, cleaning stations, nesting beaches, mothers with calves, handling, feeding and wildlife-call or interaction disturbance.
- Kept range and conservation status out of static copy so current claims continue to come from the app's attributed live references.
- Added regression coverage for every marine scientific name while preserving all 172 wildlife entries, verified offline sounds, maps, Circle, bookings, country profiles, journals and the floating SOS.
- Updated Android runner setup to stop requesting the retired `tools` SDK package; the workflow now installs `platform-tools` before its explicit Android 35 platform and build-tools step.
- Bumped Android to 1.74.0 and offline cache to v83.

## Cycle 65 — Complete bird field-guide depth

- Completed species-specific offline field profiles for the remaining 25 birds, bringing all 37 catalogue birds onto dedicated field notes rather than a group-level framework.
- Added individual identification, behaviour, feeding evidence, tracks or other signs and similar-species comparisons for cranes, vultures, bee-eaters, wetland birds, raptors, guineafowl, penguin, turaco, hoopoe, kingfisher, fishing owl and oxpeckers.
- Included practical low-disturbance guidance for colonies, nesting banks, carcasses, wetland territories, nocturnal roosts, host mammals and sensitive breeding sites.
- Avoided unsupported current range and conservation claims; live attributed sources remain responsible for changing information.
- Expanded regression coverage to all 37 bird scientific names while preserving all 172 animals and every v1.74 feature.
- Bumped Android to 1.75.0 and offline cache to v84.

## Cycle 66 — Complete mammal and catalogue field-guide depth

- Completed species-specific offline field profiles for all remaining 50 mammals, eliminating the final group-level fallbacks from the wildlife catalogue.
- Added dedicated identification, behaviour, feeding evidence, tracks or other signs and similar-species guidance across forest elephants, giraffe, zebras, antelope, pigs, pangolins, canids, otters, mongooses, primates, hyraxes and smaller mammals.
- Included practical low-disturbance guidance for dens, burrows, nocturnal viewing, wetland channels, cliff refuges, troop crossings, sensitive pangolin locations and family groups.
- Avoided unsupported current range, taxonomic rank and conservation claims; changing information continues to come from attributed live references.
- Upgraded validation from selected representative species to every one of the 172 catalogue scientific names, preventing any future profile from silently reverting to generic notes.
- Preserved every v1.75 feature, including bundled sounds, attributed media, native safari map, offline assets, Circle, bookings, country profiles, journals, sticky searches and floating SOS.
- Bumped Android to 1.76.0 and offline cache to v85.

## Cycle 67 — Final regression and Android hardening

- Strengthened the content validator so every one of the 172 catalogue animals must retain a dedicated profile with complete identification, behaviour, diet, signs and comparison fields.
- Removed the stale hard-coded native-map release identity; network requests now derive the Pocketbook version from the Android build configuration.
- Improved native-map search accessibility with an explicit search action, labelled controls and polite live status announcements for results and errors.
- Disabled WebView debugging in shipped builds and restricted Android-managed downloads to HTTPS.
- Preserved the Pocketbook homepage, permanent Circle access, slim persistent searches, raised floating SOS, native and offline maps, bookings, journals, all 54 countries, all 172 animals and four verified bundled recordings.
- Bumped Android to 1.77.0 and offline cache to v86.
- Remaining production work is explicit: Play Store signing; service credentials and infrastructure for Circle accounts and live booking/payment; greater verified sound and destination/lodge breadth; and detailed offline road and terrain tiles.

## Cycle 68 — Africa-wide offline common phrasebooks

- Replaced the language section's empty-notebook-first experience with immediately usable common travel phrases inside every country profile.
- Bundled 91 phrases across Setswana, Swahili, French, Portuguese, Arabic, Amharic and English, providing at least one available phrasebook for every country record while prioritising a practical local or regional language over English.
- Added searchable Greetings, Courtesy, Essentials, Directions and Safety categories, with clear English meanings, local script, approximate pronunciation and compact mobile cards.
- Added language switching for multilingual countries, phrasebook reference links and optional device-generated speech with an explicit non-native-recording disclosure.
- Preserved private locally verified phrase notes and retained all existing Pocketbook, country, wildlife, map, Circle, booking, journal and SOS features.
- Added regression checks for phrase structure, duplicates, source links, language codes, minimum phrase depth and complete country coverage.
- Bumped Android to 1.78.0 and offline cache to v87.

## Cycle 69 — Repair Languages navigation and phrase playback

- Corrected the country-profile Languages shortcut, which previously scrolled only to the next section in the document rather than locating the actual language section.
- The shortcut now opens the common phrasebook, scrolls it into view and focuses phrase search for immediate use.
- Added Android-native text-to-speech through the protected JavaScript bridge instead of relying solely on inconsistent WebView speech support.
- Added Android TTS service discovery, queued playback while the speech engine starts and lifecycle cleanup when the app closes.
- When a requested language voice is unavailable, the app now speaks the displayed approximate pronunciation through the English voice and tells the user, rather than silently doing nothing.
- Retained browser speech as a fallback outside Android and added regression checks for both navigation and the native pronunciation bridge.
- Preserved all 91 phrases, seven phrasebooks, private notes and every existing application feature.
- Bumped Android to 1.79.0 and offline cache to v88.

## Cycle 70 — Dedicated Travel & Health Centre

- Removed changing advisory and health content from Places country entries so destination discovery remains focused and uncluttered.
- Added a dedicated searchable directory covering all 54 African countries, with a slim persistent country search and clear selected-country state.
- Added a live GOV.UK FCDO advisory panel with official update and retrieval times, bounded loading, retry and honest unavailable states; cached guidance is never presented as current.
- Added separate vaccination and malaria preparation, outbreak and public-health, entry-requirement and emergency-preparation panels.
- Connected official country guidance from CDC, WHO, WHO Disease Outbreak News, Africa CDC and GOV.UK without converting changing guidance into unsupported static claims.
- Clarified that malaria prevention is itinerary- and traveller-specific and may include bite avoidance and prescription medicine rather than implying a routine traveller “malaria shot”.
- Added direct Travel & Health access from the Pocketbook home, desktop navigation and every country profile while preserving the separate floating SOS workflow.
- Bundled the new interface into the offline application shell and added regression checks for routing, sources, live-data separation, retry states and country handoff.
- Preserved all 54 countries, 172 animals, phrasebooks and native pronunciation, maps, Circle, bookings, journal, sticky searches and floating SOS.
- Bumped Android to 1.80.0 and offline cache to v89.

## Cycle 71 — Complete post-registration Safari Circle workspace

- Expanded the verified-account landing experience into a safari-focused social workspace while keeping Pocketbook as the application homepage and Circle as a permanent navigation destination.
- Added five clear Circle areas: Field feed, Discover, Messages, Alerts and Profile.
- Built member discovery with name, country, role and interest search, role filtering, follow/unfollow controls and direct conversation entry.
- Added private conversation lists, message histories, unread counts, message composition and reconnect-safe local message retention.
- Added a notification centre for social activity, messages and field interests, with unread badges, filters and mark-all-read control.
- Added saved-post controls and post safety menus without removing existing appreciation, comments, visibility or sensitive-location protection.
- Added report and blocking flows covering harassment, fraud, impersonation, unsafe field information and sensitive wildlife locations.
- Added profile visibility, message permissions, wildlife-location defaults, notification preferences, blocked-account review and community guidelines.
- Replaced the registration-form-based edit action with a dedicated public-profile editor.
- Wired account, post, member, follow, messaging, moderation and settings interfaces to a consistent `/api/circle` service contract while retaining device state for offline continuity.
- Added responsive mobile layouts for the member directory, conversations, notifications, privacy controls and modal actions.
- Preserved all 54 countries, 172 animal profiles, Travel & Health Centre, maps, languages, bookings, journal, persistent searches and floating SOS.
- Bumped Android to 1.81.0 and offline cache to v90.

## Cycle 72 — Immediately accessible Circle interface preview

- Added a prominent Preview Circle action beside Create account and Sign in, allowing the entire post-registration interface to be inspected without a working account service.
- Preview opens Field Feed, Discover, Messages, Alerts and Profile using a clearly identified temporary Safari Explorer identity.
- Added two harmless illustrative field posts so feed cards, reactions, comments, privacy labels and post actions can be evaluated instead of presenting only empty screens.
- Disabled publishing and account-destructive controls during preview while retaining full navigation through every Circle workspace.
- Added Join Circle and Exit preview controls and restores any pre-existing on-device profile and posts when preview ends.
- Kept all preview state temporary to the current application session and bundled the route into the offline application shell.
- Added regression checks for preview entry, sample rendering, safe exit, account handoff and offline assets.
- Preserved Pocketbook as homepage and all existing safari, Travel & Health, map, language, wildlife, booking, journal, SOS and Circle functions.
- Bumped Android to 1.82.0 and offline cache to v91.

## Cycle 73 — Live-data integrity and Circle service foundation

- Replaced permissive runtime caching with a static-shell allowlist. Cross-origin requests and every `/api` request now bypass Cache Storage, preventing old travel advisories, health responses, bookings or community data from appearing current.
- Removed the Circle preview button, sample identities, sample posts, preview storage and preview assets from the public application and APK.
- Corrected false-success paths for Circle profile updates, publishing, appreciation, comments, deletion, messages, settings, following, blocking and reports. Confirmed server responses now precede durable device-state changes and success copy.
- Added a deployable PostgreSQL-backed Circle service foundation with account registration, contact verification delivery adapter, password hashing, opaque sessions, login, recovery, profiles, preferences, member discovery, follows, posts, comments, appreciations, messages, blocking and moderation reports.
- Added rate limiting, strict HTTP headers, input schemas, generic recovery responses, expiring/attempt-limited verification codes and a moderation queue schema.
- Added Android instrumentation navigation and screenshot coverage for Pocketbook, Circle, Travel & Health and Map, plus workflow artifact collection.
- Added privacy, community-standard and Play Store release drafts that identify the operator, legal-review, production signing, vendor and operational gates without placing secrets in source control.
- Added regression checks that reject Circle preview assets, live-data caching and known false-success code paths.
- Preserved all 172 wildlife profiles, 54 countries, map, language, Travel & Health, booking, journal, persistent search and floating SOS features.
- Bumped Android to 1.83.0 and offline cache to v92.

## Cycle 74 — Readable mobile filter rails

- Fixed the shared mobile flex rule that compressed horizontal filters into unreadable slivers inside every country profile.
- Region, country, wildlife, map, language and Circle filter rails now preserve complete button labels and scroll horizontally without widening the page.
- Added touch momentum, contained horizontal overscroll, hidden scrollbars and predictable snap points for one-handed navigation.
- Preserved all country content, Botswana discovery records, persistent searches, Circle, map, wildlife and floating SOS behaviour.
- Bumped Android to 1.84.0 and offline cache to v93.

## Cycle 75 — Stable wildlife controls and hero artwork

- Consolidated wildlife mode, persistent search and country selection into one compact sticky control panel, so their order cannot change while scrolling.
- Country mode now keeps the country selector available, opens an already selected country immediately and removes the large dead-end instruction card.
- Reduced control height and shortened the country search action without reducing its accessible label.
- Stopped the Pocketbook hero photograph from repeating vertically by preserving cover sizing throughout its entrance animation.
- Preserved all 172 profiles, country filters, Circle, maps, journal and floating SOS behaviour.
- Bumped Android to 1.85.0 and offline cache to v94.

## Cycle 76 — Safe-area and sticky-control geometry

- Removed the negative mobile margin that pulled wildlife categories underneath the persistent wildlife controls.
- Made the Android top bar consume the status-bar safe area and anchored every sticky search immediately beneath that complete header.
- Eliminated the gap that exposed scrolling country cards behind the Places search and stopped the Pocketbook brand from clipping at the top edge.
- Shortened the Places prompt without losing meaning and made its input flex safely, so “destination” remains fully visible on phone-width screens and with enlarged Android text.
- Preserved readable horizontal filter rails, all country and wildlife content, Circle, map, journal and floating SOS behaviour.
- Bumped Android to 1.86.0 and offline cache to v95.

## Cycle 77 — Mobile Pocketbook brand presence

- Enlarged the complete header identity: logo, primary wordmark and Pocketbook subtitle.
- Increased the header deliberately and moved persistent searches with it, preserving the corrected safe-area geometry rather than introducing another overlap.
- Kept a dedicated narrow-phone size so the full identity remains readable without horizontal overflow.
- Preserved the homepage composition, catalogue, Places, Wildlife, Circle, Map, Journal and floating SOS behaviour.
- Bumped Android to 1.87.0 and offline cache to v96.

## Cycle 78 — Southern Africa country-depth completion

- Replaced generic fallback summaries for Angola, Eswatini, Lesotho, Malawi and Mozambique with structured offline field profiles.
- Every Southern African atlas country now provides journey gateways, a landscape compass, six distinct safari or nature regions and named reference sources.
- Added authoritative starting points from national tourism, environment and conservation bodies, Protected Planet, UNESCO and official park organisations.
- Kept seasonal claims out of the new profiles where a single national pattern could mislead travellers.
- Added regression checks requiring all ten Southern African profiles and preventing the expanded-profile total from falling below 15.
- Preserved all 54 countries, 172 wildlife profiles, Circle, bookings, maps, phrases, journal, slim persistent searches and floating SOS.
- Bumped Android to 1.88.0 and offline cache to v97.

## Cycle 79 — Essential safari wildlife expansion

- Expanded the offline catalogue from 172 to 189 species with 17 conspicuous, commonly sought safari animals.
- Added black-backed and side-striped jackals, chacma and olive baboons, African wildcat, bushbuck, tsessebe, red hartebeest, common reedbuck, puku, scrub hare and Cape ground squirrel.
- Added southern yellow-billed, southern red-billed and African grey hornbills, plus pied and woodland kingfishers.
- Created dedicated identification, behaviour, diet-evidence, tracks-and-signs and similar-species guidance for every new animal.
- Corrected Botswana discovery so Nile crocodile appears in the first iconic group instead of being buried deep in the list.
- Expanded Botswana’s curated guide with the locally relevant new mammals and birds, while keeping all existing entries.
- Added regression checks for the 189-species total, complete field profiles and prominent Botswana Nile crocodile placement.
- Preserved all country guides, maps, Circle, bookings, phrases, journal, persistent searches and floating SOS.
- Bumped Android to 1.89.0 and offline cache to v98.

## Cycle 80 — Legible mobile navigation icons

- Replaced the six thin Unicode navigation marks with purpose-built inline vector icons for Home, Places, Wildlife, Map, Circle and Journal.
- Increased icon geometry to 30 px inside consistent 32 px frames and strengthened active-state strokes.
- Increased mobile navigation labels to 11 px and touch targets to 62 px without enlarging the overall navigation footprint unnecessarily.
- Kept the floating red SOS safely above the navigation and preserved Android safe-area handling.
- Added regression checks requiring all six vector icons and their minimum rendered size.
- Preserved all 189 wildlife profiles, 54 country entries, maps, Circle, bookings, phrases and journal functions.
- Bumped Android to 1.90.0 and offline cache to v99.

## Cycle 81 — Refined navigation iconography

- Replaced the first oversized custom drawings with a coherent rounded-outline icon family.
- Introduced recognisable Home, location, paw, folded-map, community and field-notebook symbols with consistent 27 px proportions and 1.85 px strokes.
- Added a restrained warm active-state tile instead of thickening every selected icon aggressively.
- Preserved large touch targets and readable labels while reducing visual heaviness.
- Kept the floating SOS safely above navigation and retained every existing application feature.
- Bumped Android to 1.91.0 and offline cache to v100.


## Cycle 82 — Complete African driving-side reference (v1.92.0)

- Corrected the country-reference import defect that left every driving-side field blank.
- Added an offline left/right driving value for all 54 atlas countries and the bundled territorial reference records.
- Country essentials now state plainly which side of the road traffic uses.
- Added validation that rejects missing or malformed driving-side records and protects the 14 sovereign African left-driving countries from accidental inversion.
- Refreshed the application-shell cache so installed Android builds do not retain the blank records.
- Preserved Pocketbook home, 189-species wildlife guide, country depth, maps, Circle, bookings, journal, persistent searches and floating SOS.

### Verification

- All 59 bundled reference records parsed with one of the two allowed driving-side values.
- The 14 sovereign left-driving countries were asserted explicitly.
- JavaScript syntax, HTML assets, offline-shell integrity and Android configuration were checked before the single push.


## Cycle 83 — Replace oversized Android Journal pickers (v1.93.0)

- Replaced the Journal animal field's browser-native datalist popup, which Android rendered as a large dark catalogue covering the form and keyboard.
- Added a compact in-app animal autocomplete limited to six relevant common/scientific-name matches.
- Applied the same controlled autocomplete to the Journal place field to prevent the equivalent failure with the destination catalogue.
- Added touch selection, keyboard navigation, Escape dismissal and combobox accessibility semantics.
- Preserved the datalist used by Safari Circle without exposing it in the Journal form.
- Refreshed the offline shell and Android release version.

### Verification

- Reviewed the submitted 12-second Android screen recording frame by frame.
- Confirmed autocomplete panels are bounded to 42% of the viewport and never render the full catalogue.
- JavaScript syntax, release-token consistency and required autocomplete hooks were validated before the single push.


## Cycle 84 — Repair full-screen profile geometry (v1.94.0)

- Diagnosed the repeated blank left column shown in submitted lion and leopard screenshots.
- Removed the full-screen dialog SOS and close controls from float layout; they now remain fixed overlays at the safe-area edges.
- Forced wildlife and country hero panels to occupy the complete mobile viewport width.
- Preserved the image crop, readable gradient, title overlay, scrolling behaviour and emergency access.
- Added regression validation for both overlay controls and full-width profile heroes.

### Verification

- Compared the defect in two independent species profiles and confirmed the shared structural cause.
- Verified the final stylesheet overrides the earlier sticky/float declarations.
- Validated CSS release hooks, JavaScript shell syntax, version alignment and offline-cache token before push.


## Cycle 85 — Make Places search recognise wildlife (v1.95.0)

- Corrected the dead-end shown when “Lion” or another animal was entered in Places.
- Places now searches the complete offline wildlife catalogue alongside countries and destinations.
- Wildlife results show category, common name and scientific name.
- Selecting a wildlife result opens the Field Guide with that animal already filtered.
- Empty-state language now accurately covers countries, destinations and animals.
- Limited wildlife matches to eight per query for a concise mobile result set.

### Verification

- Confirmed “Lion” resolves from the bundled wildlife catalogue instead of returning zero results.
- Validated JavaScript syntax, cross-search hooks, release tokens, offline shell and Android version alignment before push.


## Cycle 86 — Real Android regression journeys (v1.96.0)

- Replaced the superficial four-screen smoke test with a critical mobile journey suite based on defects reported from the physical device.
- Tests all six bottom-navigation targets for usable dimensions.
- Proves that “Lion” entered in Places resolves to the wildlife catalogue and exposes Panthera leo.
- Proves Journal animal suggestions remain visible, relevant, limited to six and bounded inside the viewport.
- Opens Botswana’s real offline country record and asserts “Left side of the road”.
- Measures country and wildlife heroes against the physical viewport to prevent the blank-column regression.
- Confirms SOS and close controls are fixed overlays rather than content-distorting floats.
- Captures five emulator screenshots as workflow artifacts for visual inspection.

### Verification

- Java source structure, required assertions, JavaScript syntax, release tokens and Android version alignment were validated before push.
- The Android workflow remains the publication gate; an APK is released only if every interaction assertion passes.

## Cycle 87 — Core safari map locations (v1.97.0)

- Added a bundled GeoJSON layer for ten high-interest safari destinations supplied for the Pocketbook map.
- Added the three destinations missing from both interactive map engines: Hwange National Park, South Luangwa National Park and Amboseli National Park.
- Correctly converted GeoJSON longitude/latitude coordinates to each map engine's latitude/longitude API.
- Refined coordinates for Etosha, Kruger, Okavango, Bwindi and Volcanoes from the supplied point set.
- Kept the file deliberately limited to geographic orientation points; unsourced seasonal and wildlife claims were not presented as authoritative visitor guidance.
- Added integrity validation for the ten-point FeatureCollection and refreshed the offline shell.

### Verification

- GeoJSON parsing, ten-feature completeness, point geometry and required destination names are validated automatically.
- JavaScript syntax, local assets, release tokens, Android configuration and map integration are checked before publication.

## Cycle 88 — Destination Pocketbooks and cleaner wildlife browsing (v1.98.0)

- Connected the Places index to every curated map destination, correcting searches such as Mokolodi that previously returned zero results despite existing on the map.
- Replaced destination search results that merely jumped to a pin with full destination Pocketbook entries.
- Every destination entry now connects the map, country guide, country wildlife, Travel & Health Centre, booking desk and private saved-place Journal.
- Added a direct “Open destination pocketbook” action to curated map selections.
- Removed the visible wildlife catalogue count from the mobile interface while preserving live result announcements for screen-reader users.
- Confirmed that ordinary wildlife-card photographs are connected Wikipedia reference images, not user-uploaded photographs.

### Verification

- Validated all JavaScript, 235 interface IDs, 78 local references, 28 scripts, offline-shell inclusion and destination action hooks.
- Added regression checks requiring mapped places in Places search and requiring destination results to open the companion entry rather than terminate at the map.

## Cycle 89 — Unify Botswana safari places with Places search (v1.99.0)

- Diagnosed the zero-result failure for Mashatu: Botswana's detailed regions, reserves, lodges, camps and access points existed in a separate directory that the main Places search never indexed.
- Exported the complete Botswana directory as a deduplicated shared place index, including each record's region, local area context and indexed safari experiences.
- Connected the index to the main Places search and made it refresh as soon as the Botswana catalogue becomes available.
- Connected destination Pocketbooks to the same detailed records so Mashatu and other Botswana results open their own context rather than a generic country-level result.
- Preserved the 54-country atlas, mapped destinations, wildlife cross-search, SOS, Circle, bookings, journal and offline application shell.

### Verification

- Added regression guards requiring Mashatu, Northern Tuli and the shared Botswana index in both search and destination-guide code.
- Validated JavaScript syntax, HTML references, offline-shell integrity, release tokens and Android version alignment before publication.
