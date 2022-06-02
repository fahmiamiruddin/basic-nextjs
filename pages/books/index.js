import { useState } from "react"
import Link from 'next/link'
import Head from 'next/head'
// import {books} from '../../data'
import styles from '@styles/Home.module.css'

const index = () => {
  const [title, setTitle] = useState([]);
  const [slug, setSlug] = useState([]);
  const [category, setCategory] = useState([]);
  const [author, setAuthor] = useState([]);
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch("/api/books");
    const data = await response.json();
    // console.log(data);
    setBooks(data);
  };

  const submitBook = async () => {
    const response = await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify({
        title,
        slug,
        category,
        author
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
        <title>Books</title>
        <meta name="description" content="Daftar Buku" />
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
        {"Category: "}
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{marginTop:'10px'}}
        />
        <br />
        {"Author: "}
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{marginTop:'10px'}}
        />
        <br />
        <button onClick={submitBook} style={{marginTop:'10px'}}>Submit book</button>
      </div>{" "}

      <h3>Daftar Buku</h3>
      <button onClick={fetchBooks}>Get the latest books</button>
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