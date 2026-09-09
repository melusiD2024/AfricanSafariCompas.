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
