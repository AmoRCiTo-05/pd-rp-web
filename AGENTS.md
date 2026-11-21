# Project Architecture

- Render `AppSidebar` once inside the provider-backed layout row; its responsive sidebar implementation owns the mobile sheet and desktop spacer, avoiding duplicate menus and hard-coded content offsets.