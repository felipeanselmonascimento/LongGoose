import { useState, useEffect } from 'react';

export const Maximizar = (props: any) => {
    const [maximized, setMaximized] = useState(true);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setMaximized((prevMaximized) => !prevMaximized);
      }, 100); // Ajuste o intervalo conforme necessário (aqui é 1 segundo)
  
      // Limpe o intervalo quando o componente for desmontado
      return () => clearInterval(intervalId);
    }, []); // O segundo argumento vazio garante que o efeito seja executado apenas uma vez
  
    const imageSize = maximized ? '100%' : '95%'; 

  return (
    <>
      <img
        src={props.src}
        alt="Descrição da imagem"
        style={{ width: imageSize, height: 'auto' }}
      />
    </>
  );
};
