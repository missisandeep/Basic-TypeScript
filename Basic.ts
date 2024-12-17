//===============================================
// Basic and correct type as a number
//===============================================

function x(a:number, b:number){
    return a+b;
}
console.warn('Call Function - ', x(2,3))

//===============================================
// declaration string number and boolean
//=========================================

let str:string = "Hello";
let num:number = 12;
let bool:boolean = true;


//===============================================
// it will throw error 
//================================================

let str1:string = 10;
let num1:number = 'hello';
let bool1:boolean = "true";

// Type 'number' is not assignable to type 'string'.ts(2322)
// let str1: string
// Type 'string' is not assignable to type 'number'.ts(2322)
// let num1: number
// Type 'string' is not assignable to type 'boolean'.ts(2322)
// let bool1: boolean
