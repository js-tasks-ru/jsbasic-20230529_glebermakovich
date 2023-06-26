function sumSalary(salaries) {
  let money = Object.values(salaries);

  money = money.filter(function(item){
    return typeof item === "number" && Number.isFinite(item);
  });

  let sumMoney = money.reduce((acc, number) => acc + number, 0);

  return sumMoney;
}