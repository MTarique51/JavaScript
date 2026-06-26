                                        // For Loop //

for ( let i=1 ; i <= 5 ; i++){
    console.log(i);
}
for(let j=7 ; j>=1 ;j--){
    console.log(j)
}

                                        // print odd numbers //

for ( let k=1 ; k<=15 ; k=k+2){
    console.log(k);
}

                                        // print even number //

for ( let l=2 ; l<=10 ; l=l+2){
    console.log(l);
}

                                        // infinite loop //

// for ( let k=1 ; k>=0 ; k++);
// for ( let k=1 ; k<=5 ; k--);
// for ( let k=1 ;  ; k++);

                                        // Multiplication Table //

// for ( let m=5; m<=50 ; m=m+5){
//     console.log(m);
// }
console.log("Taking input to print Table");
let n = prompt("Enter number to print Table");
n = parseInt(n);
for ( let l=n ; l<=n*10 ; l=l+n){
    console.log(l);
}

                                        // Nested Loop //

for(let p=1 ; p<=3 ; p++){
     console.log(`outer loop ${p}`);
    for(let q=1 ; q<=3 ; q++){
        console.log(q);
    }
}

                                       // while loop//

console.log("While Loop");
let m=1;
while(m<=5){
    console.log(m);
    m++;
}

                                        // Guessing Correct //

const favMovei = "Avatar";
let guess = prompt("Guess my favorite Movie");

while((guess != favMovei) && (guess != "quit")){
    guess = prompt("Wrong Guess. Please try again");
}
if(guess== favMovei){
    console.log("Congrats!!");
}
else{
    console.log("You Quit!")
}

                                            // Break Keaword//

console.log("Break Keyword");                                            
let r=1;
while(r<=5){
    if(r==3){
        break;
    }
    console.log(r);
    r++;
}
console.log("We used Break At 3");

                                          // Loops with Array//

let fruits = ["Mango" , "Apple" , "Banana" , "Litchi" , "Graps"];
for(let f=0 ; f<=fruits.length ; f++){
    console.log(f , fruits[f]);
}

                                         // Loops with Nested Array//

let heroes = [
    ["ironmaan" , "spiderman" , "thor"],
    ["superman" , "wonder woman" , "flash"]
]
for(let s=0 ; s<=heroes.length ; s++){
    console.log(s , heroes[s] , heroes[s].length);
    for(let t=0 ; t<heroes[s].length ; t++){
        console.log(`t=${t} , ${heroes[s][t]}`);
    }
}