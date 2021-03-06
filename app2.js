let startButton = document.querySelector('.start');
let timer = document.querySelector('.timer');
let ran1 = document.querySelector('.ran1');
let ran2 = document.querySelector('.ran2');
let arithmetic = document.querySelector('.arithmetic');

let options = [];
let choices = [];

let score = 0;
document.querySelector('.score').innerHTML = score

let highestScore = 0;
document.querySelector('.highScore').innerHTML = highestScore

let time = 59;
timer.innerHTML = time;
let countDown;
let randomNumber;


arithmetic.innerHTML = '/'

function start(){
    score = 0;
    document.querySelector('.score').innerHTML = score;
    
    for(s=0; s<4; s++){
        document.getElementsByClassName('option-box')[s].classList.remove('wrong-answer')
        document.getElementsByClassName('option-box')[s].classList.remove('correct-answer')
    }

    options = [];
    choices = [];

    if(startButton.innerHTML === 'START GAME'){
        startButton.innerHTML = 'STOP'
        startButton.style.color = '#f84646'

        let num1 = Math.floor(Math.random()* 70)+2;
        let num2 = Math.floor(Math.random()* num1)+2;

        let remainer = num1 % num2;

        let correctAnswer = num1 / num2
        let check = () =>{
            if(remainer > 0 || num1 === num2 || correctAnswer === 2){
                num1 = Math.floor(Math.random()* 70)+2;
                num2 = Math.floor(Math.random()* num1)+2;
                remainer = num1 % num2;
                correctAnswer = num1 / num2
                check()
            } else {
                ran1.innerHTML = num1
                ran2.innerHTML = num2
            }
        }

        check()

        options.push(correctAnswer)

        for(i=0; i<3; i++){
            let wrong = Math.floor(Math.random() * correctAnswer)+5;
    
            //Loop to check if ${wrong} already exists in the options array. if it does, then it'll random again
            function check(){
                for(j=0; j<options.length; j++){
                    if(options[j] === wrong || wrong === correctAnswer){
                        wrong = Math.floor(Math.random() * correctAnswer)+5;
                        check()
                    } 
                }
            }//
            check()
            options.push(wrong);
        }

        console.log(options)

       let ranOption = Math.floor(Math.random() * options.length);
        choices.push(options[ranOption])

        for(k=0; k<3; k++){
            let ranOption = Math.floor(Math.random() * options.length);

            function check2(){
                for(l=0; l<choices.length; l++){
                    if(options[ranOption] === choices[l]){
                        ranOption = Math.floor(Math.random() * options.length);
                        check2()
                    } else {
                        continue;
                    }
                }
            }
            check2();
            choices.push(options[ranOption])
        }
        console.log(choices)


        for(m=0; m<choices.length; m++){
            document.getElementsByClassName('option')[m].innerHTML = choices[m]
        }

        for(r=0; r<choices.length; r++){
            if(correctAnswer === choices[r]){
                document.getElementsByClassName('option-box')[r].classList.add('correct-answer')
            } else{
                document.getElementsByClassName('option-box')[r].classList.add('wrong-answer')
            }
        }

        for(t=0; t<3; t++){
            document.getElementsByClassName('wrong-answer')[t].addEventListener('click', next)
        }

        document.getElementsByClassName('correct-answer')[0].addEventListener('click', increaseScore)

        countDown = setInterval(setTimer, 1000);

        //Timer number setInterval
        function setTimer(){
            time--
            if(time<10){
                time = '0'+time
            }

            if(time === '00'){
                function stopTimer(){
                    clearInterval(countDown)
                    startButton.innerHTML = 'END'
                    alert( 'Timer ran out',)
                    alert('Your score = '+score)
                }
                for(p=0; p<4; p++){
                    document.getElementsByClassName('option-box')[p].removeEventListener('click', next)
                    document.getElementsByClassName('option-box')[p].removeEventListener('click', increaseScore)
                }
                if(score > highestScore){
                    highestScore = score
                    document.querySelector('.highScore').innerHTML = highestScore
                }
                stopTimer()
            }

            timer.innerHTML = time;
        }
        setTimer()
    } else {
        function stopTimer(){
            clearInterval(countDown)
        }

        stopTimer()
        time = 59;
        timer.innerHTML = time
        arithmetic.innerHTML = '/'

        startButton.innerHTML = 'START GAME'
        startButton.style.color = 'black'

        for(p=0; p<4; p++){
            document.getElementsByClassName('option')[p].innerHTML = p
            document.getElementsByClassName('option-box')[p].removeEventListener('click', next)
            document.getElementsByClassName('option-box')[p].removeEventListener('click', increaseScore)
        }

        ran1.innerHTML = 9
        ran2.innerHTML = 3

    }
}

startButton.addEventListener('click', start);






function next(){
    for(s=0; s<4; s++){
        document.getElementsByClassName('option-box')[s].removeEventListener('click', next)
        document.getElementsByClassName('option-box')[s].removeEventListener('click', increaseScore)
        document.getElementsByClassName('option-box')[s].classList.remove('wrong-answer')
        document.getElementsByClassName('option-box')[s].classList.remove('correct-answer')
    }


    options = [];
    choices = [];

    let arr = [division, substraction]

    let ranArr = Math.floor(Math.random() * arr.length)

    arr[ranArr]()

    
}



function increaseScore(){
    next()
    setTimeout(function(){
        score = score + 10
        document.querySelector('.score').innerHTML = score
        console.log(score)
    },900)
}



//x and +
// / and -






//Funtion declaration

function division(){
    arithmetic.innerHTML = '/';
    
    let num1 = Math.floor(Math.random()* 70)+2;
    let num2 = Math.floor(Math.random()* num1)+2;

    let remainer = num1 % num2;

    let correctAnswer = num1 / num2
    let check4 = () =>{
        if(remainer > 0 || num1 === num2 || correctAnswer === 2){
            num1 = Math.floor(Math.random()* 70)+2;
            num2 = Math.floor(Math.random()* num1)+2;
            remainer = num1 % num2;
            correctAnswer = num1 / num2
            check4()
        } else {
            ran1.innerHTML = num1
            ran2.innerHTML = num2
        }
    }

    check4()

    options.push(correctAnswer)

    for(i=0; i<3; i++){
        let wrong = Math.floor(Math.random() * correctAnswer)+5;

        //Loop to check if ${wrong} already exists in the options array. if it does, then it'll random again
        function check(){
            for(j=0; j<options.length; j++){
                if(options[j] === wrong || wrong === correctAnswer){
                    wrong = Math.floor(Math.random() * correctAnswer)+5;
                    check()
                } 
            }
        }//
        check()
        options.push(wrong);
    }

    console.log(options)

    let ranOption = Math.floor(Math.random() * options.length);
    choices.push(options[ranOption])

    for(k=0; k<3; k++){
        let ranOption = Math.floor(Math.random() * options.length);

        function check2(){
            for(l=0; l<choices.length; l++){
                if(options[ranOption] === choices[l]){
                    ranOption = Math.floor(Math.random() * options.length);
                    check2()
                } else {
                    continue;
                }
            }
        }
        check2();
        choices.push(options[ranOption])
    }
    console.log(choices)


    for(m=0; m<choices.length; m++){
        document.getElementsByClassName('option')[m].innerHTML = choices[m]
    }


    for(r=0; r<choices.length; r++){
        if(correctAnswer === choices[r]){
            document.getElementsByClassName('option-box')[r].classList.add('correct-answer')
        } else{
            document.getElementsByClassName('option-box')[r].classList.add('wrong-answer')
        }
    }

    for(t=0; t<3; t++){
        document.getElementsByClassName('wrong-answer')[t].addEventListener('click', next)
    }

    document.getElementsByClassName('correct-answer')[0].addEventListener('click', increaseScore) 

}


function substraction(){
    arithmetic.innerHTML= '-';

    let num1 = Math.floor(Math.random() * 49)+3
    let num0 = num1 - 3
    let num2 = Math.floor(Math.random() * num0)
    

    ran1.innerHTML = num1
    ran2.innerHTML = num2

    let correctAnswer = num1 - num2

    options.push(correctAnswer)

    for(i=0; i<3; i++){
        let wrong = Math.floor(Math.random() * correctAnswer)+5;

        //Loop to check if ${wrong} already exists in the options array. if it does, then it'll random again
        function check(){
            for(j=0; j<options.length; j++){
                if(options[j] === wrong || wrong === correctAnswer){
                    wrong = Math.floor(Math.random() * correctAnswer)+5;
                    check()
                } 
            }
        }//
        check()
        options.push(wrong);
    }

    console.log(options)

    let ranOption = Math.floor(Math.random() * options.length);
    choices.push(options[ranOption])

    for(k=0; k<3; k++){
        let ranOption = Math.floor(Math.random() * options.length);

        function check2(){
            for(l=0; l<choices.length; l++){
                if(options[ranOption] === choices[l]){
                    ranOption = Math.floor(Math.random() * options.length);
                    check2()
                } else {
                    continue;
                }
            }
        }
        check2();
        choices.push(options[ranOption])
    }
    console.log(choices)


    for(m=0; m<choices.length; m++){
        document.getElementsByClassName('option')[m].innerHTML = choices[m]
    }


    for(r=0; r<choices.length; r++){
        if(correctAnswer === choices[r]){
            document.getElementsByClassName('option-box')[r].classList.add('correct-answer')
        } else{
            document.getElementsByClassName('option-box')[r].classList.add('wrong-answer')
        }
    }

    for(t=0; t<3; t++){
        document.getElementsByClassName('wrong-answer')[t].addEventListener('click', next)
    }

    document.getElementsByClassName('correct-answer')[0].addEventListener('click', increaseScore) 


}
