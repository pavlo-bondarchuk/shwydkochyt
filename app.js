const content = {
  uk: {
    brand: "Швидкочит",
    eyebrow: "ТРЕНАЖЕР ШВИДКОГО ЧИТАННЯ",
    heroTitle: "Читайте швидше.<br><span>Бачте свій реальний темп.</span>",
    heroText: "Тренуйте читання у заданому темпі або читайте вголос — тренажер підкреслить розпізнані слова та покаже вашу фактичну швидкість у реальному часі.",
    startTraining: "Почати тренування",
    heroNote: "Без реєстрації · результат можна зберегти локально",
    livePace: "РЕАЛЬНИЙ ТЕМП",
    showcaseTitle: "Ваш текст стає інтерактивною доріжкою читання.",
    showcaseText: "Оберіть навчальний текст, вставте власний або завантажте TXT. У режимі голосу позиція рухається не за таймером, а за тим, що ви реально вимовили.",
    trainerSubtitle: "інтерактивне тренування",
    chooseText: "Оберіть текст",
    chooseTextHint: "Навчальний або власний",
    library: "Навчальні",
    custom: "Свій текст",
    pastePlaceholder: "Вставте український або англійський текст...",
    uploadTxt: "Завантажити .txt",
    noFile: "Файл не вибрано",
    useText: "Використати текст",
    paceLab: "Темп і замір",
    paceHint: "Ціль проти вашого темпу",
    wpmShort: "слів/хв",
    pacedMode: "За темпом",
    voiceMode: "Голосом",
    targetPace: "Ціль",
    yourPace: "Ваш темп",
    paceWaiting: "Почніть читати для заміру",
    paceGood: "Темп майже точно збігається з ціллю",
    paceSlow: "Трохи прискортеся",
    paceFast: "Можна трохи сповільнитися",
    enableMic: "Увімкнути мікрофон",
    micReadyButton: "Мікрофон увімкнено",
    micAuthorized: "Мікрофон увімкнено — дозвіл на використання надано.",
    micRequired: "Для голосового тесту спочатку увімкніть мікрофон тут.",
    disableMic: "Вимкнути мікрофон",
    micNote: "У голосовому режимі слова підкреслюються за розпізнаною мовою.",
    micUnsupported: "Цей браузер не підтримує вбудоване розпізнавання мовлення. Режим за темпом залишається доступним.",
    micDenied: "Немає доступу до мікрофона. Дозвольте його для цього сайту у налаштуваннях браузера.",
    listening: "слухаю",
    currentText: "ПОТОЧНИЙ ТЕКСТ",
    timer: "ТАЙМЕР",
    timerDuration: "Тривалість тренування",
    timerDurationHint: "За замовчуванням 60 секунд",
    secondsShort: "сек",
    stopTraining: "Зупинити",
    stopTrainingHint: "Завершити поточну сесію",
    words: "слів",
    estimatedPrefix: "≈",
    estimatedSuffix: "хв",
    start: "Почати тренування",
    pause: "Пауза",
    continue: "Продовжити",
    restart: "Почати знову",
    sessionTime: "Час",
    actualPace: "Фактичний темп",
    liveSpeed: "ШВИДКІСТЬ",
    resultTitle: "Ваш результат",
    resultSpeed: "слів за хвилину",
    resultWords: "Прочитано слів",
    resultDuration: "Час тесту",
    retryTest: "Пройти ще раз",
    backToSettings: "До налаштувань",
    progress: "Прогрес",
    recognized: "Розпізнано",
    previewLabel: "ІНТЕРАКТИВНИЙ ТРЕНАЖЕР",
    previewTitle: "Спробуйте у повному екрані",
    openTrainer: "Відкрити тренажер",
    benefit1Title: "Читаєте у своєму темпі",
    benefit1Text: "Виберіть цільову швидкість і тренуйте плавність без стрибків.",
    benefit2Title: "Говорите — текст реагує",
    benefit2Text: "Мікрофон рухає підсвічування за реально розпізнаними словами.",
    benefit3Title: "Бачите різницю",
    benefit3Text: "Порівнюйте фактичний WPM із цільовим і коригуйте темп одразу.",
    saveTitle: "Зберегти результат тренування?",
    dontSave: "Не зберігати",
    continueTraining: "Продовжити",
    saveAndClose: "Зберегти й закрити",
    saved: "Збережено",
    savedSessions: "збережених сесій",
    summary: ({ time, pace, progress }) => `Час ${time} · темп ${pace || "—"} слів/хв · пройдено ${progress}% тексту.`,
    customTitle: "Мій текст",
    emptyAlert: "Додайте текст перед початком тренування.",
    texts: [
      {
        id: "brain",
        icon: "brain",
        title: "Як мозок читає текст",
        level: "Базовий",
        text: "Коли ми читаємо, очі не рухаються рядком безперервно. Вони роблять короткі зупинки, які називаються фіксаціями. Під час цих маленьких пауз мозок розпізнає слова, об’єднує їх у смислові групи та будує значення речення. Початківець часто зупиняється майже на кожному слові. Досвідчений читач поступово вчиться охоплювати поглядом кілька слів одночасно. Саме тому швидкість читання можна тренувати. Важливо не просто рухатися швидше, а зберігати розуміння тексту. Корисно читати короткими смисловими фразами, не повертатися без потреби до вже прочитаних слів і тримати увагу на головній думці. Короткі регулярні тренування зазвичай ефективніші за рідкісні довгі заняття. Починайте з комфортного темпу, а потім додавайте по десять або двадцять слів за хвилину. Якщо після абзацу ви можете коротко пояснити його зміст, обраний темп вам підходить."
      },
      {
        id: "attention",
        icon: "crosshair",
        title: "Увага і концентрація",
        level: "Середній",
        text: "Увага працює наче промінь ліхтарика: вона робить яскравою невелику частину інформації, а все інше залишає на тлі. Під час читання цей промінь може стрибати на сповіщення, звуки, сторонні думки або бажання перечитати попереднє речення. Тому тренування швидкого читання починається не зі швидкості, а з керування увагою. Перед тренуванням варто прибрати зайві подразники, обрати конкретну мету і визначити короткий проміжок часу для роботи. Коли мозок знає, що завдання триватиме лише кілька хвилин, йому легше підтримувати концентрацію. Ще один прийом полягає у пошуку ключових слів: імен, дій, чисел, причин та висновків. Вони створюють смисловий каркас тексту. Якщо цей каркас зрозумілий, другорядні деталі сприймаються швидше. Після читання корисно поставити собі три питання: про що був текст, яка його головна думка і який факт запам’ятався найбільше."
      },
      {
        id: "science",
        icon: "sun",
        title: "Чому небо змінює колір",
        level: "Пізнавальний",
        text: "Сонячне світло здається білим, але насправді складається з багатьох кольорів. Коли воно проходить крізь атмосферу Землі, молекули повітря розсіюють короткі світлові хвилі сильніше, ніж довгі. Синє світло має коротшу довжину хвилі, тому вдень воно розсіюється небом у різні боки й потрапляє до наших очей майже з усіх напрямків. Через це небо здається блакитним. Під час заходу сонця промені проходять значно довший шлях крізь атмосферу. Більша частина синього та зеленого світла встигає розсіятися, а до спостерігача доходять переважно довші червоні й помаранчеві хвилі. Саме тому захід може бути золотим, рожевим або насичено червоним. Пил, волога та дрібні частинки в повітрі додатково впливають на відтінки. Отже, колір неба є видимим результатом взаємодії світла з атмосферою."
      }
    ]
  },
  en: {
    brand: "SpeedRead",
    eyebrow: "SPEED READING TRAINER",
    heroTitle: "Read faster.<br><span>See your real pace.</span>",
    heroText: "Train at a chosen pace or read aloud — the trainer follows recognized words and shows your actual reading speed in real time.",
    startTraining: "Start training",
    heroNote: "No account · results can be stored locally",
    livePace: "REAL PACE",
    showcaseTitle: "Your text becomes an interactive reading track.",
    showcaseText: "Choose a training text, paste your own, or upload TXT. In voice mode the position follows what you actually say instead of a timer.",
    trainerSubtitle: "interactive training",
    chooseText: "Choose a text",
    chooseTextHint: "Training or your own",
    library: "Training",
    custom: "Your text",
    pastePlaceholder: "Paste English or Ukrainian text...",
    uploadTxt: "Upload .txt",
    noFile: "No file selected",
    useText: "Use this text",
    paceLab: "Pace & measurement",
    paceHint: "Target versus your pace",
    wpmShort: "wpm",
    pacedMode: "Paced",
    voiceMode: "Voice",
    targetPace: "Target",
    yourPace: "Your pace",
    paceWaiting: "Start reading to measure",
    paceGood: "Your pace is very close to the target",
    paceSlow: "Speed up a little",
    paceFast: "You can slow down a little",
    enableMic: "Enable microphone",
    micReadyButton: "Microphone enabled",
    micAuthorized: "Microphone enabled — permission to use it has been granted.",
    micRequired: "Enable the microphone here before starting a voice test.",
    disableMic: "Disable microphone",
    micNote: "In voice mode words are underlined as speech is recognized.",
    micUnsupported: "This browser does not support built-in speech recognition. Paced mode is still available.",
    micDenied: "Microphone access is blocked. Allow it for this site in your browser settings.",
    listening: "listening",
    currentText: "CURRENT TEXT",
    timer: "TIMER",
    timerDuration: "Training duration",
    timerDurationHint: "60 seconds by default",
    secondsShort: "sec",
    stopTraining: "Stop",
    stopTrainingHint: "End the current session",
    words: "words",
    estimatedPrefix: "≈",
    estimatedSuffix: "min",
    start: "Start training",
    pause: "Pause",
    continue: "Continue",
    restart: "Restart",
    sessionTime: "Time",
    actualPace: "Actual pace",
    liveSpeed: "SPEED",
    resultTitle: "Your result",
    resultSpeed: "words per minute",
    resultWords: "Words read",
    resultDuration: "Test time",
    retryTest: "Try again",
    backToSettings: "Back to settings",
    progress: "Progress",
    recognized: "Recognized",
    previewLabel: "INTERACTIVE TRAINER",
    previewTitle: "Try it full screen",
    openTrainer: "Open trainer",
    benefit1Title: "Read at your own pace",
    benefit1Text: "Choose a target speed and train smooth reading without jumps.",
    benefit2Title: "Speak and the text reacts",
    benefit2Text: "The microphone moves highlighting through words that are actually recognized.",
    benefit3Title: "See the difference",
    benefit3Text: "Compare actual WPM with your target and adjust your pace immediately.",
    saveTitle: "Save this training result?",
    dontSave: "Don't save",
    continueTraining: "Continue",
    saveAndClose: "Save & close",
    saved: "Saved",
    savedSessions: "saved sessions",
    summary: ({ time, pace, progress }) => `Time ${time} · pace ${pace || "—"} wpm · ${progress}% of the text completed.`,
    customTitle: "My text",
    emptyAlert: "Add some text before starting the training.",
    texts: [
      {
        id: "brain",
        icon: "brain",
        title: "How the brain reads text",
        level: "Foundation",
        text: "When we read, our eyes do not move smoothly across a line. They make short stops called fixations. During these tiny pauses the brain recognizes words, groups them into meaningful chunks, and builds the meaning of a sentence. A beginning reader often fixes on almost every word. A skilled reader gradually learns to take in several words at once. This is one reason reading speed can improve with practice. The goal is not simply to move faster but to keep comprehension stable. It helps to read in short meaningful phrases, avoid unnecessary returns to earlier words, and stay focused on the central idea. Short regular practice sessions are usually more effective than rare long ones. Begin at a comfortable pace, then increase the speed by ten or twenty words per minute. If you can briefly explain the paragraph after reading it, the pace is probably appropriate."
      },
      {
        id: "attention",
        icon: "crosshair",
        title: "Attention and focus",
        level: "Intermediate",
        text: "Attention works like a flashlight: it makes one small area of information bright while everything else stays in the background. During reading that beam can jump toward notifications, sounds, unrelated thoughts, or the urge to reread a previous sentence. Speed reading therefore begins with attention management rather than speed itself. Before practice, remove obvious distractions, choose one clear goal, and set a short time window for the session. When the brain knows that the task will last only a few minutes, sustained focus becomes easier. Another useful technique is to look for key words: names, actions, numbers, causes, and conclusions. They form the structural frame of the text. Once that frame is clear, supporting details are easier to process quickly. After reading, ask yourself three questions: what was the text about, what was its main point, and which fact do you remember best?"
      },
      {
        id: "science",
        icon: "sun",
        title: "Why the sky changes color",
        level: "Knowledge",
        text: "Sunlight looks white, but it is actually made of many colors. When light passes through Earth’s atmosphere, molecules in the air scatter short wavelengths more strongly than long ones. Blue light has a shorter wavelength, so during the day it is scattered across the sky in many directions and reaches our eyes from almost everywhere. That is why the sky appears blue. Near sunset, sunlight travels through a much longer section of atmosphere. More of the blue and green light is scattered away before the light reaches an observer, leaving a larger share of red and orange wavelengths. This is why sunsets can appear golden, pink, or deep red. Dust, moisture, and other small particles can change the colors even further. The changing color of the sky is therefore a visible result of light interacting with the atmosphere."
      }
    ]
  }
};

const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition || null;
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const state = {
  lang: "uk",
  speed: 240,
  mode: "paced",
  currentTextId: "brain",
  title: "",
  rawText: "",
  words: [],
  normalizedWords: [],
  index: 0,
  voicePreviewIndex: 0,
  running: false,
  timerId: null,
  startedAt: null,
  elapsedBeforeStart: 0,
  completed: false,
  trainerOpen: false,
  recognition: null,
  listening: false,
  recognitionWanted: false,
  voiceStartedAt: null,
  voiceElapsedBeforeStart: 0,
  matchedVoiceWords: 0,
  recognizedTokens: 0,
  recognitionMatched: 0,
  spokenWordCount: 0,
  finishedElapsedMs: 0,
  pausedBySettings: false,
  closeResume: false,
  focusMode: false,
  settingsOpen: false,
  durationSeconds: Math.max(5, Number(localStorage.getItem("speedread.durationSeconds")) || 60),
  timerExpired: false,
  resultVisible: false,
  micAuthorized: localStorage.getItem("speedread.micAuthorized") === "true",
  micNeedsAttention: false
};

const els = {
  trainerShell: $("#trainerShell"),
  saveDialog: $("#saveDialog"),
  saveSummary: $("#saveSummary"),
  savedBadge: $("#savedBadge"),
  readingText: $("#readingText"),
  readingStage: $("#readingStage"),
  speedRange: $("#speedRange"),
  speedValue: $("#speedValue"),
  targetPaceValue: $("#targetPaceValue"),
  actualPaceValue: $("#actualPaceValue"),
  currentTitle: $("#currentTitle"),
  timerValue: $("#timerValue"),
  progressBar: $("#progressBar"),
  progressPercent: $("#progressPercent"),
  wordsRead: $("#wordsRead"),
  wordsTotal: $("#wordsTotal"),
  wordCount: $("#wordCount"),
  estimatedTime: $("#estimatedTime"),
  sessionTime: $("#sessionTime"),
  sessionWpm: $("#sessionWpm"),
  sessionProgress: $("#sessionProgress"),
  recognitionScore: $("#recognitionScore"),
  startButton: $("#startButton"),
  startIcon: $("#startIcon"),
  startLabel: $("#startLabel"),
  fileInput: $("#fileInput"),
  fileName: $("#fileName"),
  customText: $("#customText"),
  micButton: $("#micButton"),
  micLabel: $("#micLabel"),
  micNote: $("#micNote"),
  micStatus: $("#micStatus"),
  listeningPill: $("#listeningPill"),
  paceFeedback: $("#paceFeedback"),
  paceFeedbackText: $("#paceFeedbackText"),
  durationInput: $("#durationInput"),
  focusStopButton: $("#focusStopButton"),
  focusResetButton: $("#focusResetButton"),
  focusWpmValue: $("#focusWpmValue"),
  focusActionIcon: $("#focusActionIcon"),
  focusActionLabel: $("#focusActionLabel"),
  focusActionHint: $("#focusActionHint"),
  focusResetLabel: $("#focusResetLabel"),
  resultPanel: $("#resultPanel"),
  resultWpm: $("#resultWpm"),
  resultWords: $("#resultWords"),
  resultTime: $("#resultTime")
};

function t(key) {
  return content[state.lang][key];
}

function splitWords(text) {
  return text.trim().split(/\s+/u).filter(Boolean);
}

function normalizeWord(word) {
  return word
    .toLocaleLowerCase(state.lang === "uk" ? "uk-UA" : "en-US")
    .replace(/[’'`ʼ]/gu, "'")
    .replace(/[^\p{L}\p{N}'-]+/gu, "")
    .replace(/^-+|-+$/gu, "");
}

function tokenizeTranscript(text) {
  return splitWords(text).map(normalizeWord).filter(Boolean);
}

function formatTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const min = String(Math.floor(total / 60)).padStart(2, "0");
  const sec = String(total % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

function elapsedMs() {
  return state.elapsedBeforeStart + (state.running && state.startedAt ? Date.now() - state.startedAt : 0);
}

function remainingMs() {
  return Math.max(0, state.durationSeconds * 1000 - elapsedMs());
}

function voiceElapsedMs() {
  return state.voiceElapsedBeforeStart + (state.listening && state.voiceStartedAt ? Date.now() - state.voiceStartedAt : 0);
}

function actualWpm() {
  if (state.mode === "voice") {
    const ms = state.finishedElapsedMs || elapsedMs();
    if (state.spokenWordCount < 1 || ms < 1000) return 0;
    return Math.round(state.spokenWordCount / (ms / 60000));
  }
  const ms = state.finishedElapsedMs || elapsedMs();
  if (state.index < 2 || ms < 1000) return 0;
  return Math.round(state.index / (ms / 60000));
}

function progressPercentValue() {
  return state.words.length ? Math.round((Math.min(state.index, state.words.length) / state.words.length) * 100) : 0;
}

function recognitionPercent() {
  if (!state.recognizedTokens) return 0;
  return Math.min(100, Math.round((state.recognitionMatched / state.recognizedTokens) * 100));
}

function refreshLucideIcons() {
  if (window.lucide?.createIcons) window.lucide.createIcons();
}

function setLucideIcon(container, name) {
  if (!container) return;
  container.innerHTML = `<i data-lucide="${name}" aria-hidden="true"></i>`;
  refreshLucideIcons();
}

function updateI18n() {
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach(el => {
    const value = t(el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });
  $$('[data-i18n-html]').forEach(el => {
    const value = t(el.dataset.i18nHtml);
    if (typeof value === "string") el.innerHTML = value;
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  renderLibrary();
  if (state.currentTextId !== "custom") {
    const item = content[state.lang].texts.find(text => text.id === state.currentTextId) || content[state.lang].texts[0];
    loadText(item.title, item.text, item.id, false);
  } else {
    els.currentTitle.textContent = t("customTitle");
    renderMeta();
  }
  updateMicAvailability();
  updateSavedBadge();
}

function renderLibrary() {
  const list = $("#textList");
  list.innerHTML = "";
  content[state.lang].texts.forEach(item => {
    const words = splitWords(item.text).length;
    const button = document.createElement("button");
    button.className = `text-option${state.currentTextId === item.id ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `<span class="text-icon"><i data-lucide="${item.icon}" aria-hidden="true"></i></span><span><strong>${item.title}</strong><small>${item.level} · ${words} ${t("words")}</small></span>`;
    button.addEventListener("click", () => loadText(item.title, item.text, item.id));
    list.appendChild(button);
  });
  refreshLucideIcons();
}

function loadText(title, text, id = "custom", resetElapsed = true) {
  hideSessionResult();
  stopSession();
  stopRecognition();
  state.currentTextId = id;
  state.title = title;
  state.rawText = text.trim();
  state.words = splitWords(text);
  state.normalizedWords = state.words.map(normalizeWord);
  state.index = 0;
  state.voicePreviewIndex = 0;
  state.completed = false;
  state.matchedVoiceWords = 0;
  state.recognizedTokens = 0;
  state.recognitionMatched = 0;
  state.spokenWordCount = 0;
  state.finishedElapsedMs = 0;
  state.voiceElapsedBeforeStart = 0;
  if (resetElapsed) state.elapsedBeforeStart = 0;
  els.currentTitle.textContent = title;
  renderReader();
  renderLibrary();
  els.readingStage.scrollTop = 0;
}

function renderReader() {
  els.readingText.innerHTML = "";
  state.words.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = "word is-upcoming";
    span.dataset.index = String(index);
    span.textContent = word + (index < state.words.length - 1 ? " " : "");
    els.readingText.appendChild(span);
  });
  renderProgress();
  renderMeta();
  renderControls();
}

function renderProgress() {
  const total = state.words.length;
  const committed = Math.min(state.index, total);
  const preview = state.mode === "voice" ? Math.max(committed, Math.min(state.voicePreviewIndex, total)) : committed;
  const percent = total ? Math.round((committed / total) * 100) : 0;

  $$(".word").forEach((el, index) => {
    el.classList.toggle("is-read", index < committed);
    el.classList.toggle("is-current", index === committed && committed < total);
    el.classList.toggle("is-voice-current", state.mode === "voice" && index >= committed && index < preview);
    el.classList.toggle("is-upcoming", index >= preview);
  });

  els.progressBar.style.width = `${percent}%`;
  els.progressPercent.textContent = `${percent}%`;
  els.wordsRead.textContent = String(committed);
  els.wordsTotal.textContent = String(total);
  els.sessionProgress.textContent = `${percent}%`;
  positionCurrentWord(preview > committed ? preview - 1 : committed);
}

function positionCurrentWord(index) {
  const current = els.readingText.querySelector(`.word[data-index="${index}"]`);
  if (!current) return;
  const top = current.offsetTop - els.readingStage.clientHeight * 0.42;
  els.readingStage.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function renderMeta() {
  const total = state.words.length;
  const estimate = total ? Math.max(1, Math.ceil(total / state.speed)) : 0;
  els.wordCount.textContent = String(total);
  els.estimatedTime.textContent = `${t("estimatedPrefix")} ${estimate} ${t("estimatedSuffix")}`;
  els.speedValue.textContent = String(state.speed);
  els.targetPaceValue.textContent = String(state.speed);
  els.durationInput.value = String(state.durationSeconds);
  renderPace();
}

function renderPace() {
  const pace = actualWpm();
  els.actualPaceValue.textContent = pace ? String(pace) : "—";
  els.sessionWpm.textContent = pace ? String(pace) : "—";
  els.focusWpmValue.textContent = pace ? String(pace) : "0";
  els.recognitionScore.textContent = state.recognizedTokens ? `${recognitionPercent()}%` : "—";
  els.paceFeedback.classList.remove("is-good", "is-slow", "is-fast", "is-neutral");

  if (!pace) {
    els.paceFeedback.classList.add("is-neutral");
    els.paceFeedbackText.textContent = t("paceWaiting");
    return;
  }

  const ratio = pace / state.speed;
  if (ratio < 0.9) {
    els.paceFeedback.classList.add("is-slow");
    els.paceFeedbackText.textContent = t("paceSlow");
  } else if (ratio > 1.1) {
    els.paceFeedback.classList.add("is-fast");
    els.paceFeedbackText.textContent = t("paceFast");
  } else {
    els.paceFeedback.classList.add("is-good");
    els.paceFeedbackText.textContent = t("paceGood");
  }
}

function renderControls() {
  els.startButton.classList.toggle("is-running", state.running);
  setLucideIcon(els.startIcon, state.running ? "pause" : "play");
  if (state.running) els.startLabel.textContent = t("pause");
  else if (state.completed) els.startLabel.textContent = t("restart");
  else if (state.index > 0 || elapsedMs() > 0) els.startLabel.textContent = t("continue");
  else els.startLabel.textContent = t("start");

  if (els.focusActionIcon && els.focusActionLabel && els.focusActionHint) {
    const paused = !state.running && !state.completed && !state.resultVisible && elapsedMs() > 0;
    els.focusStopButton.classList.toggle("is-running", state.running);
    els.focusResetButton.hidden = !paused;
    if (state.running) {
      setLucideIcon(els.focusActionIcon, "square");
      els.focusActionLabel.textContent = state.lang === "uk" ? "Зупинити" : "Stop";
      els.focusActionHint.textContent = state.lang === "uk" ? "Поставити тест на паузу" : "Pause the current test";
    } else if (paused) {
      setLucideIcon(els.focusActionIcon, "play");
      els.focusActionLabel.textContent = state.lang === "uk" ? "Продовжити" : "Continue";
      els.focusResetLabel.textContent = state.lang === "uk" ? "Почати заново" : "Start over";
      els.focusActionHint.textContent = state.lang === "uk" ? "Тест на паузі" : "Test paused";
    } else {
      setLucideIcon(els.focusActionIcon, "play");
      els.focusActionLabel.textContent = state.lang === "uk" ? "Почати" : "Start";
      els.focusActionHint.textContent = state.lang === "uk" ? "Почати тест на швидкість читання" : "Start the reading speed test";
    }
  }
}

function tickPacedReading() {
  if (!state.running || state.mode !== "paced") return;
  if (state.index >= state.words.length - 1) {
    state.index = state.words.length;
    state.completed = true;
    stopSession();
    renderProgress();
    renderControls();
    showSessionResult();
    return;
  }
  state.index += 1;
  renderProgress();
  renderPace();
}

function scheduleNext() {
  clearTimeout(state.timerId);
  if (!state.running || state.mode !== "paced") return;
  state.timerId = setTimeout(() => {
    tickPacedReading();
    scheduleNext();
  }, 60000 / state.speed);
}

function sessionWordsRead() {
  return state.mode === "voice" ? state.spokenWordCount : state.index;
}

function sessionResult() {
  const ms = Math.max(1, state.finishedElapsedMs || elapsedMs());
  const words = sessionWordsRead();
  const wpm = words ? Math.round(words / (ms / 60000)) : 0;
  return { ms, words, wpm };
}

function hideSessionResult() {
  state.resultVisible = false;
  els.resultPanel.hidden = true;
}

function showSessionResult() {
  const result = sessionResult();
  state.resultVisible = true;
  els.resultWpm.textContent = String(result.wpm);
  els.resultWords.textContent = String(result.words);
  els.resultTime.textContent = formatTime(result.ms);
  els.resultPanel.hidden = false;
}

function enterFocusMode() {
  state.focusMode = true;
  state.settingsOpen = false;
  els.trainerShell.classList.add("is-training");
  els.trainerShell.classList.remove("is-settings-open");
}

function exitFocusMode() {
  hideSessionResult();
  state.focusMode = false;
  state.settingsOpen = false;
  els.trainerShell.classList.remove("is-training", "is-settings-open");
}

function toggleSettings(force) {
  if (!state.focusMode) return;
  const nextOpen = typeof force === "boolean" ? force : !state.settingsOpen;

  if (nextOpen && !state.settingsOpen && state.running) {
    state.pausedBySettings = true;
    stopSession();
  }

  state.settingsOpen = nextOpen;
  els.trainerShell.classList.toggle("is-settings-open", state.settingsOpen);

  if (!nextOpen && state.pausedBySettings && !state.completed && !state.timerExpired && !state.resultVisible) {
    state.pausedBySettings = false;
    startSession();
  }
}

function startSession() {
  hideSessionResult();
  if (!state.words.length) {
    alert(t("emptyAlert"));
    return;
  }

  if (state.mode === "voice" && !state.micAuthorized) {
    enterFocusMode();
    state.micNeedsAttention = true;
    toggleSettings(true);
    updateMicUi();
    window.setTimeout(() => {
      els.micButton.scrollIntoView({ behavior: "smooth", block: "center" });
      els.micButton.focus({ preventScroll: true });
    }, 260);
    return;
  }

  if (state.completed || state.timerExpired) resetSession();
  enterFocusMode();
  state.timerExpired = false;
  state.finishedElapsedMs = 0;
  state.running = true;
  state.startedAt = Date.now();

  if (state.mode === "paced") scheduleNext();
  if (state.mode === "voice") startRecognition(false);
  renderControls();
}

function stopSession() {
  if (state.running && state.startedAt) state.elapsedBeforeStart += Date.now() - state.startedAt;
  state.running = false;
  state.startedAt = null;
  clearTimeout(state.timerId);
  state.timerId = null;
  if (state.mode === "voice") stopRecognition();
  renderControls();
  renderPace();
}

function toggleSession() {
  if (state.running) stopSession();
  else startSession();
}

function seek(delta) {
  if (!state.words.length) return;
  state.index = Math.max(0, Math.min(state.words.length, state.index + delta));
  state.voicePreviewIndex = state.index;
  state.completed = state.index >= state.words.length;
  renderProgress();
  renderControls();
}

function resetSession() {
  hideSessionResult();
  stopSession();
  exitFocusMode();
  stopRecognition();
  state.index = 0;
  state.voicePreviewIndex = 0;
  state.completed = false;
  state.elapsedBeforeStart = 0;
  state.voiceElapsedBeforeStart = 0;
  state.matchedVoiceWords = 0;
  state.recognizedTokens = 0;
  state.recognitionMatched = 0;
  state.spokenWordCount = 0;
  state.finishedElapsedMs = 0;
  state.pausedBySettings = false;
  state.timerExpired = false;
  els.timerValue.textContent = formatTime(state.durationSeconds * 1000);
  els.sessionTime.textContent = formatTime(state.durationSeconds * 1000);
  els.readingStage.scrollTop = 0;
  renderProgress();
  renderControls();
  renderPace();
}

function wordDistance(a, b) {
  if (a === b) return 0;
  if (!a || !b) return 99;
  if (Math.abs(a.length - b.length) > 2) return 99;
  const rows = Array.from({ length: a.length + 1 }, (_, i) => i);
  for (let j = 1; j <= b.length; j += 1) {
    let previous = rows[0];
    rows[0] = j;
    for (let i = 1; i <= a.length; i += 1) {
      const old = rows[i];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      rows[i] = Math.min(rows[i] + 1, rows[i - 1] + 1, previous + cost);
      previous = old;
    }
  }
  return rows[a.length];
}

function tokenMatches(spoken, expected) {
  if (spoken === expected) return true;
  if (spoken.length >= 5 && expected.length >= 5 && wordDistance(spoken, expected) <= 1) return true;
  return false;
}

function alignTokens(tokens, startIndex) {
  let pointer = startIndex;
  let matched = 0;

  for (const token of tokens) {
    let found = -1;
    const limit = Math.min(state.normalizedWords.length, pointer + 7);
    for (let i = pointer; i < limit; i += 1) {
      if (tokenMatches(token, state.normalizedWords[i])) {
        found = i;
        break;
      }
    }
    if (found >= 0) {
      pointer = found + 1;
      matched += 1;
    }
  }

  return { index: pointer, matched };
}

async function verifyMicrophonePermission() {
  if (!navigator.mediaDevices?.getUserMedia) return true;
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  stream.getTracks().forEach(track => track.stop());
  return true;
}

async function authorizeMicrophone() {
  if (!SpeechRecognitionCtor || !navigator.mediaDevices?.getUserMedia) {
    updateMicAvailability();
    return false;
  }

  try {
    await verifyMicrophonePermission();
    state.micAuthorized = true;
    state.micNeedsAttention = false;
    localStorage.setItem("speedread.micAuthorized", "true");
    els.micNote.textContent = t("micNote");
    updateMicUi();
    return true;
  } catch (error) {
    state.micAuthorized = false;
    localStorage.removeItem("speedread.micAuthorized");
    els.micNote.textContent = t("micDenied");
    updateMicUi();
    return false;
  }
}

async function syncStoredMicrophonePermission() {
  if (!state.micAuthorized || !navigator.permissions?.query) {
    updateMicUi();
    return;
  }

  try {
    const permission = await navigator.permissions.query({ name: "microphone" });
    if (permission.state === "denied") {
      state.micAuthorized = false;
      localStorage.removeItem("speedread.micAuthorized");
    }
    permission.addEventListener?.("change", () => {
      if (permission.state === "denied") {
        state.micAuthorized = false;
        localStorage.removeItem("speedread.micAuthorized");
        updateMicUi();
      }
    });
  } catch (error) {}

  updateMicUi();
}

function requireMicrophoneSetup(messageKey = "micRequired") {
  state.micAuthorized = false;
  state.micNeedsAttention = true;
  localStorage.removeItem("speedread.micAuthorized");

  if (state.running) stopSession();
  enterFocusMode();
  toggleSettings(true);
  els.micNote.textContent = t(messageKey);
  updateMicUi();

  window.setTimeout(() => {
    els.micButton.scrollIntoView({ behavior: "smooth", block: "center" });
    els.micButton.focus({ preventScroll: true });
  }, 220);
}

function ensureRecognition() {
  if (!SpeechRecognitionCtor) return null;
  if (state.recognition) return state.recognition;

  const recognition = new SpeechRecognitionCtor();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  recognition.onresult = event => {
    let previewText = "";

    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const result = event.results[i];
      const transcript = result[0]?.transcript || "";
      const tokens = tokenizeTranscript(transcript);
      if (!tokens.length) continue;

      if (result.isFinal) {
        const aligned = alignTokens(tokens, state.index);
        state.recognizedTokens += tokens.length;
        state.spokenWordCount += tokens.length;
        state.recognitionMatched += aligned.matched;
        if (aligned.index > state.index) {
          state.matchedVoiceWords += aligned.index - state.index;
          state.index = aligned.index;
          state.voicePreviewIndex = state.index;
          if (state.index >= state.words.length) {
            state.completed = true;
            stopSession();
            showSessionResult();
          }
        }
      } else {
        previewText += ` ${transcript}`;
      }
    }

    if (previewText.trim()) {
      const preview = alignTokens(tokenizeTranscript(previewText), state.index);
      state.voicePreviewIndex = Math.max(state.index, preview.index);
    } else {
      state.voicePreviewIndex = state.index;
    }

    renderProgress();
    renderPace();
  };

  recognition.onerror = event => {
    if (["not-allowed", "service-not-allowed", "audio-capture"].includes(event.error)) {
      state.recognitionWanted = false;
      state.listening = false;
      requireMicrophoneSetup("micDenied");
    }
  };

  recognition.onend = () => {
    if (state.listening && state.voiceStartedAt) {
      state.voiceElapsedBeforeStart += Date.now() - state.voiceStartedAt;
    }
    state.listening = false;
    state.voiceStartedAt = null;
    updateMicUi();

    if (state.recognitionWanted && state.running && state.mode === "voice") {
      window.setTimeout(() => {
        if (state.recognitionWanted && state.running && state.mode === "voice") startRecognition(false);
      }, 180);
    }
  };

  state.recognition = recognition;
  return recognition;
}

async function startRecognition(checkPermission = true) {
  if (!SpeechRecognitionCtor) {
    updateMicAvailability();
    return;
  }
  if (state.listening) return;

  try {
    if (checkPermission) await verifyMicrophonePermission();
    const recognition = ensureRecognition();
    recognition.lang = state.lang === "uk" ? "uk-UA" : "en-US";
    state.recognitionWanted = true;
    state.listening = true;
    state.voiceStartedAt = Date.now();
    recognition.start();
    updateMicUi();
  } catch (error) {
    state.recognitionWanted = false;
    state.listening = false;
    state.voiceStartedAt = null;
    requireMicrophoneSetup("micDenied");
  }
}

function stopRecognition() {
  state.recognitionWanted = false;
  if (state.listening && state.voiceStartedAt) {
    state.voiceElapsedBeforeStart += Date.now() - state.voiceStartedAt;
  }
  state.listening = false;
  state.voiceStartedAt = null;
  if (state.recognition) {
    try {
      state.recognition.stop();
    } catch (error) {
      state.recognition.abort();
    }
  }
  updateMicUi();
}

function updateMicUi() {
  els.micButton.classList.toggle("is-listening", state.listening);
  els.micButton.classList.toggle("is-authorized", state.micAuthorized);
  els.micButton.classList.toggle("needs-attention", state.micNeedsAttention && !state.micAuthorized);
  els.listeningPill.hidden = !state.listening;
  els.micLabel.textContent = state.micAuthorized ? t("micReadyButton") : t("enableMic");

  if (els.micStatus) {
    els.micStatus.hidden = false;
    if (state.micAuthorized) {
      els.micStatus.textContent = t("micAuthorized");
      els.micStatus.classList.add("is-ready");
      els.micStatus.classList.remove("is-warning");
    } else if (state.micNeedsAttention) {
      els.micStatus.textContent = t("micRequired");
      els.micStatus.classList.remove("is-ready");
      els.micStatus.classList.add("is-warning");
    } else {
      els.micStatus.textContent = "";
      els.micStatus.hidden = true;
      els.micStatus.classList.remove("is-ready", "is-warning");
    }
  }
}

function updateMicAvailability() {
  const supported = Boolean(SpeechRecognitionCtor && navigator.mediaDevices?.getUserMedia);
  const voiceButton = $('.mode-button[data-mode="voice"]');
  voiceButton.disabled = !supported;
  els.micButton.disabled = !supported || state.mode !== "voice";
  els.micNote.textContent = supported ? t("micNote") : t("micUnsupported");
  if (!supported && state.mode === "voice") setMode("paced");
  updateMicUi();
}

function setMode(mode) {
  if (mode === "voice" && !SpeechRecognitionCtor) return;
  if (state.running) stopSession();
  stopRecognition();
  state.mode = mode;
  if (mode !== "voice") state.micNeedsAttention = false;
  state.voicePreviewIndex = state.index;
  $$(".mode-button").forEach(button => button.classList.toggle("is-active", button.dataset.mode === mode));
  els.micButton.disabled = mode !== "voice" || !SpeechRecognitionCtor;
  renderProgress();
  renderPace();
}

function runViewTransition(action) {
  if (document.startViewTransition) document.startViewTransition(action);
  else action();
}

function openTrainer() {
  if (state.trainerOpen) return;
  runViewTransition(() => {
    state.trainerOpen = true;
    document.body.classList.add("trainer-open");
    els.trainerShell.classList.remove("is-preview", "is-settings-open");
    els.trainerShell.classList.add("is-fullscreen");
    enterFocusMode();
  });
  window.setTimeout(() => els.readingStage.focus({ preventScroll: true }), 350);
}

function finishClose() {
  stopSession();
  exitFocusMode();
  stopRecognition();
  els.saveDialog.hidden = true;
  runViewTransition(() => {
    state.trainerOpen = false;
    document.body.classList.remove("trainer-open");
    els.trainerShell.classList.remove("is-fullscreen");
    els.trainerShell.classList.add("is-preview");
  });
  window.setTimeout(() => $("#previewAnchor").scrollIntoView({ behavior: "smooth", block: "center" }), 250);
}

function requestClose() {
  if (!state.trainerOpen) return;
  const hasResult = state.index > 0 || elapsedMs() > 1000;
  if (!hasResult) {
    finishClose();
    return;
  }
  state.closeResume = state.running;
  if (state.running) stopSession();
  const summary = t("summary")({
    time: formatTime(elapsedMs()),
    pace: actualWpm(),
    progress: progressPercentValue()
  });
  els.saveSummary.textContent = summary;
  els.saveDialog.hidden = false;
}

function savedSessions() {
  try {
    return JSON.parse(localStorage.getItem("speedread.sessions.v1") || "[]");
  } catch (error) {
    return [];
  }
}

function saveResult() {
  const sessions = savedSessions();
  sessions.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    lang: state.lang,
    title: state.title,
    mode: state.mode,
    targetWpm: state.speed,
    durationSeconds: state.durationSeconds,
    actualWpm: actualWpm(),
    elapsedMs: elapsedMs(),
    wordsRead: sessionWordsRead(),
    totalWords: state.words.length,
    progress: progressPercentValue(),
    recognition: state.mode === "voice" ? recognitionPercent() : null
  });
  localStorage.setItem("speedread.sessions.v1", JSON.stringify(sessions.slice(0, 100)));
  updateSavedBadge();
}

function updateSavedBadge() {
  const count = savedSessions().length;
  els.savedBadge.hidden = count === 0;
  els.savedBadge.textContent = count ? `${count} ${t("savedSessions")}` : "";
}

setInterval(() => {
  const remaining = remainingMs();
  els.timerValue.textContent = formatTime(remaining);
  els.sessionTime.textContent = formatTime(remaining);

  if (state.running && remaining <= 0) {
    state.timerExpired = true;
    state.completed = true;
    state.finishedElapsedMs = state.durationSeconds * 1000;
    stopSession();
    showSessionResult();
  }

  if (state.running || state.listening) renderPace();
}, 250);

els.speedRange.addEventListener("input", event => {
  state.speed = Number(event.target.value);
  renderMeta();
  if (state.running && state.mode === "paced") scheduleNext();
});

els.durationInput.addEventListener("change", event => {
  const next = Math.max(5, Math.min(86400, Number(event.target.value) || 60));
  state.durationSeconds = Math.round(next);
  event.target.value = String(state.durationSeconds);
  localStorage.setItem("speedread.durationSeconds", String(state.durationSeconds));
  if (!state.running && elapsedMs() === 0) {
    els.timerValue.textContent = formatTime(state.durationSeconds * 1000);
    els.sessionTime.textContent = formatTime(state.durationSeconds * 1000);
  }
});

$$(".mode-button").forEach(button => button.addEventListener("click", () => setMode(button.dataset.mode)));

$$(".tab").forEach(tab => tab.addEventListener("click", () => {
  $$(".tab").forEach(item => item.classList.toggle("is-active", item === tab));
  $$(".tab-panel").forEach(panel => panel.classList.toggle("is-active", panel.dataset.panel === tab.dataset.tab));
}));

$$(".lang-button").forEach(button => button.addEventListener("click", () => {
  if (state.lang === button.dataset.lang) return;
  state.lang = button.dataset.lang;
  $$(".lang-button").forEach(item => item.classList.toggle("is-active", item === button));
  stopRecognition();
  updateI18n();
}));

$("#uploadButton").addEventListener("click", () => els.fileInput.click());
els.fileInput.addEventListener("change", async () => {
  const file = els.fileInput.files[0];
  if (!file) return;
  els.fileName.textContent = file.name;
  els.customText.value = await file.text();
});

$("#useCustomButton").addEventListener("click", () => {
  const text = els.customText.value.trim();
  if (!text) {
    alert(t("emptyAlert"));
    return;
  }
  loadText(t("customTitle"), text, "custom");
});

els.startButton.addEventListener("click", toggleSession);
$("#backButton").addEventListener("click", () => seek(-10));
$("#forwardButton").addEventListener("click", () => seek(10));
$("#resetButton").addEventListener("click", resetSession);
els.micButton.addEventListener("click", async () => {
  if (state.mode !== "voice") return;
  await authorizeMicrophone();
});

["#heroStart", "#headerStart", "#previewStart"].forEach(selector => $(selector).addEventListener("click", openTrainer));
$("#closeTrainer").addEventListener("click", requestClose);
$("#focusClose").addEventListener("click", requestClose);
els.focusStopButton.addEventListener("click", () => {
  if (state.running) {
    stopSession();
    return;
  }
  if (!state.completed && !state.resultVisible) {
    startSession();
    return;
  }
});
els.focusResetButton.addEventListener("click", () => {
  resetSession();
  enterFocusMode();
  startSession();
});
$("#resultRetry").addEventListener("click", () => {
  resetSession();
  startSession();
});
$("#resultSettings").addEventListener("click", () => {
  hideSessionResult();
  exitFocusMode();
});
$("#settingsToggle").addEventListener("click", () => toggleSettings());
$("#settingsScrim").addEventListener("click", () => toggleSettings(false));
$("#closeWithoutSave").addEventListener("click", finishClose);
$("#saveAndClose").addEventListener("click", () => {
  saveResult();
  finishClose();
});
$("#cancelClose").addEventListener("click", () => {
  els.saveDialog.hidden = true;
  if (state.closeResume) startSession();
  state.closeResume = false;
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && state.trainerOpen && els.saveDialog.hidden) {
    if (state.settingsOpen) {
      toggleSettings(false);
      return;
    }
    requestClose();
    return;
  }
  if (!state.trainerOpen || !els.saveDialog.hidden || event.target.matches("textarea, input")) return;
  if (event.code === "Space") {
    event.preventDefault();
    toggleSession();
  }
  if (event.code === "ArrowLeft") {
    event.preventDefault();
    seek(-10);
  }
  if (event.code === "ArrowRight") {
    event.preventDefault();
    seek(10);
  }
});

const initial = content.uk.texts[0];
loadText(initial.title, initial.text, initial.id);
updateI18n();
syncStoredMicrophonePermission();
updateSavedBadge();
els.timerValue.textContent = formatTime(state.durationSeconds * 1000);
els.sessionTime.textContent = formatTime(state.durationSeconds * 1000);
refreshLucideIcons();
