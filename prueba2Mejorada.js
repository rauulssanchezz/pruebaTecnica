function getTotal(transactionJson, category) {
    let list = JSON.parse(transactionJson) //creo una lista a partir del json
    let amount = 0 // creo la variable amount que sera el resultado
    let filteredList // creo una lista en la que guardare los elementos filtrados por categoria 
    
    if(category){ //si category tiene un valor
       filteredList = list.filter(item => {
        return item.category === category //filtro la lista por la categoria
      })
      amount = filteredList.reduce((sum, item) => sum + item.amount,0) //sumo los amount de todos los elementos de la lista filtrada
    }else{ //si category no tiene un valor
      const obj = {} //creo un objeto vacio
      
      list.forEach(item => { //recorro la lista
        if(!obj[item.category]){ //si el objeto no tiene la categoria
          obj[item.category] = item.amount //creo la categoria y le asigno el amount
        }else{
          obj[item.category] += item.amount //si ya existe la categoria le sumo el amount
        }
      })
      
      amount = Math.max(...Object.values(obj)) //obtengo el mayor amount acumulado sin usar bigger
    }
    return amount; //retorno el amount
  }
  
  // Caso 1: JSON vacío
  console.log(getTotal('[]', '')); // Salida esperada: 0
  
  // Caso 2: JSON con transacciones, pero categoría no especificada
  console.log(getTotal('[{"category": "food", "amount": 20}, {"category": "transport", "amount": 15}]')); 
  // Salida esperada: 20 (porque "food" tiene el mayor total)
  
  // Caso 3: JSON con transacciones y categoría existente
  console.log(getTotal('[{"category": "food", "amount": 20}, {"category": "food", "amount": 30}, {"category": "transport", "amount": 15}]', 'food')); 
  // Salida esperada: 50 (20 + 30)
  
  // Caso 4: JSON con transacciones y categoría inexistente
  console.log(getTotal('[{"category": "food", "amount": 20}, {"category": "transport", "amount": 15}]', 'entertainment')); 
  // Salida esperada: 0 (porque no hay transacciones para "entertainment")
  
  // Caso 5: JSON con una sola transacción
  console.log(getTotal('[{"category": "food", "amount": 20}]', 'food')); 
  // Salida esperada: 20
  
  // Caso 6: JSON con valores negativos
  console.log(getTotal('[{"category": "refund", "amount": -20}, {"category": "transport", "amount": 15}]', 'refund')); 
  // Salida esperada: -20
  
  // Caso 7: JSON con categorías repetidas y diferentes montos
  console.log(getTotal('[{"category": "food", "amount": 10}, {"category": "food", "amount": 20}, {"category": "transport", "amount": 30}]')); 
  // Salida esperada: 30 (porque "transport" tiene el mayor total)
  
  // Caso 8: JSON inválido
  try {
      console.log(getTotal('invalid JSON', 'food')); 
  } catch (error) {
      console.error(error.message); // Salida esperada: Error o mensaje personalizado, dependiendo de validaciones en la función
  }
  
  // Caso 9: Categoría no especificada y transacciones con montos iguales
  console.log(getTotal('[{"category": "food", "amount": 10}, {"category": "transport", "amount": 10}]')); 
  // Salida esperada: 10 (mayor monto acumulado, pero ambos son iguales, así que cualquiera sería válido)