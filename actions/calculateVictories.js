import calculateWinner from './calculateWinner'

const calculateVictories = (playerPool = [], oppPool = []) => {
  let winner = calculateWinner(playerPool, oppPool)
  let winnerRoll = winner === playerPool ? playerPool : oppPool 
  let loserRoll = winner === playerPool ?  oppPool :playerPool 
  let loserMax = Math.max(...loserRoll)
  return winnerRoll.filter((roll)=>{
    if (roll > loserMax) {
      return roll
    }
  }).length
}

export default calculateVictories