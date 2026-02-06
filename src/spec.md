# Specification

## Summary
**Goal:** Update the app branding by using the provided Bao Saras logo as the default header logo and changing the header brand name color to dark brown.

**Planned changes:**
- Add/use the static logo asset at `frontend/public/assets/generated/bao-saras-logo.dim_512x512.png` as the Header’s default logo when `localStorage.logoUrl` is not set.
- Keep the existing logo upload flow intact so an uploaded logo continues to override the default and persists via localStorage.
- Change the Header brand name text color to a dark brown color in the non-editing state, consistently across desktop and mobile header layouts.

**User-visible outcome:** When visiting the app with no saved custom logo, users see the Bao Saras logo in the header by default and the brand name appears in dark brown; uploading a logo still replaces the default and stays after refresh.
