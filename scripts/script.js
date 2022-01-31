import { getPais } from "./getPais.js";
import { urlPais } from "./url.js";
import { showPais } from "./showPais.js";

const contenedor = document.getElementById("contenedor");


document.addEventListener('DOMContentLoaded', async () =>{
    const data = await getPais();
    showPais(data,contenedor)
    console.log (data)
})




