STC Recorder v2.79

Base
- STC Recorder v2.78 full pack.

v2.79 scoped changes
- Tracking request timeout increased from 15 seconds to 30 seconds.
- A normal fast Google acknowledgement still advances the queue immediately; 30 seconds is only the maximum wait before an uncertain attempt is retried.
- Routine second-by-second GPS FIX rows are no longer added to the exported diagnostic log.
- GPS collection and the STC timing engine remain active and unchanged.
- Important STC, GPS timing, Tracking delivery, Event End, retry/error and Submit events remain logged.

Unchanged
- Tracking report interval remains 30 seconds.
- One Tracking queue worker owns delivery.
- Queue identity and removal logic.
- Submit priority and post-Submit draining to Track 0.
- Automatic Event End behaviour.
- Method 2 / Method P calculations.
- Manual/Button and GPS mode timing operation.
- Tracking report payload format and Google endpoint.
