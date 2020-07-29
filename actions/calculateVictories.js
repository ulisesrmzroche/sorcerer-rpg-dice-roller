import calculateWinner from './calculateWinner'

const calculateVictories = (playerRoll, oppRoll) => {
  let winner = calculateWinner(playerRoll, oppRoll)
  winner = winner === 'playerRoll' ? playerRoll : oppRoll
  let loser = winner === 'playerRoll' ? oppRoll : playerRoll
  let loserMax = Math.max(...loser)
  let victories = winner.filter((roll)=>{
    if (roll > loserMax) {
      return roll
    }
  })
  return victories.length
}

export default calculateVictories