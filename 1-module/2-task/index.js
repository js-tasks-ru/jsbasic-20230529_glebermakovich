function print(text) {
  console.log(text);
}

function isValid(name) {
  let nameSplit = name.split(" ");

  if (name.length < 4 || nameSplit.length > 1 || name === null) {
    return false;
  }else {
    return true;
  };
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
sayHello();
