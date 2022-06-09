const mobileMenu = () => {
  const mobileMenuButton = document.querySelector('[data-menu="button"]');
  const headerMenu = document.querySelector(".header__links").cloneNode(true);

  const closeButton = document.createElement("div");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = '<span class="lnr lnr-cross"></span>';

  const overlayContainer = document.createElement("div");
  overlayContainer.classList.add("modal");

  mobileMenuButton.addEventListener("click", (e) => {
    e.preventDefault();

    overlayContainer.appendChild(closeButton);
    overlayContainer.appendChild(headerMenu);
    overlayContainer.style.display = "block";

    document.body.append(overlayContainer);
  });

  closeButton.addEventListener("click", (e) => {
    overlayContainer.style.display = "none";
  });
};
mobileMenu();
