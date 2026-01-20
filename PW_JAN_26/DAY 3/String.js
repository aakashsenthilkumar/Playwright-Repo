// String Literal and object literal

// //String Literal --Stack memory is stored
// let compName=`Testleaf` //memory =100
// let FirName=`Testleaf` //memory =100
// console.log(compName===FirName); //true


//  //Object Literal --Heap memory stored

//  let compNameNew=new String(`Testleaf`) //memory =101
// let FirNameNew=new String(`Testleaf`) //memory =102
// console.log(compNameNew===FirNameNew); //false


//STring Methods:

//Escape Sequence:

// let Escseq = 'it\'s a regression testing';
// let esc="Hello \"World\""
// console.log(Escseq);
// console.log(esc);


//Concat method

// let testcase ="Create a new lead"
// let testcaseID =123

// let result = testcase.concat(testcaseID)
// console.log(result);

// let results = testcaseID.toString().concat(testcase)
// console.log(results);


// function funName(x){
//   let output =`There are ${x} Test Cases`
//   console.log(output);
  
// }
// let inpvalue = process.argv[2];
// funName(inpvalue)



let course =`Playwright`
//length()--> string values total count not get into index based values
console.log(course.length);

//CharAt()
console.log(course.charAt(5));

//indexOf()
console.log(course.indexOf("w"));

//Slice()--negative index allowed
console.log(course.slice(2,5));

console.log(course.slice(1,-5));//Negative Index allowed(Eg extension are determined)


//SubStrings method

console.log(course.substring(2,5));

console.log(course.substring(5,2)); //the above statement and this line are same output.

