import img from '../assets/Screenshot_5.jpg'
import styles from './Roadmap.module.css'

export function Roadmap() {
    return (
        <div className={styles.div}>
            <img src={img}
                alt="imagem do roadmap img" />
            <h2>ROADMAP</h2>
            <p className={styles.para}>Welcome to the exciting journey of XPayments (Xpay)! Our roadmap is a comprehensive guide outlining the strategic vision and key milestones for the development and growth of our cryptocurrency.</p>
            <p className={styles.para}>XPayments is not just a digital asset; it's a community-driven project with a commitment to innovation, transparency, and long-term sustainability.</p>
            <div className={styles.phases}>
                <div className={styles.filho1}>
                    <div className={styles.phase}>
                        <h1>PHASE 1</h1>
                        <p>Initial Marketing</p>
                        <p>Website Development</p>
                        <p>Contract Deployment</p>
                        <p>Launch on PancakeSwap</p>
                    </div>
                    <div className={styles.phase}>
                        <h1>PHASE 2</h1>
                        <p>Coinmarketcap Listing</p>
                        <p>CoinGecko Listing</p>
                        <p>Dextool Listing</p>
                        <p>10,000+ Holders</p>
                    </div>
                </div>
                <div className={styles.filho2}>
                    <div className={styles.phase}>
                        <h1>PHASE 3</h1>
                        <p>Token Burn</p>
                        <p>Partnerships and Sponsorships</p>
                        <p>Related Policies</p>
                        <p>Gam release</p>
                    </div>
                    <div className={styles.phase}>
                        <h1>PHASE 4</h1>
                        <p>Globalization</p>
                        <p>Mass Marketing</p>
                        <p>CEXs Listing</p>
                        <p>20,000+ Holders</p>
                    </div>
                </div>

            </div>
        </div>
    )
}