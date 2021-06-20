let a = [1,3,5,6,7,9];
let b = [6,7,8,9,10];

// let b = [10,11,12,13,14];

// let a = [1,100,200];
// let b = [1,2,3,4,5,6,100,101,102,105,150,200];

// let counter = 0;
// // for(let i=0; i<a.length; i) {
// //     for(let j=0; j<b.length; j) {
// //         counter++;
// //         if(a[i]==b[j]) {
// //             console.log(a[i]);
// //             i++;
// //             j++;
// //         }
// //         else if(a[i]<b[j]) {
// //             i++;
// //         }
// //         else if(a[i]>b[j]) {
// //             j++;
// //         }
// //         console.log(i, j);
// //     }
// //     console.log("outer loop");
// // }

let i=0;
let j=0;
let counter = 0;
while(i<a.length && j<b.length) {
    if(a[i]==b[j]) {
        console.log(a[i]);
        i++;
        j++;
    }
    else if(a[i]<b[j]) {
        i++;
    }
    else if(a[i]>b[j]) {
        j++;
    }
    counter++;
}
console.log(`looped ${counter} times`)