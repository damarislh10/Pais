
let btnDark = document.querySelector('#dark');
let nav = document.querySelector(".navbar-brand")
let hr = document.getElementById('hr');
let search = document.getElementById('search')
let selectFil = document.getElementById('select');

  btnDark.addEventListener('click', () => {
    const body = document.querySelector("#body");
    body.style.backgroundColor = "hsl(240, 14%, 15%)";
    nav.style.color = "#FFFF"
    btnDark.style.color = "#FFFF";
    btnDark.style.backgroundColor ="hsl(240, 14%, 15%)"
    hr.style.backgroundColor ="#FFFF";
    search.style.backgroundColor = "hsl(240, 14%, 15%)";
    search.style.color = "#FFFF";
    selectFil.style.backgroundColor = "hsl(240, 14%, 15%)";
    selectFil.style.color = "#FFFF";
    
    
  })

 






