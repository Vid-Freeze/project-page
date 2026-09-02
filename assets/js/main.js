const placeholderLinks = document.querySelectorAll("[data-placeholder-link]");

placeholderLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href") || "";
    if (href === "#" || href === "https://github.com/") {
      event.preventDefault();
      link.blur();
    }
  });
});

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) {
      return;
    }

    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1600);
    } catch {
      button.textContent = "Select";
    }
  });
});

document.querySelectorAll("video").forEach((video) => {
  video.addEventListener("error", () => {
    video.classList.add("is-missing");
  });
});
