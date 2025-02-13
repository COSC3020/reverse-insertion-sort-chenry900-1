function insertionSortReverse(arr) {
    if (arr.length < 2)
        return arr;
    
  for (var i = arr.length - 1; i > 0; i--) {
      var val = arr[i];
      var j;
      for(j = i + 1; j < arr.length && arr[j] < val; j++) {
          arr[j] = arr[j - 1];
      }
      if (j < arr.length)
          arr[j] = val;
  }
  return arr;
}
