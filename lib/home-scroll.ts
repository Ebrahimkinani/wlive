export const HOME_SCROLL_RESET_KEY = "wlive:reset-home-scroll";

export function markHomeScrollReset() {
  sessionStorage.setItem(HOME_SCROLL_RESET_KEY, "1");
}

export function resetHomeScrollIfNeeded() {
  if (sessionStorage.getItem(HOME_SCROLL_RESET_KEY) !== "1") return;

  sessionStorage.removeItem(HOME_SCROLL_RESET_KEY);
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}
