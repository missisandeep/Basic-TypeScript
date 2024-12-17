// ====================================
// ENUM type
// ===================================
// - A group of constant 
// - That can assign a number   to your string and make an easy comparison 
//  - enum Role {Role}
// let suppose we have one role enum here we have multiple role like admin, employee, supper admin etc.
// and we wants to assign some number to role like 1,2,3 etc.
// so how we can do it 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUPER_ADMIN"] = 1] = "SUPER_ADMIN";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["EMPLOYEE"] = 3] = "EMPLOYEE";
})(Role || (Role = {}));
console.log('sandeep - ', Role);
// output will come ==== -  Object0: "ADMIN"1: "SUPER_ADMIN"2: "USER"3: "EMPLOYEE"ADMIN: 0EMPLOYEE: 3SUPER_ADMIN: 1USER: 2
console.log('sandeep - ', Role.ADMIN);
