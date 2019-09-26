(function() {
  var HIDE_FOCUS_STYLES_CLASS = 'disable-focus-styles';
  var SHOW_FOCUS_STYLES_CLASS = 'enable-focus-styles';

  var firstLanguageSwitcherItem = document.querySelector(".header__language-switcher .lang_list_class li:first-child")
  var languageSwitcherList = document.querySelector(".header__language-switcher .lang_list_class")

  var Nav = document.querySelector(".header__navigation")
  var LangSwitcher = document.querySelector(".header__language-switcher")
  var Search = document.querySelector(".header__search")

  var navToggle = document.querySelector(".header__navigation--toggle")
  var langToggle = document.querySelector(".header__language-switcher--toggle")
  var searchToggle = document.querySelector(".header__search--toggle")
  var closeToggle = document.querySelector(".header__close--toggle")

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

  // adds hover effects to the pseduoelement triangle on the menu
  // for design continutity
  function hoverLanguageSwitcher() {
    languageSwitcherList.classList.add("first-active")
  }

  function unhoverLanguageSwitcher() {
    languageSwitcherList.classList.remove("first-active")
  }

  function toggleNav() {
    Nav.classList.toggle('open')
    navToggle.classList.toggle('open')

    langToggle.classList.toggle('hide')
    searchToggle.classList.toggle('hide')
    closeToggle.classList.toggle('show')
  }

  function toggleLang() {
    LangSwitcher.classList.toggle('open')
    langToggle.classList.toggle('open')

    navToggle.classList.toggle('hide')
    searchToggle.classList.toggle('hide')
    closeToggle.classList.toggle('show')
  }

  function toggleSearch() {
    Search.classList.toggle('open')
    searchToggle.classList.toggle('open')

    langToggle.classList.toggle('hide')
    navToggle.classList.toggle('hide')
    closeToggle.classList.toggle('show')
  }

  function closeAll() {
    Nav.classList.remove('open')
    LangSwitcher.classList.remove('open')
    Search.classList.remove('open')

    langToggle.classList.remove('hide', 'open')
    navToggle.classList.remove('hide', 'open')
    searchToggle.classList.remove('hide', 'open')

    closeToggle.classList.remove('show')
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

      // Adds a hover style class to the parent element when the cursor hovers
      // over the first child item
      firstLanguageSwitcherItem.addEventListener('mouseover', hoverLanguageSwitcher);
      firstLanguageSwitcherItem.addEventListener('mouseout', unhoverLanguageSwitcher);

      // Toggles the mobile views for menu, search, and language switcher
      navToggle.addEventListener('click', toggleNav);
      langToggle.addEventListener('click', toggleLang);
      searchToggle.addEventListener('click', toggleSearch);
      closeToggle.addEventListener('click', closeAll);
    }
  });
})();
