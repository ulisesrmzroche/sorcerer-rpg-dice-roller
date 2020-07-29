const calculateVictories = (winner, playerRoll, oppRoll) => {
  let winnerRoll = winner === 'playerRoll' ? playerRoll : oppRoll
  let loserRoll = winner === 'playerRoll' ? oppRoll : playerRoll
  let loserMax = Math.max(...loserRoll)
  return winnerRoll.filter((roll)=>{
    if (roll > loserMax) {
      return roll
    }
  }).length
}

export default calculateVictories