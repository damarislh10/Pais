const container = document.querySelector("#contenedor");
let btnDark = document.querySelector('#dark');
let nav = document.querySelector(".navbar-brand")
let hr = document.getElementById('hr');

let detallePais = JSON.parse(localStorage.getItem("detallePais"));
detallePais = detallePais !== null ? detallePais : "";

const getDetalle = () => {
    const {name,population,region,capital,img,Currency,President} = detallePais;

    container.innerHTML += `
    <div class="card mb-3 m-auto" style="max-width: 970px;">
    <div class="row ">
      <div class="col-md-2 col-img">
        <img src="${img}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title title">${name}</h5>
          <div class="my-3">
          <img src="https://img.icons8.com/ios-glyphs/24/000000/star--v2.png"/><span class="text-muted"> ${population}</span>
          </div>
          <h5>Regiòn: <span>${region}</span></h5>
          <h5>Capital: <span>${capital}</span></h5>
          <h5>Currency: <span>${Currency}</span></h5>
          <h5 class="">President: <span class="card-text">${President}</span></h5>
        </div>
      </div>
    </div>
  </div>
    `
    temaDetalle()
}

document.addEventListener('DOMContentLoaded',getDetalle)

const temaDetalle = () => {
  
  btnDark.addEventListener('click', () => {
    const card = document.querySelector('.card');
    const body = document.querySelector("#body");
    const textBody = document.querySelectorAll('h5');
    const spanDato = document.querySelectorAll('span');

    body.style.backgroundColor = "hsl(240, 14%, 15%)";
    nav.style.color = "#FFFF"
    btnDark.style.color = "#FFFF";
    btnDark.style.backgroundColor ="hsl(240, 14%, 15%)"
    hr.style.backgroundColor ="#FFFF";
    card.style.backgroundColor = "hsl(240, 9%, 12%)";

    for (const iterator of textBody) {
      iterator.style.color = "#FFFF";

    }

    for (const iterator of spanDato) {
      iterator.style.color = "rgb(171, 228, 225)";

    }
  })
}



