// Website header variables

var menuParentItems = document.querySelectorAll(
  '.menu--desktop .menu__item--has-submenu'
);

var childToggle = document.querySelectorAll(
  '.menu--mobile .menu__child-toggle'
);


// Desktop menu

if (menuParentItems.length) {
  Array.prototype.forEach.call(menuParentItems, function (el) {

    var toggle = el.querySelector('.menu__child-toggle');
    var submenu = el.querySelector('.menu__submenu');

    if (!toggle || !submenu) {
      return;
    }

    // Open submenu when hovering over the menu item.
    el.addEventListener('mouseenter', function () {
      if (!submenu.matches(':popover-open')) {
        submenu.showPopover();
      }

      el.classList.add('menu__item--open');
    });

    // Close submenu when leaving the menu item.
    el.addEventListener('mouseleave', function () {
      if (submenu.matches(':popover-open')) {
        submenu.hidePopover();
      }

      el.classList.remove('menu__item--open');
    });

    // Keep the open class synchronized with the popover state.
    submenu.addEventListener('toggle', function () {
      if (submenu.matches(':popover-open')) {
        el.classList.add('menu__item--open');
      }
      else {
        el.classList.remove('menu__item--open');
      }
    });

  });
}


// Mobile menu

if (childToggle.length) {
  Array.prototype.forEach.call(childToggle, function (el) {

    var submenu = el.parentNode.querySelector('.menu__submenu');

    if (!submenu) {
      return;
    }

    // Keep the mobile icon state synchronized with the popover.
    submenu.addEventListener('toggle', function () {
      if (submenu.matches(':popover-open')) {
        el.classList.add('menu__child-toggle--open');
        el.parentNode.classList.add('menu__item--open');
      }
      else {
        el.classList.remove('menu__child-toggle--open');
        el.parentNode.classList.remove('menu__item--open');
      }
    });

  });
}
