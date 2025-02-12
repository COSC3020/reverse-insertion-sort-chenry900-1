function insertionSort(arr) {
    if (arr.length == 0)
        return arr;
    
  for(var i = (arr.length - 1); i > 1; i--) {
    var val = arr[i];
    var j;
    for(j = 0; j < arr.length && arr[j + 1] < val; j++) {
      arr[j] = arr[j + 1];
    }
    arr[j] = val;
  }
  return arr;
}
