const header = document.querySelector("header");

let currentScroll = 0;

// OnScroll event handler
const onScroll = () => {
  const scroll = document.documentElement.scrollTop;

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