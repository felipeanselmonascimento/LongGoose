import './global.css'
import styles from './App.module.css'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { Tokenomics } from './components/Tokenomics'
import test from './assets/fundo1.avif'
import { Roadmap } from './components/Roadmap'
import { Footer } from './components/Footer'


export function App() {

  return (
    <div className={styles.div}>
      <Section1 />
      <div className={styles.rgb}></div>
      <div className={styles.tudo}>
        <img src={test} className={styles.imgg} alt="imgg" />
        <Section2 />
        <div className={styles.rgbb}></div>
        <Tokenomics />
        <div className={styles.rgbbe}></div>
        <Roadmap />
        <div className={styles.teste}></div>
        <Footer />
      </div>
    </div>
  )
}

