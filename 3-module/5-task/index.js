function getMinMax(str) {
  let arr = str.split(" ");
  let numArr = arr.filter(item => { return !isNaN(item); });
  let num = numArr.map(string => +string);
  let max = Math.max.apply(null, num);
  let min = Math.min.apply(null, num);
  let result ={};
  result.max = max;
  result.min = min;
  return result;
}
getMinMax();