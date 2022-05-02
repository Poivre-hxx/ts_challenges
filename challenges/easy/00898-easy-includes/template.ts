import { Equal } from '@type-challenges/utils'

// type Includes<T extends any[], K> = T["length"] extends 0
// ? false  
// : K extends T[number] 
//     ? T[number] extends K ? true : false 
//     : false;

type Includes<T extends any[], K> = T extends [infer X, ...infer Y]
? Equal<X, K> extends true ? true : Includes<Y, K>
: false; 

type q1 = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">;
type q2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>;
type q3 = Includes<[{}], { a: 'A' }>;
type q4 = Includes<[1 | 2], 1>;


// js
// function Includes(T, U) {
//     for(let i = 0; i < T.length; i++){
//         if(T[i] === U)
//         return true;
//     }
//     return false;
// }
// let t = Includes(["Kars", "Esidisi", "Wamuu", "Santana"], "Kars");
