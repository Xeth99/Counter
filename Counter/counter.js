const dZero = document.getElementById('p1cont');

let newCount = 0;

function increment(){
    if (newCount >= 0 && newCount < 100) {
        newCount++;
    }
    else{
        console.log("0");
    }
    dZero.innerHTML = newCount;
} 


function decrease(){
    if (newCount >= 1 && newCount <= 100) {
        newCount--;
    }
    else{
        console.log("error")
    }
    dZero.innerHTML = newCount;
}








// const countEl = document.getElementById('p1cont');

// let count = 0;

// function increment() {
//     if (count >= 0 & count < 100) {
//         count++;
//     }else{
//         console.log('error');
//     }
//     countEl.textContent = count;
// }


// function decrease(){
//     if(count >= 1 && count < 100){
//         count --;
//     }
//     else{
//         console.log("error")
//     }
//     countEl.innerHTML = 'femi';
// }

