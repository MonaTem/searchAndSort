var array = [1, 3, 4, 5, 60, 203, 412, 567, 762, 8000, 9012];
var targ = 8000;

function binarySearch(arr, num) {
   let lo = 0;
   let hi = arr.length;
   while (lo <= hi) {
      let mid = Math.floor(lo + (hi - lo) / 2);
      //console.log(mid);
      if (arr[mid] == num) {
         return mid;
      } else if (arr[mid] < num) {
         lo = mid + 1;
      } else {
         hi = mid - 1;
      }
   }

   return -1;

}

console.log(binarySearch(array, targ));
