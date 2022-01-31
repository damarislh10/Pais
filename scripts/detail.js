const container = document.querySelector("#contenedor");

let detallePais = JSON.parse(localStorage.getItem("detallePais"));
detallePais = detallePais !== null ? detallePais : "";

const getDetalle = () => {
    const {name,population,region,capital,img,Currency,President} = detallePais;

    container.innerHTML += `
    <div class="" style="width: 20rem;">
    <img src="${img}" class="" card-bande" alt="...">
    <div class="">
    <h1 class = "fs-5"> ${name}</h1>
    <p><span class="negrita">Population:</span> ${population}</p>
    <p><span class="negrita">Region:</span> ${region} </p>
    <p><span class="negrita">Capital:</span> ${capital}  </p>
    </div>
  </div>
    `
}

document.addEventListener('DOMContentLoaded',getDetalle)
