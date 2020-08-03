import calculateWinner from '../calculateWinner'

describe('Actions::calculateWinner', ()=>{
  it('should return winner given playerRoll has largest single die', ()=>{
    const playerRoll = [4, 3, 6]
    const oppRoll = [2, 5, 5]
    expect(calculateWinner(playerRoll, oppRoll)).toBe('playerRoll')
  })

  it('should return oppRoll given oppRoll has largest single die', ()=>{
    const playerRoll = [4, 3, 6]
    const oppRoll = [9]
    expect(calculateWinner(playerRoll, oppRoll)).toBe('oppRoll')
  })

  it('should return winner given one player has no dice left in the pool and the other one has at least 1 left', ()=>{
    const playerRoll = []
    const oppRoll = [9]
    expect(calculateWinner(playerRoll, oppRoll)).toBe('oppRoll')
  })
  it('should not return a winner return playerRoll given playerRoll has no dice left and oppRoll has at least 1 left', ()=>{
    const playerRoll = [1]
    const oppRoll = []
    expect(calculateWinner(playerRoll, oppRoll)).toBe('playerRoll')
  })
  it('should return null given a total draw', ()=>{
    const playerRoll = [1]
    const oppRoll = [1]
    expect(calculateWinner(playerRoll, oppRoll)).toBe(null)
  })


  describe('given a draw', ()=>{
    const playerRoll = [7, 9, 2]
    const oppRoll = [9, 1]
    it('should return a winner playerRoll given following dice pools', ()=>{
      expect(calculateWinner(playerRoll, oppRoll)).toBe('playerRoll')
    })
    it('should return a winner with 4 victories given following dice pools', ()=>{
      const playerRoll = [4, 5, 4, 9, 10]
      const oppRoll = [10, 2, 1]
      expect(calculateWinner(playerRoll, oppRoll)).toBe('playerRoll')
    })
    it('should return a winner with 4 victories given following dice pools', ()=>{
      const playerRoll = [8, 7, 8, 6]
      const oppRoll = [5, 3, 5, 2, 7]
      expect(calculateWinner(playerRoll, oppRoll)).toBe('playerRoll')
    })
    it('should return null given the following dice pools: [1], [1]', ()=>{
      const playerRoll = [2]
      const oppRoll = [2]
      expect(calculateWinner(playerRoll, oppRoll)).toBe(null)
    })
  })

})