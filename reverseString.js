/**Функция переворачивает строку.
 * метод split разбивает строку на массив.
 * метод reverse переворачивает элементы массива.
 * метод join собирает массив в строку.
 */

function solution (str) {
    let a = str.split('').reverse().join('');
    console.log(a);
};

solution('word');