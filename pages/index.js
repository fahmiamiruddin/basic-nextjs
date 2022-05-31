import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ssImg from '../assets/ss.png'

export default function Home() {
  return (
    <div>
      <div className={styles.navwrapper}>
        <h3 className='none'>beritaagakngawur.com</h3>
        <nav>
          <Link 
            href='/books'
          >
            <a className={styles.navmenu}>Books</a>
          </Link>
          <Link 
            href='/news'
          >
            <a className={styles.navmenu}>News</a>
          </Link>
          <Link 
            href={{pathname:'/about', query:{name:'fahmi',address:'ngawi'}}}
            as='/about-fahmi'
          >
            <a className={styles.navmenu}>About me</a>
          </Link>
        </nav>
      </div>

      <main className={styles.main}>
        <p>Selamat data di situs beritaagakngawur.com</p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Global CSS &rarr;</h2>
            <p>ini font nya dari global.css pakai font Lucida Console</p>
          </a>

          <a href="#" className={styles.card}>
            <h2 className={styles.cardp}>CSS Module &rarr;</h2>
            <p className={styles.cardp}>ini font nya dari Home.module.css pakai font Fira Sans</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2 className='cardh2'>CSS in JS &rarr;</h2>
            <p className='cardh2'>ini font nya dari css in js pakai font Courier New</p>
          </a>
          <style jsx>
            {
              `
                .cardh2 {
                  font-family: Courier New
                }
              `
            }
          </style>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
