import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from '@styles/Home.module.css'
import ssImg from '../assets/ss.png'

const DynamicComponent = dynamic(() => import('@components/Button'))

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS</title>
        <meta name="description" content="NextJS" />
        <meta name="description" content="Learn Basic NextJS" />
      </Head>
      <div className={styles.navwrapper}>
        <h3 className='none'>{process.env.webname}</h3>
        <nav>
          <Link 
            href='/books'
          >
            <a className={styles.navmenu}>Books</a>
          </Link>
          <Link 
            href='/categories'
          >
            <a className={styles.navmenu}>Categories</a>
          </Link>
          <Link 
            href='/news'
          >
            <a className={styles.navmenu}>News</a>
          </Link>
          <Link 
            href='/meals'
          >
            <a className={styles.navmenu}>Meals</a>
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
        <p>Selamat data di situs {process.env.webname}</p>
        <DynamicComponent />

        <div className={styles.grid}>
          <Link href='/meals/csr'>
            <div className={styles.card}>
              <h2>CSR &rarr;</h2>
              <p>Contoh Penggunaan CSR <br></br>Client Side Rendering</p>
            </div>
          </Link>

          <Link href='/meals/ssr'>
            <div className={styles.card}>
              <h2 className={styles.cardp}>SSR &rarr;</h2>
              <p>Server Side Rendering <br></br>+ detail page with Dynamic Route</p>
            </div>
          </Link>

          <Link href='/meals/ssg'>
            <div className={styles.card}>
              <h2>SSG &rarr;</h2>
              <p>Static Site Generation <br></br>+ detail page with Dynamic Route</p>
            </div>
          </Link>

          <Link href='/meals/isr'>
            <div className={styles.card}>
              <h2 className='cardh2'>ISR &rarr;</h2>
              <p>Contoh Penggunaan ISR <br></br>Incremental Static Regeneration</p>
            </div>
          </Link>
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
