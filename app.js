 let score = {
            win: 0,
            tie: 0,
            lose: 0,
        }
        
    function generateComputerChoise(){
     let randomNumber = Math.random() * 3;
     if (randomNumber >= 0 && randomNumber <= 1) {
        return 'Stone';
     } else if (  randomNumber > 1 && randomNumber <= 2) {
        return 'Paper';
     } else {
        return 'Scissor';
     }  
    }

    function getResult(userMove , computerMove){
        if(userMove === 'Stone'){
            if (computerMove === 'Stone'){
                score.tie++;
                return`Its a tie`;
            } else if (computerMove === 'Paper'){
                score.lose++;
              return`Computer won`;
            } else {
                score.win++;
              return`User won`;
            }

        } else if (userMove === 'Paper'){
            if (computerMove === 'Stone'){
                score.win++;
                return`User won`;
            } else if (computerMove === 'Paper'){
                score.tie++;
                return`Its a tie`;
            } else {
                score.lose++;
                return `Computer Won`;
            }
        
        } 
        else if (userMove === 'Scissor'){
            if(computerMove === 'Stone'){
                score.lose++;
                return`Computer Won`;
            } else if (computerMove === 'Paper'){
                score.win++;
                return`User won`;
            }else {
                score.tie++;
                return`Its a tie`;
            }
            
        }
       
    }

    function showResult(userMove, computerMove , result){
        console.log(score);      
        document.querySelector('#result').innerHTML =
        `<h2>You have chosen ${userMove} !!</h2>
        <P> Computer choise is ${computerMove} </P>
         <h2> ${result}</h2>
        [ Won:${score.win} | Lose:${score.lose} | Tie:${score.tie} ]`;

    }