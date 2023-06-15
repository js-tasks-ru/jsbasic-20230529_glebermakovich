function filterRange(arr, a, b) {
  let newArr = arr.filter(item => item >= a && item <= b);
  return newArr;
}
filterRange(arr,1, 6);


