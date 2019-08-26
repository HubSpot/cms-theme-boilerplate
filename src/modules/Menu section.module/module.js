var allLinks = document.querySelectorAll(".menu-link");
var submenuLinks = document.querySelectorAll(".level-2 > .no-submenu > .menu-link");
var menuLinks = document.querySelectorAll(".submenu > li > .menu-link");
var firstSubmenuItems = document.querySelectorAll(".submenu.level-2 > *:nth-child(2)")

menuLinks.forEach(function (link) {
  link.addEventListener('focus', function() {
   link.parentElement.classList.add('focus');
  });

  var subMenu = link.nextElementSibling;

  if (link.nextElementSibling) {
    var subMenuLinks = subMenu.querySelectorAll('.menu-link');
    var lastLinkIndex = subMenuLinks.length - 1;
    var lastLink = subMenuLinks[lastLinkIndex];

    lastLink.addEventListener('blur', function() {
      link.parentElement.classList.remove('focus');
    });
  }
});

submenuLinks.forEach(function (link) {
  link.addEventListener('focus', function() {
   link.parentElement.classList.add('focus');
  });

  link.addEventListener('blur', function() {
    link.parentElement.classList.remove('focus');
  });
})

firstSubmenuItems.forEach(function (item) {
  if (window.hsInEditor) {
    return;
  }
  item.addEventListener('mouseover', function() {
    item.previousElementSibling.classList.add('hover');
  });

  item.addEventListener('mouseout', function() {
    item.previousElementSibling.classList.remove('hover');
  });
})

