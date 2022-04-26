type Length<T extends readonly any[]> = T["length"];

// js 
function getLength(arr) {
    if(!Array.isArray(arr)) return;
    return arr.length;
}
 type arr = [1, 2, 3];
 type t1 = arr["length"];
 type t2 = arr[number];

 const tesla1 = ["tesla", "model 3", "model X", "model Y"] as const;
 type t3 = typeof tesla1["length"];
 type t4 = typeof tesla1;
 type t5 = keyof typeof tesla1;


 const COLORS = {
    red: 'red',
    blue: 'blue'
  }
  
  // 首先通过typeof操作符获取color变量的类型，然后通过keyof操作符获取该类型的所有键，
  // 即字符串字面量联合类型 'red' | 'blue'
  type Colors = keyof typeof COLORS 
  let color: Colors;
  color = 'red' // Ok
  color = 'blue' // Ok
  
