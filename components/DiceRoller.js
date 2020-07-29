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
        <div className="columns">
          <div className="column roll-settings">
            <div className="card">

            <form className="card-content" onSubmit={(e)=>{
              e.preventDefault()
            }}>
              <div>
                <label>Player Pool</label>
                <input
                  type="number"
                  value={playerDicePoolSize}
                  onChange={(e)=>{
                    setResult({winner: null})
                    setPlayerDicePoolSize(e.target.value)
                  }}
                  min={1}
                />
              </div>
              <div>
                <label>Opp Pool</label>
                <input
                  type="number"
                  value={oppDicePoolSize}
                  min={1}
                  onChange={(e)=>{
                    setResult({winner: null})
                    setOppDicePoolSize(e.target.value)
                  }}
                />
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
                className="button is-primary is-fullwidth"
                onClick={(e)=>{
                  e.preventDefault();
                  const dieRolls = rollDice(playerDicePoolSize, oppDicePoolSize, dieSize)
                  let results = calculateResult(dieRolls)
                  setResult({
                    winner: results.winner,
                    victories: results.victories,
                    dieRolls: dieRolls
                  })
                }}
                disabled={result.winner ? true : false}
              >
                Roll Dice
              </button>
            </form>
            </div>
          </div>
          <div className="column">
          <div>
            <h4>Winner: {result.winner}</h4>
            <p>Victories: {result.victories}</p>
            <p>Player Rolls: {result.dieRolls && result.dieRolls.playerRoll.map((roll) => {
              return `${roll}, `
            })}
            </p>
            <p>Opp Rolls: {result.dieRolls && result.dieRolls.oppRoll.map((roll)=>{ return `${roll}`})}</p>
            <small>Single Victory is a close win. Four or more victories is Total Domination</small>
            <small>
              If the player receives Victories equal to their number of dice, it is considered a Total Victory.
            </small>
          </div>
          </div>
        </div>


      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
