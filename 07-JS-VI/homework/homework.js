// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1); //primero hago que el primer caracter del string, es decir, [0] se haga mayuscula con el metodo toUpperCase().Luego con el metodo slice() con inicio en [1] y sin fin devuelvo una copia del string original y lo concateno con la mayuscula que ya hice.
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let sumaFinal = numeros.reduce(function(accumulator, currentValue) { // primero creo la variable sumaFinal que es igual al argumento ingresado con el metodo .reduce que lo que va a hacer es crear una funcion con un acumulador y un valor actual, y va a llamar (callback) a cada uno de los elementos para realizar la suma indicada 
    return accumulator + currentValue;
  }, 0); //aca le digo en que posicion hay que empezar.

  cb(sumaFinal); // aca estoy invocando al callback de sumafinal.
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for (let i = 0; i < array.length; i++) { //itero sobre cada elemento del array.
    cb(array[i]); //invoco al callback y devuelvo uno por uno los valores.
  }

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  let newArray = array.map(function(item) { //con el metodo .map itero sobre cada item y
    return cb(item); // luego le digo que devuelva con callback cada item recibido.
  });
  return newArray;
}
//Lo que hace por "detras" el .map
// var nuevoArray = [];
  // for(var i = 0; i < array.length; i++) {
  //   nuevoArray.push(cb(array[i]));
  //   nuevoArray[i] = cb(array[i]);
  // }

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  let newArray = [];
  for (let i = 0; i < array.length; i++) { //itero sobre cada elemento del array.
    if (array[i][0] === 'a') { //si el array en la posicion i con el caracter en la posicion 0 es igual al caracte 'a' 
      newArray.push(array[i]); //entonces pusheo ese array a la variable newArray.
    }
  }
  return newArray; //devuelvo la variable con los elementos del array que comienzan con la letra 'a'.
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
