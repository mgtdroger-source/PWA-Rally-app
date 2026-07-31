STC Recorder v2.69

Base
- STC Recorder v2.68 ordered, confirmed one-at-a-time tracking queue delivery.

Tracking start and timestamp correction
- Selecting Begin now arms the run only.
- GPS remains available for warm-up while the rally timer counts down.
- Tracking collection starts when the entered official start time is reached and the timer changes to elapsed.
- The first tracking record uses the latest valid GPS position at official start.
- Each later reporting interval records the latest valid position and stamps that record with the current official atomic/event-clock time.
- A stationary phone may therefore repeat the same coordinates, but each periodic tracking record has its own advancing time.
- Resume after Review starts tracking only when the official start time has already arrived.

Retained from v2.68
- Send oldest queued record, wait for Google confirmation, then send the next.
- 15 second request timeout and retry.
- Submission retains network priority.

Unchanged
- STC timing engine and Method 2 / Method P calculations.
- Manual and GPS mode operation.
- Event End and final-control GPS lifecycle.
