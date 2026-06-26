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

for ( let k=1 ; k>=0 ; k++);
for ( let k=1 ; k<=5 ; k--);
for ( let k=1 ;  ; k++);

                                        // Multiplication Table //

// for ( let m=5; m<=50 ; m=m+5){
//     console.log(m);
// }
let n = prompt("Enter number to print Table");
n = parseInt(n);
for ( let l=n ; l<=n*10 ; l=l+n){
    console.log(l);
}

                                        // Nested Loop //

for(let p=1 ; p<=3 ; p++){
    for(let q=1 ; q<=3 ; q++){
        console.log(q);
    }
}