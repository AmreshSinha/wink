# wink: design notes

## Brief
- Subject: Amresh Sinha. Web developer, DevOps engineer, open source, student at IIT Guwahati, India.
- Audience: recruiters, hackathon teammates, open source people. Job: get hired, get collaborators.
- Assets: 7 project images (downloaded to public/work), full copy for home, about, works.
- Constraints: nav Home / Works / Blog / Me. Email amresh@duck.com. No fake metrics.
- Assumptions (owner must verify): blog URL is a placeholder (example.com); the fossian.com
  project hosts did not resolve during the build, so nothing is labelled "live". Production URL
  is a placeholder (amresh.example.com).

## Concept candidates
| | A. Name (Amaresh / lion) | B. Material: the edge router | C. Place: braided Brahmaputra |
|---|---|---|---|
| Idea | storm/thunder from Indra | the site is a reverse proxy; every page is a service, every click a routed request | the site is a braided river; projects are sandbars (chars) |
| Anchor | etymology only | Traefik, Docker, "RiP Nginx" in his own copy | IIT Guwahati on the river; he swims |
| O/F/Fe/P | 3/2/4/4 | 3/5/4/3 | 4/3/3/2 |
Pick B: it is his actual world, legible to his audience in ten seconds, and generates layout
(services, routes, status), motion (packets travel), copy (routes, hops, 404 = no route).
Stolen from a status page: honest statuses per project (building / shipped).

## Concept card
Idea:        Amresh's site is a reverse proxy: one entrypoint, every page is a service behind it, every click is a request you watch get routed.
Metaphor:    Traefik and the rack: routes, services, health, access logs.
Signature:   the network. A canvas behind every page draws a route field across the viewport with light traffic; on the home page three main routes run from the :443 entrypoint to works / blog / me. Routes bend toward the pointer, traffic speeds up with scroll, packets land on the service label. The name fills the width above it in two staggered lines.
Emotion:     a quiet machine that is awake. Precise, light, a little playful (the ":)" card).
Motion verb: route. Things travel left to right along a line and arrive. Lines draw, fills sweep, packets land.
Screenshot:  the hero: ARCHIVO-expanded name on the left, the topology with a packet mid-flight on the right; or the amber ":)" contact field.

## System
Palette (v2, after the owner called v1 bland): ground #0e0f12 (the rack room at night), ink #ecebe6, muted #9a9ca3, line rgb(236 235 230 / .14), accent amber #f0ad1f (packets glow, status LEDs, the contact field, the curtain). Dark + one accent is a known default; here it is the subject: server rooms are dark and their status lights are amber. The amber field keeps dark ink.
Type: Archivo variable (wdth 62..125) for display (wdth 125, 700) and text (wdth 100, 400); JetBrains Mono for routes, meta, counters, status. Scale: mega clamp(3.6rem, 1rem + 11vw, 12.5rem), tracking -0.04em, leading 0.86. Body 17px / 1.55.
Grid: 12 cols, gutter clamp(1rem, .6rem + 1.6vw, 2.5rem). Text hangs from col 1, col 5, col 9. Rhythm: hero full viewport, work airy, statement normal, field full, footer tight.
Shape: radius 0 except the status LEDs (circles).
Motion: ease.out for reveals, ease.inOut for curtain, ease.soft for hovers. Big things 0.9 to 1.2s, small 0.3 to 0.5s. Stagger 60ms.
Treatments: nav + index rows = underline draws left to right (a route drawn); CTAs = ink fill sweeps left to right (a packet filling the pipe); work images = scale 1.04 inside a clipped frame; utility links = color only.
Idle: packets dispatched on the hero topology every ~2.5s on the GSAP ticker, paused off screen and under reduced motion. On /me the packet is scrubbed by scroll down the journey rail.
Transition: curtain = ink panel sweeping left to right carrying the request label ("GET /works"), 0.8s; enter sweeps off right 0.9s.
Loader: ground panel, name top-left (same spot as the header), mono "probing entrypoint" + counter bottom; ends at 200 then wipes right. Under 2.1s.

## Composition
Home: Poster hero (name + topology) / Gallery wall (3 featured, staggered) / Statement (about teaser) / Field (amber ":)" contact) / Footer finale.
Works: filter row + Index list with floating preview (inline thumbs on touch).
Case: Asymmetric pair (meta cols 1-4, image cols 5-12) / text / next project.
Me: Statement intro / Sticky narrative (rail with scrubbed packet left, 18 hops right).
404: "no route matched": a dangling route, link home.

## Genericness test
Changed: dropped the 01/02/03 nav numbers (no sequence); dropped the dark+acid-green tech look for a light schematic; replaced the quote API gimmick with honest statuses; no terminal/typing effects.

## QA decisions
- Header: `mix-blend-mode: difference` with white ink, so it reads over the project images and the amber field; it steps aside on scroll down (ScrollTrigger direction) and returns on the way up.
- Idle motion lives on the home topology (packets on the GSAP ticker). Works, case, Me and 404 are still at rest by decision: the LED of a "building" service blinks, the Me rail moves only with scroll. No decorative wobble added to pass a check.
- Loader: progress is measured from navigation start. If the page itself took over 1.5 s to arrive (slow phone), the loader fades in 0.25 s instead of playing its exit: the visitor never waits twice.
- LCP elements are real DOM and visible from the first paint: the hero h1 under the loader, the case cover image, the Me h1. Only secondary text uses split reveals.
- Placeholders left on purpose (audit FAILs): site.url and the blog link are example.com until the owner supplies them; og.png is generated from the hero and will load once the URL is real.

## v2 (2026-10-20)
- Owner feedback: v1 read as bland. Flipped to the dark ground, made the topology a full-viewport canvas (src/motion/net.ts) that persists behind every page at lower intensity, set the name at full width with Sinha flush right, and made the curtain amber. Same concept, louder execution.
