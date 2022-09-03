let num = 80;

switch (true) {
  case num < 0:
    console.log('num小于0');
    break;
  case num >= 0 && num <= 10:
    console.log('num 在0-10之间');
    break;
  case num > 10 && num <= 20:
    console.log('num 在0-20之间');
    break;
  default: {
    console.log('num 大于20');
  }
}

function sayHi(name, message) {
  // 模板字符串
  console.log(`hello${name},${message}`);
  // 字符串拼接
  console.log('hello' + name + ',' + message);
}
sayHi('charles', 'wath are you doing');

function diff(num1, num2) {
  if (num1 < num2) {
    return num2 - num1;
  } else {
    return num1 - num2;
  }
}
console.log(diff(10, 5));


