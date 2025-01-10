export function mergeArrays(first) {
    let firstCopy = first.flat() //En vez de usar dos forEach, uso flat para convertir la matriz en un solo array

    firstCopy.sort((a,b) => a - b)//ordenar los valores de firstCopy
    return firstCopy
  }

// Caso 1: Arreglo vacío
console.log(mergeArrays([])); // Salida esperada: []

// Caso 2: Un solo arreglo vacío dentro de un arreglo
console.log(mergeArrays([[]])); // Salida esperada: []

// Caso 3: Un solo arreglo con números
console.log(mergeArrays([[3, 1, 2]])); // Salida esperada: [1, 2, 3]

// Caso 4: Múltiples arreglos con números desordenados
console.log(mergeArrays([[3, 1], [4, 5], [2]])); // Salida esperada: [1, 2, 3, 4, 5]

// Caso 5: Arreglos que incluyen números repetidos
console.log(mergeArrays([[1, 2, 2], [3, 3], [4]])); // Salida esperada: [1, 2, 2, 3, 3, 4]

// Caso 6: Arreglos con números negativos
console.log(mergeArrays([[3, -1], [-2, 4], [0]])); // Salida esperada: [-2, -1, 0, 3, 4]

// Caso 7: Múltiples arreglos vacíos
console.log(mergeArrays([[], [], []])); // Salida esperada: []

// Caso 8: Mezcla de arreglos vacíos y no vacíos
console.log(mergeArrays([[1, 3], [], [2, 4]])); // Salida esperada: [1, 2, 3, 4]

// Caso 9: Un solo arreglo con un número
console.log(mergeArrays([[42]])); // Salida esperada: [42]