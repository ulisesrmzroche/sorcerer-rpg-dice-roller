import calculateWinner from './calculateWinner'

const calculateVictories = (playerRoll, oppRoll) => {
  let winner = calculateWinner(playerRoll, oppRoll)
  console.log('w', winner)
  winner = winner === 'playerRoll' ? playerRoll : oppRoll
  console.log('w', winner)
  let loser = winner === 'playerRoll' ? oppRoll : playerRoll
  let loserMax = Math.max(...loser)
  let victories = winner.map((roll)=>{
    if (roll > loserMax) {
      return roll
    }
  })
  return victories.length
}

export default calculateVictories