import styles from './Footer.module.css'
import img1 from '../assets/p1-5Be5bkHV.png'
import img2 from '../assets/p2-cHjuc3pq.png'
import img3 from '../assets/p3-v4irN4UG.png'
import img4 from '../assets/p4-piQ186Xg.png'
import img5 from '../assets/p5-fP1dfFWu.png'
import img6 from '../assets/logo X.png'
import img7 from '../assets/telegram.png'

export function Footer () {
    return (
        <div className={styles.div}>
          <div className={styles.images}>
            <img src={img1} alt="pinksale" />
            <img src={img2} alt="dexview" />
            <img src={img3} alt="cmc" />
            <img src={img4} alt="coingecko" />
            <img src={img5} alt="bsc" />
          </div>
          <div className={styles.fim}>
            <h1>JOIN THE X Payments COMMUNITY NOW AND LET THE JOURNEY BEGIN!</h1>
            <div className={styles.images2}>
                <a href="https://twitter.com/xpaymentsbsc">
                    <img src={img6} alt="X" />
                </a>
                <a href="https://t.me/XPaymentsbscgo">
                    <img src={img7} alt="tlegram" />
                </a>
            </div>
            <p>COPYRIGHT © 2024 $XPayments. ALL RIGHTS RESERVED</p>
          </div>
        </div>
    )
}