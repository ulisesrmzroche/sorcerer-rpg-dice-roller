const calculateWinner = (playerRoll, oppRoll) => {
  if (!playerRoll.length || !oppRoll.length) {
    if (!playerRoll.length) {
      return 'oppRoll'
    }
    if (!oppRoll.length) {
      return 'playerRoll'
    }
    return
  }
  const playerRollMax = Math.max(...playerRoll)
  const oppRollMax = Math.max(...oppRoll)
  if (playerRollMax > oppRollMax) {
    return 'playerRoll'
  } else if (oppRollMax > playerRollMax) {
    return 'oppRoll'
  } else {
    playerRoll.shift()
    oppRoll.shift()
    return calculateWinner(playerRoll, oppRoll)
  }
}

export default calculateWinner