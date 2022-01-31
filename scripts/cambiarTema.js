let btnDark = document.querySelector('#dark');
let nav = document.querySelector(".navbar-brand")

  btnDark.addEventListener('click', () => {
    const body = document.querySelector("#body");
    body.style.backgroundColor = "hsl(240, 14%, 15%)";
    nav.style.color = "#FFFF"
  })






