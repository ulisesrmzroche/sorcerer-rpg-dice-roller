import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import loadGame from '../../actions/loadGame'

import { useRouter } from 'next/router'

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
  let victories = 1
  let winner = calculateWinner(playerRoll, oppRoll)
  return victories
}

const calculateResult = (dieRolls) => {
  const { playerRoll, oppRoll } = dieRolls
  return {
    winner: calculateWinner(playerRoll, oppRoll),
    victories: calculateVictories(playerRoll, oppRoll) || 1
  }
}

export default function Play() {
  const router = useRouter()
  const { uuid } = router.query

  const game = loadGame(uuid)
  const [playerDicePoolSize, setPlayerDicePoolSize] = useState(1)
  const [oppDicePoolSize, setOppDicePoolSize] = useState(1)
  const [result, setResult] = useState({
    winner: null,
    victories: 0,
    dieRolls: null
  })

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <label>Player</label>
          <div>
            <label>Die Pool</label>
            <input
              type="number"
              value={playerDicePoolSize}
              onChange={e => setPlayerDicePoolSize(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>DM</label>
          <div>
            <label>Die Pool</label>
            <input
              type="number"
              value={oppDicePoolSize}
              onChange={e => setOppDicePoolSize(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={()=>{
            const dieRolls = rollDice(playerDicePoolSize, oppDicePoolSize, game.dieSize)
            let results = calculateResult(dieRolls)
            setResult({
              winner: results.winner,
              victories: results.victories,
              dieRolls: dieRolls
            })
            console.log(result)
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
            <p>Victories: WIP</p>
            <p>Player Rolls: {result.dieRolls.playerRoll.map((roll)=>{ return `${roll}`})}</p>
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
