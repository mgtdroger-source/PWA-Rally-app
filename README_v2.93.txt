STC Recorder v2.93


v2.93 — PWA presentation/installability tidy-up
- Replaces the installed PWA icons with the TD rally-app logo.
- Adds a 180x180 Apple touch icon for iOS Home Screen installs.
- Adds a one-time “Before You Start” intro with phone setup/recovery guidance.
- Flight Mode advice is shown only when background Tracking is not enabled.
- Adds the same phone setup guidance to Help.
- No STC timing, GPS Method 2/Method P, submission, storage, Start STC, or tracking transport logic changed.

Focused backlog-recovery bake from the exact v2.83 full-pack baseline.

Tracking transport changes
- Keeps one queue worker and one active tracking request at a time.
- Reduces the normal tracking submit timeout from 10 seconds to 5 seconds.
- Uses one exact-key confirmation attempt after an uncertain submit.
- Requires the returned Report Key to match the local report before removal.
- A slow or uncertain report remains safely queued but does not block later reports in the same pass.
- Reports created while recovery is running are included in that active pass.
- Retained reports are retried in a later pass after 5 seconds.

Unchanged
- 30-second tracking report creation.
- Ordered local storage queue and duplicate-safe report identities.
- GPS collection remains independent of delivery.
- Event End continues draining stored reports.
- STC submission priority and its 60-second safety ceiling.
- STC timing, Atomic Time, GPS methods, setup and user interface.
- No packet batching and no concurrent tracking sends.

Package identity
STC Recorder v2.93 / cache v2-91-1


v2.86
- Start STC button records current Rally Time and resets following elapsed STC timing.
- GPS timing uses the latest GPS-recorded Start STC as its own reset anchor.
- User-facing Atomic Time wording changed to Rally Time; atomic time remains the reference used for sync.

- v2.86: Top Elapsed display resets from the latest confirmed Start STC button time.


v2.89
- In Button mode, a confirmed Start STC records the latest fresh GPS fix captured at the same button press as the GPS Start STC evidence/reset.
- If no fresh GPS fix is available at that press, GPS evidence for that reset is unavailable rather than falling back across the reset.
- GPS-only mode is unchanged: Start STC remains a GPS line-crossing trigger.


v2.89 focused fix
- Start STC and normal STC now use type-aware internal control keys.
- Prevents Start STC 1 / STC 1 GPS history and UI state collisions.
- Timing reset logic and 300 m approach gate unchanged.


v2.90 focused UI tidy-up
- GPS mode setup guidance now says: Enter your scheduled rally start time. GPS control times are recorded automatically as each control line is passed.
- When every GPS control is recorded, the logger status now says: All controls recorded — End of Event.
- Removed the misleading GPS-mode prompt to press Begin after timing has completed.
- Button-mode wording is unchanged.
- No timing, GPS engine, submission or storage logic changed.


v2.93 UI/install change only:
- First-use screen now offers an explicit “Install Rally Recorder” button when the browser exposes PWA installation.
- iPhone/iPad users receive Share → Add to Home Screen guidance.
- Installed state is recognised; browser users who continue without installing are reminded again next visit.
- Installed app name is Rally Recorder.
- No timing, GPS, submission, storage or tracking transport logic changed.


v2.93: Installed-app handover saves the current valid rally/day package from the browser link and restores it when the installed Rally Recorder is opened from its icon. Intro adds keep-open and close-browser guidance. Timing/GPS/submission logic unchanged.
