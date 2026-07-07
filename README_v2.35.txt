STC Recorder PWA v2.35 - GPS Logger Flight/Airplane mode Help wording

Purpose:
- Keep the proven v2.34 GPS Logger / Button Entry mode split unchanged.
- Update GPS Logger Help wording only.
- Clarify that Flight/Airplane mode helps avoid disruption during GPS logging.

Version checks:
- Header: STC Recorder v2.35
- APP_VERSION = '2.35'
- Service worker cache = stc-pwa-v2-35-1
- Manifest link = manifest.webmanifest?v=2.35
- Service worker register = service-worker.js?v=2.35

v2.35 changes:
- GPS Logger Help now says: "During the rally, set your phone to Flight/Airplane mode. This helps avoid calls, messages, Wi-Fi, and mobile-tower activity disrupting the app and potentially preventing a control crossing from being recorded."

Unchanged:
- GPS engine unchanged.
- Method 2 unchanged.
- Method P unchanged.
- Button Entry mode unchanged.
- GPS Logger mode UI unchanged.
- Submit payload unchanged.
- Export audit log remains.
- Code.gs v3.04 contract unchanged.
- Manual/button Help unchanged.

Upload files to GitHub Pages root:
- index.html
- manifest.webmanifest
- service-worker.js
- stc-config.json
- icon-192.png
- icon-512.png

Test:
1. Upload all files to repository root.
2. Refresh with /index.html?v=2.35-test1.
3. Confirm STC Recorder v2.35.
4. In GPS Logger mode, open Help and confirm the Flight/Airplane mode wording.
5. Confirm Button Entry mode still shows the manual/button Help.
6. Confirm no GPS/timing engine behaviour has changed.
