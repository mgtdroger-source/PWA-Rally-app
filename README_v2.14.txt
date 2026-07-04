STC Recorder PWA v2.14 Field Trial

Changes from v2.13:
- Corrected Method P to require six independent target samples: 9m, 6m, 3m before the line and 3m, 6m, 9m after the line.
- Method P is now delayed until all six targets are present; it no longer publishes from a two-fix crossing.
- Method P can operate as insurance even if Method 2 is not available, provided the six target samples are gathered.
- Updated app version, manifest short name, and service-worker cache to v2.14.

GitHub deployment: replace the full package to avoid stale PWA cache.
