const student = {
    name: "Tarique",
    age:23,
    marks:94.4,
    city:"Delhi"
};

const item ={
    price: 100.99,
    discount:10,
    colors:["red","pink"]
}; 

                        // An object literal for the properties of thread/twitter post//

console.log("------------------------------------------");
const post = {
    username:"@tarique",
    content:"This is my #firstPost",
    likes:150,
    reposts:5,
    tags:["@Zlq" , "delta"]
};
console.log(post);
console.log("------------------------------------------");

                                                // Get Value //
console.log("------------------------------------------");
const Tpost = {
    username:"@tarique",
    content:"This is my #firstPost",
    likes:150,
    reposts:5,
    tags:["@Zlq" , "delta"]
};
console.log(Tpost["username"]);      // using this method
console.log(Tpost.tags);             // using this method 
console.log("------------------------------------------");

                                                  // Conversion in Get Value //

console.log("------------------------------------------");
const obj = {
    1:"a",                // js (number , keyword sabko string me convert krke usko match krta hai ) //
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};
console.log(obj[1]); 
console.log(obj[null]); 
console.log("------------------------------------------");

                                                  // Add / Update Value //

console.log("------------------------------------------");
const stdnt = {
    name:"Tarique",
    age:23,
    marks:95.5,
    city:"Delhi"
};
console.log(stdnt);
stdnt.city="Mau";             // updating //
stdnt.gender="male";          // adding new property //
stdnt.marks=[93,94,96,98];    // updating //
delete stdnt.age;             // deleting
console.log(stdnt); 
console.log("------------------------------------------");

                                      // Nested Object(Object of Objects) //

console.log("------------------------------------------");
const classInfo ={
    Tarique:{
        garde:"A+",
        city:"Mau"
    },
    Saqib:{
        grade:"A",
        city:"Delhi"
    },
    Sajid:{
        grade:"A",
        city:"Azamgarh"
    },
    Ahmad:{
        grade:"A",
        city:"Aligarh"
    }
};
console.log("Class Info",classInfo);
console.log("Saqib",classInfo.Saqib);
console.log("Sajid",classInfo.Sajid);
console.log("Tarique",classInfo.Tarique.city);
console.log("Ahmad",classInfo.Ahmad.city);
console.log("------------------------------------------");

                                           // Array of Objects //

console.log("------------------------------------------");
const clsInfo =[
    {
        name:"Tarique",
        garde:"A+",
        city:"Mau"
    },
    {
        name:"Saqib",
        garde:"A+",
        city:"Delhi"
    },
    {
        name:"Sajid",
        garde:"O",
        city:"Azamgarh"
    }
];
console.log("Class Information",clsInfo);
console.log("Tarique",clsInfo[0]);
console.log("sajid",clsInfo[1]);
console.log("Saqib",clsInfo[2]);
console.log("Tarique",clsInfo[0].garde);
console.log("------------------------------------------");

                                            // Math Objects(Generating random Number) //

console.log("------------------------------------------");
let step1 = Math.random();
let step2 = step1*10;
let step3 = Math.floor(step2);
let step4 = Math.floor(step2)+1;
console.log(step4);
console.log("------------------------------------------");

               // Generate random number between 1 to 100 //
 
console.log("------------------------------------------");
console.log("Generate random number between 1 to 100");
let stp1 = Math.random();
let stp2 = stp1*100;
let stp3 = Math.floor(stp2);
let stp4 = Math.floor(stp2)+1;
console.log(stp4);
console.log("------------------------------------------");


               // Generate random number between 1 to 5 //
 
console.log("------------------------------------------");
console.log("Generate random number between 1 to 5");
let stP1 = Math.random();
let stP2 = stP1*10/2;
let stP3 = Math.floor(stP2);
let stP4 = Math.floor(stP2)+1;
console.log(stP4);
console.log("------------------------------------------");