const max = prompt("Enter the maximum number:");
console.log(max);

const random = Math.floor(Math.random()*max)+1;
let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("You are right! Congrats!!");
        break;
    }
    else{
        guess = prompt("Your guess was wrong.Please try again");
    }
}