import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const csr = () => {
  // CSR
  const [meals, setMeals] = useState([]);

  const getData = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await res.json();
    setMeals(data.meals);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main}>
      <Head>
        <title>Fetch with CSR</title>
        <meta name="description" content="Fetch with CSR" />
      </Head>
      <h3>Daftar Makanan</h3>
      <p>Fetch with CSR</p>
      { meals && meals.length > 0 ? (meals.map((item) => (
        <div key={item.idMeal} style={{ marginTop:'10px', display:'grid', gap:'20px', gridTemplateColumns:'repeat(4, 1fr)', cursor:'pointer' }} >
            <div>
              <Image src={item.strMealThumb} alt="" width={200} height={200}/>
              <p style={{borderTop:'1px solid black', padding:'3px'}}><b>{item.strMeal}</b></p>
              <p>Img Url: {item.strMealThumb}</p>
            </div>
        </div>
      ))) : (
        <p>Loading . . .</p>
      ) }
    </div>
  )
}

export default csr