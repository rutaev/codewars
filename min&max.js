/**
 * Нахождение минимального и максимального значений среди элементов массива.
 * применяются методы объекта Math min и max.
 * используется spread-оператор (оператор ...) позволяет разложить массив на отдельные значения.
 */

let min = function(list) {
    console.log(Math.min(...list));
};

let max = function(list) {
    console.log(Math.max(...list));
};

min([1, -5, 3, 7]);
max([1, -5, 3, 7]);

console.log(Math.max(...[10, 20]));