STC Recorder PWA v3.03 — GPS display-mode diagnostic build

Purpose
- Compare the exact GPS fixes delivered to the Recorder when run as an installed standalone PWA versus a normal Chrome browser tab.

Diagnostic changes only
- Enable routine GPS FIX rows in the existing Export audit log CSV.
- Add displayMode: standalone or browser.
- Add visibilityState from the page at the time of each logged fix.
- Add fixAgeMs: age of the device geolocation fix when received/logged.

Unchanged
- GPS acquisition settings and watchPosition options.
- Method 2 and Method P timing maths.
- STC/button operation.
- Tracking collection, recovery and Event End bulk transport.
- Submit behaviour.
- v3.02 installed-PWA update handover.
- v3.02 Event End final-upload status.

Suggested comparison test
1. Install/open v3.03 through the installed Rally Recorder. Keep it visible and static for about 5 minutes. Export audit log CSV.
2. Open the same fresh link in Chrome. Keep it visible and static in the same place for about 5 minutes. Export audit log CSV.
3. Compare accuracyM, displayMode, visibilityState and fixAgeMs.
