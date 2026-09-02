document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href") || "";
    if (href === "#" || href === "https://github.com/") {
      event.preventDefault();
      link.blur();
    }
  });
});

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  const original = button.innerHTML;

  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) {
      return;
    }

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"/></svg>';
      window.setTimeout(() => {
        button.innerHTML = original;
      }, 1400);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(target);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
});

document.querySelectorAll("video[autoplay]").forEach((video) => {
  video.muted = true;
  video.playsInline = true;

  const play = () => {
    const attempt = video.play();
    if (attempt) {
      attempt.catch(() => {});
    }
  };

  video.addEventListener("loadedmetadata", play, { once: true });
  play();
});
