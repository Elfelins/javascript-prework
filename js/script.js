function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  let playerMove;
  if(argButtonName == '1'){
      playerMove = 'Rock';
  }else if(argButtonName == '2'){
      playerMove = 'Paper';
  }else if(argButtonName == '3'){
      playerMove = 'Scissors';
  }     
  console.log('ruch gracza to: ' + playerMove);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  let computerMove;
  if(randomNumber == '1'){
      computerMove = 'Rock';
  }else if(randomNumber == '2'){
      computerMove = 'Paper';
  }else if(randomNumber == '3'){
      computerMove = 'Scissors';
  }      
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if ((argPlayerMove == 'Rock' && argComputerMove == 'Scissors') || (argPlayerMove == 'Scissors' && argComputerMove == 'Paper')  || (argPlayerMove == 'Paper' && argComputerMove == 'Rock') ) {
    printMessage('Wygrywasz!');
  } else if(argPlayerMove == argComputerMove ){
    printMessage('Remis!');  
  }else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

let buttonRock = document.getElementById('button-rock');
let buttonPaper = document.getElementById('button-paper');
let buttonScissors = document.getElementById('button-scissors');
buttonRock.addEventListener('click', function(){ buttonClicked('1'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('2'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('3'); });
