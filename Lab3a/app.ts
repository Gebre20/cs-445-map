function calculateAverage(array: number[]){
let sum: number=0;
for(let i=0; i<array.length; i++){
    sum +=array[i];
}
const average = (sum/array.length);
return average;
}
let array1: number[]=[17, 9, 4, 82, 15, 36];
let array2: number[]=[9, 4, 1, 7, 2, 3, 5, 8, 10, 6];
console.log(calculateAverage(array1));
console.log(calculateAverage(array2)); 
console.log(calculateAverage(array1).toFixed(2));
console.log(calculateAverage(array2).toFixed(2)); 