function palindromo() {

    // Crea una variable que contiene la palabra a evaluar
    let palabra = document.getElementById('palabra').value;
    let resultado = document.getElementById('resultado');

    // Transforma la palabara en minusculas
    palabra = palabra.toLowerCase();

    // Reemplaza de forma global todos los espacios 
    // en blanco que contenga la palabra
    palabra = palabra.replace(/\s/g, '');

    // Crea 2 arreglos para contener el juego de letras.
    let letras_invertidas = [];
    let letras = [];

    // Recorre la palabra y agrega cada uno de sus items
    //  al arreglo letras
    for (let i = 0; i < palabra.length; i++) {
        letras.push(palabra[i]);
    }
   
    // Invierte el arreglo letras y lo deposita en
    // el arreglo de letras_invertidas
    letras_invertidas = letras.reverse();

    // Vuelve a convertir la palabra en arreglo debido
    // a que el anterior se ha invertido
    letras = Array.from(palabra);

    // Ambos arreglos son convertidos a string y se les reemplaza
    // el separador ',' por un espacio en vacio '';
    letras = letras.toString().replace(/\,/g, "");
    letras_invertidas = letras_invertidas.toString().replace(/\,/g, "");

    // Condiciona ambas variables para determinar si
    // son iguales en caso verdadero la palabra es palindroma
    // caso contrario no lo es.
    if (letras == letras_invertidas) {
        resultado.innerHTML = "La palabra es palíndroma";
    } else {
        resultado.innerHTML = "No es palíndroma";
    }

}