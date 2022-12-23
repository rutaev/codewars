
//Мое решение. В переменной numberOfIteration происходит деление и присваивается целое значение, округленное в меньшую сторону.
function findMultiples(integer, limit) {
    let numberOfIteration = Math.floor(limit / integer);
    let finalArray = [integer];
    for(let i = 0; i < numberOfIteration - 1; i++) {
        finalArray.push(finalArray[i] + integer);
    };
    return(finalArray);
};

findMultiples(11, 54);

/*
В javascript отсутствует деление на целые числа и числа с плавающей запятой.
Возможно, как следствие, отсутствуют и специальные арифметические операторы для целых чисел.

Исходя из этого есть несколько вариантов решения:

Выполнение обычного деления и взятие от результата целой части. Для этой процедуры есть функции Math.floor и Math.ceil, разница заключается в том, большее целое или меньшее будет выбрано.

console.log(Math.floor(10 / 3));
console.log(Math.floor(-10 / 3));

console.log(Math.ceil(10 / 3));
console.log(Math.ceil(-10 / 3));
*/

//Решение с CW. Best Practices.
function CWFindMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    console.log(result, 'sd')
  }

  CWFindMultiples(5, 25)
