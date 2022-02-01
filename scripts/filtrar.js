import { getPais } from "./getPais.js";
import { urlPais } from "./url.js";
import { showPais } from "./showPais.js";

// const filter = document.getElementById('select');
// const filter = document.querySelector('#select').value;
// console.log(options[0].value);
// console.log(filter[0].value);


let selectValue = document.getElementById('select');
const contenedor = document.getElementById("contenedor");


selectValue.addEventListener('change', async(e) =>{
    const data = await getPais();
    let options = e.target.value;
    contenedor.innerHTML = '';
    data.forEach(element => {
         const {id, name, img, population,region, capital} = element;
         
        
        if(region === options ) {
           
            contenedor.innerHTML += `
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
        }      
    })
  
    // const data = await getPais();
    // showPais(data,contenedor)
    // console.log (data)  

})
