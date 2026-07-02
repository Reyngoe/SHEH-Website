# SHEH STOREFRONT (shehthrive.com) — STATUS

*Last updated: 2026-06-25 (homepage merch-pivot rebuild MERGED, + Roy palette
regression fixed, + email signup moved to MailerLite, + FAQ merch-pivot rebuild
& site-wide "Shop" nav item — on branch, awaiting owner review). This file
briefs a brand-new session (or person) with no other context. Update it at the
end of every completed task (CLAUDE.md standing rule).*

PROJECT: Static site (HTML/CSS/JS, no backend) on GitHub Pages. Repo: github.com/Reyngoe/SHEH-Website. Brand = SHEH merch (ethos-driven). Co-founders Jacob & Patrick, San Diego.

CURRENT PHASE: Pivoting from a bar-only brochure to a brand-forward general MERCH STOREFRONT (see CLAUDE.md). Content sweep in progress, starting with the homepage. Cart build is a separate later project.

BRAND/CONTENT ALREADY DIALED IN (gold-standard voice):
- Philosophy page: five pillars (Built not given / Start hard / End hard / Hard not harsh / The Long Game) + signature quote. This page = brand voice gold standard.
- Our Story page: full rebuilt content (title "Two Friends, One Code"). Founders speak as "we."
- FAQ page: MERCH-PIVOT REBUILD DONE (see FAQ section below). Twelve general-merch Q&As; the five bar-specific Q&As are parked in an inert template for when bars launch.
- Old Man Roy chat widget (mentor-words.js): live every page, 988 crisis safety. Visual bug on the homepage is now CLOSED (see Roy palette fix below); the voice dial-in pass is still OPEN and separate.

HOMEPAGE MERCH-PIVOT REBUILD — MERGED & COMPLETE (branch `claude/homepage-merch-pivot` merged to main after the last status write):
- index.html fully rebuilt as the storefront front door. Feel: warm, well-run market/tavern; ◆ diamond motif + typographic restraint to sit as a sibling to shehthrive.org, but warmer. Palette shifted to warm "tavern-lit" umber darks; "The Stock" sits on a warm sand "daylight" panel so the goods read as the page's heart.
- Sections, top to bottom: HERO (atmospheric/typographic — S.H.E.H mark, "Start Hard. End Hard.", welcome + pull-down lines, "Step inside ↓"); THE STOCK (two modular department counters — PATCHES "Coming Soon" and GEAR "In the Works", each with a state pill, status line, body, CTA → email list); BRAND BAND (slim dialed-back ethos + "The whole creed →" to philosophy.html); FOLLOW ALONG (IG/X/YouTube @the1sheh); GET THE WORD (email signup, id="signup" kept so inbound links still work; button "Count Me In"); ROY NOD ("Questions? Roy's at the bar." — opens the existing Roy widget); FOOTER (S.H.E.H / Start Hard. End Hard. mark, nav + social + email, and a cross-link to shehthrive.org).
- BAR CONTENT RELOCATED, NOT DELETED: the three bar product cards (First Light / The Grind / Last Rep + flavor taglines) and the preliminary-flavor note were moved verbatim into an inert <template id="parked-bars"> at the bottom of index.html, with the product-card CSS kept dormant. Renders nothing; ready to switch on as the bars department when bars are real. (Bar macros/ingredients/kitchen story were never on the homepage — they live on faq.html/brochure.html and get the three-tier treatment in the page sweep.)
- PRODUCT COPY = PLACEHOLDER: the Patches/Gear descriptions are owner-confirmable placeholders, not finalized facts (logged in PENDING.md).
- Provisions/supplement department: NOT on the page (private — parked per CLAUDE.md). No public render or link.
- Email signup is wired to MAILERLITE (merged to main). The "Get the Word" form (id="joinForm", form id) posts to the MailerLite subscribe endpoint via a hidden iframe so the visitor stays on the page; email field is name="fields[email]", plus MailerLite hidden fields (ml-submit, anticsrf) and a honeypot (name="url"). On submit the form hides and a #joinSuccess message shows — OPTIMISTIC (shown on submit, not on confirmed success from MailerLite). The old Mailchimp JSONP form + its script + the .signup-confirm element/CSS were removed in the swap. Design unchanged (kept .signup-form / .btn). NOTE: the section id="signup" is unchanged, so inbound links (FAQ/Philosophy/Our Story → index.html#signup) still resolve. TODO (owner): do one real submit on the live site to confirm addresses land in the MailerLite audience. Department CTAs still route to the #signup section to capture interest until per-department collection pages exist.
- Nav: a "Shop" item was ADDED site-wide in the FAQ task (owner-approved). New order on every page carrying the site nav (index, our-story, philosophy, faq, brochure): Home, Shop, Our Story, Philosophy, FAQ. "Shop" → index.html#stock (a section link, so it never gets aria-current). Menu verified identical across all five pages.

ROY PALETTE REGRESSION — found and fixed post-merge (homepage only):
- WHAT BROKE: the homepage rebuild renamed the dark-palette CSS variables to --umber* and dropped --charcoal / --charcoal-deep (plus the rest of the set the Roy widget reads). The shared Roy widget (mentor.js) styles itself by looking those colors up via var(--charcoal...) etc., so on the HOMEPAGE ONLY, opening Roy's chat rendered with no background — panel, header, input, message bubbles, borders, and the text inside user bubbles all went transparent/unreadable. Every other page was fine (they still define the old names).
- FIX: defined the full palette set the widget needs on the homepage :root, aliased to the umber palette (--charcoal-deep + --charcoal kept as two distinct depths so the panel keeps its layered look). The fix lives in the HOMEPAGE, not in mentor.js (mentor.js untouched). Confirmed working — Roy now renders identically on the homepage to every other page.
- The authoritative list of variables mentor.js depends on (grep mentor.js for `var(--`): --bone, --charcoal, --charcoal-deep, --ember, --ember-dark, --font-body, --font-head, --sand, --sand-light, --slate, --slate-light. New CLAUDE.md standing rule added to prevent a repeat (keep this full set defined on every page; alias old names on rebuild).

FAQ MERCH-PIVOT REBUILD — DONE (branch `claude/faq-merch-pivot`, awaiting owner review; NOT merged):
- faq.html Q&A replaced with twelve general-merch questions, in order: What does SHEH mean? / What do you sell? / Can I buy anything today? / When does the first drop land? / How much will things cost? / Will you ship, or is it local only? / Who's behind SHEH? / Who's Old Man Roy? / Are the designs your own? / What about the bars? / I run a gym or a shop — can I stock SHEH? / Can I suggest something? Existing links kept (code→philosophy, signup→index.html#signup, Instagram, our-story, mailto).
- BAR Q&As PARKED, NOT DELETED: five bar-specific Q&As moved verbatim into an inert <template id="parked-bars-faq"> at the bottom of faq.html (mirrors the homepage parked-bars pattern) — "How much protein? What are the macros?", "What's NOT in the bars?", "Do they contain nuts?", "Are they vegan, gluten-free, or keto?", "Can I suggest a flavor — or anything else?". Surface them when bars launch.
- Kept the intro block (Straight Answers / FAQ / "No fine print…") and the closing line (Talk to Roy / email). Meta description updated to the merch-pivot line.
- FOOTER ALIGNED: faq.html footer rebuilt to match index.html exactly (S.H.E.H mark + motto, Our Story/Philosophy/FAQ, IG/X/YouTube/Email icons, shehthrive.org cross-link). Other pages' footers NOT touched this task — they still differ and will be aligned in their own sweeps.
- "Shop" nav item added site-wide (see Nav note above).

REMAINING / NOT STARTED:
- Owner to confirm/correct the placeholder Patches & Gear product copy.
- Sweep remaining pages for the pivot: Our Story sweep still open; brochure overhaul still open (bar-framed — revisit post-pivot). Philosophy/Roy mostly stay as brand tier.
- Footer alignment on the other pages (only index + faq match so far).
- Old Man Roy voice dial-in pass.
- SEPARATE LATER PROJECT: shopping cart / e-commerce (platform TBD).
- Department collection pages (each category clicks into a fillable collection of items) — part of later product/cart build.
