import calculateWinner from './calculateWinner'

const calculateVictories = (playerPool = [], oppPool = []) => {
  if (!playerPool.length || !oppPool.length) return false
  let playerMax = Math.max(...playerPool)
  let oppMax = Math.max(...oppPool)

  if (playerMax === oppMax) {
    // remove the highest number from both arrays
    if (playerPool.length) {
      playerPool = playerPool.filter((roll)=>{
        return roll !== playerMax
      })
    }
    if (oppPool.length) {
      oppPool = oppPool.filter((roll)=>{
        return roll !== oppMax
      })
    }
    return calculateVictories(playerPool, oppPool)
  } else {
    let winner = calculateWinner(playerPool, oppPool)
    console.log(winner)
    // let winner = calculateWinner(playerPool, oppPool)
    // let winnerRoll = winner === 'playerRoll' ? playerPool : oppPool 
    // let loserRoll = winner  !== 'playerPool' ?  oppPool : playerPool 
    // console.log('wroll', winnerRoll)
    // console.log('lroll', loserRoll)
    // let winnerMax = Math.max(...winnerRoll)
    // let loserMax = Math.max(...loserRoll)

    // return winnerRoll.filter((roll)=>{
    //   if (roll > loserMax) {
    //     return roll
    //   }
    // }).length
  }
}

export default calculateVictories