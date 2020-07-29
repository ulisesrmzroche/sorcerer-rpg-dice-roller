import Head from 'next/head'
import styles from '../../styles/GamesNew.module.css'

import createGame from '../../actions/createGame'

export default function GamesNew() {

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


  const [value, setValue] = React.useState(10);
  return (
    <div className="container">
      <Head>
        <title>Sorcerer RPG Die Roller :: New Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          New Game
        </h1>

        <div className="input-field" >
          <label>Die Pool Type</label>
          <select
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
          >
             {dieType.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
             ))}
          </select>
        </div>
        <button onClick={()=>{
          createGame(value)
        }}>Create Game</button>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
