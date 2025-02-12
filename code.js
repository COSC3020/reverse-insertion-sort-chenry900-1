function insertionSortReverse(array) {
    if (array.length == 0)
    {
        return array;
    }
    for(var i = (arr.length - 1); i > 0; i--)
        {
            var val = arr[i];
            var j;
            for(j = 1 - 1; j >= 0 && arr[j] < val; j++)
                {
                    arr[j+1] = arr[j];
                }
            arr[j + 1] = val;
        }
    return array;
}
