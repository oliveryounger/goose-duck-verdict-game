(() => {
  const GAME_SECONDS = 35;
  const BEST_KEY = "goose-duck-verdict-best-v2";

  const labels = {
    goose: "鹅腿出单",
    duck: "鸭腿明示",
    flavor: "风味明示",
    inspect: "暂停核验"
  };

  const trends = [
    "#今天到底什么腿#",
    "#鸭腿明示也能香#",
    "#九点接龙鉴定局#",
    "#别把风味写成原料#",
    "#群聊截图保卫战#"
  ];

  const groups = [
    "水木夜宵群",
    "未名加餐群",
    "红楼路过群",
    "五角场散步群",
    "国贸加班群",
    "宿舍楼下蹲点群",
    "朋友圈鉴腿群"
  ];

  const cases = [
    {
      title: "招牌写着真鹅腿",
      quote: "“贵点没事，别让我做阅读理解。”",
      visual: "goose",
      tag: "鹅",
      correct: "goose",
      difficulty: 1,
      heat: 8,
      clues: [
        ["原料", "白条鹅腿 310g", "safe"],
        ["招牌", "今日真鹅腿", "safe"],
        ["小票", "鹅腿批次 A7", "safe"],
        ["价格", "19 元", ""]
      ],
      good: "三证合一，真鹅稳出。",
      bad: "真鹅单被你拦住，队伍开始散。"
    },
    {
      title: "旧模板还写鹅腿",
      quote: "“上一轮是鹅，这轮怎么这么便宜？”",
      visual: "duck",
      tag: "鸭",
      correct: "duck",
      difficulty: 2,
      heat: 24,
      clues: [
        ["原料", "樱桃谷鸭腿", "hot"],
        ["招牌", "鹅腿接龙旧模板", "hot"],
        ["小票", "鸭腿 260g", "safe"],
        ["价格", "12 元", ""]
      ],
      good: "旧模板当场改名，群友截图变点赞。",
      bad: "鸭写成鹅，群里已经有人在拼长图。"
    },
    {
      title: "鹅油酱很香",
      quote: "“可以玩梗，但商品名要让我看懂。”",
      visual: "flavor",
      tag: "味",
      correct: "flavor",
      difficulty: 3,
      heat: 20,
      clues: [
        ["原料", "鸭腿 + 鹅油酱", "hot"],
        ["招牌", "鹅香风味腿", ""],
        ["备注", "买前提示原料", "safe"],
        ["价格", "15 元", ""]
      ],
      good: "梗名保住了，原料也说清了。",
      bad: "风味和原料混成一锅，评论区开始审题。"
    },
    {
      title: "标签被汤汁泡花",
      quote: "“别催，先看清再吃也不迟。”",
      visual: "unknown",
      tag: "?",
      correct: "inspect",
      difficulty: 3,
      heat: 30,
      clues: [
        ["原料", "标签糊了", "hot"],
        ["招牌", "今晚爆款腿", "hot"],
        ["冷库", "鹅/鸭箱并排", "hot"],
        ["排队", "催单 23 条", ""]
      ],
      good: "顶住催单，先核验。",
      bad: "线索不全还出单，群友开始保存证据。"
    },
    {
      title: "供应商发了语音",
      quote: "“语音别转述，文字单据拿出来。”",
      visual: "unknown",
      tag: "?",
      correct: "inspect",
      difficulty: 4,
      heat: 34,
      clues: [
        ["原料", "语音未转写", "hot"],
        ["招牌", "最后 8 只", ""],
        ["小票", "拍糊了", "hot"],
        ["冷库", "箱标反光", "hot"]
      ],
      good: "暂停核验，少卖一单少翻一车。",
      bad: "语音不能当配料表，热搜值暴涨。"
    },
    {
      title: "阿姨同款大腿",
      quote: "“同款可以，原料别玩谐音梗。”",
      visual: "duck",
      tag: "鸭",
      correct: "duck",
      difficulty: 2,
      heat: 22,
      clues: [
        ["原料", "鸭腿 240g", "hot"],
        ["招牌", "阿姨同款大腿", ""],
        ["小票", "鸭类熟食", "safe"],
        ["价格", "13 元", ""]
      ],
      good: "同款是梗，鸭腿是事实。",
      bad: "同款被当成鹅腿，截图开始二创。"
    },
    {
      title: "真鹅限量三只",
      quote: "“这单要是对，我立刻转给室友。”",
      visual: "goose",
      tag: "鹅",
      correct: "goose",
      difficulty: 2,
      heat: 12,
      clues: [
        ["原料", "鲜鹅腿批次 G3", "safe"],
        ["招牌", "限量真鹅", "safe"],
        ["冷库", "鹅箱余 3", "safe"],
        ["价格", "22 元", ""]
      ],
      good: "限量真鹅，出单有理。",
      bad: "好单被你拦没了，群友转去隔壁摊。"
    },
    {
      title: "鹅味腿但没备注",
      quote: "“鹅味到底是味，还是腿？”",
      visual: "flavor",
      tag: "味",
      correct: "flavor",
      difficulty: 4,
      heat: 26,
      clues: [
        ["原料", "鸭腿", "hot"],
        ["招牌", "鹅味腿", "hot"],
        ["备注", "未写明风味", "hot"],
        ["价格", "14 元", ""]
      ],
      good: "补上“鸭腿鹅油风味”，热度变传播。",
      bad: "没备注就硬卖，大家开始逐字抠招牌。"
    },
    {
      title: "群友只发了一张图",
      quote: "“这角度看不出来，别靠玄学鉴腿。”",
      visual: "unknown",
      tag: "?",
      correct: "inspect",
      difficulty: 3,
      heat: 28,
      clues: [
        ["原料", "图片裁掉标签", "hot"],
        ["招牌", "看不清", "hot"],
        ["小票", "无", "hot"],
        ["弹幕", "快点判", ""]
      ],
      good: "图片不够，先别判。",
      bad: "靠感觉出单，群聊开始考古。"
    },
    {
      title: "小票写得很硬",
      quote: "“证据链这么硬，快给我一口。”",
      visual: "goose",
      tag: "鹅",
      correct: "goose",
      difficulty: 1,
      heat: 10,
      clues: [
        ["原料", "鹅腿", "safe"],
        ["招牌", "鹅腿", "safe"],
        ["小票", "鹅腿熟食", "safe"],
        ["称重", "312g", ""]
      ],
      good: "硬证据出单，群友直接开冲。",
      bad: "过度谨慎让爆款断档。"
    }
  ];

  const feedGood = [
    "群友：这摊能处，写得明白。",
    "朋友圈：这局我愿称为配料表速读。",
    "路人：透明标注也挺有梗。",
    "同学：今晚不用维权，直接开吃。"
  ];

  const feedBad = [
    "群友：截图了，等一个解释。",
    "评论区：别让商品名做脑筋急转弯。",
    "路人：这波热搜味儿出来了。",
    "同学：先别下单，我再看看。"
  ];

  const els = {
    soundBtn: document.querySelector("#soundBtn"),
    startBtn: document.querySelector("#startBtn"),
    resetBtn: document.querySelector("#resetBtn"),
    timeValue: document.querySelector("#timeValue"),
    scoreValue: document.querySelector("#scoreValue"),
    comboValue: document.querySelector("#comboValue"),
    trustValue: document.querySelector("#trustValue"),
    heatValue: document.querySelector("#heatValue"),
    trustBar: document.querySelector("#trustBar"),
    heatBar: document.querySelector("#heatBar"),
    rankLabel: document.querySelector("#rankLabel"),
    trendLabel: document.querySelector("#trendLabel"),
    legArt: document.querySelector("#legArt"),
    stage: document.querySelector("#stage"),
    burstLayer: document.querySelector("#burstLayer"),
    caseCard: document.querySelector("#caseCard"),
    orderNumber: document.querySelector("#orderNumber"),
    paceLabel: document.querySelector("#paceLabel"),
    caseTitle: document.querySelector("#caseTitle"),
    caseQuote: document.querySelector("#caseQuote"),
    clueGrid: document.querySelector("#clueGrid"),
    toast: document.querySelector("#toast"),
    actionButtons: Array.from(document.querySelectorAll(".action-btn")),
    feedTicker: document.querySelector("#feedTicker"),
    resultDialog: document.querySelector("#resultDialog"),
    posterCanvas: document.querySelector("#posterCanvas"),
    resultTitle: document.querySelector("#resultTitle"),
    resultSummary: document.querySelector("#resultSummary"),
    resultStats: document.querySelector("#resultStats"),
    playAgainBtn: document.querySelector("#playAgainBtn"),
    copyBtn: document.querySelector("#copyBtn"),
    downloadBtn: document.querySelector("#downloadBtn"),
    shareBtn: document.querySelector("#shareBtn")
  };

  const state = {
    running: false,
    seconds: GAME_SECONDS,
    score: 0,
    combo: 0,
    bestCombo: 0,
    trust: 100,
    heat: 0,
    orderIndex: 0,
    correct: 0,
    mistakes: 0,
    duckFix: 0,
    inspect: 0,
    seed: getSeedFromUrl(),
    rng: null,
    deck: [],
    current: null,
    timer: null,
    muted: false,
    lastShare: "",
    best: readBest()
  };

  function getSeedFromUrl() {
    const fromUrl = new URLSearchParams(location.search).get("seed");
    if (fromUrl && /^[a-z0-9-]{3,28}$/i.test(fromUrl)) return fromUrl.toLowerCase();
    const today = new Date();
    const day = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}`;
    return `night-${day}`;
  }

  function readBest() {
    const value = Number(localStorage.getItem(BEST_KEY));
    return Number.isFinite(value) ? value : 0;
  }

  function writeBest(score) {
    if (score > state.best) {
      state.best = score;
      localStorage.setItem(BEST_KEY, String(score));
    }
  }

  function xmur3(str) {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i += 1) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    return () => {
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      return (h ^= h >>> 16) >>> 0;
    };
  }

  function mulberry32(seed) {
    return () => {
      let t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function makeRng(seed) {
    return mulberry32(xmur3(seed)());
  }

  function sample(list) {
    return list[Math.floor(state.rng() * list.length)];
  }

  function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(state.rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function resetGame() {
    clearInterval(state.timer);
    state.running = false;
    state.seconds = GAME_SECONDS;
    state.score = 0;
    state.combo = 0;
    state.bestCombo = 0;
    state.trust = 100;
    state.heat = 0;
    state.orderIndex = 0;
    state.correct = 0;
    state.mistakes = 0;
    state.duckFix = 0;
    state.inspect = 0;
    state.rng = makeRng(`${state.seed}-preview`);
    state.deck = shuffle(cases);
    state.current = null;
    state.lastShare = "";
    setActions(false);
    els.stage.className = "stage idle";
    els.rankLabel.textContent = "未上榜";
    els.trendLabel.textContent = trends[0];
    els.orderNumber.textContent = "第 0 单";
    els.paceLabel.textContent = "待开局";
    els.caseTitle.textContent = "点开始，抢救接龙群";
    els.caseQuote.textContent = "今晚不是排队大战，是商品名阅读理解。";
    els.clueGrid.innerHTML = renderIdleClues();
    setLeg("goose", "鹅?");
    setToast(`今日挑战码：${state.seed}`, "combo");
    setFeed(`本机最高 ${state.best} 分，朋友来之前先刷一把。`);
    renderMetrics();
  }

  function renderIdleClues() {
    return [
      ["原料", "鹅 / 鸭 / 风味"],
      ["招牌", "别糊名"],
      ["小票", "看证据"],
      ["群聊", "会截图"]
    ].map(([a, b]) => `<div class="clue"><span>${a}</span><strong>${b}</strong></div>`).join("");
  }

  function startGame() {
    if (state.running) return;
    clearInterval(state.timer);
    state.running = true;
    state.seconds = GAME_SECONDS;
    state.score = 0;
    state.combo = 0;
    state.bestCombo = 0;
    state.trust = 100;
    state.heat = 0;
    state.orderIndex = 0;
    state.correct = 0;
    state.mistakes = 0;
    state.duckFix = 0;
    state.inspect = 0;
    state.rng = makeRng(`${state.seed}-challenge-v2`);
    state.deck = shuffle([...cases, ...shuffle(cases).slice(0, 6)]);
    setActions(true);
    nextCase();
    state.timer = setInterval(tick, 1000);
    setToast("开摊！35 秒别翻车", "combo");
    setFeed("群友：手速和证据链都要有。");
    renderMetrics();
  }

  function tick() {
    if (!state.running) return;
    state.seconds -= 1;
    if (state.seconds > 0 && state.seconds % 5 === 0) {
      const drift = Math.max(1, Math.floor(state.heat / 18));
      state.heat = clamp(state.heat + drift, 0, 100);
      updateTrend();
      setFeed(sample(state.heat > 45 ? feedBad : feedGood));
    }
    if (state.seconds <= 0) {
      state.seconds = 0;
      endGame("time");
    }
    renderMetrics();
  }

  function nextCase() {
    if (!state.deck.length) state.deck = shuffle(cases);
    state.current = state.deck.pop();
    state.orderIndex += 1;
    els.caseCard.classList.add("swap");
    window.setTimeout(renderCase, 80);
  }

  function renderCase() {
    const current = state.current;
    const group = sample(groups);
    els.orderNumber.textContent = `第 ${state.orderIndex} 单`;
    els.paceLabel.textContent = group;
    els.caseTitle.textContent = current.title;
    els.caseQuote.textContent = current.quote;
    els.clueGrid.innerHTML = current.clues.map(([label, value, tone]) => {
      const className = tone === "hot" ? "clue hot-clue" : tone === "safe" ? "clue safe-clue" : "clue";
      return `<div class="${className}"><span>${label}</span><strong>${value}</strong></div>`;
    }).join("");
    setLeg(current.visual, current.tag);
    els.caseCard.classList.remove("swap");
  }

  function setLeg(visual, tag) {
    els.legArt.className = `leg-art ${visual}`;
    els.legArt.querySelector(".tag").textContent = tag;
  }

  function handleAction(action) {
    if (!state.running || !state.current) return;
    const current = state.current;
    const isCorrect = action === current.correct;

    if (isCorrect) {
      const comboGain = Math.min(180, state.combo * 24);
      const speedGain = Math.max(0, state.seconds);
      const gain = 95 + comboGain + current.difficulty * 20 + Math.floor(speedGain / 3);
      state.score += gain;
      state.combo += 1;
      state.bestCombo = Math.max(state.bestCombo, state.combo);
      state.correct += 1;
      state.trust = clamp(state.trust + 4 + current.difficulty, 0, 100);
      state.heat = clamp(state.heat - 5, 0, 100);
      if (current.correct === "duck" || current.correct === "flavor") state.duckFix += 1;
      if (current.correct === "inspect") state.inspect += 1;
      showBurst(`+${gain}`, "good");
      setToast(current.good, state.combo >= 4 ? "combo" : "good");
      setFeed(sample(feedGood));
      pulseStage("good-pop");
      vibrate(22);
      beep(760, .04, .045);
    } else {
      const severe = action === "goose" && current.correct !== "goose";
      const heatHit = current.heat + (severe ? 18 : 8);
      const trustHit = 10 + current.difficulty * 3 + (severe ? 8 : 0);
      state.score = clamp(state.score - (severe ? 25 : 10), 0, 99999);
      state.combo = 0;
      state.mistakes += 1;
      state.trust = clamp(state.trust - trustHit, 0, 100);
      state.heat = clamp(state.heat + heatHit, 0, 100);
      showBurst(severe ? "错标热搜" : "判错了", "bad");
      setToast(current.bad, "bad");
      setFeed(sample(feedBad));
      pulseStage("shake");
      vibrate([35, 35, 55]);
      beep(180, .05, .07);
    }

    updateTrend();
    renderMetrics();

    if (state.trust <= 0) {
      endGame("trust");
      return;
    }
    if (state.heat >= 100) {
      endGame("heat");
      return;
    }
    window.setTimeout(nextCase, 110);
  }

  function pulseStage(className) {
    els.stage.classList.remove("shake", "good-pop");
    void els.stage.offsetWidth;
    els.stage.classList.add(className);
    window.setTimeout(() => els.stage.classList.remove(className), 360);
  }

  function showBurst(text, type) {
    const node = document.createElement("span");
    node.className = "burst";
    node.textContent = text;
    node.style.setProperty("--x", `${38 + state.rng() * 24}%`);
    node.style.setProperty("--y", `${38 + state.rng() * 18}%`);
    node.style.setProperty("--bg", type === "bad" ? "#ffddd3" : state.combo >= 3 ? "#f4c247" : "#d8fff1");
    els.burstLayer.appendChild(node);
    window.setTimeout(() => node.remove(), 880);
  }

  function setToast(text, type = "") {
    els.toast.className = `toast ${type}`.trim();
    els.toast.textContent = text;
  }

  function setFeed(text) {
    els.feedTicker.textContent = text;
  }

  function setActions(enabled) {
    els.actionButtons.forEach((button) => {
      button.disabled = !enabled;
    });
  }

  function updateTrend() {
    const index = Math.min(trends.length - 1, Math.floor(state.heat / 24));
    els.trendLabel.textContent = trends[index];
    if (state.heat >= 85) {
      els.rankLabel.textContent = "爆了";
    } else if (state.heat >= 60) {
      els.rankLabel.textContent = "冲榜";
    } else if (state.heat >= 30) {
      els.rankLabel.textContent = "发酵";
    } else {
      els.rankLabel.textContent = "未上榜";
    }
  }

  function renderMetrics() {
    els.timeValue.textContent = state.seconds;
    els.scoreValue.textContent = state.score;
    els.comboValue.textContent = state.combo;
    els.trustValue.textContent = Math.round(state.trust);
    els.heatValue.textContent = Math.round(state.heat);
    els.trustBar.style.width = `${state.trust}%`;
    els.heatBar.style.width = `${state.heat}%`;
    if (state.trust < 35) {
      els.trustBar.style.background = "linear-gradient(90deg, #df4c3f, #ef8b2f)";
    } else if (state.trust < 65) {
      els.trustBar.style.background = "linear-gradient(90deg, #ef8b2f, #f4c247)";
    } else {
      els.trustBar.style.background = "linear-gradient(90deg, #168166, #55bc82)";
    }
  }

  function endGame(reason) {
    if (!state.running) return;
    clearInterval(state.timer);
    state.running = false;
    setActions(false);
    writeBest(state.score);

    const title = getTitle(reason);
    const summary = getSummary(title, reason);
    const challengeUrl = makeChallengeUrl();
    state.lastShare = `我在《鹅鸭鉴定局》拿到 ${state.score} 分，称号【${title}】，最高 ${state.bestCombo} 连击。挑战码 ${state.seed}：${challengeUrl}`;

    els.resultTitle.textContent = title;
    els.resultSummary.textContent = summary;
    els.resultStats.innerHTML = [
      ["得分", state.score],
      ["最高", state.best],
      ["连击", state.bestCombo],
      ["明示", state.duckFix],
      ["核验", state.inspect],
      ["翻车", state.mistakes]
    ].map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");
    drawPoster(title, summary, challengeUrl);
    if (typeof els.resultDialog.showModal === "function") {
      els.resultDialog.showModal();
    }
  }

  function getTitle(reason) {
    if (reason === "heat") return "热搜爆表复盘员";
    if (reason === "trust") return "群聊信任补考生";
    if (state.score >= 1700 && state.mistakes <= 1) return "海淀诚信腿王";
    if (state.bestCombo >= 10) return "十连鉴腿战神";
    if (state.duckFix >= 6) return "鸭腿明示派掌门";
    if (state.inspect >= 4 && state.mistakes <= 2) return "暂停核验局局长";
    if (state.score >= 1100) return "接龙群灭火器";
    return "腿部阅读理解十级";
  }

  function getSummary(title, reason) {
    if (reason === "heat") return `【${title}】热搜值冲爆了。下一局别把风味、同款、原料混在一起。`;
    if (reason === "trust") return `【${title}】群友信任被扣光。梗可以玩，标签要硬。`;
    return `【${title}】35 秒处理 ${state.correct} 单，最高 ${state.bestCombo} 连击。透明标注也能很有传播力。`;
  }

  function makeChallengeUrl() {
    const url = new URL(location.href);
    url.searchParams.set("seed", state.seed);
    return url.href;
  }

  function drawPoster(title, summary, challengeUrl) {
    const canvas = els.posterCanvas;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#f6efe2";
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(25,24,23,.08)";
    ctx.lineWidth = 2;
    for (let x = 0; x < w; x += 44) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 44) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    rounded(ctx, 64, 54, 772, 164, 34, "#191817", "#191817", 0);
    ctx.fillStyle = "#fffaf1";
    ctx.font = '900 78px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText("鹅鸭鉴定局", 96, 150);
    ctx.fillStyle = "#f4c247";
    ctx.font = '900 32px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText("35 秒急速战报", 100, 195);

    drawLeg(ctx, 520, 302);

    ctx.fillStyle = "#df4c3f";
    ctx.font = '900 54px "PingFang SC", "Microsoft YaHei", sans-serif';
    wrapText(ctx, title, 80, 470, 740, 64);

    ctx.fillStyle = "#2d2924";
    ctx.font = '500 31px "PingFang SC", "Microsoft YaHei", sans-serif';
    wrapText(ctx, summary, 82, 590, 730, 46);

    const stats = [
      ["得分", state.score],
      ["最高连击", state.bestCombo],
      ["信任", Math.round(state.trust)],
      ["热搜", Math.round(state.heat)]
    ];
    stats.forEach(([label, value], index) => {
      const x = 82 + (index % 2) * 380;
      const y = 770 + Math.floor(index / 2) * 138;
      rounded(ctx, x, y, 328, 104, 22, "#fffaf1", "#191817", 5);
      ctx.fillStyle = "#716b62";
      ctx.font = '900 24px "PingFang SC", "Microsoft YaHei", sans-serif';
      ctx.fillText(label, x + 26, y + 38);
      ctx.fillStyle = "#191817";
      ctx.font = '900 46px "PingFang SC", "Microsoft YaHei", sans-serif';
      ctx.fillText(String(value), x + 26, y + 88);
    });

    ctx.fillStyle = "#168166";
    ctx.font = '900 33px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText(`#挑战码 ${state.seed}`, 82, 1118);
    ctx.fillStyle = "#716b62";
    ctx.font = '500 24px "PingFang SC", "Microsoft YaHei", sans-serif';
    wrapText(ctx, challengeUrl.replace(/^https?:\/\//, ""), 82, 1160, 740, 34);
    ctx.fillStyle = "#191817";
    ctx.font = '900 28px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText("发给朋友：同一个挑战码，比谁不翻车。", 82, 1274);
  }

  function drawLeg(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-0.14);
    ctx.fillStyle = "#ffe1aa";
    ctx.strokeStyle = "#d6aa6e";
    ctx.lineWidth = 8;
    rounded(ctx, -240, 74, 190, 48, 24, "#ffe1aa", "#d6aa6e", 8);
    ctx.beginPath();
    ctx.arc(-244, 70, 29, 0, Math.PI * 2);
    ctx.arc(-244, 126, 29, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    const gradient = ctx.createLinearGradient(-48, 0, 232, 166);
    gradient.addColorStop(0, "#c95a30");
    gradient.addColorStop(1, "#762512");
    ctx.beginPath();
    ctx.ellipse(90, 82, 154, 94, -0.1, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.strokeStyle = "#7e2b18";
    ctx.lineWidth = 10;
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "rgba(255,232,186,.62)";
    ctx.beginPath();
    ctx.ellipse(62, 52, 46, 15, -0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function rounded(ctx, x, y, width, height, radius, fill, stroke, lineWidth) {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + width, y, x + width, y + height, r);
    ctx.arcTo(x + width, y + height, x, y + height, r);
    ctx.arcTo(x, y + height, x, y, r);
    ctx.arcTo(x, y, x + width, y, r);
    ctx.closePath();
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
    if (stroke && lineWidth > 0) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    let line = "";
    let currentY = y;
    for (const char of text) {
      const testLine = line + char;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        ctx.fillText(line, x, currentY);
        currentY += lineHeight;
        line = char;
      } else {
        line = testLine;
      }
    }
    if (line) ctx.fillText(line, x, currentY);
  }

  async function copyShare() {
    if (!state.lastShare) return;
    try {
      await navigator.clipboard.writeText(state.lastShare);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = state.lastShare;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    els.copyBtn.textContent = "已复制";
    window.setTimeout(() => { els.copyBtn.textContent = "复制挑战"; }, 1200);
  }

  function downloadPoster() {
    const link = document.createElement("a");
    link.download = `goose-duck-verdict-${state.seed}.png`;
    link.href = els.posterCanvas.toDataURL("image/png");
    link.click();
  }

  async function shareResult() {
    if (!state.lastShare) return copyShare();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "鹅鸭鉴定局挑战",
          text: state.lastShare,
          url: makeChallengeUrl()
        });
        return;
      } catch {
        return copyShare();
      }
    }
    return copyShare();
  }

  function vibrate(pattern) {
    if ("vibrate" in navigator) navigator.vibrate(pattern);
  }

  let audioContext = null;
  function beep(freq, startGain, seconds) {
    if (state.muted) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.frequency.value = freq;
      osc.type = "square";
      gain.gain.setValueAtTime(startGain, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + seconds);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start();
      osc.stop(audioContext.currentTime + seconds);
    } catch {
      state.muted = true;
    }
  }

  els.soundBtn.addEventListener("click", () => {
    state.muted = !state.muted;
    els.soundBtn.classList.toggle("off", state.muted);
    els.soundBtn.textContent = state.muted ? "静" : "声";
  });
  els.startBtn.addEventListener("click", startGame);
  els.resetBtn.addEventListener("click", resetGame);
  els.playAgainBtn.addEventListener("click", () => {
    els.resultDialog.close();
    startGame();
  });
  els.copyBtn.addEventListener("click", copyShare);
  els.downloadBtn.addEventListener("click", downloadPoster);
  els.shareBtn.addEventListener("click", shareResult);
  els.actionButtons.forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action));
  });
  window.addEventListener("keydown", (event) => {
    const map = { "1": "goose", "2": "duck", "3": "flavor", "4": "inspect" };
    if (map[event.key]) handleAction(map[event.key]);
    if ((event.key === " " || event.key === "Enter") && !state.running) startGame();
  });

  resetGame();
})();
