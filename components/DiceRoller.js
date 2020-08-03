import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/DiceRoller.module.css'
import rollDice from '../actions/rollDice'
import calculateResult from '../actions/calculateResult'

const prettyPrintWinner = (winner) => {
  switch (winner) {
    case 'playerRoll':
      return 'Player'
    case 'oppRoll':
      return 'Opp'
    case null:
      return 'Draw'
  }
}

export default function DiceRoller() {
  const [playerDicePoolSize, setPlayerDicePoolSize] = useState(1)
  const [oppDicePoolSize, setOppDicePoolSize] = useState(1)
  const [result, setResult] = useState({
    winner: null,
    victories: null,
    dieRolls: null,
    victoryType: null
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
  const [dieSize, setDieSize] = React.useState(10)

  return (
    <div className="dice-roller">
      <Head>
        <title>Sorcerer RPG Dice Roller</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <div className="card">
            <div className="card-content">
              <div className="columns">
                <div className="column">
                  <h3 className={styles.resultsHeading}>Results</h3>
                  <p><strong>Winner</strong>: {result.winner}</p>
                  {result.winner && (
                    <p>
                      <strong>Victories</strong>: {result.victories} - {result.victoryType}
                    </p>
                  )}
                  <br />
                  <p style={{marginBottom: '1em'}}><strong>Player Pool:</strong> {result.dieRolls && result.dieRolls.playerRoll.map((roll, i) => {
                    return (
                      <span className={styles.die} key={`player-die-roll-${i}`}>
                        {`${roll} `}
                      </span>
                    )
                  })}
                  </p>
                  <p><strong>Opp Pool:</strong> {result.dieRolls && result.dieRolls.oppRoll.map((roll, i) => {
                    return (
                      <span className={styles.die} key={`opp-die-roll-${i}`}>
                        {`${roll} `}
                      </span>
                    )
                  })}
                  </p>
                </div>
                <div className="column">
                  <br />
                </div>
              </div>
            </div>
            <form className="card-content" onSubmit={(e)=>{
              e.preventDefault()
            }}>

              <div className="field">
                <div className="control">
                <label className="label">Player Pool</label>
                <input
                  type="number"
                  value={playerDicePoolSize}
                  className="input"
                  onChange={(e)=>{
                    setResult({winner: null})
                    setPlayerDicePoolSize(e.target.value)
                  }}
                  min={1}
                />
                </div>
              </div>
              <div className="field">
                <label className="label">Opp Pool</label>
                <div className="control">
                  <input
                    type="number"
                    value={oppDicePoolSize}
                    min={1}
                    className="input"
                    onChange={(e)=>{
                      setResult({winner: null})
                      setOppDicePoolSize(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Die Type</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={dieSize}
                      onChange={e => setDieSize(e.currentTarget.value)}
                    >
                      {dieType.map(({ label, value }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <button
                className="button is-primary is-fullwidth"
                onClick={(e)=>{
                  e.preventDefault();
                  const dieRolls = rollDice(playerDicePoolSize, oppDicePoolSize, dieSize)
                  let results = calculateResult(dieRolls)
                  setResult({
                    winner: prettyPrintWinner(results.winner),
                    victories: results.victories,
                    dieRolls: dieRolls,
                    victoryType: results.victoryType
                  })
                }}
              >
                Roll Dice
              </button>
              <button
              className="button is-outline is-fullwidth is-small"
              onClick={(e)=>{
                e.preventDefault()
                  setResult({
                    winner: null,
                    victories: null,
                    dieRolls: null,
                    victoryType: null
                  })
              }}
              >
                Reset
              </button>
            </form>
            
            </div>
    </div>
  )
}
