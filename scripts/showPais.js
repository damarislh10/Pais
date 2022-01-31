export const showPais = (datos, contenedor) => {
    datos.forEach(element => {
        const {name, id, population, region, capital, img} = element
        contenedor.innerHTML += `
        <div class="card" style="width: 18rem;">
  
        <img id=${id} src="${img}" class="card-img-top card-bande" alt="...">
        <div class="card-body">
        <h1>Country: ${name}</h1>
        <h2>Population: ${population}</h2>
        <h2>Region: ${region} </h2>
        <h2>Capital: ${capital}  </h2>
        </div>
      </div>
        `

        
    });
} 