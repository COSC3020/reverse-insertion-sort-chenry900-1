function insertionSortReverse(arr) {
    if (arr.length == 0)
        return arr;
    
  for(var i = (arr.length - 1); i > 0; i--) {
    var val = arr[i];
    var j;
    for(j = 1; j < arr.length && arr[j - 1] > val; j++) {
      arr[j] = arr[j - 1];
    }
      arr[j] = val;
  }
  return arr;
}
