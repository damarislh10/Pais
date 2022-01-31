import { getPais } from "./getPais.js";
import { urlPais } from "./url.js";
import { showPais } from "./showPais.js";

const filter = document.getElementById('select');
// const filter = document.querySelectorAll('.dropdown-item')
console.log(filter[0].value);
filter.addEventListener('click' , async() => {
    console.log(filter[0].value);
    const data = await getPais();
    showPais(data,contenedor)
    console.log (data)
    
})