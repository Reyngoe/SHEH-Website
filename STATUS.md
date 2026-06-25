# SHEH STOREFRONT (shehthrive.com) — STATUS

*Last updated: 2026-06-25 (homepage merch-pivot rebuild — on branch, awaiting
owner review). This file briefs a brand-new session (or person) with no other
context. Update it at the end of every completed task (CLAUDE.md standing rule).*

PROJECT: Static site (HTML/CSS/JS, no backend) on GitHub Pages. Repo: github.com/Reyngoe/SHEH-Website. Brand = SHEH merch (ethos-driven). Co-founders Jacob & Patrick, San Diego.

CURRENT PHASE: Pivoting from a bar-only brochure to a brand-forward general MERCH STOREFRONT (see CLAUDE.md). Content sweep in progress, starting with the homepage. Cart build is a separate later project.

BRAND/CONTENT ALREADY DIALED IN (gold-standard voice):
- Philosophy page: five pillars (Built not given / Start hard / End hard / Hard not harsh / The Long Game) + signature quote. This page = brand voice gold standard.
- Our Story page: full rebuilt content (title "Two Friends, One Code"). Founders speak as "we."
- FAQ page: answers dialed in. NOTE: much of FAQ is still bar-specific — needs three-tier treatment in the merch sweep.
- Old Man Roy chat widget (mentor-words.js): live every page, 988 crisis safety. PENDING a voice dial-in pass.

HOMEPAGE MERCH-PIVOT REBUILD — BUILT, on branch `claude/homepage-merch-pivot`, awaiting owner review (NOT merged):
- index.html fully rebuilt as the storefront front door. Feel: warm, well-run market/tavern; ◆ diamond motif + typographic restraint to sit as a sibling to shehthrive.org, but warmer. Palette shifted to warm "tavern-lit" umber darks; "The Stock" sits on a warm sand "daylight" panel so the goods read as the page's heart.
- Sections, top to bottom: HERO (atmospheric/typographic — S.H.E.H mark, "Start Hard. End Hard.", welcome + pull-down lines, "Step inside ↓"); THE STOCK (two modular department counters — PATCHES "Coming Soon" and GEAR "In the Works", each with a state pill, status line, body, CTA → email list); BRAND BAND (slim dialed-back ethos + "The whole creed →" to philosophy.html); FOLLOW ALONG (IG/X/YouTube @the1sheh); GET THE WORD (email signup, id="signup" kept so inbound links still work; button "Count Me In"); ROY NOD ("Questions? Roy's at the bar." — opens the existing Roy widget); FOOTER (S.H.E.H / Start Hard. End Hard. mark, nav + social + email, and a cross-link to shehthrive.org).
- BAR CONTENT RELOCATED, NOT DELETED: the three bar product cards (First Light / The Grind / Last Rep + flavor taglines) and the preliminary-flavor note were moved verbatim into an inert <template id="parked-bars"> at the bottom of index.html, with the product-card CSS kept dormant. Renders nothing; ready to switch on as the bars department when bars are real. (Bar macros/ingredients/kitchen story were never on the homepage — they live on faq.html/brochure.html and get the three-tier treatment in the page sweep.)
- PRODUCT COPY = PLACEHOLDER: the Patches/Gear descriptions are owner-confirmable placeholders, not finalized facts (logged in PENDING.md).
- Provisions/supplement department: NOT on the page (private — parked per CLAUDE.md). No public render or link.
- Email signup wired to the existing Mailchimp JSONP mechanism (unchanged). Department CTAs currently route to the #signup list to capture interest until per-department collection pages exist.
- Nav left UNCHANGED (Home, Our Story, Philosophy, FAQ — identical across pages). FLAGGED FOR OWNER: now that goods are central, the nav may want a "Shop"/"The Stock" entry — not added this task (nav rules require owner sign-off first).

REMAINING / NOT STARTED:
- OWNER REVIEW the homepage branch, then merge.
- Owner to confirm/correct the placeholder Patches & Gear product copy.
- Owner decision: add a "Shop"/"The Stock" nav item? (and where in the order).
- Sweep remaining pages for the pivot (FAQ especially — relocate bar Q&As; Our Story/Philosophy/Roy mostly stay).
- Old Man Roy voice dial-in pass.
- Brochure overhaul (bar-framed — revisit post-pivot).
- SEPARATE LATER PROJECT: shopping cart / e-commerce (platform TBD).
- Department collection pages (each category clicks into a fillable collection of items) — part of later product/cart build.
