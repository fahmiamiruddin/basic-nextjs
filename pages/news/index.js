import Link from 'next/link'
import Head from 'next/head'
import {news} from '../../data'
import styles from '../../styles/Home.module.css'

const index = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>News</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <h3>Daftar Berita</h3>
      { news && news.map((item) => (
        <ul key={item.id}>
          <Link 
            href={{
              pathname:`/news/${item.slug}`,
              query:{title:item.title, content:item.content}
            }}
            as={{pathname:`/news/${item.slug}`}}
          >
            <li>{item.title}</li>
          </Link>
        </ul>
      )) }
    </div>
  )
}

export default index