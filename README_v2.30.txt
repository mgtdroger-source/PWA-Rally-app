STC Recorder PWA v2.30 Field Test - Help modal and final STC tidy

Purpose:
- Keep the proven v2.23 Method 2 / Method P line engine frozen.
- Keep the manual blue-outline/button workflow from the previous field-trial build.
- Add the user-facing Help pop-out using approved UK English wording with no GPS references.
- Suppress the redundant final-STC active advance after the last STC is recorded.

Version checks:
- Header: STC Recorder v2.30
- APP_VERSION = '2.30'
- Service worker cache = stc-pwa-v2-30-1
- Manifest link = manifest.webmanifest?v=2.30
- Service worker register = service-worker.js?v=2.30

v2.30 changes:
- Replaced the old Before you start advice block with a Help button below the sticky header.
- Help opens as a pop-out/modal with a Close button.
- Help text is written in UK English and does not mention GPS, Method 2, Method P, audit logs, or expert exports.
- After the final STC button record, the app no longer logs or attempts a redundant ACTIVE_STC_ADVANCE.
- Existing ready-for-review messaging remains unchanged.

Unchanged:
- Method 2 algorithm unchanged.
- Method P evidence-window insurance unchanged.
- Chosen-method policy unchanged.
- Button record still advances to the next STC except after the final STC.
- Tap-card selection/correction unchanged.
- Reset keeps rally number/name and clears start time/run data.
- Expert/audit export button remains low priority near the bottom.

Upload files to GitHub Pages root:
- index.html
- manifest.webmanifest
- service-worker.js
- stc-config.json
- icon-192.png
- icon-512.png

Test:
1. Upload all files to repository root.
2. Refresh GitHub Pages and open /index.html?v=2.30-test1.
3. Confirm STC Recorder v2.30.
4. Tap Help and confirm the pop-out opens and closes.
5. Confirm the old Before you start block is gone.
6. Record through the final STC and confirm there is no redundant final active-STC advance.
7. Confirm Method 2 / Method P behaviour remains unchanged in the export log.
