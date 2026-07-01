let arr = [1,2,3,4,5];

let print = function(ele) {
    console.log(ele);
}
arr.forEach(print);

console.log("OR");

arr.forEach(function(el) {
    console.log(el);
});

console.log("OR");

arr.forEach( (el) => {
    console.log(el);
});

let objArr = [
    {
        name: "Tarique",
        age : 23,
    },
    {
        name: "Sajid",
        age : 24,
    },
    {
        name: "Saqib",
        age : 25,
    },
];

objArr.forEach((student) => {
    console.log(student);
    console.log(student.name);
});
  console.log("---------------------Map Function-----------------------");

// Map function
let Arr = [1, 2 , 3 , 4 , 5];
console.log("Original Value : ",Arr);
let double = Arr.map( (ele) => {
    return ele*2;
});
console.log("Double Value : ",double);

let students = [
    {
        name: "Tarique",
        marks : 97.1,
    },
    {
        name: "Sajid",
        marks : 94.7,
    },
    {
        name: "Saqib",
        marks : 95,
    },
];
let gpa = students.map( (Ele) => {
    return Ele.marks/10;
});
console.log(gpa);

        console.log("---------------------Filter Function-----------------------");

let nums = [1 , 2 , 3 , 4 , 5 , 7 , 8 , 12 , 10 , 13];
console.log("Original Array of Numbers : ", nums);
let ans = nums.filter( (ele) => {
    return ele%2 == 0;  // even -> true & odd -< false
});
console.log("Even numbers :",ans);

let Ans = nums.filter( (ele) => {
    return ele%2 != 0;
});
console.log("Odd numbers :",Ans);

         console.log("---------------------Every Function-----------------------");

let evry = [1 , 5 , 7 , 23 ,3];
console.log("Original Given Array : " ,evry);

let rslt = evry.every( (ele) => {
    return ele%2 == 0;
});
console.log("All elements are Evene ? ",rslt);

         console.log("---------------------Reduse Function-----------------------");

let numbers = [1 , 2 , 3 , 4];
let finalValue = numbers.reduce( (res , ele) => res+ele);
console.log(finalValue);

        console.log("---------------------using Reduse Function maximum in array-----------------------");

let Arry = [1 , 2 , 3 , 5 , 111 , 8 , 6 ,4 , 7];
// let max = -1;
//     for(let i=0 ; i<Arry.length ; i++){
//         if(max < Arry[i]){
//             max = Arry[i];
//     }
// }
// console.log(max);

// using reduce
let finalmax = Arry.reduce( (max , ele) => {
    if(max < ele){
        return ele;
    }
    else {
        return max;
    }
});
console.log(finalmax);

console.log("---------------------In Array all elements are mult of 10 or not -----------------------");

let EArray = [10 , 20 , 30 , 40];
console.log(EArray);
let check = EArray.every( (ele) => ele%10 == 0);
console.log(check);

console.log("---------------------Find Minimum Number in Array-----------------------");

let MArray = [10 , 20 , 30 , 40];
let min = MArray.reduce( (min , ele) => {
    if(min < ele){
        return min;
    }
    else{
        return ele;
    }
});
console.log(min);

        console.log("---------------------Default Parameter-----------------------");

function sum(a , b = 2){
    return a+b;
};
console.log(sum(1,5));
console.log(sum(1));   // Automatic taken b=2 which set as default
console.log(sum(5));

        console.log("---------------------Spread-----------------------");

let SArray = [1,5,8,6,4,6,2,1,3,0,5,6,0,58,0,8,8,9,1];
console.log("Seprate Element of the Array :", ...SArray);
console.log("Minimum :",Math.min(...SArray)); // use of Spread(...)
SArray.push(-111);
console.log("Minimum :",Math.min(...SArray)); // use of Spread(...)
console.log("Maximum :",Math.max(...SArray)); // use of Spread(...)

        console.log("---------------------Spread(Array Literals)-----------------------");

let arrr = [1,8,5,5,6,4,9,5];
let NewArr = [...arrr];
console.log("Copy of original Array: " ,NewArr);

let char = "Mohammad Tarique";
let NewChar = [...char]; 
console.log("Copy of original Array: " ,NewChar);

          console.log("---------------------Spread(Array Literals)-----------------------");

const data = {
    email: "mohd@gmail.com",
    pass: "abcd",
};
const CopyData =  {...data , id:1230};
console.log("Copy of Original data :",CopyData );

        console.log("---------------------Rest(Opposite to Spread)-----------------------");

function sum(...args) {
    // Arguments
    for(i=0 ; i<args.length ; i++){
        console.log("You gave Us ", args[i]);
    }
};
console.log(i);

        console.log("---------------------Destructuring-----------------------");

let names = ["Tarique" , "Sajid" , "Saqib" , "Ahmad" , "x" , "y" , "z"];

// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner ,  runnerup , secondRunnerup , ...others] = names;
console.log(winner , runnerup , secondRunnerup);
console.log("Store remainings :", ...others);

         console.log("---------------------Destructuring(Object)-----------------------");

const stdnts = {
        name:"Qulsum",
        age: 10,
        class: 4,
        subjects: ["Hindi" , "English" , "Urdu"],
        username: "qulsum@123",
        password: "abcd"
};
let {username , password:Secret} = stdnts;  // Destructuring(Object)
console.log("User Name :",username , "& Password : ", Secret);