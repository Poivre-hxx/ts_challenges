type If<C, T, F> = C extends boolean 
  ? C extends null 
     ? never
     : C extends true ? T : F 
  : never;
  


// type If<C extends true | false, T, F> = C extends true ? T : F;



// js 
// function If(C, T, F)
// {
//     if( C == true)
//     return T;
//     return F;
// }