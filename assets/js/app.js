const header = document.querySelector("header");

let currentScroll = 0;

// OnScroll event handler
const onScroll = () => {
  const scroll = document.documentElement.scrollTop;

  if (!header) {
    throw "'header' not found!";
  }

  if (scroll < 200) {
    header.classList.remove("is-visible");
    header.classList.remove("is-waiting");
    if (scroll > 50) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
    currentScroll = scroll;
  } else {
    if (currentScroll < scroll && scroll) {
      header.classList.add("is-waiting");
      header.classList.remove("is-visible");
      currentScroll = scroll;
    } else {
      header.classList.add("is-visible");
      currentScroll = scroll;
    }
  }
}

// Use the function
window.addEventListener('scroll', onScroll);

/**
 * Toggle sub menu
 * @param {subMenuReference} subMenuReference 
 */
const onToggleSubMenu = (subMenuReference) => {
  const subMenu = document
    .querySelector(subMenuReference);
  
  if (!subMenu) {
    throw "'subMenu' not found!";
  }

  if (subMenu.classList.contains("is-visible")) {
    subMenu.classList.remove("is-visible");
  } else {
    subMenu.classList.add("is-visible");
  }
}

/**
 * Toggle navigation modal
 */
const onToggleNavigationModal = () => {
  const modal = document.querySelector(".navigation.modal");

  if (!modal) {
    throw "'modal' not found!";
  }

  if (modal.classList.contains("is-mobile-menu-open")) {
    const backdropElement = document.querySelector(".backdrop");

    if (!backdropElement) {
      throw "'backdropElement' not found!";
    }

    backdropElement.remove();
    modal.classList.remove("is-mobile-menu-open");
    document.body.style.overflow = "auto";
  } else {
    const backdrop = document.createElement("div");
    document.body.appendChild(backdrop);

    backdrop.classList.add("backdrop");
    modal.classList.add("is-mobile-menu-open");
    document.body.style.overflow = "hidden";
  }
}

const navigationHamburgerIcon = document
  .querySelector(".navigation-hamburger-icon");

// Add event to hamburger icon 
navigationHamburgerIcon
  .addEventListener('click', onToggleNavigationModal);