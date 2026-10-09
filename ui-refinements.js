(() => {
  const $ = selector => document.querySelector(selector);
  const trainer = $("#trainerShell");
  const settingsToggle = $("#settingsToggle");
  const settingsScrim = $("#settingsScrim");
  const focusClose = $("#focusClose");
  const focusStopButton = $("#focusStopButton");
  const focusResetButton = $("#focusResetButton");
  const focusActionIcon = $("#focusActionIcon");
  const focusActionLabel = $("#focusActionLabel");
  const resultRetry = $("#resultRetry");
  const resultSettings = $("#resultSettings");
  const voiceButton = $('.mode-button[data-mode="voice"]');
  const voiceStatus = $("#voiceModeStatus");
  const micButton = $("#micButton");
  const micStatus = $("#micStatus");

  const lang = () => document.documentElement.lang === "en" ? "en" : "uk";

  const refreshIcons = () => {
    if (window.lucide?.createIcons) window.lucide.createIcons();
  };

  const setIcon = (container, name) => {
    if (!container) return;
    if (container.dataset.refinementIcon === name) return;
    container.dataset.refinementIcon = name;
    container.innerHTML = `<i data-lucide="${name}" aria-hidden="true"></i>`;
    refreshIcons();
  };

  const syncSettingsButton = () => {
    if (!settingsToggle || !trainer) return;
    const open = trainer.classList.contains("is-settings-open");
    setIcon(settingsToggle, open ? "x" : "settings");
    const label = open
      ? (lang() === "uk" ? "Закрити налаштування" : "Close settings")
      : (lang() === "uk" ? "Налаштування" : "Settings");
    settingsToggle.setAttribute("aria-label", label);
    settingsToggle.title = label;
  };

  const closeSettingsPaused = () => {
    if (typeof window.toggleSettings === "function") window.toggleSettings(false);
    if (typeof window.stopSession === "function") window.stopSession();
    queueMicrotask(syncSettingsButton);
  };

  const syncPlayPause = () => {
    if (!focusStopButton || !focusActionIcon || !focusActionLabel) return;
    const running = focusStopButton.classList.contains("is-running");
    if (running) {
      setIcon(focusActionIcon, "pause");
      focusActionLabel.textContent = lang() === "uk" ? "Пауза" : "Pause";
    } else {
      delete focusActionIcon.dataset.refinementIcon;
    }
  };

  const syncVoiceStatus = () => {
    if (!voiceButton || !voiceStatus || !micButton) return;
    const authorized = micButton.classList.contains("is-authorized");
    const listening = micButton.classList.contains("is-listening");
    const attention = micButton.classList.contains("needs-attention");

    voiceButton.classList.toggle("is-authorized", authorized);
    voiceButton.classList.toggle("is-listening", listening);
    voiceButton.classList.toggle("needs-attention", attention && !authorized);

    if (listening) voiceStatus.textContent = lang() === "uk" ? "Слухаю" : "Listening";
    else if (authorized) voiceStatus.textContent = lang() === "uk" ? "Мікрофон готовий" : "Microphone ready";
    else voiceStatus.textContent = lang() === "uk" ? "Потрібен дозвіл" : "Permission required";
  };

  if (micButton) {
    micButton.classList.add("is-internal-control");
    micButton.setAttribute("aria-hidden", "true");
    micButton.tabIndex = -1;

    new MutationObserver(syncVoiceStatus).observe(micButton, {
      attributes: true,
      attributeFilter: ["class"],
      childList: true,
      subtree: true
    });
  }

  if (micStatus) {
    new MutationObserver(syncVoiceStatus).observe(micStatus, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }

  if (voiceButton) {
    voiceButton.addEventListener("click", event => {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (voiceButton.disabled) return;
      if (typeof window.setMode === "function") window.setMode("voice");

      if (micButton && !micButton.classList.contains("is-authorized")) {
        micButton.click();
        voiceButton.classList.add("needs-attention");
      }

      setTimeout(syncVoiceStatus, 80);
      setTimeout(syncVoiceStatus, 500);
    }, true);
  }

  if (settingsToggle) {
    settingsToggle.addEventListener("click", event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      const open = trainer?.classList.contains("is-settings-open");
      if (open) closeSettingsPaused();
      else if (typeof window.toggleSettings === "function") {
        window.toggleSettings(true);
        queueMicrotask(syncSettingsButton);
      }
    }, true);
  }

  if (settingsScrim) {
    settingsScrim.addEventListener("click", event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeSettingsPaused();
    }, true);
  }

  if (focusResetButton) {
    focusResetButton.addEventListener("click", event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (typeof window.resetSession === "function") window.resetSession();
      if (typeof window.enterFocusMode === "function") window.enterFocusMode();
      queueMicrotask(() => {
        syncSettingsButton();
        syncPlayPause();
      });
    }, true);
  }

  if (resultRetry) {
    resultRetry.addEventListener("click", event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (typeof window.resetSession === "function") window.resetSession();
      if (typeof window.enterFocusMode === "function") window.enterFocusMode();
      queueMicrotask(() => {
        syncSettingsButton();
        syncPlayPause();
      });
    }, true);
  }

  if (resultSettings) {
    resultSettings.addEventListener("click", event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (typeof window.hideSessionResult === "function") window.hideSessionResult();
      if (typeof window.enterFocusMode === "function") window.enterFocusMode();
      if (typeof window.toggleSettings === "function") window.toggleSettings(true);
      queueMicrotask(syncSettingsButton);
    }, true);
  }

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    if (!trainer?.classList.contains("is-settings-open")) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    closeSettingsPaused();
  }, true);

  if (focusStopButton) {
    new MutationObserver(() => requestAnimationFrame(syncPlayPause)).observe(focusStopButton, {
      attributes: true,
      attributeFilter: ["class"],
      childList: true,
      subtree: true
    });
  }

  if (trainer) {
    new MutationObserver(() => requestAnimationFrame(syncSettingsButton)).observe(trainer, {
      attributes: true,
      attributeFilter: ["class"]
    });
  }

  if (focusClose) focusClose.setAttribute("data-role", "close-trainer");

  syncVoiceStatus();
  syncSettingsButton();
  syncPlayPause();
  refreshIcons();
})();
