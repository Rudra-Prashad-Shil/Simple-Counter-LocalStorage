document.getElementById('btn-count').addEventListener('click',function(){
    let number = parseInt(document.getElementById('counter').innerText);
    number++;
    document.getElementById('counter').innerText = number;
    getFromLocSto(number);
})

document.getElementById('btn-reset').addEventListener('click',function(){
    document.getElementById('counter').innerText = 0;
    getFromLocSto(0);
})

// const locSto = () => {
//     let n;
//     const counter = localStorage.getItem('Number');
//     if(counter){
//         n = '0';
//         n = JSON.parse(counter);
//     }

//     return n;
// }

const getFromLocSto = (number) => {
    // let theNumber = locSto();
    localStorage.setItem('Number',number);
    document.getElementById('counter').innerText = number;
}

getFromLocSto(localStorage.getItem('Number') ? localStorage.getItem('Number') : 0);