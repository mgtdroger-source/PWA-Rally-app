STC Recorder v2.58
Consolidated package notes

CURRENT v2.58 REVIEW-ENTRY POLISH
- Review/Edit STC time fields now use a larger centred touch-friendly time-entry style.
- Numeric mobile keyboard hint added; flexible time parsing and validation are unchanged.
- Recorded, GPS, audio, scroll and wake-lock logic are unchanged.

CURRENT v2.58 FIELD-TRIAL POLISH
- Positions the newly active STC fully below the sticky rally/elapsed panel, while keeping prior STCs available by scrolling back.
- Stronger blue outline and shading for the next ordinary STC.
- Longer confirmation tone.
- First Finger Test waits for phone/browser audio activation before sounding.
- Requests a screen wake lock after Begin and reacquires it when the app becomes visible again.
- Help clarifies: use Airplane/Flight mode with Location Services ON.

GPS timing, gating and button timestamp logic are unchanged from the proven prior build.

CORE SEQUENTIAL GPS BEHAVIOUR
- GPS remains warm while the app is open.
- Begin arms the run; GPS timing and logging start at the entered start time.
- Schedule or accumulated distance is not used to gate GPS controls.
- Only the next expected GPS STC can record.
- The active STC line arms within 300 m straight-line distance of the line segment.
- Button records advance only the visible button sequence.
- GPS crossings and GPS recovery advance only the GPS sequence.
- Button and GPS indexes remain independent in both Button audit mode and GPS Logger mode.
- Button mode remains button-led; GPS audit does not auto-advance the visible control.
- Reset clears run state only and does not rebuild or alter route/control definitions.
- GPS Logger Begin validates that every control has line data.

METHOD 2 / METHOD P SEQUENCING
- Method 2 records immediately at the line crossing.
- The current GPS STC remains active while Method P gathers post-crossing evidence.
- GPS advances after Method P completes, or after the configured departure limit is passed without a complete packet.
- The next STC arms immediately if it is already within the 300 m approach gate.
- In GPS Logger mode, entering the next STC approach zone can mark an unresolved current STC MISSED and advance one control.

REVIEW AND SUBMISSION
- When every control has a time, submission continues normally.
- When one or more control times are missing, the app warns that controls may have been missed or a wrong route taken.
- The user may choose Go Back or Submit Anyway.
- Blank control times are preserved in submitted results.
- GPS Logger submissions may contain recorded or explicitly MISSED controls.

RALLY-DAY VALIDITY
- Each daily package is active from 03:00 on its rally date until 02:59:59 the following day.
- Before activation or after expiry, Begin, STC recording, Review/Edit and Submit are blocked.
- The header shows Not yet active or Expired as appropriate.
- Each day-specific package keeps its own identity and controls.

PACKAGE FILES
- index.html
- manifest.webmanifest
- service-worker.js
- stc-config.json
- icon-192.png
- icon-512.png
- STC_Recorder_GPS_Timing_Settings_Laymans_Guide_v2.41.txt
- README_v2.56.txt

VERSION SUMMARY
v2.50
- Introduced the sequential GPS logic tidy and mode-specific completeness rules.

v2.52
- Separated visible button sequencing from GPS audit sequencing.
- Corrected Method P sequencing and retained GPS field-trial diagnostics.

v2.53
- Added the missing-control warning and Submit Anyway option.

v2.54
- Added the central rally-day activation and expiry guard.

v2.56
- Added field-trial UI, tone, first-use audio and wake-lock polish.
