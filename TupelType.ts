//===============================================
// Tupel Type in 
//===============================================

let role: string[] | number[] = ['sandeep','kumar','sing'];
// // it is correct here we hv tow check string or number


let role1: string[] | number[] = ['sandeep','kumar','sing', 2];
// we are adding another value 2 show it will show an error 
            // Type '(string | number)[]' is not assignable to type 'string[] | number[]'.
            // Type '(string | number)[]' is not assignable to type 'string[]'.
            //     Type 'string | number' is not assignable to type 'string'.
            //     Type 'number' is not assignable to type 'string'.ts(2322)


// let role2: string[] | number[] 
// because role is str or num
// let role:[string, string, string,number]= ['sandeep','kumar','sing', 2];
// here we have TUPEL with multiple value 
// we let suppose we want add new value as false int last 




let role2:[string, string, string,number]= ['sandeep','kumar','sing', 2, false];
// it throw an error 
// Type '[string, string, string, number, boolean]' is not assignable to type '[string, string, string, number]'.
//   Source has 5 element(s) but target allows only 4.ts(2322)
//   let role: [string, string, string, number]


let role3:[string, string, string,number]= ['sandeep','kumar','sing', 2];
role3.push(false);
// // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

let role4:[string, string, string,number,boolean]= ['sandeep','kumar','sing', 2];
role4.push(false);
// Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
 

// Type '[string, string, string, number]' is not assignable to type '[string, string, string, number, boolean]'.
//   Source has 4 element(s) but target requires 5.ts(2322)
// let role: [string, string, string, number, boolean]

let role5:[string, string, string,number,boolean?]= ['sandeep','kumar','sing', 2];
role5.push(false);
// we will use "?"


// =======Note = into tuple we can assign type value one by one  but into array it will single 
// =============