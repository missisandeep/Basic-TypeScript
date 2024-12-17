//===============================================
// type of array in type script
//===============================================


let arr:string = ['hello', 'kumar','ravi'];
        // it will throw an erro = 
        // Type 'string[]' is not assignable to type 'string'.ts(2322)
        // let arr: string    

// we can not map string like as variable into array 
let arr1:string[] = ['hello', 'kumar','ravi'];
// it assign like this
// here only we can assign string value not number and boolean

let arr5:string[] | number[] = ['hello', 'kumar','ravi'];
// it assign like this
// here only we can assign string or number


arr1.push(12);
// here is wll show an error like 
// Argument of type 'number' is not assignable to parameter of type 'string'



// if let suppose we have multiple type value into array then?
let arr3:[number,boolean,string] = [1,true,'sandeep'];
// it is correct but , if we have more data then it will not work


// ======================
// this we can use like bellow
let arr4= [1,true,'sandeep'];
