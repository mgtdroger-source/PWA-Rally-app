STC Recorder v2.61

Base: proven STC Recorder v2.59.
Integrated: proven TD6 Entrant Tracker v0.05 queue, ordered delivery, retry and End of Event logic.

Tracking status:
- Button mode: below Review / Edit / Submit.
- GPS mode: inside GPS Logger Status.
- Track 0 means no records waiting.
- Track n means n records are retained for delivery.
- After the configured final waypoint: Track n · Event End.
- Hidden when trackingEnabled is false.

No STC timing engine changes.
