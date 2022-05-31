import Link from 'next/link'
import Head from 'next/head'
import {books} from '../../data'
import styles from '../../styles/Home.module.css'

const index = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Books</title>
        <meta name="description" content="Daftar Buku" />
      </Head>

      <h3>Daftar Buku</h3>
      { books && books.map((item) => (
        <ul key={item.id}>
          <Link 
            href={{pathname:`/books/${item.category}/${item.title}/${item.author}`}}
          >
            <li>{item.title}</li>
          </Link>
        </ul>
      )) }
    </div>
  )
}

export default index