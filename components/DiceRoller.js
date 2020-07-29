import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import rollDice from '../actions/rollDice'
import calculateResult from '../actions/calculateResult'

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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="columns">
          <div className="column roll-settings">
            <div className="card">

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
                    winner: results.winner,
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
          <div className="column">
            <p><strong>Winner</strong>: {result.winner}</p>
            <p>
              <strong>Victories</strong>: {result.victories} - {result.victoryType}
            </p>
            <p><strong>Player Rolls:</strong> {result.dieRolls && result.dieRolls.playerRoll.map((roll) => {
              return `${roll}, `
            })}
            </p>
            <p><strong>Opp Rolls:</strong> {result.dieRolls && result.dieRolls.oppRoll.map((roll) => { 
              return `${roll}, `}
             )}</p>

          </div>
        </div>


      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
