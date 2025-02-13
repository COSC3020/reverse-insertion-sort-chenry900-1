function insertionSortReverse(arr) {
    if (arr.length < 2)
        return arr;
    
  for (var i = arr.length - 1; i >= 1; i--) {
      var val = arr[i];
      for(var j = i; j < arr.length && arr[j - 1] > val; j++) {
          arr[j] = arr[j - 1];
      }
      arr[j - 1] = val;
  }
  return arr;
}
