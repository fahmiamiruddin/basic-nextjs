import { gql, useQuery } from '@apollo/client'
import {GET_CATEGORIES} from '../../schema'
import styles from '@styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link';

const Index = () => {
  const res = useQuery(GET_CATEGORIES);
  const { loading, error, data } = res;

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={styles.main}>
      <Head>
        <title>Daftar Categories useQuery</title>
        <meta name="description" content="Daftar Categories useQuery" />
      </Head>
      <h1>Daftar Categories useQuery</h1>
      {data.categories.items.map((cat) => (
        <Link href={`/categories/${cat.id}`} key={cat.id}>
          <p>{cat.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default Index