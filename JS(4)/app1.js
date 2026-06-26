                                              // ARRAY //

let students = ["Tarique","Ahmad","Sajid","Saqib"];
console.log(students);

                                              //Visualizing Array//

let nums = [2 , 4 , 6 , 8];
console.log(students[2] , nums[2]);

                                              // Creating Array//

let info = ["Tarique" , 23 , 89.10];
console.log(info);
let empArr  = [];
console.log(empArr );

                                             // Arrays are Mutable //

let Name = ["Rohit", "Hariah", "Atif"];
Name[1] = "Tarique";
Name[11] = "Sharique";
console.log(Name);

                                             // Array Methods //

//push//
let cars = ["bmw" , "audi" , "xuv" , "maruti"];
console.log(cars);
console.log(cars.push("toyota") , cars);
//po//
console.log(cars.pop("toyota") , cars);
//unshift//
console.log(cars.unshift("ferari") , cars);
// shift //
console.log(cars.shift(), cars);


                                            //Concatination Method //

console.log(students.concat(cars));

                                            // Reverse Method //

console.log(students.reverse());

                                             // Slice Method //

console.log(students.slice(2));
console.log(students.slice(2,3));
console.log(students.slice(-2));
 
                                             // Splice Method //

let colours = ["red" ,"yellow" ,"blue" ,"orange", "pink", "white"];
console.log(colours.splice(4));                  // deleted items
console.log(colours);                            // remaining items

console.log(colours.splice(0,1));                // deleted items(from index 0 one item delete)
console.log(colours);                            // remaining items
console.log(colours.splice(1,1));                // deleted items(from index 0 one item delete)
console.log(colours);                            // remaining items


console.log(colours.splice(0,0,"sky","light pink"));                  // deleted items(from index 0 no item delete and add sky & lightpink)
console.log(colours);                                                 // remaining items

                                                  // Sort Methods//

console.log("After Sorted the Array of colours :" , colours.sort());

                                                  // Array Refrences //

let array = ["a" , "b"];
let arrCopy = array;
console.log(arrCopy);
arrCopy.push('c');
console.log(array);
console.log(array == arrCopy);

                                                  // Nested Array //

let num = [[2,4], [3,6,9], [4,8]];
console.log(num);
console.log(num.length);
console.log(num[0]);
console.log(num[1].length);
console.log(num[1][2]);