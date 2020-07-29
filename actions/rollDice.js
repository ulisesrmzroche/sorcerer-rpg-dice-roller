const rollDice = (playerDicePoolSize = 1, oppRollDicePoolSize = 1, dieSize = 10) => {
  const playerRoll = (()=>{
    let roll = []
    for (let index = 0; index < playerDicePoolSize; index++) {
      const dieRoll = Math.floor(Math.random() * dieSize + 1)
      roll.push(dieRoll)
    }
    return roll
  })()
  const oppRoll = (()=>{
    let roll = []
    for (let index = 0; index < oppRollDicePoolSize; index++) {
      const dieRoll = Math.floor(Math.random() * dieSize + 1)
      roll.push(dieRoll)
    }
    return roll
  })()
  return {
    playerRoll: playerRoll,
    oppRoll: oppRoll,
  }
}

export default rollDice