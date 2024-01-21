// import section22 from '../assets/darkforest.jpg'
import styles from './Section2.module.css'
import dedao from '../assets/xpayelon.jpg'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import { Copy } from '@phosphor-icons/react'

export function Section2() {

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
      // Texto que você deseja copiar
      const textToCopy = '0x214772e3740Df7dc76011068201B994E31FbEa02';
  
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
                {isCopied && <p className={styles.text}>CONTRACT COPIED 💸🚀!</p>}
                <div className={styles.divsec}>
                    <h1>X PAYMENTS!</h1>
                    <p>X Payments is the cryptocurrency of the future, driving the financial revolution with cutting-edge technology. Enjoy fast, efficient, and secure transactions. Our community-driven governance, focus on financial inclusion, and advanced smart contracts make X Payments the choice for a more connected world. Discover the power of innovation - acquire X Payments now! 💸🚀🌐</p>
                    <button onClick={handleCopyClick} role="button">CONTRACT:0x214772e3740Df7dc76011068201B994E31FbEa02
                    <Copy size={15} /></button>
                </div>
            </div>
        </div>
    )
}