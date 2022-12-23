/*
In this little assignment you are given a string of space separated numbers,
and have to return the highest and lowest number.
*/

// Мое решение.
function highAndLow(numbers) {
    let a = numbers.split(' ');
    let b = a.map(a => parseInt(a));
    let c = Math.max.apply(null, b);
    let e = Math.min.apply(null, b);
    let result = `${c} ${e}`;
    return result;
};

// Best Practices. Приводит к числу с помощью Number.
function highAndLow2(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  };

// Best Practices. Как выяснилось, к числу приводить не обязательно.
// Т.к. js не строгой типизации, он, якобы сам приводит к числу.
function highAndLow3(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  };

  function sac() {
    console.log(highAndLow('5 7 1'))
  };

  sac();