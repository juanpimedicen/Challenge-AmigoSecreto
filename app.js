// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosLista = []; //Lista para los nombres de amigos a introducir

function asignarTextoAmigo (){
    //lista del HTML
    let listaMostrar = document.querySelector("#listaAmigos");
    listaMostrar.innerHTML = ""; //Primero la dejamos en blanco

    //Se recorre la lista para agregar cada uno como elemnto dentro de <li>
    amigosLista.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaMostrar.appendChild(li);
    });

}

function agregarAmigo(){
    //Se toma lo que introduce el usuario
    let input = document.getElementById("amigo");
    let nombreInput = input.value.trim();
    //Se valida que no esté vacío
    if (nombreInput === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }
     amigosLista.push(nombreInput) //Se inserta el nombre en la lista creada
    //Se escribe en la página los nombres
    asignarTextoAmigo();
    
    //Se limpia la caja de entrada de dato
    limpiarInput();
    return;

}
//Agregando la función de limpiar la caja
function limpiarInput() {
    document.querySelector('#amigo').value = '';
}
function sortearAmigo(){
    //Se valida si se encuentra vacío para hacer sorteo
    if (amigosLista.length == 0){
        alert("No hay amigos en la lista para hacer el sorteo");
        return;
    }
    //Se limpia lista de amigos en la pantalla
    document.getElementById("listaAmigos").innerHTML = '';
    //Se genera un numero random para elegir amigo
    let randomNum = Math.floor(Math.random()*amigosLista.length);
    //Se selecciona el amigo
    let nombreAmigo=amigosLista[randomNum];
    //Se escribe en la página el resultado
    let resultado =document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo sorteado es: <strong>${nombreAmigo}</strong> 🎉</li>`;
}

//Agregando la función de limpiar la caja
function limpiarInput() {
    document.querySelector('#amigo').value = '';
}
