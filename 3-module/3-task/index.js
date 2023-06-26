function camelize(str) {
  let arr = str.split("-");
  let toCamelCase = arr.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));
  let newArr = toCamelCase.join("");
  return newArr;
}
camelize();