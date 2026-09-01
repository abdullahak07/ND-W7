# COMP6012 Week 7 — Cyber Threat War Room

Student-facing interactive website for **Cyber Threat Modeling and Adversary Analysis**.

## Experience
Assets → adversaries → threat board → attack surfaces and vectors → attack tree → Twisted Spider and Equifax → methodology decision room → SIEM and UBA → adversary lifecycle → original threat-model builder.

The visual theme is a light **Intelligence Studio / evidence-board** design. Animated network signals, moving evidence connections, card reveals, ambient motion and a live SOC sequence make the site feel different from the earlier quiz/arcade websites.

## Vercel
- Build command: `npm run build`
- Output directory: `dist`
- The build now uses `node build.mjs` to reconstruct the final static HTML at deploy time. No browser-side fetch/decompression is required.

Deployment refresh marker: 2026-09-01 14:15 AWST
