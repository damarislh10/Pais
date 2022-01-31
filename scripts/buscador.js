import { urlPais} from './url.js';


const form = document.getElementById('form');
const search = document.getElementById('search');
const contenedor = document.getElementById("contenedor");

form.addEventListener('submit', async(e)=> {
    e.preventDefault();
    const inputSearch = search.value;
    const resp = await fetch(urlPais);
    const data = await resp.json();
    const resultSearch = data.find(item => item.name.toLocaleLowerCase() === inputSearch.toLocaleLowerCase());
    

    if( resultSearch !== undefined) {      
        const {id, name, img, population,region, capital} = resultSearch;
        contenedor.innerHTML = `
        <div class="card" style="width: 16rem;">
            <img id="${id}" src="${img}" class="card-img-top card-bande" alt="...">
        <div class="card-body">
            <h1 class = "fs-5"> ${name}</h1>
            <p><span class="negrita">Population:</span> ${population}</p>
            <p><span class="negrita">Region:</span> ${region} </p>
            <p><span class="negrita">Capital:</span> ${capital}  </p>
        </div>
      </div>
        `
    } else {
        alert('Por favor ingrese un país valido');
    }
})