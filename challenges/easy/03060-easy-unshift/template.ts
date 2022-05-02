type Unshift<T extends any[], U> = [U, ...T];

// js 
function Unshift(T, U){
    const obj = [];
    let i = T.length;
    obj[0] = U[0]; 
    for(let j = 1; j <= i; j++) obj[j] = T[j-1];
    return obj;
}