# D4 GearLab

Mobile-first Diablo IV gear comparison tool.

## v0.2

The app now ships with a canonical extracted Diablo IV affix catalog derived from D4LootBench data through the MIT-licensed d4-lootfilter-generator dataset. The UI reads the dataset at runtime and filters to affixes marked All or Spiritborn.

### Added
- Canonical affix names, hashes/SNO identifiers and class applicability
- Source game-data build shown in the UI
- Spiritborn-compatible affix picker
- Gear-slot selector in the item model
- Up to four affixes per item
- GA, Quality and temper tracking
- Mobile action bar no longer overlays the form

### Deliberately withheld
The current source catalog does not encode authoritative per-slot affix applicability, so v0.2 does **not** claim that every Spiritborn-compatible affix can roll on every selected slot. Build-priority scoring is also withheld until a build profile is imported.

Next: authoritative slot mappings + Stinger build-profile importer.
