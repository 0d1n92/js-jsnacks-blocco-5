
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// JS 5
// var array = [5,7,3,88,33,44];
// var max = prompt("inserisci un numero fino da 0 a"+array.length);
// var min = prompt("inserisci un numero fino da 0 a"+ (array.length-1));
// console.log(threeArgoments(array,min,max));
//
//
//
// function threeArgoments(array,max,min){
//   var newArray=[];
//   for (var i=min-1;i<max; i++){
//     newArray.push(array[i]);
//   }
//   return newArray;
// }
// JS 6
const array = [5,7,3,88,33,44];
const max = prompt("inserisci un numero fino da 1 a "+array.length);
const min = prompt("inserisci un numero fino da 1 a "+ (array.length-1));
const threeArgoments= (array,min,max) => {
  let newArray=[];
  for (let i=min-1;i<max; i++){
     newArray.push(array[i]);

   }

    return newArray;

  }

console.log(threeArgoments(array,min,max));
