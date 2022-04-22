type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P;
}
// 遍历数组

// js 
function TupleToObject (array)
{
    const obj = {};
    array.forEach((val) => {
        obj[val] = val;        
    });

    return obj;
}

// 1.返回一个对象
// 2.遍历array

