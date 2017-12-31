var array = [5001, 267, 3, 8, 904, 678, 92, 1, 5, 0];


function selectionSort(arr) {
  var currentMin = 0;
  var unsorted = arr;
  const len = arr.length;
  var sorted = [];

  for (i = 0; i < len; i++) {

    currentMin = unsorted.reduce(function(a, b) {
      return Math.min(a, b);
    });

    idx = unsorted.indexOf(currentMin);
    sorted.push(currentMin);
    unsorted.splice(idx, 1);

  }

  return sorted;
}
console.log(selectionSort(array));
