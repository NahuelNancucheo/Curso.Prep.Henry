// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = [];                  //creo variable que va a guardar la matriz.
  for (x in objeto) {             // metodo for in para iterar sobre las propiedades 'x' del objeto
    array.push([x, objeto[x]])   //por cada iteracion pusheo la clave (x), seguido de su valor (objeto[x]) 
  }
  return array;                // retorno el array con la matriz creada desde un objeto.
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {}; //creo una variable que guarde el objeto que voy a crear mas adelante.
  for (let i = 0; i < string.length; i++) {         //itero sobre el string recibido.
    if (Object.keys(objeto).includes(string[i])) { //con objetc.keys(objeto) determino el indice con el cual voy a fijarme con el .inlcudes si el string en posicion i contiene ese caracter.
      objeto[string[i]] = objeto[string[i]] + 1;   //si es asi quiero que ese caracter se guarde y se le sume 1.
      continue;                                   //termino con la iteracion actual y sigo con la proxima.
    }
    objeto[string[i]] = 1;                        //en la primera iteracion en el que el objeto este vacio no se va a entrar al if pero esa letra está por lo que la añadimos al objeto como objeto[caracter] = 1.Luego cuando se itera nuevamente, y se repite ese caracter, se encuentra ya en el objeto por lo que entra al if y se ejecuta.
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayuscula = '';                     //creo un variable donde voy a guardar todos los caracteres en mayus.
  let minuscula = '';                     //hago lo mismo con la minus.
  for (let i = 0; i < s.length; i++) {    //itero sobre cada posicion del string.
    if (s[i] === s[i].toUpperCase()) {    //si el caracter en la posicion en la que estoy es igual que ella misma pero en mayus
      mayuscula += s[i];                  //lo guardo en la variable mayus
    } else { 
      minuscula += s[i];                  //si no lo es, entonces va a la variable minus.
    }
  }
  return mayuscula.concat(minuscula);     //concateno (con .concat) primero la mayuscula seguido de la minuscula.
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let phrase = str.split(' ').map(function(item) {  //el split(' ') divide el string en un array y va devolviendo las divisiones que encuentra.Cuando se encuentra el 'separador' es eliminado de la cadena.con .reverse el primer elemento pasa a ser el ultimo y asi.
    return item.split('').reverse().join('');       //La función join() te permite juntar todos los elementos de un array en una única string 
  }).join(' ');                                     // dentro del parentesis de join podes colocar cómo queres que esos 
  return  phrase;                                   //elementos se junten, si pones join() va a haber una coma entre los elementos por defecto, 
}                                                   //si pones join('') no habrá espacio entre los elementos.. si pones join('-') estarán 
                                                    //separados por un guión.. entonces si queres separarlos por un espacio es simplemente poner join(' ').

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let cadena = numero.toString();                         //convierto el numero en string y se la asigno a una variable.
  let cadenaInvertida = '';                               //creo variable que va a recibir la cadena invertida.

  cadenaInvertida = cadena.split('').reverse().join('');  //agarro la cadena la spliteo, la doy vuelta y la vuelvo a unir y se la asigno a dicha variable.
        if(cadena == cadenaInvertida) {                   //si las dos variables son iguales quiere decir que el numero ingreado al ppio es capicua.
          return 'Es capicua';
        }
        return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadena2 = '';                                                     //creo variable.
  for(let i = 0; i < cadena.length; i++) {                              //itero sobre cada elemento de la cadena dada
    if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {   //si son diferentes a 'a' 'b' y 'c' entonces las guardo en la variable.
      cadena2 += cadena[i];                                             //devuelvo la variable sin a b y c.      
    }
  }
  return cadena2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
 //                                               *temp*
 //                                     *j*       *j+1*
  //Escribe tu código aquí
  for (let i = 0; i < arr.length; i++) {                 //itero sobre el arreglo.
    let temp = arr[i];                                 //creo variable que va arecibir cada elemento de la iteracion.
    let j = i - 1;                                      //el elemento j se va ubicar una posicion por detras que i.
    while (j >= 0 && temp.length < arr[j].length) {     //cuando j sea >= 0 y lo que este en temp sea menor que el elemento analizado en la posicion j
      arr[j+1] = arr[j]                                 // entonces le decimos que la posicion siguiente en la que se encuentre j (looking) sea swapeada con 
      j--;                                              //con el actual j (beautiful).
    }
    arr[j+1] = temp;
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arreglo = [];                               //creo variable que va a recibir los elementos en comun.
  for(let i = 0; i < arreglo1.length; i++) {      //itero sobre el primer elemento del primer arreglo.
    for(let j = 0; j < arreglo2.length; j++) {    //itero sobre todos los elementos del segundo arreglo.
      if(arreglo1[i] === arreglo2[j]) {           //y si el elemento actual del arreglo 1 es igual a alguno del arreglo 2
        arreglo.push(arreglo1[i]);                //entonces quiere decir que ese elemento se encuentra en los dos arreglos, 
      }                                           //por eso pusheo ese elemento a la variable correspondiente.
    }
  }
  return arreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

