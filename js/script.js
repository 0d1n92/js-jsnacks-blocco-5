
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
let max = prompt("inserisci un numero fino da 1 a "+array.length);
let min = prompt("inserisci un numero fino da 1 a "+ (array.length));
const controlValMinMax=(array,control) => (control<1 && control> array.length || max<min);
if (controlValMinMax(array,max)) max=prompt("MAX :il numero inserito deve essere maggiore di 1 e minore di"+array.length+ "il primo numero inserito :"+min+" deve essere maggiore del secondo "+ max);
if (controlValMinMax(array,min)) min=prompt("MIN: il numero inserito deve essere maggiore di 1 e minore di"+array.length+ "il primo numero inserito :"+ min +" deve essere maggiore o uguale del secondo "+ max);
// if(max<1 min> array.length) min = prompt("il numero inserito deve essere maggiore di 1 e minore di"+array.length);



const cutArgoments= (array,min,max) => {
  const newArray=[];
  for (let i=min-1;i<max; i++){
     newArray.push(array[i]);

   }

    return newArray;

  }

console.log(cutArgoments(array,min,max));
