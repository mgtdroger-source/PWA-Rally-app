STC Recorder v2.83

Status
- v2.81 is marked as a failed Tracking transport trial.
- v2.83 is the simplified follow-on test bake.

Tracking transport changes
- Removed the forced 30-second Tracking request timeout.
- Removed AbortController from normal Tracking delivery.
- A current Tracking request is allowed to finish naturally.
- Retains one queue worker and one active Tracking report at a time.
- Success removes the exact acknowledged report and continues immediately.
- A genuine fetch failure retains the report and schedules one retry after 5 seconds.
- No permanent retry interval.
- Submit priority waits for the active Tracking sender rather than aborting it.

Unchanged
- 30-second Tracking report creation.
- Ordered local queue and duplicate-safe server keys.
- Event End stops collection while queued delivery continues.
- STC timing, Atomic Time, GPS methods and normal Submit payload.
- Routine second-by-second GPS FIX diagnostic logging remains off.

Package identity
STC Recorder v2.83 / cache v2-83-1
