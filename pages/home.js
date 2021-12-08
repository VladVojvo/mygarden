import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>My Garden</title>          
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={styles.main}>

        <div className={styles.row}>
            <div className={styles.col1}>
                
            </div>        
            <div className={styles.col2}>
            <h1 className={styles.title}>plant name</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
            </div> 
            <div className={styles.col2}>
            <h1 className={styles.title}>plant name</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
            </div> 
            <div className={styles.col2}>
            <h1 className={styles.title}>plant name</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
            </div> 
            <div className={styles.col3}>
            
            </div> 

        </div>
          
          </main>
        </div>
    )
}