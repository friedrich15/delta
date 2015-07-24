function enterPage() {
  $("#logo").fadeOut(700);
  $("#main-container").fadeIn(800);
  window.history.pushState(null, null, "/home");
}
