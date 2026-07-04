STC Recorder PWA v2.18 Field Trial - GPS log identity and Method P proof cleanup

Purpose: prove that the deployed/opened package is the current package before further STC timing tests.

Included in v2.18:
- All visible package identity moved to v2.18.
- Browser title is forced at runtime from APP_VERSION.
- Link preview metadata added for WhatsApp/browser previews.
- Manifest name, short_name and start_url moved to v2.18.
- Service worker cache moved to stc-pwa-v2-18-1.
- Old package identity residue removed from index.html.
- Setup container is forced open on launch.
- Any legacy edit/collapsed setup state is disabled defensively.
- Rally Number, Surname, and Start Time remain visible after Begin.
- Reset still clears entrant details and recorded times while keeping loaded controls.
- Method P, Method 2, and halfway active-STC logic were not intentionally changed in this bake.

Deploy file names exactly as:
- index.html
- manifest.webmanifest
- service-worker.js
- stc-config.json
- icon-192.png
- icon-512.png


v2.18 additions:
- GPS CSV appVersion is sourced from APP_VERSION.
- Method P export now includes pDistanceConfigM, pToleranceM, and reject evidence fields.
- Method P hard-rejects any target gate outside methodPMaxTargetErrorM.
- REJECT_P_GATE rows show target, actual distance, error, and tolerance for proof testing.
- No intentional Method 2, setup, or halfway logic changes.
