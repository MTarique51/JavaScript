// let btn = document.querySelector("button");


// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async() => {
//     let link = await getImage();

//     let img = document.querySelector("#result");
//     img.setAttribute("src" , link);
//     console.log(link);
// });

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch (e) {
//         console.log("error - ", e);
//         return "No Image found";
//     }
// }


// btn.addEventListener("click", async() => {
//    let fact = await getFact();
//    console.log(fact);
//    let p = document.querySelector("#result");
//    p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch (e) {
//         console.log("error - ", e);
//         return "No fact found";
//     }
// }


//Sending Headers with API requests //
// const url = "https://icanhazdadjoke.com";

// async function getJokes() {
//     try {
//         const config = {headers: {Accept:"application/json"} };
//         let res = await axios.get(url , config);
//         console.log(res.data);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }


// Activity using Query Strings//
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);
    let collArr  = await getColleges(country);
    show(collArr);
});

function show(collArr) {
    for(coll of collArr) {
        console.log(coll.name);    // What requires//
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    }
    catch (e){
        console.log("error : ", e);
        return [];
    }
}