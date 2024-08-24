let hamburger = document.getElementById('hamburger')
let hiddenNav = document.getElementById('hiddenNav')

hamburger.onclick = function() {
  hiddenNav.classList.toggle('show')
}