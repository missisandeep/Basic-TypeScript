// ====================================
// ENUM type
// ===================================

// - A group of constant 
// - That can assign a number   to your string and make an easy comparison 
//  - enum Role {Role}

// let suppose we have one role enum here we have multiple role like admin, employee, supper admin etc.
// and we wants to assign some number to role like 1,2,3 etc.
// so how we can do it 

enum Role {
    ADMIN,
    SUPER_ADMIN,
    USER,
    EMPLOYEE,
}
console.log('output - ', Role)
// output -  Object0: "ADMIN"1: "SUPER_ADMIN"2: "USER"3: "EMPLOYEE"ADMIN: 0EMPLOYEE: 3SUPER_ADMIN: 1USER: 2

console.log('output - ', Role.ADMIN)
// output -  0



