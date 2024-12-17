//===============================================
//Object type into type script
//===============================================


let person = {
    name: "sandeep",
    age: 23,
    email: "kietnsandeepkumar"
}
console.log('sandeep - ', person.name) 
// here can't see any error but


let person1:object = {
    name: "sandeep",
    age: 23,
    email: "kietnsandeepkumar"
}
console.log('sandeep - ', person1.name);
// It will throw an error becuase person is as Object without having value
// Property 'name' does not exist on type 'object'.ts(2339) // any


let person2:{} = {
    name: "sandeep",
    age: 23,
    email: "kietnsandeepkumar"
}
console.log('sandeep - ', person2.name);
// It will throw an error becuase person is as Object without having value
// Property 'name' does not exist on type '{}'.ts(2339)


// =====how we can solve it ========
// ========================================

let person3:{name: string, age:number, email:string} = {
    name: "sandeep",
    age: 23,
    email: "kietnsandeepkumar"
}
console.log('sandeep - ', person3.name);
//now no error will come


// =================//===============================================
// let suppose we have many Obj with same value then 
//===============================================

// ===============
// import think -  object always showing as a semicomma seprated
// type ObjType = {
//     name: string;
//     age: number;
//     email: string;
// }

type ObjType = {
    name: string,
    age:number,
    email:string
}

let person4: ObjType = {
    name: "sandeep",
    age: 23,
    email: "kietnsandeepkumar"
}

let person5: ObjType = {
    name: "sandeep",
    age: 23,
    email: "kietnsandeepkumar"
}

console.log('sandeep - ', person4.name, person5.name);


