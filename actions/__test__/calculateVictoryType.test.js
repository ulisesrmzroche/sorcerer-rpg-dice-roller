import calculateVictoryType from '../calculateVictoryType'

describe('Actions#calculateVictoryType', ()=>{
  it('should return a draw given zero victories', ()=>{
    let victoryType = calculateVictoryType(0, 10)
    expect(victoryType).toBe('Draw')
  })
  it('should return a close win given 1 victory', ()=>{
    let victoryType = calculateVictoryType(1, 10)
    expect(victoryType).toBe('Close Win')
  })
  it('should return a solid win given 2 or 3 victories', ()=>{
    let victoryType = calculateVictoryType(2, 10)
    expect(victoryType).toBe('Solid Win')
    victoryType = calculateVictoryType(3, 10)
    expect(victoryType).toBe('Solid Win')
  })
  it('should return total domination given 4 or more victories', ()=>{
    let victoryType = calculateVictoryType(4, 10)
    expect(victoryType).toBe('Total Domination')
    victoryType = calculateVictoryType(5, 10)
    expect(victoryType).toBe('Total Domination')
  })
  it('should return total victory given victoires equal dice pool', ()=>{
    let victoryType = calculateVictoryType(10, 10)
    expect(victoryType).toBe('Total Victory')
  })
})