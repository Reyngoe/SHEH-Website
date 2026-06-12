/* =====================================================================
   OLD MAN ROY — EVERYTHING HE SAYS LIVES IN THIS FILE
   =====================================================================

   HOW TO EDIT (you don't need to be a programmer):

   1. Every line Roy can say sits between double quotes, like this:
        "Motivation is weather. Discipline is climate.",
     To change what he says, change the words BETWEEN the quotes.
     Keep the quotes and the comma at the end of the line.

   2. To ADD a new line, copy an existing one onto a new row and
      change the words. To REMOVE one, delete the whole row.

   3. "keywords" are the words Roy listens for. If a visitor's message
      contains one of them, Roy answers from that bucket.
      - A keyword ending in * matches the start of a word:
        "train*" matches "train", "training", "trained".
      - A keyword can be a short phrase: "give up".

   4. Don't use double quotes INSIDE a line — use single quotes:
        "He said 'no excuses' and meant it."

   5. If the chat breaks after an edit, it's almost always a missing
      quote or comma. Undo your last change and try again.

   Buckets are checked top to bottom. If a message matches two buckets
   equally, the one HIGHER in this file wins.
   ===================================================================== */

const ROY = {

  /* -------------------------------------------------------------
     CRISIS — checked BEFORE everything else. If any of these words
     appear, Roy gives ONLY the caring 988 message below. Do not
     remove this section.
     ------------------------------------------------------------- */
  crisis: {
    keywords: [
      "suicide", "suicidal", "kill myself", "killing myself",
      "end my life", "ending my life", "take my own life",
      "self-harm", "self harm", "hurt myself", "hurting myself",
      "harm myself", "cut myself", "cutting myself",
      "want to die", "wanna die", "wish i was dead", "better off dead",
      "end it all", "no reason to live",
      "don't want to live", "dont want to live",
      "don't want to be alive", "dont want to be alive"
    ],
    reply: "Hold on, friend. What you just said matters more than anything else we could talk about, and it deserves real help — more than an old man on a website can give. Please call or text 988 right now. That's the Suicide and Crisis Lifeline: free, 24/7, real people who know how to help. You matter. Make the call."
  },

  /* -------------------------------------------------------------
     GREETING — Roy says one of these when the chat first opens.
     ------------------------------------------------------------- */
  openers: [
    "Name's Roy. Been up before the sun longer than you've been alive. What's on your mind?",
    "Roy here. I keep it short and honest. What's the hard thing today?",
    "Good to see you. Pull up a seat. What are you working on?",
    "I'm listening. Start anywhere."
  ],

  /* -------------------------------------------------------------
     THE BUCKETS — Roy's themed answers.
     ------------------------------------------------------------- */
  buckets: [

    {
      name: "wins",
      keywords: [
        "win", "won", "finally", "proud", "achieved", "accomplish*",
        "milestone", "finished", "i did it", "did it", "passed",
        "promoted", "promotion", "new pr", "hit a pr", "personal record",
        "personal best", "crushed", "nailed", "progress", "streak",
        "lost weight", "lost 5", "lost 10", "lost 15", "lost 20"
      ],
      replies: [
        "Good. That's what showing up builds. Be proud tonight — and tell me, what's the next climb?",
        "Earned, not given. Take a minute to feel it. Then set the bar one notch higher.",
        "That's not luck — that's stacked mornings paying out. Don't stop stacking.",
        "Proud of you. Now be careful: success is where most men ease off. What are you doing tomorrow to keep the streak?",
        "Write this one down. On the hard days coming, you'll need proof you're the kind of man who finishes.",
        "That win belongs to the version of you who kept going when it wasn't fun. Thank him by staying him.",
        "Well done. Now reach back and pull somebody else up — who around you needs it?",
        "You were harder than yesterday. That's the whole assignment. Same again tomorrow.",
        "Good man. Momentum is precious — spend it on the next hard thing this week, not on coasting."
      ]
    },

    {
      name: "quitting",
      keywords: [
        "quit*", "give up", "giving up", "gave up", "throw in the towel",
        "can't do this", "cant do this", "can't keep", "cant keep",
        "can't go on", "cant go on", "done with this", "i'm done", "im done",
        "no point", "pointless", "hopeless", "want out", "walk away"
      ],
      replies: [
        "You can rest. You can slow down. You can change the plan. But you don't quit on a bad day — that's the one rule.",
        "Wanting to quit isn't weakness. It's a signal you're carrying something real. Set it down for a night, then pick it back up tomorrow.",
        "Quit talk usually means you're tired, not done. Sleep, eat, walk. Then look at it again with daylight on it.",
        "Before you decide anything, just finish today. Most men who lasted simply kept stacking todays.",
        "The gap between who you are and who you're becoming is paved with days you almost quit and didn't. This is one of them.",
        "Hard isn't the sign you're on the wrong road. Most of the time it's the sign you're on the right one. What's making it feel impossible right now?",
        "If you have to give something up, give up the shortcuts and the excuses. Keep the goal.",
        "You've already gotten through every day that tried to stop you. Today doesn't get a different result. Tell me what's heaviest.",
        "Quitting is a habit, and so is staying. Whichever one you feed today gets stronger. Feed staying."
      ]
    },

    {
      name: "fear",
      keywords: [
        "afraid", "fear*", "scared", "doubt*", "anxious", "anxiety",
        "nervous", "worried", "worry", "not good enough", "imposter",
        "impostor", "fail*", "weak", "confidence", "insecure", "embarrass*"
      ],
      replies: [
        "Fear means you're standing at the edge of something that matters. Courage isn't the absence of it — it's moving with your hands shaking.",
        "Doubt talks loudest right before you grow. It's been wrong about you before. What's it telling you can't be done?",
        "You don't need confidence to start. You need to start to get confidence. It's built from evidence, and evidence comes from doing.",
        "Failing at something hard puts you ahead of every man who never tried it. What did it teach you?",
        "Don't compare your beginning to another man's year ten. Compare yourself to last month. Are you moving?",
        "Feeling weak isn't the problem. Believing the feeling is. Feelings are reports, not orders.",
        "Scared and doing it anyway is the whole job. That's all brave has ever meant.",
        "The worst case is almost never as heavy as the dread. Name it out loud — what actually happens if it goes wrong?",
        "I've doubted myself at every age. Did the work anyway. Doubt can ride along, but it doesn't get to drive."
      ]
    },

    {
      name: "fatherhood",
      keywords: [
        "dad", "father*", "kid", "kids", "son", "daughter", "wife",
        "family", "husband", "parent*", "marriage", "married", "home",
        "baby", "newborn", "toddler", "children"
      ],
      replies: [
        "Your kids won't remember your lectures. They'll remember watching you do hard things without complaint. Be worth watching.",
        "Tired and present beats rested and absent. Show up tonight — floor, blocks, homework, whatever they're into.",
        "You'll lose your patience some days. Apologize like a man, repair it, go again. That's the lesson they need most.",
        "Providing is more than the paycheck. It's calm in the house, your word kept, your shoulders steady when things shake.",
        "The strongest thing your kids can see is how you treat their mother and how you handle a bad day. Both are training.",
        "Fatherhood is the heaviest, best weight you'll ever pick up. You don't put it down — you get stronger under it.",
        "Take them on the hike, even the slow one with snacks every half mile. Hard things shrink when they're shared.",
        "Nobody hands you a manual. You build the father you needed out of daily reps. What's one rep you can do with them today?",
        "Your family doesn't need a perfect man. They need a reliable one. Be where you said, when you said, doing what you said."
      ]
    },

    {
      name: "fitness",
      keywords: [
        "gym", "lift*", "workout*", "work out", "train*", "run", "running",
        "fitness", "exercise", "sore", "cardio", "hike", "hiking", "miles",
        "reps", "squat*", "deadlift*", "bench", "muscle*", "ruck*"
      ],
      replies: [
        "Sore means you showed up. Now show up again before it fades. When's the next session?",
        "Don't chase the perfect program. Chase the next workout. Consistency builds what intensity only promises.",
        "The last rep you don't want to do is the one doing the work. Same goes for the workout you don't want to start.",
        "Train for the life you carry — kids on your shoulders, groceries up the stairs, long days on your feet. Strong is useful.",
        "A bad workout beats the one you skipped, every single time. Go do a bad one if you have to.",
        "Progress hides in boring weeks. Log it, so on the days it feels pointless the numbers can argue back.",
        "You're not too old and it's not too late. Start where you are, lift what you can, add a little. The body answers effort at any age.",
        "Rest is training too. The man who never backs off breaks. The man who recovers comes back harder.",
        "Pick a hill, a trail, a distance — something outside the gym to aim at. What would scare you a little to sign up for?"
      ]
    },

    {
      name: "discipline",
      keywords: [
        "discipline*", "routine", "habit*", "consisten*", "motivat*",
        "lazy", "procrastinat*", "wake up", "waking up", "alarm", "snooze",
        "early", "5am", "5 am", "morning*", "focus", "distract*"
      ],
      replies: [
        "Motivation is weather. Discipline is climate. Build the habit so small you can't say no, then never miss twice.",
        "The alarm isn't your enemy. It's the first rep of the day, and you don't skip the first rep. What time are you up tomorrow?",
        "You don't need to feel like it. Half the things I'm proudest of, I did tired and unwilling. Do it anyway and let the feeling catch up.",
        "Start smaller than you think you should. Ten minutes done every day beats two hours done once. What's the ten-minute version?",
        "Lazy isn't who you are. It's a habit you practiced. Practice a different one, starting with the next hour.",
        "Make the decision once, the night before — clothes out, plan written. Morning-you shouldn't get a vote.",
        "Discipline isn't punishment. It's keeping a promise to yourself. Keep one small one today and tell me what it was.",
        "Every man fights the snooze button. The ones who win put the alarm across the room. What's your version of across-the-room?",
        "Start hard today, be harder than yesterday, for today is yesterday's tomorrow. That's not a slogan — it's a schedule."
      ]
    },

    {
      name: "work",
      keywords: [
        "work", "job", "boss", "shift*", "career", "overtime", "paycheck",
        "grind", "tired", "exhausted", "burnout", "burned out", "burnt out",
        "stress*", "deadline*", "coworker*", "commute"
      ],
      replies: [
        "Tired is real. So is the man you're becoming by working through it the right way. Don't confuse a hard season with a wrong life.",
        "Do the job in front of you like your name is stamped on it. Reputation is built in the unglamorous hours.",
        "A bad boss can take your day. Don't let him take your standard. Work to yours, not down to his.",
        "Burnout is usually a recovery problem, not a weakness problem. Guard your sleep like it's part of the job — because it is.",
        "Long shift, then the gym, then dinner with the family. That's not too much life. That's a full one. Pace it, don't quit it.",
        "Nobody sees the middle miles — the commute, the paperwork, the overtime. Run them well anyway. The middle is where most men slow down.",
        "If the work itself doesn't fire you up, let the reason for it: people fed, bills handled, a future bought one shift at a time.",
        "Stress shrinks when you act. Pick the one task you've been avoiding and do it first tomorrow. Which one is it?",
        "Don't carry the worst hour of work home to the best people in your life. Burn it off — walk, lift, breathe — then walk in the door."
      ]
    },

    {
      name: "purpose",
      keywords: [
        "purpose", "direction", "lost", "meaning", "stuck", "drift*",
        "goal*", "where to start", "where do i start", "what's the point",
        "whats the point", "aimless", "empty", "unfulfilled", "future"
      ],
      replies: [
        "Lost isn't a verdict. It's a location, and you can move from a location. Pick one thing worth doing this month and walk at it.",
        "Purpose isn't found, it's built — usually while doing hard, useful work for people who count on you. Who counts on you?",
        "You don't need the whole map. You need the next switchback. What's the next right thing in front of you?",
        "Drifting feels easy and costs everything. Pick a direction, even an imperfect one. You can steer a moving ship.",
        "Stop waiting for a calling. Take responsibility for something — a skill, a person, a standard — and meaning shows up to work.",
        "Most men feel stuck because they're under-challenged, not overwhelmed. What's the hard thing you've been circling?",
        "Write down what you want the next ten years to say about you. Then act like that man today.",
        "The point isn't comfort. It's becoming the kind of man hard days can't bend. That's a purpose you can start on this morning.",
        "Direction beats speed. Slow and aimed is worth more than fast and lost. Where do you want to be in one year — just one?"
      ]
    },

    {
      name: "sheh",
      keywords: [
        "sheh", "s.h.e.h", "bar", "bars", "protein", "buy", "order",
        "price", "cost", "flavor*", "ingredient*", "philosophy", "motto",
        "start hard", "end hard", "company", "founder*", "instagram",
        "youtube"
      ],
      replies: [
        "SHEH stands for Start Hard, End Hard. Two friends, full-time jobs, building honest protein bars the hard way — kitchen batches and early mornings.",
        "The code is simple: life starts hard, so be hard enough to meet it. Don't quit, keep your word, stay on the straight and narrow.",
        "Start hard today, be harder than yesterday, for today is yesterday's tomorrow. That's the line everything here is built on.",
        "Three bars are in the works — working names First Light, The Grind, and Last Rep: peanut butter and dark chocolate, coffee and cacao, salted caramel and almond. Official lineup gets announced before launch.",
        "Can't sell you one yet — the first batch is still coming. Put your email in the signup on this page and you'll be first in line.",
        "Full ingredients get published when the first batch ships. No noise, no mystery — that's a promise.",
        "We're not here to tell you how to be a man. We're here to fuel the one you already are.",
        "Follow the climb on Instagram at @the1sheh, and The S.H.E.H Company on YouTube. That's where the day-to-day gets posted."
      ]
    },

    {
      name: "thanks",
      keywords: ["thank", "thanks", "appreciate", "helped me", "needed that", "needed this"],
      replies: [
        "Don't thank me — go do the thing. That's the only thanks that counts.",
        "Anytime. Now put it to work.",
        "Good. Pass it on to another man who needs it.",
        "That's what I'm here for. Come back and tell me how it went."
      ]
    },

    {
      name: "greeting",
      keywords: [
        "hi", "hello", "hey", "yo", "sup", "good morning", "good evening",
        "good afternoon", "howdy", "what's up", "whats up"
      ],
      replies: [
        "Hey yourself. What's the hard thing today?",
        "Morning, noon, or night — it's a good time to work. What's on your mind?",
        "I'm here. Talk to me. What are you wrestling with?",
        "Hello. I don't do small talk well, so let's get to it — what's going on?"
      ]
    }
  ],

  /* -------------------------------------------------------------
     FALLBACK — what Roy says when nothing above matches.
     ------------------------------------------------------------- */
  fallback: [
    "Say more. What's the real weight under that?",
    "I keep my lane narrow: discipline, family, work, training, and not quitting. Which one are we really talking about?",
    "Tell it to me straight — what's the hard thing in your week right now?",
    "I'm an old man with strong opinions about effort and not much else. Where's the effort question in this?",
    "Whatever it is, the answer usually starts with sleep, work, and keeping your word. Which one's slipping?",
    "Not my territory. But hard days are. Got one of those?",
    "Let's keep it simple. What did you do today that was hard, and what did you dodge?",
    "Try me again with the thing behind the thing. What are you actually wrestling with?",
    "Start hard today, be harder than yesterday, for today is yesterday's tomorrow. Now — what's today's hard?"
  ]
};
