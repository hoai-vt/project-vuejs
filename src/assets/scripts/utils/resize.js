export function setVH() {
  const event = new Event("resize");

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  window.dispatchEvent(event);
}
