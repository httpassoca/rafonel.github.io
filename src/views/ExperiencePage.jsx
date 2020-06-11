import React from "react";

import ExpCard from "../components/Experience/ExpCard"

export default function ExperiencePage() {
  const exps =[
    {
      title:"JMV Technology",
      data:"27.04.2020",
      description:"Primeiro dia de trabalho na JMV. Aprendi a trabalhar com git flow, portainer, docker e de sobra umas coisinhas de linux. O ambiente de trabalho é muito legal e consegui me adaptar rápido, mesmo sendo meu primeiro trabalho com equipe em um projeto grande.",
    },
    {
      title:"Hackaton Shawee 2020.2",
      data:"23.04.2020",
      description:"Meu segundo hackaton na Shawee. Dessa vez, o prêmio era maior, então eu e minha equipe demos nosso máximo. Reuniões diárias, códigos todo dia, analisamos mercado, consultamos profissionais e tudo. Hospedamos o front, o back, tava tudo certo. Nosso projeto era um bot, a Kate, que responde perguntas 'bobas' de diferentes marketplaces em segundos. Infelizmente, eu passei por um momento muito difícil da minha vida (meu primeiro término de namoro) e não consegui terminar minha parte a tempo. Dessa vez eu estava como programador front-end, então eu precisava ter acabado tudo. Não consegui conciliar hackaton, término de relacionamento, aprender a morar sozinho e minha primeira semana de trabalho. Isso meio que me deixou magoado por muito tempo e decidi dar um tempo de hackatons, mas mesmo assim recomendo a experiência à todos.",
    },
    {
      title:"Omnistack 11",
      data:"03.2020",
      description:"Fiz minha segunda Omnistack. Tive muito menos dificuldade e consegui digerir a informação mais tranquilamente. Eu continuo não gostando de programar pra mobile, mas decidi programar mesmo assim. Dessa vez documentei melhor o projeto e subi no github bonitinho.",
    },
    {
      title:"Megahack Shawee 2020",
      data:"07.02.2020",
      description:"Participei do meu primeiro hackaton com meus amigos, desenvolvemos uma aplicação de investimento com 100% de garantia ao cliente, porém não era muito vantajoso para as empresas rsrs. Apesar disso, a experiência de programar competitivamente, em grupo e com reuniões quase diárias me fizeram aprender muitas coisas, como sempre ser compromissado com estimativas de tempo e sempre elaborar 100% a funcionalidade do projeto antes de começar a desenvolver e prototipar. Como eu fui o designer, coloquei o trabalho no meu Behance.",
    },
    {
      title:"Omnistack 10",
      data:"01.2020",
      description:"Participei da Omnistack 10, pela recomendaçao de um amigo, e não podia ter feito coisa melhor. Um ritmo intenso (pelo menos pra quem não conhecia nada de Node, React e React Native) de aprendizado de boa qualidade. Como eu tinha acabado de sair do terceirão, queria depositar minhas energias no aprendizado profissional e focar nas tecnologias atuais, que almejava desde que terminei o SENAI, em 2018. A Rocketseat me proporcionou exatamente o que eu precisava, da melhor maneira possível. Apesar de não gostar muito do desenvolvimento mobile, consegui passar por ele.",
    },
    {
      title:"Starbots",
      data:"2018-2019",
      description:"Participei de uma competição de robótica nacional, a convite da minha escola. Aprendi o básico de robótica e eletrônica, trabalhei com arduíno e trabalhei como desginer. Fizemos website, jogo pra celular, bandeira, vídeos, foi top top. A Competição foi no Rio de Janeiro, a First Tech Challenge, durante uns 3 dias insanos. Ganhamos 3 prêmios e fomos uma das alianças finais (praticamente ganhamos em segundo lugar). Apesar de não termos conseguido vencer e ir pra Houston, eu amei cada parte. Foi minha primeira viagem de avião também, show de bola. Tá tudo em starbots.sesisenaibetim.com.br",
    },
    {
      title:"SENAI",
      data:"01.2017 - 08/2018",
      description:"Completei meu curso técnico, de Tecnologia da Informação. Com certeza uma das conquistas mais importantes da minha vida. Aprendi a cuidar da minha grana, entendi melhor o que eu queria pra vida, aprendi como funciona uma rotina de trabalho e estudos, pratiquei vários projetos em grupo. Aprendi C++, Java, C#, Python, HTML, CSS, Jquery <3, PHP e muitos frameworks. De \"brinde\", saí com meu meu site hospedado pelo meu professor (rafael.fredaugusto.com.br). Amo o Senai. Se o mundo é contra o Senai, eu sou contra o mundo. Se o Senai fala, eu escuto. Se o Senai pensa, eu admiro. Se o Senai tem 100 fãs, eu sou um deles. Se o Senai tem 10 fãs, eu sou um deles. Se o Senai tem 1 fã, eu sou esse fã. Se o Senai não tem fãs, eu não existo.",
    }
  ]
  return (
      <div className="experience">
        {
          exps.map(exp => (
          <ExpCard
            title={exp.title}
            data={exp.data}
            description={exp.description}
          />

          ))
        }
      </div>
  );
}
