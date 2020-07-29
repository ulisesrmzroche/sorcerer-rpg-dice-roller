const calculateWinner = (playerRoll, oppRoll) => {
  const playerRollMax = Math.max(...playerRoll)
  const oppRollMax = Math.max(...oppRoll)
  if (playerRollMax > oppRollMax) {
    return 'playerRoll'
  } else if (oppRollMax > playerRollMax) {
    return 'oppRoll'
  } else {
    if (playerRoll.length === 1 || oppRoll.length === 1) return false;
    playerRoll = playerRoll.filter((e)=>{
      return e !== playerRollMax
    })
    oppRoll = oppRoll.filter((e)=>{
      return e !== oppRollMax
    })
    return calculateWinner(playerRoll, oppRoll)
  }
}

export default calculateWinner