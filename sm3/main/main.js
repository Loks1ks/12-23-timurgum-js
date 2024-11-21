const newDeveloper = {
    name: prompt('Алешка: Как Вас зовут?'),
    surname: prompt('Алешка: Какая у Вас фамилия?'),
    age: prompt('Алешка: Сколько Вам лет?'),
  };
  
  let exp;
  
  while (!Number.isInteger(parseInt(exp))) {
    exp = prompt('Алешка: Сколько лет опыта в it?');
  }
  
  if (exp < 3) {
    alert('Алешка: Сорян, но у тебя слишком мало опыта, иди учись :(');
  } else {
    alert("Директор: Добро пожаловать к нам!");
    alert("Директор: Передайте ему привет все!");
    alert("Команда: Приветики!")
  }