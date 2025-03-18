// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function asignarTextoAmigo (elemento, amigo){
let elementoHTML= document.querySelector(elemento);
elementoHTML.innerHTML = amigoAgregado;

}

function agregarAmigo(){
let amigoAgregado = document.getElementById('amigo').value;

console.log(amigoAgregado);
limpiarInput();
return;

}

function sortearAmigo(){


}
//Agregando la función de limpiar la caja
function limpiarInput() {
    document.querySelector('#amigo').value = '';
}
agregarAmigo();
asignarTextoAmigo('ul',amigoAgregado);
