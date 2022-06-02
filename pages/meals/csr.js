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
      {
        meals && meals.length > 0 ? (
          <div style={{
            marginTop:'10px',
            display:'grid',
            gap:'20px',
            gridTemplateColumns:'repeat(4, 1fr)'
          }}>
            {
              meals.map(meal => (
                <div to={`/meal/${meal.idMeal}`} key={meal.idMeal} style={{
                  border: '1px solid blue',
                  textDecoration: 'none',
                  padding:'5px',
                  color: 'black' 
                }}>
                    <Image width='100px' height='100px' style={{ border:'1px solid grey'}} src={meal.strMealThumb} alt={meal.strMeal} />
                    <p style={{borderTop:'1px solid black', padding:'3px'}}>&#127858; {meal.strMeal}</p>
                </div>
              ))
            }
          </div>
        ) : (
          <p>Loading . . .</p>
        )
      }
    </div>
  )
}

export default csr