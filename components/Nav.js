import React from 'react'
import Link from 'next/link'
import styles from '@styles/Home.module.css'

const Nav = () => {
  return (    
    <div className={styles.navwrapper}>
      <h3 className='none'><Link 
          href='/'
        >
          {process.env.webname}
        </Link>
      </h3>
      <nav>
        <Link 
          href='/books'
        >
          <a className={styles.navmenu}>Books</a>
        </Link>
        <Link 
          href='/categories'
        >
          <a className={styles.navmenu}>Categories</a>
        </Link>
        <Link 
          href='/news'
        >
          <a className={styles.navmenu}>News</a>
        </Link>
        <Link 
          href='/meals'
        >
          <a className={styles.navmenu}>Meals</a>
        </Link>
        <Link 
          href={{pathname:'/about', query:{name:'fahmi',address:'ngawi'}}}
          as='/about-fahmi'
        >
          <a className={styles.navmenu}>About me</a>
        </Link>
      </nav>
    </div>
  )
}

export default Nav