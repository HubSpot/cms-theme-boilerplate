(function() {
  var HIDE_FOCUS_STYLES_CLASS = 'disable-focus-styles';
  var SHOW_FOCUS_STYLES_CLASS = 'enable-focus-styles';
  var keyboardMode = false;

  function showFocusOutline() {
    keyboardMode = true;
    document.body.classList.add(SHOW_FOCUS_STYLES_CLASS);
    document.body.classList.remove(HIDE_FOCUS_STYLES_CLASS);
  };

  function hideFocusOutline() {
    keyboardMode = false;
    document.body.classList.add(HIDE_FOCUS_STYLES_CLASS);
    document.body.classList.remove(SHOW_FOCUS_STYLES_CLASS);
  };

  if (!document.body) {
    return;
  } else {
    // Show the focus outline when keyboard activity occurs
    document.body.addEventListener('keydown', showFocusOutline);

    // Hide the focus outline when mouse activity occurs
    document.body.addEventListener('mousemove', hideFocusOutline);
    document.body.addEventListener('mousedown', hideFocusOutline);
    document.body.addEventListener('mouseup', hideFocusOutline);
  }
})();
