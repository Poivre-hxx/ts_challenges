type Push<T extends any[], U> = [...T, U];

// js 
function Push(T, U)
{
    //const obj = [];
    let i = T.length;
    T[i + 1] = U;
    return T;
}
