// import section22 from '../assets/darkforest.jpg'
import styles from './Section2.module.css'
import dedao from '../assets/dedao.png'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import { Copy } from '@phosphor-icons/react'

export function Section2() {

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
      // Texto que você deseja copiar
      const textToCopy = 'AT LAUNCH';
  
      // Copia o texto para a área de transferência
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Atualiza o estado para exibir o aviso
          setIsCopied(true);
  
          // Define um temporizador para esconder o aviso após alguns segundos
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        })
        .catch((error) => {
          console.error('Erro ao copiar para a área de transferência', error);
        });
    };


    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className={styles.section2}>
            {/* <img src={section22} alt="section2 img" /> */}
            <div className={styles.divi}>
                <img
                src={dedao}
                alt="dedo do meio"
                data-aos="fade-right"
                data-aos-duration="1000"
                />
                {isCopied && <p className={styles.text}>AT LAUNCH!</p>}
                <div className={styles.divsec}>
                    <h1>ABOUT LONG GOOSE COIN!</h1>
                    <p>LongGoose Coin is the cryptocurrency of the future, driving the financial revolution with cutting-edge technology. Enjoy fast, efficient, and secure transactions. Our community-driven governance, focus on financial inclusion, and advanced smart contracts make LongGoose Coin the choice for a more connected world. Discover the power of innovation - acquire LongGoose Coin now! 💸🚀🌐</p>
                    <button onClick={handleCopyClick} role="button">CONTRACT: AT LAUNCH                 <Copy size={15} /></button>
                </div>
            </div>
        </div>
    )
}