var menuLinks = document.querySelectorAll('.submenu > li .menu-link');
var firstSubmenuItems = document.querySelectorAll(
  '.submenu.level-2 > *:nth-child(2)'
);

menuLinks.forEach(function(link) {
  link.addEventListener('focus', function() {
    link.parentElement.classList.add('focus');
  });

  if (link.nextElementSibling) {
    var subLinks = document.querySelectorAll('.level-2 li > .menu-link');
    var lastLinkIndex = subLinks.length - 1;
    var lastLink = subLinks[lastLinkIndex];
    lastLink.addEventListener('blur', function() {
      link.parentElement.classList.remove('focus');
    });
  }
});

firstSubmenuItems.forEach(function(item) {
  if (window.hsInEditor) {
    return;
  } else if (item) {
    item.addEventListener('mouseover', function() {
      item.previousElementSibling.classList.add('hover');
    });

    item.addEventListener('mouseout', function() {
      item.previousElementSibling.classList.remove('hover');
    });
  }
});
