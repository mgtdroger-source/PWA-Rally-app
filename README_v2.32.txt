STC Recorder PWA v2.32 GPS Logger diagnostic

Purpose:
- Add a temporary visible config-mode diagnostic line so the mode key can be verified before further GPS Logger UI work.
- Keep current BUTTON_ENTRY behaviour unchanged.
- Keep GPS timing engine unchanged.
- Keep export audit log unchanged.

Version checks:
- Header: STC Recorder v2.32
- APP_VERSION = '2.32'
- Service worker cache = stc-pwa-v2-32-1
- Manifest link = manifest.webmanifest?v=2.32
- Service worker register = service-worker.js?v=2.32

Visible diagnostic:
- Help card now shows: Config mode: BUTTON_ENTRY (...) or Config mode: GPS_LOGGER (...).
- Source text indicates whether config came from URL JSON, URL file, default file, or fallback default.

Unchanged:
- Button mode behaviour.
- GPS Method 2 / Method P engine.
- Submit logic.
- Export audit log.

Test:
1. Upload all files to GitHub Pages root.
2. Open /index.html?v=2.32-test1.
3. Confirm the Help card diagnostic line shows the current mode.
4. If Code.gs returns GPS_LOGGER, the line should show Config mode: GPS_LOGGER.
5. If it shows BUTTON_ENTRY, the PWA is still receiving/defaulting to button mode.
