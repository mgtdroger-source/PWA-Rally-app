STC Recorder v2.85

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
STC Recorder v2.85 / cache v2-85-1


v2.85
- Start STC button records current Rally Time and resets following elapsed STC timing.
- GPS timing uses the latest GPS-recorded Start STC as its own reset anchor.
- User-facing Atomic Time wording changed to Rally Time; atomic time remains the reference used for sync.
