/* FUN ROCK PAPER SCISSOR GAME CODECADEMY PROJECT*/

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb'){
      return userInput;
    } 
    else {
      console.log('error!');
    }
  
  
  };
  function getComputerChoice() {
   const randomNumber= Math.floor(Math.random() * 3);
    
    switch (randomNumber)
    {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissor';
      default:
      console.log('error!!');
    }
  }
  
  function determineWinner(userChoice,computerChoice) {
    if(userChoice === computerChoice)
    {
    return "It's a Tie";
    }
    else if (userChoice ==='rock' && computerChoice=== 'paper')
    {
    return "Woho! The computer won.";
    }
    else if (userChoice ==='paper'&& computerChoice=== 'scissors')
    {
    return "Woho! The computer won.";
    }
    else if (userChoice==='scissors'&& computerChoice ==='rock')
    {
    return "Woho! The computer won.";
    }
    else if (userChoice==='bomb')
    {
      return "yipee! you got the secret cheat code! you won!";
    }
    else{
    return "Woho! The user won.";
  }
  
  
  }
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  };
  
  playGame();
  