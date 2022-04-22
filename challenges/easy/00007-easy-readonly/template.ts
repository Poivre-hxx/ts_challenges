type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]; // 遍历接口 keyof
}


// js
// fuction readonly(obj)
// {
//     const result = {} ;
//     for (const key in obj) {
//         result["readonly" + key] = obj[key];
//     }
//     return result;
// }

// in => mapped
// keyof => lookup
// readonly
// indexed