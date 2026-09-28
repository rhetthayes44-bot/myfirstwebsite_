document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
      "aria-label",
      isExpanded ? "Open navigation menu" : "Close navigation menu",
    );
    menu.classList.toggle("is-open", !isExpanded);
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menu.classList.remove("is-open");
    }
  });

  const status = document.querySelector(".form-status");

  document.querySelector("#signup-form").addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent =
      "Thanks for your interest. Connect an account service to enable sign-up.";
  });

  document.querySelector("#login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent =
      "Log in will be available once member accounts are connected.";
  });

  document.querySelectorAll("[data-provider]").forEach((button) => {
    button.addEventListener("click", () => {
      status.textContent = `${button.dataset.provider} sign-up needs an account service to be connected.`;
    });
  });
});
