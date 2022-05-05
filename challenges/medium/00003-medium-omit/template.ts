type MyOmit<T, K extends keyof T> = {
    [U in keyof T as U extends K ? never :U]: T[U];
}


// js
function MyOmit(todo,keys){
    const obj = {}
    for(let i = 0; i < keys.length; i++){
        if(keys[i] in todo)
        1;
        else 
        obj[i] = keys[i];
    }
    return obj;
}