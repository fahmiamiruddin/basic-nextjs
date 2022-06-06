import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from '@styles/Home.module.css'
import ssImg from '../assets/ss.png'
import { useQuery } from '@apollo/client'
import Nav from './Nav'
import Subscribe from './Subscribe'
import { POST_SUBSCRIBE, GET_CATEGORIES } from '../schema'

const Home = () => {
  const res = useQuery(GET_CATEGORIES);
  const { loading, error, data } = res;

  // console.log(data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (    
    <div>
      <Head>
        <title>NextJS</title>
        <meta name="description" content="NextJS" />
        <meta name="description" content="Learn Basic NextJS" />
      </Head>
      <Nav/>

      <main className={styles.main}>
        <p>Selamat datang di situs {process.env.webname}</p>
        <Subscribe />

        <div className={styles.grid}>
          {data?.categories && data.categories.items.map((cat) => (
            <Link href={`/categories/${cat.id}`} key={cat.id}>
              <div className={styles.card} style={{width:'400px', height:'230px'}}>
                <p>
                  { cat.image && <Image src={cat.image} alt='{cat.name}' width='250px' height='150px'/> }                    
                </p>
                <h2>{cat.name} &rarr;</h2>
              </div>
            </Link>
          ))}

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

export default Home