STC Recorder PWA v2.31 - GPS Logger mode gate test

Baseline:
- PWA v2.30
- Code.gs v3.03 key-only update already installed

Purpose:
- Add PWA support for appConfig.pwaUiMode.
- BUTTON_ENTRY remains the current v2.30 button workflow.
- GPS_LOGGER uses the same GPS crossing engine, but hides the rally interaction UI.

Modes:
- BUTTON_ENTRY: current behaviour; finger test, STC hold buttons, STC cards, review/edit/submit remain.
- GPS_LOGGER: reduced logger interface; no finger test, no STC hold buttons, no visible STC timing cards during the rally. Setup, sticky header, final submit cue, Review / Submit, Submit Results, and Export audit log CSV remain.

Unchanged:
- GPS Method 2 engine unchanged.
- GPS Method P insurance unchanged.
- GPS evidence/export log unchanged.
- Submit route unchanged.
- Button mode should remain functionally unchanged.

Implementation notes:
- APP_VERSION = 2.31
- manifest link = manifest.webmanifest?v=2.31
- service worker register = service-worker.js?v=2.31
- service worker cache = stc-pwa-v2-31-1
- Default local stc-config.json includes pwaUiMode: BUTTON_ENTRY.

Test plan:
1. Upload the package to GitHub Pages root.
2. Open /index.html?v=2.31-test1 and confirm STC Recorder v2.31.
3. With Code.gs returning pwaUiMode BUTTON_ENTRY, confirm the app looks and behaves like v2.30.
4. Change the Code.gs mode key to GPS_LOGGER and redeploy/save as required.
5. Open /index.html?v=2.31-test2.
6. Confirm Finger Test is hidden.
7. Enter setup details and press Begin.
8. Confirm no STC hold buttons or STC timing cards are shown.
9. Confirm run status says GPS logger running.
10. Confirm Export audit log CSV remains available.
11. After GPS line crossings, use Review / Submit and confirm STC times appear read-only with GPS quality letters.
12. Confirm Submit Results sends GPS fields while button/manual fields remain blank in GPS_LOGGER mode.
