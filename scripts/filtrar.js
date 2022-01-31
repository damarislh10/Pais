import { getPais } from "./getPais.js";
import { urlPais } from "./url.js";
import { showPais } from "./showPais.js";

// const filter = document.getElementById('select');
// const filter = document.querySelector('#select').value;
// console.log(options[0].value);
// console.log(filter[0].value);


let selectValue = document.getElementById('select');

selectValue.addEventListener('change', async(e) =>{
    const data = await getPais();

    let options = e.target.value;
 
 
    data.forEach(element => {
         const {id, name, img, population,region, capital} = element;

        if(region === options ) {
            console.log(region + options);
        }      
    })
  
    // const data = await getPais();
    // showPais(data,contenedor)
    // console.log (data)  

})
