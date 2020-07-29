import calculateWinner from '../calculateWinner'

describe('Actions::calculateWinner', ()=>{
  it('should return winner given playerRoll has largest single die', ()=>{
    const playerRoll = [4, 3, 6]
    const oppRoll = [2, 5, 5]
    expect(calculateWinner(playerRoll, oppRoll)).toBe(playerRoll)
  })

  it('should return oppRoll given oppRoll has largest single die', ()=>{
    const playerRoll = [4, 3, 6]
    const oppRoll = [9]
    expect(calculateWinner(playerRoll, oppRoll)).toBe(oppRoll)
  })

  it('should return winner given one player has no dice left in the pool and the other one has at least 1 left', ()=>{
    const playerRoll = []
    const oppRoll = [9]
    expect(calculateWinner(playerRoll, oppRoll)).toBe(oppRoll)
  })
  it('should not return a winner return playerRoll given playerRoll has no dice left and oppRoll has at least 1 left', ()=>{
    const playerRoll = [1]
    const oppRoll = []
    expect(calculateWinner(playerRoll, oppRoll)).toBe(playerRoll)
  })
})