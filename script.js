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


function makeSelection(selection) {
  const computerSelection = randomSelection()
  // const playerSelection = selection
  const playerWin = isWinner(selection, computerSelection)
  const computerWin = isWinner(computerSelection, selection)
  addSelectionResult(computerSelection, computerWin)
  addSelectionResult(selection, playerWin)
  if (playerWin) incrementScore(playerScoreSpan)
  if (computerWin) incrementScore(computerScoreSpan)
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
