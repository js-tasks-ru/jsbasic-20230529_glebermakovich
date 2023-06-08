function sumSalary() {
  let salaries = {
    John: 1000,
    Ann: 1600,
    Pete: 1300,
    month: 'December',
    currency: 'USD',
    isPayed: false
  }

  let money = Object.values(salaries);
  money = money.filter(function(item){
    return typeof item === "number";
  });
  let sumMoney = money.reduce((acc, number) => acc + number, 0);

  if(money === NaN || money === Infinity || money === -Infinity){
    return false;
  } else if(money === null){
    return 0;
  } else {
    return sumMoney;
  };
}
sumSalary()
