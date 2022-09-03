let num = -7;

switch (true) {
  case num < 0:
    alert('num小于0');
    break;
  case num >= 0 && num <= 10:
    alert('num 在0-10之间');
    break;
  case num > 10 && num <= 20:
    alert('num 在0-20之间');
    break;
  default: {
    alert('num 大于20');
  }
}
