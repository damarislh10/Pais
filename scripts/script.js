import { getPais } from "./getPais.js";
import { urlPais } from "./url.js";
import { showPais } from "./showPais.js";

const contenedor = document.getElementById("contenedor");


document.addEventListener('DOMContentLoaded', async () =>{
    const data = await getPais();
    showPais(data,contenedor)
    console.log (data)
})


contenedor.addEventListener('click', async(e) => {
    const btnDetalle = e.target.classList.contains('card-bande');
    const id = e.target.id;

   if(btnDetalle){
       const lista = await getPais(urlPais);
       const objeto = lista.find(pais => pais.id === Number(id));

       localStorage.setItem("detallePais", JSON.stringify(objeto));
       window.location.href = 'detail.html';
   }
})