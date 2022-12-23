/**
 *  Simple, given a string of words, return the length of the shortest word(s).

    String will never be empty and you do not need to account for different data types. 
 */

// Мое решение
function findShort(s){
    let a = s.split(" ").map(a => a.length);
    let b = Math.min.apply(null, a);
    return b;
};

//CW 1
function findShort1(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
};

// CW 2
function findShort2(s){
    return Math.min(...s.split(" ").map (s => s.length));
};

function frt() {
    console.log(findShort("tur`ns out random test cases are easier than writing out basic ones rc"));
};

frt();