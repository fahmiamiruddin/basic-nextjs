import { useLazyQuery } from '@apollo/client'
import {GET_CATEGORIES} from './schema'
import styles from '@styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link';

const Lazy = () => {
  const [getCat, { loading, error, data }] = useLazyQuery(GET_CATEGORIES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={styles.main}>
      <Head>
        <title>Daftar Categories useLazyQuery GraphQL</title>
        <meta name="description" content="Daftar Categories useLazyQuery GraphQL" />
      </Head>
      <h1>Daftar Categories useLazyQuery</h1>
      <button onClick={() => getCat()}>Load Categories</button>
      {data?.categories && data.categories.items.map((cat) => (
        <Link href={`/categories/${cat.id}`} key={cat.id}>
          <p>{cat.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default Lazy