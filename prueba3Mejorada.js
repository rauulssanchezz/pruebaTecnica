function decipher(message, shift) {
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'//alfabeto en mayusculas
  const lowerCaseLetters = upperCaseLetters.toLocaleLowerCase()//alfabeto en minusculas
  let newMessage = ''//creo una variable para guardar el mensaje cifrado
  let newCharacter = ''//creo una variable para guardar el nuevo caracter
  let index = 0//creo una variable para guardar el indice del caracter
 
  if(shift === 0){
    return message
  } //si el desplazamiento es 0 retorno el mensaje original
  
  if(!message){
    return ''
  } //si el mensaje esta vacio retorno un string vacio
  
  for(let character in message){ //recorro el mensaje
    if(upperCaseLetters.includes(message[character])){ //si el caracter es una letra mayuscula
      index = upperCaseLetters.indexOf(message[character]) //obtengo el indice del caracter en el regex
      const newIndex = (index + shift + upperCaseLetters.length) % upperCaseLetters.length //obtengo el nuevo indice,
      // sumo el indice original y el desplazamiento, también sumo la longitud del array por si el desplazamiento es negativo, calculo el resto de la division entre la
      // longitud del regex para no superar la longitud del regex
      
      newCharacter = upperCaseLetters[newIndex] //obtengo el nuevo caracter
      
    }else if(lowerCaseLetters.includes(message[character])){//si el caracter es una letra minuscula
      index = lowerCaseLetters.indexOf(message[character]) //obtengo el indice del caracter en el regex
      const newIndex = (index + shift + lowerCaseLetters.length) % lowerCaseLetters.length//obtengo el nuevo indice,
      // sumo el indice original y el desplazamiento, también sumo la longitud del array por si el desplazamiento es negativo, calculo el resto de la division entre la
      // longitud del regex para no superar la longitud del regex
      
      newCharacter = lowerCaseLetters[newIndex]//obtengo el nuevo caracter
    }else{//si el caracter no es una letra
      newCharacter = message[character]//guardo el caracter original
    }
    newMessage += newCharacter//agrego el nuevo caracter al mensaje cifrado
  }
  return newMessage
}

// Caso 1: Mensaje vacío
console.log(decipher('', 3)); 
// Salida esperada: ''

// Caso 2: Mensaje con letras mayúsculas y un desplazamiento positivo
console.log(decipher('ABC', 3)); 
// Salida esperada: 'DEF'

// Caso 3: Mensaje con letras minúsculas y un desplazamiento positivo
console.log(decipher('abc', 3)); 
// Salida esperada: 'def'

// Caso 4: Desplazamiento negativo
console.log(decipher('ABC', -3)); 
// Salida esperada: 'XYZ'

// Caso 5: Mensaje con caracteres especiales (sin cifrar)
console.log(decipher('Hello! @World#', 3)); 
// Salida esperada: 'Khoor! @Zruog#' (los caracteres especiales no se modifican)

// Caso 6: Desplazamiento mayor que el alfabeto
console.log(decipher('HELLO', 29)); 
// Salida esperada: 'KHOOR' (29 % 26 == 3, lo que equivale a un desplazamiento de 3)

// Caso 7: Desplazamiento mayor que el alfabeto con letras minúsculas
console.log(decipher('hello', 29)); 
// Salida esperada: 'khoor' (29 % 26 == 3, lo que equivale a un desplazamiento de 3)

// Caso 8: Mensaje con letras en mayúsculas y minúsculas
console.log(decipher('Hello World!', 3)); 
// Salida esperada: 'Khoor Zruog!' (el desplazamiento se aplica por separado a mayúsculas y minúsculas)

// Caso 9: Desplazamiento 0 (sin cifrado)
console.log(decipher('Hello', 0)); 
// Salida esperada: 'Hello' (no se debe modificar el mensaje)