/*

*/
let minWidth = 539
let created = false

const homePageTable = document.querySelector("table")
const nav = document.createElement("div")

nav.style.width = "fit-content"
nav.style.height = "10em"
nav.style.backgroundColor = "red"
nav.style.position = "fixed"
nav.style.top = "0px"
nav.style.left = "0px"

nav.innerHTML = `<ul>
    <li><a href=${"#"}>about</a></li>
    <li><a href=${"#"}>biograghy</a></li>
    <li><a href=${"#"}>contact</a></li>
  </ul>
  `

const handleResize = () => {
  //console.log(window.outerWidth, window.innerWidth)

  if (window.innerWidth < minWidth && !created) {
    homePageTable.appendChild(nav)
    created = true
  } else if (window.innerWidth >= minWidth) {
    nav.remove()
    created = false
  }
}

var style = document.createElement("style")
style.innerHTML = `  
  @media not (any-hover: hover) {
    body {
      position: relative;
      top: calc(50vh - 405px);
    }
  }`
document.head.append(style)

//handleResize()
//window.addEventListener("resize", handleResize)
