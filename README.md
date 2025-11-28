# Toolset Inventory

## Overview

Mobile-first Progressive Web App for managing crew toolsets, QR code management, account and invites, built with Deno Deploy, TypeScript, and Material Design principles.

## Features

- Crew and toolset management
- Secure login
- Biometric authentication (device support)
- Add, edit, view toolsets and tools
- QR code print/scan for check in/out
- Push notifications
- Material Design UI/UX, Roboto font, mobile-first
- PWA for installable app

## Getting Started

1. Copy `.env.example` to `.env` and configure secrets.
2. Install [Deno](https://deno.land) and run: `deno task dev`
3. Open the app at `http://localhost:8000`
4. For Deno Deploy: see `/src/server.ts`

## Directory

- `src/`: Deno API server and core logic
- `src/web/`: Client-side web/PWA
- `src/models/`: Data types
- `src/utils/`: Support utilities

---

> Icons from Material Design Icons, font from Google Fonts.
