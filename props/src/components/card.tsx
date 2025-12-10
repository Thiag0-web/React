import { Button } from "./ui/button";

interface CardProps {
  title: string;
  cardImg: string;
  paragrafo: string;
  botao: string;
}

export function Card(props: CardProps) {
  return (
    <div className="flex bg-blue-200 w-250 h-full p-5 gap-7 rounded-2xl">
      <img
        className="w-60 rounded-2xl shadow-2xl"
        src={props.cardImg}
        alt={props.title}
      />
      <div className="flex flex-col justify-between">
        <h3 className="font-bold text-3xl">{props.title}</h3>
        <p>{props.paragrafo}</p>
        <a href={props.botao} target="_blank" >
          <Button className="w-full">Compre aqui!</Button>
        </a>
      </div>
    </div>
  );
}
