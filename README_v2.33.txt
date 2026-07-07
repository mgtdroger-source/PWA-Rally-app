STC Recorder PWA v2.33 - GPS Logger Help tidy

Purpose:
- Keep BUTTON_ENTRY behaviour unchanged.
- Keep GPS_LOGGER engine behaviour unchanged.
- Remove the temporary config-mode diagnostic line used in v2.32.
- Add mode-specific Help wording.

Version checks:
- Header: STC Recorder v2.33
- APP_VERSION = '2.33'
- Service worker cache = stc-pwa-v2-33-1
- Manifest link = manifest.webmanifest?v=2.33
- Service worker register = service-worker.js?v=2.33

v2.33 changes:
- Removed temporary "Config mode" diagnostic line.
- BUTTON_ENTRY Help remains button-focused and does not mention GPS.
- GPS_LOGGER Help explains the logger-style flow: Begin, keep app running, no STC button presses, review/submit at the end.
- Export audit log remains available.
- stc-config.json fallback keeps pwaUiMode = BUTTON_ENTRY.

Unchanged:
- GPS timing engine unchanged.
- Method 2 unchanged.
- Method P unchanged.
- Code.gs contract unchanged from v3.04.
- Submit payload shape unchanged.
- BUTTON_ENTRY UI/flow intended unchanged, apart from version text.

Upload files to GitHub Pages root:
- index.html
- manifest.webmanifest
- service-worker.js
- stc-config.json
- icon-192.png
- icon-512.png

Test:
1. Upload all files to repository root.
2. Refresh with /index.html?v=2.33-test1.
3. With Controls set to Manual/BUTTON_ENTRY, confirm button UI and button Help.
4. With Controls set to GPS/GPS_LOGGER and uploaded through Code.gs v3.04, confirm reduced GPS Logger UI and GPS Logger Help.
5. Confirm export audit log remains available.
