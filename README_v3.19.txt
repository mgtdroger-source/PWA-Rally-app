STC Recorder PWA v3.19 — Sync unlock buzz and Android selection cleanup

Based on proven v3.18.
- One short confirmation buzz on completion of the 1-second Synced hold, when blue Sync appears.
- Removed the buzz from applying the Target Time; the buzz now confirms unlocking only.
- Prevent Android text-selection/context popups on non-editable recorder labels and dialog messages.
- Preserve normal text selection and editing inside input fields.
- Existing hold behaviour, top progress strip, clock calculations, Sync/Exit state, GPS timing and uploads remain unchanged.
- All version and service-worker cache references updated to v3.19.

Browser sound output is still subject to phone volume/audio settings. Test on phone before release.
