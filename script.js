const selectionButtons = document.querySelectorAll('[data-selection]')
const lastColumn = document.querySelector('[data-last-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const playerScoreSpan = document.querySelector('[data-player-score]')
const SELECTIONS = [
{
  name: 'rock',
  emoji: '🗿',
  beats: 'scissors'
},
{
  name: 'paper',
  emoji: '🧻',
  beats: 'rock'
},
{
  name: 'scissors',
  emoji: '✂️',
  beats: 'paper'
}
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})





function clearText() {
  const announcementDiv = document.getElementById("announceWinnerDiv")
    const removeAnnouncementElement  = announcementDiv.querySelector("h1");
    removeAnnouncementElement .remove()
    // removeAnnouncementElement.innerText = ""
}



function makeSelection(selection) {
  const computerSelection = randomSelection()
  // const playerSelection = selection
  const playerWin = isWinner(selection, computerSelection)
  const computerWin = isWinner(computerSelection, selection)
  addSelectionResult(computerSelection, computerWin)
  addSelectionResult(selection, playerWin)
  if (playerWin) incrementScore(playerScoreSpan)
  if (computerWin) incrementScore(computerScoreSpan)


  // Set timeout for 1 seconds
// then clear the text

    function announcer() {
    const announcementDiv = document.getElementById("announceWinnerDiv")
    const newAnnouncementElement  = document.createElement("h1");
    const playerWin = isWinner(selection, computerSelection)
      if (playerWin) {

        newAnnouncementElement.innerText = "You won";
        announcementDiv.appendChild(newAnnouncementElement);
        // console.log(newAnnouncementElement.innerText)

      } if (computerWin) {
        newAnnouncementElement.innerText = "You lost";
        announcementDiv.appendChild(newAnnouncementElement);
        // console.log(newAnnouncementElement.innerText);
      } else {
        newAnnouncementElement.innerText = "It's a tie";
        announcementDiv.appendChild(newAnnouncementElement);

      }


    }
  announcer()
  window.setTimeout(clearText, 1000);

}





function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-history')
  if (winner) div.classList.add('winner')
  lastColumn.after(div)
}


function isWinner(selection, opponentSelection) {

  return selection.beats === opponentSelection.name

}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}
