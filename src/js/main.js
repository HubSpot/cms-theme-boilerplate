(function() {
  var HIDE_FOCUS_STYLES_CLASS = 'disable-focus-styles';
  var SHOW_FOCUS_STYLES_CLASS = 'enable-focus-styles';

  var firstLanguageSwitcherItem = document.querySelector(".header__language-switcher .lang_list_class li:first-child")
  var languageSwitcherList = document.querySelector(".header__language-switcher .lang_list_class")

  var Nav = document.querySelector(".header__navigation")
  var LangSwitcher = document.querySelector(".header__language-switcher")
  var Search = document.querySelector(".header__search")

  var allToggles = document.querySelectorAll(".header--toggle")
  var navToggle = document.querySelector(".header__navigation--toggle")
  var langToggle = document.querySelector(".header__language-switcher--toggle")
  var searchToggle = document.querySelector(".header__search--toggle")
  var closeToggle = document.querySelector(".header__close--toggle")

  var allElements = document.querySelectorAll(".header--element, .header--toggle" )

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
    allToggles.forEach(function(toggle) {
      toggle.classList.toggle('hide')
    })

    Nav.classList.toggle('open')
    navToggle.classList.toggle('open')

    closeToggle.classList.toggle('show')
  }

  function toggleLang() {
    allToggles.forEach(function(toggle) {
      toggle.classList.toggle('hide')
    })

    LangSwitcher.classList.toggle('open')
    langToggle.classList.toggle('open')

    closeToggle.classList.toggle('show')
  }

  function toggleSearch() {
    allToggles.forEach(function(toggle) {
      toggle.classList.toggle('hide')
    })

    Search.classList.toggle('open')
    searchToggle.classList.toggle('open')

    closeToggle.classList.toggle('show')
  }

  function closeAll() {
    allElements.forEach(function(element) {
      element.classList.remove('hide', 'open')
    })

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

      // function dependent on the language switcher component
      if (LangSwitcher) {
        // Adds a hover style class to the parent element when the cursor hovers
        // over the first child item
        firstLanguageSwitcherItem.addEventListener('mouseover', hoverLanguageSwitcher);
        firstLanguageSwitcherItem.addEventListener('mouseout', unhoverLanguageSwitcher);

        // Toggles the language switcher
        langToggle.addEventListener('click', toggleLang);
      }

      // Toggles the mobile views for menu, search, and close button
      navToggle.addEventListener('click', toggleNav);
      searchToggle.addEventListener('click', toggleSearch);
      closeToggle.addEventListener('click', closeAll);
    }
  });
})();
