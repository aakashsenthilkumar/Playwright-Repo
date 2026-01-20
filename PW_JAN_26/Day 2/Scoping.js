//Scoping in JS


//var Scoping ---is allowed to execute the values

// if(true){
//     var compname = "INFO"
// console.log("Accessing var inside the if block",compname)
// }
// console.log("Accessing var outside the if block" ,compname)


//let scoping --should not allowed to execute access outside of block

// if(true){
//     let compname = "INFO"
// console.log("Accessing var inside the if block",compname)
// }
// console.log("Accessing var outside the if block" ,compname)

//const-- should not allowed to execute ouside the block

// if(true){
//     const compname = "INFO"
// console.log("Accessing var inside the if block",compname)
// }
// console.log("Accessing var outside the if block" ,compname)



//Introducing Function Scope


//var let const is function scope it allows to call it within the function only
//let const is allowed within if block

function greet(){
    var message ="Hello Team"
    console.log(message)
}

// console.log(message)