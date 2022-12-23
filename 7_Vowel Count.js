
// Мое решение.
function getCount(str) {
    let a = ['a', 'e', 'i', 'o', 'u'];
    str = str.split('');
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < a.length; j++) {
            if(str[i] === a[j]) {
                count = count + 1;
            };
        };
    };
    return count;
};

// Мое решение с улучшением. Оказывается строку можно было не разбивать на массив (не делать str.split()),
// а длину цикла выставлять по длине строки (str.length).
function getCount2(str) {
    let a = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < a.length; j++) {
            if(str[i] === a[j]) {
                count++;
            };
        };
    };
    return count;
};

// Code Wars. С помощью filter формируется новый массив (filter вызывает функцию для каждого элемента исходного массива), но перед
// записью в новый массив идет проверка includes - входит ли элемент в строку "aeiouAEIOU", если true - элемент записывается в
// новый массив. В конце получаем длину нового массива.
function getCount3(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   };

function sac() {
    console.log(getCount3("abracadabraeruy"));
};

sac();