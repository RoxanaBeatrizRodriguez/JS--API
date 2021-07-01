//Capturarndo elementos del HTML
//                                          # (id) . (clase)  h1 (etiqueta)
//let provincias =  document.querySelector('.provincias');
//Si se desea capturar mas de un elemento, para elo usamos
//let parrafos = document.querySelectorAll('.parrafo');
let listaProvincias = document.getElementById('provincias');
let boton = document.querySelector('.boton');
let body = document.querySelector('body');
let titulo = document.querySelector("#titulo")

fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
.then(respuesta =>{
    return respuesta.json()
})
.then(data =>{
    //console.log(data.provincias);
    for(let i=0; i < data.provincias.length; i++){
        listaProvincias.innerHTML += `<li class='listado'>${data.provincias[i].nombre} </li>`
    }
})

//Manejando eventos del usuario
//click - mouseover - mouseout
boton.addEventListener('click', function(){
    body.style.backgroundColor = 'tomato';
    titulo.classList.add("titulo");
}) 
boton.addEventListener("mouseout",function(){
    body.style.backgroundColor = "white"
})