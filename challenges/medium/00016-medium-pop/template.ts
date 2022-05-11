type Pop<T extends any[]> = T extends [...infer P, infer R] ? P : never;

// js 
function Pop(arr)
{
    let obj;
    let Rest;
    arr = [...obj, Rest];
    return obj;

}