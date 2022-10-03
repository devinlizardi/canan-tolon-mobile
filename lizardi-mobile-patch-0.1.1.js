/*

*/

var style = document.createElement("style")
style.innerHTML = `  
  @media (any-hover: none) {
    body {
      position: relative;
      top: calc(50vh - 405px);
    }
  }
  @media (any-hover: none) and (max-height: 800px) {
    body {
      top: calc(50vh - 350px);
      transform: scale(0.7);
    }
  }
  `
document.head.append(style)