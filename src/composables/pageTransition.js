export default function pageTransition() {
  const isTransitionPage = (
    msg = "外部サイトに遷移します。よろしいですか？"
  ) => {
    return window.confirm(msg);
  };

  const transitionPage = (url) => {
    if (isTransitionPage()) {
      window.open(url, "_blank");
    }
  };

  return {
    transitionPage,
  };
}
