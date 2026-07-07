STC Recorder PWA v2.37 - mode label and GPS Logger status

Purpose:
- Keep the proven GPS line-crossing maths unchanged.
- Keep manual/button mode unchanged.
- Fix GPS Logger mode so Begin arms the same GPS control workflow even though STC cards/buttons are hidden.
- Add a small GPS Logger status panel so field tests are not blind.

Version checks:
- Header: STC Recorder v2.37
- APP_VERSION = '2.37'
- Service worker cache = stc-pwa-v2-37-1
- Manifest link = manifest.webmanifest?v=2.37
- Service worker register = service-worker.js?v=2.37


v2.37 changes:
- Top small version line now shows the active PWA mode: Button mode or GPS mode.
- GPS Logger Status remains visible in GPS mode as a production safety check.
- No Method 2 / Method P maths changes.
- No submit contract changes.
- No Code.gs contract changes.

- timingEngineReady now depends on run/setup/control state, not run-card visibility.
- In GPS_LOGGER mode, Begin internally selects the first control and logs ACTIVE_STC_SELECT.
- GPS_LOGGER mode shows a small GPS Logger Status panel:
  * GPS fixes and latest accuracy
  * Controls recorded count
  * GPS lines loaded count
  * Logger armed/not armed message
- Export audit log remains available.

Unchanged:
- Method 2 maths unchanged.
- Method P maths unchanged.
- Submit payload contract unchanged.
- Manual/button UI and button recording unchanged.
- Code.gs v3.04 contract unchanged.

Upload files to GitHub Pages root:
- index.html
- manifest.webmanifest
- service-worker.js
- stc-config.json
- icon-192.png
- icon-512.png

Test:
1. Upload all files to repository root.
2. Refresh with /index.html?v=2.37-test1.
3. Set Controls timing mode to GPS and upload.
4. Open PWA, enter details, press Begin.
5. Confirm GPS Logger Status shows Logger armed and GPS fixes.
6. Run the simple route and export the audit log.
7. Confirm RUN_STARTED, ACTIVE_STC_SELECT, FIX and CROSSING rows appear if lines are crossed.
