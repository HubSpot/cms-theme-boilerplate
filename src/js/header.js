var searchBar = document.querySelector(".header__search .hs-search-field__input")

// attaches a class to the search bar so it retains focus styling while
// text is in the search
searchBar.addEventListener('input', function(e) {
  if (e.target.value === "") {
    searchBar.classList.remove('focus')
  } else {
    searchBar.classList.add('focus')
  }
})
