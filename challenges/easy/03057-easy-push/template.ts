type Push<T extends unknown[], U> = [...T, U];

// js 
// function Push(T, U)
// {
//     //const obj = [];
//     let i = T.length;
//     T[i] = U.value;
//     return T;
// }
function Push(T, U) {
    return [...T, U];
}
let t1 = Push([1, 2], [3]);

// spread 操作符
