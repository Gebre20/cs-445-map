function calculateAverage(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    var average = (sum / array.length);
    return average;
}
var array1 = [17, 9, 4, 82, 15, 36];
var array2 = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];
console.log(calculateAverage(array1));
console.log(calculateAverage(array2));
console.log(calculateAverage(array1).toFixed(2));
console.log(calculateAverage(array2).toFixed(2));
