const container = document.querySelector("#contenedor");

let detallePais = JSON.parse(localStorage.getItem("detallePais"));
detallePais = detallePais !== null ? detallePais : "";

const getDetalle = () => {
    const {name,population,region,capital,img,Currency,President} = detallePais;

    container.innerHTML += `

    `
}

document.addEventListener('DOMContentLoaded',getDetalle)
