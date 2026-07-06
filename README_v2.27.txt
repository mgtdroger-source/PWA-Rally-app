STC Recorder PWA v2.27 Field Test - sticky restore and reset identity retention

Built from v2.26. This is a UI/reset tidy bake only. Method 2, Method P, chosen-method policy, and button-mode selection logic are not intentionally changed.

Package identity:
- Header: Version 2.27
- Package: STC Recorder v2.27 / cache v2-27-1
- APP_VERSION = '2.27'
- Service worker cache = stc-pwa-v2-27-1
- Manifest link = manifest.webmanifest?v=2.27
- Service worker register = service-worker.js?v=2.27

Engine status carried forward:
- Method 2 remains the primary two-fix signed-distance crossing calculation.
- Method P remains independent insurance using the evidence-window fit.
- Primary Method P evidence window: +/-60m.
- Fallback Method P evidence window: +/-90m.
- If Method 2 is Good/Fair, chosenMethod remains M2.
- If Method 2 is missing or unacceptable, Method P may become chosenMethod if acceptable.

v2.27 changes:
1. Sticky top container restored/strengthened
   - Top rally container uses position: -webkit-sticky and sticky.
   - Top offset remains 0 with higher z-index.
   - Enlarged v2.26 rally stopwatch is retained.

2. Reset app behaviour refined
   - Reset clears the current run, STC times, GPS evidence/log rows, active STC, and Running state.
   - Reset keeps rally number, surname/name, and start time on the phone for the same rally.
   - User can edit these setup fields if needed before pressing Begin again.

3. Boot/run state tidy
   - On reload, the run screen opens automatically only if the run was active.
   - This preserves Running through phone lock/reopen, but a reset run returns to setup with saved details still filled in.

Test checklist:
1. Upload all files to GitHub root.
2. Open /index.html?v=2.27-test1 after clearing/refreshing cache if needed.
3. Confirm STC Recorder v2.27.
4. Confirm top container stays sticky while scrolling.
5. Press Begin, then Reset App. Rally number/name/start time should remain filled in.
6. Confirm Method 2 / Method P behaviour remains unchanged in GPS logs.
