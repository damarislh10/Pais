export const showPais = (datos, contenedor) => {
    datos.forEach(element => {
        const {name, id, population, region, capital, img} = element
        contenedor.innerHTML += `
<<<<<<< HEAD
        <div class="card" style="width: 18rem;">
  
        <img id=${id} src="${img}" class="card-img-top card-bande" alt="...">
=======
        <div class="card" style="width: 16rem;">
        <img src="${img}" class="card-img-top" alt="...">
>>>>>>> 158be70305d16510932cef0b9daee02cfe3aba3c
        <div class="card-body">
        <h1 class = "fs-5"> ${name}</h1>
        <p><span class="negrita">Population:</span> ${population}</p>
        <p><span class="negrita">Region:</span> ${region} </p>
        <p><span class="negrita">Capital:</span> ${capital}  </p>
        </div>
      </div>
        `

    });
} 