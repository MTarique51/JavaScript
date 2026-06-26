                                               // Trim Method //

let msg = "    Hello    ";
console.log(msg);
console.log(msg.trim());

                                              // toLowerCase & toUpperCase //

let name = "Tarique";
console.log(name.toLowerCase());
console.log(name.toUpperCase());

                                              // String Methods with Arguments{indexOf("")} //

let Str = "ILoveCoding";
console.log(Str.indexOf("Love"));
console.log(Str.indexOf("love"));
console.log(Str.indexOf("o"));
console.log(Str.indexOf("i"));
console.log(Str.indexOf("Z"));

                                              // Method Chaining //

let Msg = "     i  am Mohammad Tarique from Mau Uttar Pradesh      ";
let newMsg = Msg.toUpperCase().trim();
console.log(newMsg);

                                            // Slice Method {.slice(n,m)}//

let str = "MohammadTarique";
console.log(str.slice(2));
console.log(str.slice(8));
console.log(str.slice(2,8));
console.log(str.slice(8,13));
console.log(str.slice(-1));         // lenth - nth index

                                            // Replace & Repeat Method //

let s = " My name is Tarique";
console.log(s.replace("Tarique" , "Zalique"));
console.log(s);
console.log(s.replace("name","correct name"));
console.log(s.repeat(2));