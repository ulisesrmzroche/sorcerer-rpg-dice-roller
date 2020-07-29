import calculateWinner from './calculateWinner'
import calculateVictories from './calculateVictories'
import calculateVictoryType from './calculateVictoryType'

const calculateResult = (dieRolls) => {
  const { playerRoll, oppRoll } = dieRolls
  const winner = calculateWinner(playerRoll, oppRoll)
  const victories = calculateVictories(playerRoll, oppRoll)
  return {
    winner: winner,
    victories: victories,
    victoryType: calculateVictoryType(victories, winner === playerRoll ? playerRoll : oppRoll)
  }
}

export default calculateResult