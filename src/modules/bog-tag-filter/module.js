(function() {
    // Variables
    var blogTagSelect = document.querySelector('.blog-tag-filter__drop-down');
  
    // Functions
    blogTagSelect.addEventListener('change', function() {
      if (blogTagSelect.value) {
        window.location = blogTagSelect.value;
      }
      return false;
    });
  })();