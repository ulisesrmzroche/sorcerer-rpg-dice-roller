import Head from 'next/head'
import styles from '../../styles/GamesNew.module.css'
import Link from 'next/link'

import loadGames from '../../actions/loadGame'

export default function GamesIndex() {
  const game = loadGames()
  return (
    <div className="container">
      <Head>
        <title>Sorcerer RPG Die Roller :: Games Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          <li>
            <Link href="/play/[uuid]" as={`/play/${game.uuid}`}>
              <a>{game.uuid}</a>
            </Link>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
