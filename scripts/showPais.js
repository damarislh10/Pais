let btnDark = document.querySelector('#dark');


export const showPais = (datos, contenedor) => {
    datos.forEach(element => {
        const {name, id, population, region, capital, img} = element
        contenedor.innerHTML += `
        <div class="card pintar mt-5" style="width: 16rem;">
        <img id="${id}" src="${img}" class="card-img-top card-bande" alt="...">
        <div class="card-body">
        <h1 class = "fs-5"> ${name}</h1>
        <p><span class="negrita">Population:</span> ${population}</p>
        <p><span class="negrita">Region:</span> ${region} </p>
        <p><span class="negrita">Capital:</span> ${capital}  </p>
        </div>
      </div>
        `
        carddark();
    });
} 

const carddark = () => {
btnDark.addEventListener('click', () => {
    let pintar = document.querySelectorAll ('.pintar')
    for (const iterator of pintar) {
      iterator.style.backgroundColor = "hsl(240, 18%, 19%)";
    iterator.style.color = "#FFFF";
    }
  })
}