
     
      function playGame(guess){
        const randomNumber=Math.random();
        const result = randomNumber<0.5 ? 'heads' : 'tails'
         
        document.querySelector('.js-moves').innerHTML=`Coin Result:${result}`
       
       document.querySelector('.js-result').innerHTML=` Result: ${(guess === result ? 'you win!' : 'you lose!')}`}