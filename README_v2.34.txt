STC Recorder PWA v2.34 - GPS Logger Control-times Help wording

Purpose:
- Keep the proven v2.30/v2.33 engine and PWA mode-gate behaviour unchanged.
- Keep BUTTON_ENTRY/manual Help unchanged.
- Update GPS_LOGGER Help wording so logger mode uses Control times rather than Self-Timed/STC button language.

Version checks:
- Header: STC Recorder v2.34
- APP_VERSION = '2.34'
- Service worker cache = stc-pwa-v2-34-1
- Manifest link = manifest.webmanifest?v=2.34
- Service worker register = service-worker.js?v=2.34

v2.34 changes:
- GPS_LOGGER Help now says Control times.
- GPS_LOGGER Help no longer says final STC / recorded STC times in the logger instructions.
- GPS_LOGGER Help keeps the flight-mode guidance.
- Manual/BUTTON_ENTRY Help remains unchanged.

Unchanged:
- GPS engine unchanged.
- Method 2 / Method P unchanged.
- Mode key contract unchanged: BUTTON_ENTRY and GPS_LOGGER.
- Code.gs v3.04 contract unchanged.
- Export audit log remains.
- Submit logic unchanged.

Upload files to GitHub Pages root:
- index.html
- manifest.webmanifest
- service-worker.js
- stc-config.json
- icon-192.png
- icon-512.png

Test:
1. Upload all files to repository root.
2. Refresh with /index.html?v=2.34-test1.
3. Confirm STC Recorder v2.34.
4. In BUTTON_ENTRY mode, confirm manual/button Help still appears.
5. In GPS_LOGGER mode, open Help and confirm it uses Control times wording.
6. Confirm GPS Logger UI remains reduced and export log remains available.
