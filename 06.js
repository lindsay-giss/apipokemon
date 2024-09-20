//buscar datos del pokemon dependoiendo de su numero o nombre
function buscarpokemon(contenedorNumero) {
    let inputId = `pokemoninput${contenedorNumero}`;
    let nombrePokemon = document.getElementById(inputId).value.trim().toLowerCase();
    let urlApi = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`

    fetch(urlApi)
        .then(Response => Response.json())
        .then(datospokemon => mostrarPokemon(datospokemon, contenedorNumero))
        .catch(() => mostrarError(contenedorNumero))
}
//mostrar informacion del pokemon
function mostrarPokemon(datospokemon, contenedorNumero) {
    let infoDiviD = `pokemoninfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDiviD);

    infoDiv.innerHTML = `
    <h2 class="pk-name jaja">${datospokemon.name.toUpperCase()}</h2>
    <img class="pk-img" src="${datospokemon.sprites.other["official-artwork"].front_default}">
    <div class=" jiji">
        <p class="jeje"><strong>Numero:<strong> ${datospokemon.id}</p>
        <p><strong>weight:<strong> ${datospokemon.weight/10}kg</p>
        <p><strong>height:<strong> ${datospokemon.weight/10}m</p>
    </div>
    
    `
}
//error en busqueda de pokemon

function mostrarError(contenedorNumero){
    let infoDiviD = `pokemoninfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDiviD);
    infoDiv.innerHTML = `
    <p class="pk-ms">pokemon no encontrado.<br> intenta con otro nombre o numero</p>
    `
}

//mostrar pokemon inicial
window.onload = function() {
    document.getElementById("pokemoninput1").value = "25";
    buscarpokemon(1);
    document.getElementById("pokemoninput2").value = "4";
    buscarpokemon(2);
}