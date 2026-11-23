# Project Architecture

- Render `AppSidebar` once inside the provider-backed layout row; its responsive sidebar implementation owns the mobile sheet and desktop spacer, avoiding duplicate menus and hard-coded content offsets.
- Keep optional quiz learning annotations in a dedicated data map and merge them after parsing so source question data stays backward-compatible.
- Keep all practice state in the shared localStorage helper and reuse the existing quiz renderer and source pools; practice stays device-local without a parallel scoring system.
- Refresh extracted literal guide facts with `bun scripts/syncPracticeContent.ts` when guide content changes; page drills quote existing sections rather than inventing legal rules.
- Flush quiz questions before section boundaries and migrate old progress by question identity using the legacy order snapshot; preserve historical percentages and original answers when correcting quiz membership.
