type Push<T extends any[], U> = [...T, U];

// js 
function Push(T, U)
{
    //const obj = [];
    let i = T.length;
    T[i] = U.value;
    return T;
}
let t1 = Push([1, 2], [3]);