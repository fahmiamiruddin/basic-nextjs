import { useState } from "react"
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
// import {news} from '../../data'
import styles from '../../styles/Home.module.css'

const index = () => {
  const [title, setTitle] = useState([]);
  const [slug, setSlug] = useState([]);
  const [content, setContent] = useState([]);
  const [img, setImg] = useState([]);
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await fetch("/api/news");
    const data = await response.json();
    // console.log(data);
    setNews(data);
  };

  const submitNews = async () => {
    const response = await fetch("/api/news", {
      method: "POST",
      body: JSON.stringify({
        title,
        slug,
        content,
        img
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>News</title>
        <meta name="description" content="Daftar Berita" />
      </Head>

      <div style={{marginTop:'20px'}}>
        {"Title: "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{marginTop:'10px'}}
        />
        <br />
        {"Slug: "}
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          style={{marginTop:'10px'}}
        />
        <br />
        {"Content: "}
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{marginTop:'10px'}}
        />
        <br />
        {"Img: "}
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          style={{marginTop:'10px'}}
        />
        <br />
        <button onClick={submitNews} style={{marginTop:'10px'}}>Submit News</button>
      </div>{" "}

      <h3>Daftar Berita</h3>
      <button onClick={fetchNews}>Muat Berita Terbaru</button>
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