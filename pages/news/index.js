import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import {news} from '../../data'
import styles from '../../styles/Home.module.css'

const index = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>News</title>
        <meta name="description" content="Daftar Berita" />
      </Head>

      <h3>Daftar Berita</h3>
      { news && news.map((item) => (
        <div
          key={item.id}
          style={{
            marginTop:'10px',
            display:'grid',
            gap:'20px',
            gridTemplateColumns:'repeat(4, 1fr)',
            cursor:'pointer'
          }}
        >
          <Link 
            href={{
              pathname:`/news/${item.slug}`,
              query:{title:item.title, content:item.content}
            }}
            as={{pathname:`/news/${item.slug}`}}
          >
            <div>
              <Image src={item.img} alt="" width={200} height={200} style={{border:'1px solid grey'}}/>
              <p style={{borderTop:'1px solid black', padding:'3px'}}><b>{item.title}</b></p>
              <p>Img Url: {item.img}</p>
            </div>
          </Link>
        </div>
      )) }
    </div>
  )
}

export default index