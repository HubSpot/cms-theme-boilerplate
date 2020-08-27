(function() {

  // Global variables
  var parentMenuItems = document.querySelectorAll('.navigation-primary li.has-submenu');

  // Adds focus event listener on parent menu items so keyboard users can tab through menu
  Array.prototype.forEach.call(parentMenuItems, function(el){

    el.addEventListener('focusin', function(){
      el.classList.add('focus');
    });

    el.addEventListener('focusout', function(){
      el.classList.remove('focus');
    });

  });

})();