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
            <h1 className={styles.title}>Arizona snowcap</h1>
            <img className={styles.picture} src="../images/snowcap.jpg" />
            <li>Latin name: Mammillaria Gracilis cultivar</li>
            <li>Watering:</li>
            <li>Positioning:</li>
            </div> 
            <div className={styles.col2}>
            <h1 className={styles.title}>Christmas cactus</h1>
            <img className={styles.picture} src="../images/zygocactus.jpg" />
            <li>Latin name: Zygocactus Schlumbergera</li>
            <li>Watering:</li>
            <li>Positioning:</li>
            </div> 
            <div className={styles.col2}>
            <h1 className={styles.title}>plant name</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div> 
            <div className={styles.col3}>
            
            </div> 

        </div>
          
          </main>
        </div>
    )
}