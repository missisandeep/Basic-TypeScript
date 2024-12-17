//===============================================
// Type Inference 
//===============================================

let a:string;
a = 10;

// here it wll trow an error due to a is type of string but we are assigning a number value
// it's called type inference 

// ====================
// if are not assign an type it auto type will ANY.
// ====================
let value;
value = "hello";
value = 2;
value = true;

// Variable 'value' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7043)
// let value: any

// ==============================
// now it's because as boolean type
// ============================
let value1 = true; 
value1 = "hello";
value1 = 2;
value1 = true;

// it will show an error;
// Type 'string' is not assignable to type 'boolean'.ts(2322)
// let value: boolean
// Type 'string' is not assignable to type 'boolean'.ts(2322)
// let value: boolean

//===============================================
//=== if we have a variable and we want assign only a value
//===============================================
// it means here we can only assign single value
    let xy:5; 
    //=== if we have a variable and we want assign only a value
    let axy:5; 
    axy = 20 
// it show ans error 
// Type '20' is not assignable to type '5'.ts(2322)
// let a: 5


//===============================================
// we have two var. with let and const then waht will happen
//===============================================

let a1 = 5;
const b = 5;

// a will show = let a: number =  // but b will show = const b: 5
// because will can change the cont value