import calculateWinner from './calculateWinner'

const calculateVictories = (playerRoll, oppRoll) => {
  let winner = calculateWinner(playerRoll, oppRoll)
  winner = winner === 'playerRoll' ? playerRoll : oppRoll
  let loser = winner === 'playerRoll' ? oppRoll : playerRoll
  let loserMax = Math.max(...loser)
  let victories = 0
  winner.forEach((roll)=>{
    if (roll > loserMax) {
      victories += 1
    }
  })
  return victories
}

export default calculateVictories