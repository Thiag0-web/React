import { Card } from "./card";
import eldenRing from "./img/elden-ring.jpg";
import lol from "./img/lol.jpg";
import skyrim from "./img/skyrim.jpg";


const CardProps = [
  {
    title: "Elden Ring (2022)",
    cardImg: eldenRing,
    paragrafo:
      "Elden Ring é um jogo de RPG de ação de 2022 desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment . Foi dirigido por Hidetaka Miyazaki, com a construção de mundo fornecida peloescritor americano de fantasia George R.R. Martin . Foi lançado em 25 de fevereiro de 2022 para PlayStation 4 , PlayStation 5 , Windows , Xbox One e Xbox Series X/S . Ambientado nas Terras Intermediárias, os jogadores controlam um personagem personalizável em uma missão para reparar o Elden Ring e se tornar o novo Elden Lord.",
    botao: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
  },
  {
    title: "League of Legends (2009)",
    cardImg: lol,
    paragrafo:
      "League of Legends ( LoL ) , comumente chamado de League , é um jogo eletrônico multijogador de arena de batalha online desenvolvido e publicado pela Riot Games . Inspirado em Defense of the Ancients , um mapa personalizado para Warcraft III , os fundadores da Riot buscaram desenvolver um jogo independente no mesmo gênero. Desde seu lançamento em outubro de 2009, League é gratuito para jogar e é monetizado por meio de personalização de personagens que podem ser adquiridos . O jogo está disponível para Windows e macOS .",
    botao: "https://www.leagueoflegends.com/pt-br/download/",
  },
  {
    title: "The Elder Scrolls V: Skyrim (2011)",
    cardImg: skyrim,
    paragrafo:
      "The Elder Scrolls V: Skyrim é um jogo de RPG de ação de 2011 desenvolvido pela Bethesda Game Studios e publicado pela Bethesda Softworks . É o quinto título principal dasérie The Elder Scrolls , seguindo The Elder Scrolls IV: Oblivion (2006), e foi lançado mundialmente para Windows , PlayStation 3 e Xbox 360 em 11 de novembro de 2011. Skyrim foi desenvolvido utilizando a Creation Engine . A equipe optou por um mundo aberto único e mais diversificado do que a Província Imperial de Cyrodiil de Oblivion , que o diretor e produtor executivo do jogo, Todd Howard, considerou menos interessante em comparação.",
    botao: "https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/",
  },
];

export function CardSection() {
  return (
    <section className="flex flex-col gap-5 justify-center items-center m-10">
        {CardProps.map((props, index) => (
            <Card key={index} cardImg={props.cardImg} title={props.title} paragrafo={props.paragrafo} botao={props.botao}/>
        ))}
    </section>

  );
}