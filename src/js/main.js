(function() {
  var HIDE_FOCUS_STYLES_CLASS = 'disable-focus-styles';
  var SHOW_FOCUS_STYLES_CLASS = 'enable-focus-styles';

  var searchBar = document.querySelector(".header__search .hs-search-field__input")
  var firstLanguageSwitcherItem = document.querySelector(".header__language-switcher .lang_list_class li:first-child")
  var languageSwitcher = document.querySelector(".header__language-switcher .lang_list_class")


  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  function showFocusOutline() {
    document.body.classList.add(SHOW_FOCUS_STYLES_CLASS);
    document.body.classList.remove(HIDE_FOCUS_STYLES_CLASS);
  }

  function hideFocusOutline() {
    document.body.classList.add(HIDE_FOCUS_STYLES_CLASS);
    document.body.classList.remove(SHOW_FOCUS_STYLES_CLASS);
  }

  function showActiveSearchBar(e) {
    if (e.target.value === "") {
      searchBar.classList.remove('active')
    } else {
      searchBar.classList.add('active')
    }
  }

  // adds hover effects to the pseduoelement triangle on the menu
  // for design continutity
  function hoverLanguageSwitcher() {
    languageSwitcher.classList.add("first-active")
  }

  function unhoverLanguageSwitcher() {
    languageSwitcher.classList.remove("first-active")
  }

  domReady(function() {
    if (!document.body) {
      return;
    } else {
      // Show the focus outline when keyboard activity occurs
      document.body.addEventListener('keydown', showFocusOutline);

      // Hide the focus outline when mouse activity occurs
      document.body.addEventListener('mousemove', hideFocusOutline);
      document.body.addEventListener('mousedown', hideFocusOutline);
      document.body.addEventListener('mouseup', hideFocusOutline);

      // Show search outline when text exists in the search bar
      searchBar.addEventListener('input', showActiveSearchBar);

      // Adds a hover style class to the parent element when the cursor hovers
      // over the first child item
      firstLanguageSwitcherItem.addEventListener('mouseover', hoverLanguageSwitcher);
      firstLanguageSwitcherItem.addEventListener('mouseout', unhoverLanguageSwitcher);
    }
  });
})();
