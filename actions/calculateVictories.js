import calculateWinner from './calculateWinner'

const calculateVictories = (playerPool = [], oppPool = []) => {
  if (!playerPool.length && !oppPool.length) return 0
  let winner = calculateWinner(playerPool, oppPool)
  if (!winner) return 0

  let playerMax = Math.max(...playerPool)
  let oppMax = Math.max(...oppPool)

  const isDraw = playerMax === oppMax

  if (isDraw) {
    // remove the highest number from both arrays
    playerPool = playerPool.filter((roll)=>{
      return roll !== playerMax
    })
    oppPool = oppPool.filter((roll)=>{
      return roll !== oppMax
    })
    return calculateVictories(playerPool, oppPool)
  } else {
    winner = calculateWinner(playerPool, oppPool)
    let winnerRoll = winner === 'playerRoll' ? playerPool : oppPool 
    let loserRoll = winner === 'playerRoll' ? oppPool : playerPool 
    let loserMax = Math.max(...loserRoll)

    return winnerRoll.filter((roll)=>{
      if (roll > loserMax) {
        return roll
      }
    }).length
  }
}

export default calculateVictories