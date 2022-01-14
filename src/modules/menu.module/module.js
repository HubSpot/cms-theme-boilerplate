// Website header variables

var menuParentItems = document.querySelectorAll('.menu--desktop .menu__item--has-submenu');
var childToggle = document.querySelectorAll('.menu--mobile .menu__child-toggle');

// Desktop menu

if (menuParentItems) {
  Array.prototype.forEach.call(menuParentItems, function(el){

    // Menu item variables

    var childToggle = el.querySelector('.menu__child-toggle');

    // Handles hover over

    el.addEventListener('mouseover', function(){
      this.classList.add('menu__item--open');
      this.querySelector('a').setAttribute('aria-expanded', 'true');
      this.querySelector('button').setAttribute('aria-expanded', 'true');
    });

    // Handles hover out

    el.addEventListener('mouseout', function(){
      document.querySelector('.menu__item--open > a').setAttribute('aria-expanded', 'false');
      document.querySelector('.menu__item--open > button').setAttribute('aria-expanded', 'false');
      document.querySelector('.menu__item--open').classList.remove('menu__item--open');
    });

    // Handles toggle of submenus

    childToggle.addEventListener('click', function(){
      if (this.parentNode.classList.contains('menu__item--open')) {
        this.parentNode.classList.remove('menu__item--open');
        this.parentNode.querySelector('a').setAttribute('aria-expanded', 'false');
        this.parentNode.querySelector('button').setAttribute('aria-expanded', 'false');
      }
      else {
        this.parentNode.classList.add('menu__item--open');
        this.parentNode.querySelector('a').setAttribute('aria-expanded', 'true');
        this.parentNode.querySelector('button').setAttribute('aria-expanded', 'true');
      }
    });

  });

}

// Mobile menu

// Handles toggle of submenus

if (childToggle) {
  Array.prototype.forEach.call(childToggle, function(el){

    el.addEventListener('click', function(){
      this.classList.toggle('menu__child-toggle--open');
      if (this.parentNode.classList.contains('menu__item--open')) {
        this.parentNode.classList.remove('menu__item--open');
        this.parentNode.querySelector('a').setAttribute('aria-expanded', 'false');
        this.parentNode.querySelector('button').setAttribute('aria-expanded', 'false');
      }
      else {
        this.parentNode.classList.add('menu__item--open');
        this.parentNode.querySelector('a').setAttribute('aria-expanded', 'true');
        this.parentNode.querySelector('button').setAttribute('aria-expanded', 'true');
      }
    });

  });
}