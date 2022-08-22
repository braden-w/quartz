---
aliases: The Case Against Firebase
tags:
 - On/Software_Engineering
 - Type/Hot_Take/Derived
title: Please Don't Use Firestore
date: "2022-08-17"
date modified: "2022-08-17"
---

# Please Don't Use Firestore

## What Went Wrong?
- Things have changed
- There are better options for the live part
- (Supabase, Cloudflare's DurableObject, Convex)
- Google bought them and things have stagnated
- We pendulum swung back to SQL
- Servers are GOOD, actually
- Developers CAN and SHOULD think about the
- shape of data reparate from their databases
- The things users REQUEST should be different
- from the way things are stored in DB
- "Permissions" glhf on client
- SQL is pretty nice

## Firebase Risks
- Insane potential cost scaling
- Offboarding HELL
- Both client and server are proprietary
- Platform-specific security
- If you don't deeply understand Firebase's way of doing things you're fucked
- Typesafety Clod
- Not modular at all So each piece IS locked in HARD+
