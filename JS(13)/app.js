console.log("<---------------Async Keyword---------------->");

// Async function return promise by default //
async function greet() {
    // throw "404 page not found.";
    return "hello!";
}
// console.log("Greet():",greet());

greet()
.then((result) => {
    console.log("Promise was resolved.");
    console.log("Result was:", result);
})
.catch((err) => {
    console.log("Promise was rejected with err", err);
});

let demo = async () => {
    return 5;
};
console.log(demo());

console.log("<----------------Await Keyword-----------------Handling Rejection---------------->");

function getNum() {
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function Demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
};
console.log(Demo());

// color chaging by using awaits
h1 = document.querySelector("h1");
function changeColor(color , delay) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            let num  = Math.floor(Math.random()*5)+1;
            if(num > 3){
                reject("promise rejected!");
            }
            h1.style.color = color;
            console.log(`color changed to , ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function Demo() {
    try{
        await changeColor("red" , 1000);
        await changeColor("yellow" , 1000);
        await changeColor("pink" , 1000);
        await changeColor("blue" , 1000);
        await changeColor("black" , 1000);
    }
    catch(err){
        console.log("Error has been Caught!");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("New number :", a+2);
}