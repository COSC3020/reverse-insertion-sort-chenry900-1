function insertionSortReverse(arr) {
    if (arr.length < 2)
        return arr;
    
  for (var i = arr.length - 2; i >= 0; i--) {
      var val = arr[i];
      for(var j = i + 1; j < arr.length && arr[j] > val; j++) {
          arr[j - 1] = arr[j];
      }
      if (j > 0)
          arr[j - 1] = val
  }
  return arr;
}
