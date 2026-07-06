STC Recorder PWA v2.29 Field Test - manual blue-outline STC selection

Purpose:
- Keep v2.23 proven Method 2 / Method P line engine frozen.
- Keep v2.24 button record sequence.
- Keep v2.28 reset/log/header behaviour.
- Disable visible GPS distance/halfway auto-stepping of the active STC for button-mode field trials.

Version checks:
- Header: STC Recorder v2.29
- Package/debug identity: STC Recorder v2.29 / cache v2-29-1
- APP_VERSION = '2.29'
- Service worker cache = stc-pwa-v2-29-1
- Manifest link = manifest.webmanifest?v=2.29
- Service worker register = service-worker.js?v=2.29

v2.29 changes:
- Blue outline is now user/button-sequence driven for field trials.
- STC 1 starts selected.
- Tap any STC card to select it.
- Button record records the selected STC and then advances blue outline to the next STC.
- To correct/re-record, tap the required STC and record again.
- GPS distance/halfway logic no longer visibly auto-increments the selected STC.
- GPS Method 2 / Method P evidence still runs and logs for review.
- Current STC card height/detail remains unchanged for field trials.

Unchanged:
- Method 2 algorithm unchanged.
- Method P evidence-window insurance unchanged.
- Chosen-method policy unchanged.
- Reset keeps rally number/name, clears start time and run evidence.
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
2. Open /index.html?v=2.29-test1 after clearing/refreshing cache if needed.
3. Confirm STC Recorder v2.29.
4. Begin run, confirm STC 1 has blue outline.
5. Record STC 1, confirm blue outline moves to STC 2.
6. Tap STC 1 again, confirm blue outline moves back.
7. Record again, confirm blue outline advances to STC 2.
8. While driving/GPS active, confirm GPS distance does not move the blue outline by itself.
