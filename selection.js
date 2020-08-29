//Set selection choice
let container0 = document.querySelector('.selection-container');
let selectionA = document.querySelector('.selectionA');
let mandA = document.querySelector('.m-and-a-questions');


let changePage = () => {
    container0.hidden = true;

    mandA.hidden = false;
}

selectionA.addEventListener('click', changePage)




//Change selection option inner html every 1sec
let selectionAInner = document.querySelector('.selectionA p');
let selectionBInner = document.querySelector('.selectionB p');


let arr = ['X and +', '3 X 2', '2 + 2'];
let arr2 = ['/ and -', '9 / 3', '5 - 2']


selectionAInner.innerHTML = arr[0];

let i=0;

let changeInnerA = ()=> {
    selectionAInner.innerHTML = arr[i];
    i++
    if(i === 3){
        i = 0
    }
}
setInterval(changeInnerA, 1400)


let n = 0
let changeInnerB = ()=> {
    selectionBInner.innerHTML = arr2[n];
    n++
    if(n === 3){
        n = 0
    }
}
setInterval(changeInnerB, 1800)

