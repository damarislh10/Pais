

let btnDark = document.querySelector('#dark');
let nav = document.querySelector(".navbar-brand")
let hr = document.getElementById('hr');
let search = document.getElementById('search')


  btnDark.addEventListener('click', () => {
    const body = document.querySelector("#body");
    let pintar = document.querySelector ('.pintar')
    body.style.backgroundColor = "hsl(240, 14%, 15%)";
    nav.style.color = "#FFFF"
    btnDark.style.color = "#FFFF";
    btnDark.style.backgroundColor ="hsl(240, 14%, 15%)"
    hr.style.backgroundColor ="#FFFF";
    search.style.backgroundColor = "hsl(240, 14%, 15%)";
    search.style.color = "#FFFF";
    pintar.style.backgroundColor = "hsl(240, 18%, 19%)";
    pintar.style.color = "#FFFF";
  })







