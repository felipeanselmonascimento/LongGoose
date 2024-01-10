import styles from './Tokenomics.module.css'
import img from '../assets/tokenomicsimg.png'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

export function Tokenomics () {

    useEffect(() => {
        AOS.init()
    }, [])
    
    return (
        <div className={styles.div}>
            <img src={img}
            alt="tokenomics img"
            data-aos="zoom-in-down"
            data-aos-duration="3000"/>
            <h2>TOKENOMICS</h2>
            <h1>1,000,000,000 $LGC</h1>
            <h1>TOTAL SUPPLY</h1>
            <p>Long Goose Coin is designed to be a stable cryptocurrency that encourages long-term community participation. Its primary goal is to promote stability and sustainable growth by rewarding token holders who choose to keep their stakes for extended periods.</p>
            <div className={styles.tokens}>
                <div className={styles.tokenon}>
                    <p>BURNT 20%</p>
                </div>
                <div className={styles.tokenon}>
                    <p>MARKETING 8%</p>
                </div>
                <div className={styles.tokenon}>
                    <p>VESTED 10%</p>
                </div>
                <div className={styles.tokenon}>
                    <p>TAX 7/7</p>
                </div>
            </div>
        </div>
    )
}