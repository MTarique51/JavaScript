console.log("<---------------Call Stack------------------>")

function hello() {
    
console.log("Inside hello() function");
    console.log("Hello");
}

function demo() {
    
console.log("Calling hello() function");
    hello();
}

console.log("Calling demo() function");
demo();     

console.log("Done , Bye!");                                     

console.log("<--------------- Visualizing the Call Stack------------------>")

function one() {
    return 1;

}

function two() {
    return one() + one();
}

function three() {
    let answ = two() + one();
    console.log(answ);
}

three();        // final call 

console.log("<--------------- BreakPoints------------------>")
// it will be checked at browser in Resource Section

console.log("<--------------- JS is Single Threaded------------------>")

// this is a small check
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);

setTimeout(()=> {
    console.log("Mohammad Tarique");
}, 2000);
setTimeout(()=> {
    console.log("Hello World");
}, 2000);
console.log("hello...");

console.log("<---------------Callback Hell------------------>");
// Callbacks Nesting -----> Callback Hell

h1 = document.querySelector("h1")

    // setTimeout(()=> {
    //     h1.style.color = "Orange";
    // }, 1000);

    // setTimeout(()=> {
    //     h1.style.color = "blue";
    // }, 2000);

    // setTimeout(()=> {
    //     h1.style.color = "pink";
    // }, 3000);

    // setTimeout(()=> {
    //     h1.style.color = "black";
    // }, 4000);

           // OR

    // function ChangeColor(color , delay){
    //     setTimeout(()=> {
    //         h1.style.color = color;
    //     }, delay)
    // }

    // ChangeColor(("Orange") , 1000);
    // ChangeColor(("blue") , 2000);
    // ChangeColor(("pink") , 3000);
    // ChangeColor(("Black") , 4000);

                  // OR  

    function ChangeColor(color , delay , nextColorChange){
        setTimeout(()=> {
            h1.style.color = color;
            if(nextColorChange) nextColorChange();
        }, delay)
    }

    ChangeColor("Orange" , 1000 , () => {
        ChangeColor("blue", 1000 , () => {
            ChangeColor("pink" , 1000 , () => {
                ChangeColor("black" , 1000)
            });
        });
    });
