import React from "react";
import UseProps from "./UseProps";
import style from "./AulaQuatro.module.css";

import { useState } from "react";

const AulaQuatro = () => {
  const imgPadrao = ""

    const [jogadores] = useState([
      {id: 1, titulo: "Arrascaeta", imagem:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/08/19073219/arrascaeta-machucado.jpg", descricao:"Arrascaeta melhor meia do Brasil",},
      {id: 2, titulo:"Messi", imagem:"https://s2-oglobo.glbimg.com/LDDjyGQQ6t-knBzSH3beYm653ao=/0x0:1080x1043/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/t/q/qzvBXTTA2iOU3ivehoDw/320489457-195090603100868-7252177604779913634-n.jpg", descricao:"Melhor jogador do mundo" },
      {id: 3, titulo: "Neymar Jr", imagem:"https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2013/07/19/neymargetty.jpg", descricao:"Neymar melhor jogador Brasilerio depois de Pelé"},
      {id: 3, titulo: "Vini Jr", imagem:"https://www.gaveanews.com/wp-content/uploads/Vinicius-Junior-exibe-o-escudo-do-Real-Madrid-apos-marcar-um-gol-pelo-time-da-Espanha-edited-1024x768.jpg", descricao:"Melhor do mundo atualmente"}
      ]);

  return (
    <div className={style.container}>
      <h1>Cards Incríveis</h1>
      <div className={style.cardArea}>
        
        {jogadores.map((jogador)=> (
          <UseProps
          key={jogador.id}
          titulo={jogador.titulo}
          imagem={jogador.imagem}
          descricao={jogador.descricao} 
          />

          
        ))};
        
        
        {/* <UseProps id= "1" imagem={imgPadrao} titulo="Arrascaeta"
        descricao="Arrascaeta melhor meia do Brasil"/>
        <UseProps id= "2" imagem="" titulo="Messi"/>
        <UseProps id= "3" imagem="" titulo="Neymar Jr"  descricao= "Neymar melhor jogador brasileiro depois de pelé e ronaldinho"/>
        <UseProps id= "4" imagem="" titulo="Vini Jr"/> */}
      </div>
    </div>
  );
};

export default AulaQuatro;
