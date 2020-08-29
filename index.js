let input = document.querySelector('.input');
let playButton = document.querySelector('.start-container button')

let check = () => {
    if(input.value.length > 4){
        playButton.disabled = false;
    } else{
        playButton.disabled = true;
    }
}


let startCheck = () => {
    setInterval(check , 1000)
}

input.addEventListener('click' , startCheck);
