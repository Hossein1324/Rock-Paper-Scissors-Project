let score = JSON.parse( localStorage.getItem('score')) || {
    wins:0,
    loses:0,
    mosavi:0
};
scoreupdateElment();


/*
if (score === null) {
score = {
    wins:0,
    loses:0,
    mosavi:0
}
}
*/

let isAutoPlaying = false;
let intervaId;
function autoplay() {
    if (!isAutoPlaying) {
        intervaId  = setInterval(function() {
            const playerMove = pickcomputer();
            playGame(playerMove);
            
        } , 1000);
        isAutoPlaying = true;
    }else {
        clearInterval(intervaId);
        isAutoPlaying = false;
    }
}



function playGame (playerMove) {

const computerMove = pickcomputer();
let result ='';
if (playerMove==='scissors')   {
    if (computerMove==='Rock') {
  result = 'you lose';
  }
else if (computerMove==='paper') {
 result='you win';
 }
 else if (computerMove==='scissors')
 result = 'mosavi';
}
else if (playerMove==='paper') {
if (computerMove==='Rock') {
result = 'you win';
 }
else if (computerMove==='paper') {
    result='mosavi';
}
else if (computerMove==='scissors')
result = 'you lose';

      }
 
       else  if (playerMove==='Rock') {
            if (computerMove==='Rock') {
        result = 'mosavi';
    }
else if (computerMove==='paper') {
    result='you lose';
}
else if (computerMove==='scissors') {
    result = 'you win';
}

        };

        if (result==='you win') {
            score.wins +=1;
        }
        else if (result==='you lose') {
            score.loses +=1;
        }
        else if (result==='mosavi') {
            score.mosavi +=1;
        };

      localStorage.setItem('score', JSON.stringify( score));
      
       scoreupdateElment();
       document.querySelector('.js-result')
       .innerHTML= result;

       document.querySelector('.js-moves')
       .innerHTML= `You
<img src="images/js-cours/${playerMove}-emoji.png"  class="move-icon">
<img  src="images/js-cours/${computerMove}-emoji.png" class="move-icon" >
Computer`;
    }

      
       
function scoreupdateElment () {
    document.querySelector('.js-score')
        .innerHTML = `wins:${score.wins}, losese:${score.loses}, mosavi:${score.mosavi}`;
}



  
    function pickcomputer () {
        const randomnamber = Math.random();
        let computerMove ='';

if (randomnamber >= 0 && randomnamber < 1/3) {
    computerMove = ('Rock');
}
else if (randomnamber >= 1/3&& randomnamber < 1/2) {
computerMove = ('paper');
}
else if (randomnamber >=1/2 && randomnamber < 1) {
    computerMove = ('scissors');
}
return computerMove;
    };