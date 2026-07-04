STC Recorder PWA v2.15 Field Trial

Changes from v2.14:
- Added configurable Method P distance targets near the top of index.html. Current field-test values remain 9m, 6m, 3m. Later car tests can change this to 30m, 15m, 8m without changing the engine.
- Method P logging now records the configured distance set and the actual target error for each selected sample, e.g. 9m:7.2m(e1.8).
- Added conservative halfway active-STC logic for the distance-to-line display: after a control is recorded, the next STC becomes active only once it is nearer than the previous recorded STC.
- Disabled browser autocomplete on start-time and STC time edit fields so old times are not offered as choices. Rally number and surname can still be remembered.
- Updated app version, manifest short name, and service-worker cache to v2.15.

GitHub deployment: replace the full package to avoid stale PWA cache.
