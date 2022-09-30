/*

*/
let minWidth = 539
let created = false

const homePageTable = document.querySelector("table")
const nav = document.createElement("div")

nav.style.width = "5em"
nav.style.height = "10em"
nav.style.backgroundColor = "red"
nav.style.position = "fixed"
nav.style.top = "0px"
nav.style.left = "0px"

const handleResize = () => {
  if (window.outerWidth < minWidth && !created) {
    homePageTable.appendChild(nav)
    created = true
  } else if (window.outerWidth >= minWidth) {
    nav.remove()
    created = false
  }
}

var style = document.createElement("style")
style.innerHTML = 
  `@media (max-width: 500px) {
      table {
        position: absolute;
      }
    }`
document.head.append(style);

handleResize()
window.addEventListener("resize", handleResize)
