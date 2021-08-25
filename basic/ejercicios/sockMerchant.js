/**
 * Dada un conjunto de medias debe encontrar la cantidad de pares por color. 
 * Se proporciona un array el cual contiene el codigo de color de las medias
 * Determinar el numero maximo de pares del mismo color que se puede formar
 *
 */

/**
 * 
 * @param {Array} colorSocks 
 * @return {Number} 
 */
const sockMerchant = function(colorSocks){
   // [1,2,1,2,1,3,2]
   // La estrategia es ordenar
   // [1,1,1,1,2,2,2,3]
   let count = 0;
   colorSocks.sort();
   for (let i =0; i < colorSocks.length-1; i++) {
       if(colorSocks[i] == colorSocks[i+1]){
            count++;
            i++;
       }
   }
   return count;
}

// TESTS TDD
console.log(sockMerchant([1,2,1,2,1,3,2]) === 2);
console.log(sockMerchant([10,20,20,10,10,30,50,10,20]) === 3);
//console.log(sockMerchant([10,20,20,10,10,30,50,10,20,20])

