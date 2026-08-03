STC Recorder v2.81

Full PWA pack for GitHub deployment.

v2.81 verified corrections
- Removed the permanent 15-second Tracking retry interval.
- Removed the unconditional 100 ms re-send after a failed or timed-out request.
- Retains one queue worker and one active Tracking request at a time.
- Successful acknowledgement removes the exact report and continues immediately through the queue.
- Failed or timed-out request keeps the oldest report and schedules exactly one retry after 5 seconds.
- A deliberate wake such as reconnect, resume, a new report, Event End or Submit completion cancels a pending retry and starts one controlled flush.
- Tracking request timeout remains 30 seconds.
- Routine second-by-second GPS FIX diagnostic rows remain disabled.
- GPS timing, 30-second tracking creation, Event End, Submit priority and post-Submit draining are otherwise unchanged.

Package identity corrections
- index title, APP_VERSION and visible package line are v2.81.
- service-worker registration is v2.81.1.
- cache is v2-81-1.
- manifest and README are v2.81.

Deployment
Replace all existing GitHub PWA files with all files in this pack.
After GitHub updates, open the rally link and confirm:
STC Recorder v2.81 / cache v2-81-1
