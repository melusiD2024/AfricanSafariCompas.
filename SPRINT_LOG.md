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
