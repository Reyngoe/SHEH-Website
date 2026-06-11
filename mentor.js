/* =====================================================================
   OLD MAN ROY — chat widget logic and looks.
   You should NOT need to edit this file. Everything Roy SAYS lives
   in mentor-words.js — edit that one instead.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- text matching ---------- */

  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"');
  }

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // A keyword ending in * matches the start of a word ("train*" hits
  // "training"); otherwise it must match a whole word or phrase.
  function keywordPattern(keyword) {
    if (keyword.endsWith("*")) {
      return new RegExp("\\b" + escapeRegExp(keyword.slice(0, -1)));
    }
    return new RegExp("\\b" + escapeRegExp(keyword) + "\\b");
  }

  function isCrisis(text) {
    return ROY.crisis.keywords.some(function (k) {
      return text.indexOf(k) !== -1;
    });
  }

  // Score every bucket by keyword hits; highest wins, ties go to the
  // bucket listed first in mentor-words.js.
  function pickBucket(text) {
    var best = null;
    var bestScore = 0;
    ROY.buckets.forEach(function (bucket) {
      var score = 0;
      bucket.keywords.forEach(function (k) {
        if (keywordPattern(k).test(text)) score += 1;
      });
      if (score > bestScore) {
        bestScore = score;
        best = bucket;
      }
    });
    return best;
  }

  // Random reply that isn't the same as the last one from that list.
  var lastPick = {};
  function pickReply(name, replies) {
    if (replies.length === 1) return replies[0];
    var i;
    do {
      i = Math.floor(Math.random() * replies.length);
    } while (i === lastPick[name]);
    lastPick[name] = i;
    return replies[i];
  }

  function mentorReply(rawText) {
    var text = normalize(rawText);
    if (isCrisis(text)) return ROY.crisis.reply;
    var bucket = pickBucket(text);
    if (bucket) return pickReply(bucket.name, bucket.replies);
    return pickReply("fallback", ROY.fallback);
  }

  /* ---------- styles ---------- */

  var css = [
    "#roy-open {",
    "  position: fixed; right: 1rem; bottom: 1rem; z-index: 9000;",
    "  display: inline-flex; align-items: center; gap: 0.55rem;",
    "  font-family: var(--font-head); font-weight: 600; font-size: 0.9rem;",
    "  text-transform: uppercase; letter-spacing: 0.12em;",
    "  color: var(--bone); background: var(--ember); border: none;",
    "  padding: 0.85rem 1.3rem; cursor: pointer;",
    "  box-shadow: 0 4px 18px rgba(0,0,0,0.45);",
    "  transition: background 0.15s ease, transform 0.15s ease;",
    "}",
    "#roy-open:hover { background: var(--ember-dark); transform: translateY(-2px); }",
    "#roy-open .roy-peak {",
    "  width: 14px; height: 12px; background: var(--bone);",
    "  clip-path: polygon(50% 0, 100% 100%, 0 100%);",
    "}",
    "#roy-panel {",
    "  position: fixed; right: 1rem; bottom: 1rem; z-index: 9001;",
    "  width: min(24rem, calc(100vw - 2rem));",
    "  height: min(34rem, calc(100dvh - 2rem));",
    "  display: flex; flex-direction: column;",
    "  background: var(--charcoal-deep); border: 1px solid var(--slate);",
    "  box-shadow: 0 8px 30px rgba(0,0,0,0.55);",
    "  font-family: var(--font-body);",
    "}",
    "#roy-panel[hidden] { display: none; }",
    ".roy-head {",
    "  display: flex; align-items: center; gap: 0.7rem;",
    "  padding: 0.85rem 1rem; border-bottom: 1px solid var(--slate);",
    "  background: var(--charcoal);",
    "}",
    ".roy-head .roy-peak {",
    "  width: 18px; height: 15px; background: var(--ember);",
    "  clip-path: polygon(50% 0, 100% 100%, 0 100%); flex-shrink: 0;",
    "}",
    ".roy-title {",
    "  font-family: var(--font-head); font-weight: 700; font-size: 1rem;",
    "  letter-spacing: 0.12em; text-transform: uppercase; color: var(--sand);",
    "  line-height: 1.2;",
    "}",
    ".roy-sub { font-size: 0.7rem; letter-spacing: 0.05em; color: var(--slate-light); }",
    "#roy-close {",
    "  margin-left: auto; background: none; border: none; cursor: pointer;",
    "  color: var(--sand-light); font-size: 1.4rem; line-height: 1;",
    "  padding: 0.25rem 0.5rem;",
    "}",
    "#roy-close:hover { color: var(--ember); }",
    "#roy-log {",
    "  flex: 1; overflow-y: auto; padding: 1rem;",
    "  display: flex; flex-direction: column; gap: 0.6rem;",
    "}",
    ".roy-msg {",
    "  max-width: 85%; padding: 0.6rem 0.85rem; font-size: 0.95rem;",
    "  line-height: 1.5; white-space: pre-wrap; overflow-wrap: break-word;",
    "}",
    ".roy-msg--bot {",
    "  align-self: flex-start; background: var(--charcoal);",
    "  border: 1px solid var(--slate); color: var(--bone);",
    "}",
    ".roy-msg--user {",
    "  align-self: flex-end; background: var(--sand); color: var(--charcoal);",
    "}",
    ".roy-typing { color: var(--slate-light); letter-spacing: 0.2em; }",
    ".roy-form {",
    "  display: flex; gap: 0.5rem; padding: 0.75rem;",
    "  border-top: 1px solid var(--slate); background: var(--charcoal);",
    "}",
    "#roy-input {",
    "  flex: 1; min-width: 0; font-family: var(--font-body); font-size: 1rem;",
    "  padding: 0.65rem 0.8rem; background: var(--charcoal-deep);",
    "  border: 1px solid var(--slate); color: var(--bone);",
    "}",
    "#roy-input::placeholder { color: var(--slate-light); }",
    "#roy-input:focus { outline: 2px solid var(--ember); outline-offset: -1px; }",
    "#roy-send {",
    "  font-family: var(--font-head); font-weight: 600; font-size: 0.85rem;",
    "  text-transform: uppercase; letter-spacing: 0.1em;",
    "  color: var(--bone); background: var(--ember); border: none;",
    "  padding: 0.65rem 1.1rem; cursor: pointer;",
    "}",
    "#roy-send:hover { background: var(--ember-dark); }",
    ".roy-fine {",
    "  padding: 0.35rem 0.75rem 0.6rem; text-align: center;",
    "  font-size: 0.65rem; color: var(--slate-light); background: var(--charcoal);",
    "}",
    "@media (max-width: 30rem) {",
    "  #roy-panel { right: 0.5rem; left: 0.5rem; bottom: 0.5rem; width: auto; height: min(32rem, calc(100dvh - 1rem)); }",
    "}"
  ].join("\n");

  /* ---------- markup ---------- */

  var html =
    '<button id="roy-open" type="button" aria-label="Chat with Old Man Roy, the SHEH mentor">' +
    '  <span class="roy-peak" aria-hidden="true"></span> Talk to Roy' +
    "</button>" +
    '<div id="roy-panel" hidden role="dialog" aria-label="Chat with Old Man Roy">' +
    '  <div class="roy-head">' +
    '    <span class="roy-peak" aria-hidden="true"></span>' +
    "    <div>" +
    '      <div class="roy-title">Old Man Roy</div>' +
    '      <div class="roy-sub">SHEH Mentor &mdash; tough, fair, listening</div>' +
    "    </div>" +
    '    <button id="roy-close" type="button" aria-label="Close chat">&times;</button>' +
    "  </div>" +
    '  <div id="roy-log" role="log" aria-live="polite"></div>' +
    '  <form class="roy-form" id="roy-form">' +
    '    <input id="roy-input" type="text" placeholder="Tell Roy what\'s on your mind&hellip;" autocomplete="off" aria-label="Your message" maxlength="500">' +
    '    <button id="roy-send" type="submit">Send</button>' +
    "  </form>" +
    '  <p class="roy-fine">Roy is a character, not a person or an AI &mdash; his wisdom is written by SHEH.</p>' +
    "</div>";

  /* ---------- behavior ---------- */

  function init() {
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    var mount = document.createElement("div");
    mount.innerHTML = html;
    document.body.appendChild(mount);

    var openBtn = document.getElementById("roy-open");
    var panel = document.getElementById("roy-panel");
    var closeBtn = document.getElementById("roy-close");
    var log = document.getElementById("roy-log");
    var form = document.getElementById("roy-form");
    var input = document.getElementById("roy-input");

    var greeted = false;

    function addMessage(text, who) {
      var div = document.createElement("div");
      div.className = "roy-msg roy-msg--" + who;
      div.textContent = text;
      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
      return div;
    }

    openBtn.addEventListener("click", function () {
      panel.hidden = false;
      openBtn.hidden = true;
      if (!greeted) {
        greeted = true;
        addMessage(pickReply("openers", ROY.openers), "bot");
      }
      input.focus();
    });

    closeBtn.addEventListener("click", function () {
      panel.hidden = true;
      openBtn.hidden = false;
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var text = input.value.trim();
      if (!text) return;
      input.value = "";
      addMessage(text, "user");

      // Roy "thinks" for a beat so the reply lands like conversation.
      var typing = addMessage("...", "bot");
      typing.classList.add("roy-typing");
      var reply = mentorReply(text);
      setTimeout(function () {
        typing.classList.remove("roy-typing");
        typing.textContent = reply;
        log.scrollTop = log.scrollHeight;
      }, 600 + Math.random() * 700);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Exposed for testing only.
  window.__royReply = mentorReply;
})();
