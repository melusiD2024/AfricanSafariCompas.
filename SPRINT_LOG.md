# African Safari Pocketbook sprint

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
