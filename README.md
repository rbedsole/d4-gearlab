# D4 GearLab

Mobile-first Diablo IV build + gear companion.

## v0.3 foundation

v0.3 keeps the v0.2 manual comparator and adds the architectural boundary required for build importing.

Pipeline:

Build URL -> Provider Adapter -> Normalized GearLab Build -> Compare / Loot Filter

### Separation of concerns
- Game data: canonical Diablo IDs/catalogs
- Build data: facts imported from a provider
- Player data: equipped/candidate items
- GearLab logic: comparisons and generated filter rules

### UI sections
Builds / Gear / Compare / Loot Filter

### Normalized build contract
The new `build-model.js` defines variants, equipment slots, desired affixes/GAs, unique/aspect fields, tempers, masterwork targets, gems, charms, seals, runes, skills, Spirit Hall, paragon, glyphs and mercenary data. Provider-specific leftovers stay in `providerData` rather than leaking into comparator logic.

### Maxroll adapter
The browser adapter detects Maxroll guide/planner URLs and contains the normalization path for Maxroll planner profile JSON. Direct browser import is capability-tested because Maxroll may restrict cross-origin requests. Import failures are shown explicitly and do not fall back to invented data.

The existing manual comparator remains available when no build is imported.

### Next
Harden live Maxroll retrieval, map every planner slot/affix to canonical game IDs, then feed selected variant targets into Compare. Loot-filter generation follows only after the normalized build is trustworthy.
