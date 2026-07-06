STC Recorder PWA v2.28 Field Test - reset start-time clear and expert log button

Package contents:
- index.html
- manifest.webmanifest
- service-worker.js
- icon-192.png
- icon-512.png
- stc-config.json

Version checks:
- Header: STC Recorder v2.28
- Package/debug identity: STC Recorder v2.28 / cache v2-28-1
- APP_VERSION = '2.28'
- Service worker cache = stc-pwa-v2-28-1
- Manifest link = manifest.webmanifest?v=2.28
- Service worker register = service-worker.js?v=2.28

v2.28 changes:
- Reset now keeps rally number and surname/name only.
- Reset clears start time to blank for the next run.
- Reset clears STC times, GPS evidence, run state, and rally stopwatch.
- Full GPS/audit log export remains available, but is moved to a small lower-priority expert button near the bottom.
- Sticky header and the larger stopwatch are retained.

Unchanged:
- Method 2 line-crossing engine unchanged.
- Method P evidence-window insurance engine unchanged.
- Chosen-method policy unchanged.
- Button-mode card-selection logic unchanged.
- Begin/Running behaviour unchanged.

Suggested test:
1. Upload all package files to the GitHub Pages repository root.
2. Open /index.html?v=2.28-test1 after clearing/refreshing cache if needed.
3. Confirm STC Recorder v2.28.
4. Enter rally number/name/start time and Begin.
5. Press Reset App.
6. Confirm rally number/name remain filled, but start time is blank.
7. Confirm top header remains sticky while scrolling and the export audit log button is small/low-priority near the bottom.
