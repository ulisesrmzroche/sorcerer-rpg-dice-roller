import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const rollDice = (playerDicePoolSize, oppRollDicePoolSize, dieSize = 10) => {
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

const calculateWinner = (playerRoll, oppRoll) => {
  if (!playerRoll.length || !oppRoll.length) {
    console.log('someone ran out of dice')
    if (!playerRoll.length) {
      console.log('player ran out of dice')
      return 'oppRoll'
    }
    if (!oppRoll.length) {
      console.log('opp ran out of dice')
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

const calculateVictories = (playerRoll, oppRoll) => {
  let winner = calculateWinner(playerRoll, oppRoll)
  console.log('w', winner)
  winner = winner === 'playerRoll' ? playerRoll : oppRoll
  console.log('w', winner)
  let loser = winner === 'playerRoll' ? oppRoll : playerRoll
  let loserMax = Math.max(...loser)
  let victories = winner.map((roll)=>{
    if (roll > loserMax) {
      return roll
    }
  })
  return victories.length
}

const calculateResult = (dieRolls) => {
  const { playerRoll, oppRoll } = dieRolls
  return {
    winner: calculateWinner(playerRoll, oppRoll),
    victories: calculateVictories(playerRoll, oppRoll)
  }
}

export default function DiceRoller() {

  const [playerDicePoolSize, setPlayerDicePoolSize] = useState(1)
  const [oppDicePoolSize, setOppDicePoolSize] = useState(1)
  const [result, setResult] = useState({
    winner: null,
    victories: 0,
    dieRolls: null
  })
  const [dieType] = React.useState([
    {
      label: "d10",
      value: 10
    },
    { label: "d4", value: 4 },
    { label: "d6", value: 6 },
    { label: "d8", value: 8 },
    { label: "d12", value: 12 },
    { label: "d20", value: 20 }
  ]);
  const [dieSize] = React.useState(10)

  return (
    <div className="dice-roller">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div>
            <label>Player Pool</label>
            <input
              type="number"
              value={playerDicePoolSize}
              onChange={e => setPlayerDicePoolSize(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Opp Pool</label>
            <input
              type="number"
              value={oppDicePoolSize}
              onChange={e => setOppDicePoolSize(e.target.value)}
            />
          </div>
        </div>
        <div className="input-field" >
          <label>Die Type</label>
          <select
            value={dieSize}
            onChange={e => setValue(e.currentTarget.value)}
          >
             {dieType.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
             ))}
          </select>
        </div>
        <button
          onClick={()=>{
            const dieRolls = rollDice(playerDicePoolSize, oppDicePoolSize, dieSize)
            let results = calculateResult(dieRolls)
            setResult({
              winner: results.winner,
              victories: results.victories,
              dieRolls: dieRolls
            })
          }}
          disabled={result.winner ? true : false}
        >Roll Dice</button>
        <button
          onClick={()=>{
            setResult({
              winner: null,
              victories: 0,
              dieRolls: null
            })
            setPlayerDicePoolSize(1)
            setOppDicePoolSize(1)
          }}
        >
          Reset
        </button>

        {result.winner && (
          <div>
            <h4>Winner: {result.winner}</h4>
            <p>Victories: {result.victories}</p>
            <p>Player Rolls: {result.dieRolls.playerRoll.map((roll) => {
              return `${roll}, `
            })}
            </p>
            <p>Opp Rolls: {result.dieRolls.oppRoll.map((roll)=>{ return `${roll}`})}</p>
            <small>Single Victory is a close win. Four or more victories is Total Domination</small>
            <small>
              If the player receives Victories equal to their number of dice, it is considered a Total Victory.
            </small>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
