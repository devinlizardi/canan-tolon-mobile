/*

*/
let minWidth = 539
let nav
let created = false

let homePageTable = document.querySelector('table')

const handleResize = () => {
  console.log(window.innerWidth)
  if (window.innerWidth < minWidth && !created) {
    // if too small
    createNav()
  } else if (window.innerWidth >= minWidth && nav) {
    nav.remove()
    created = false
  }
}

const createNav = () => {
  let tag = document.createElement('p')
  var main = document.getElementsByClassName('main')[0]
  
  tag.id = 'nav-style'
  
  main.appendChild(tag)
  nav = document.getElementById('nav-style')
  created = true
}

handleResize()
window.addEventListener('resize', handleResize)