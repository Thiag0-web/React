import Logo from "../components/logo";
import { Button } from "./ui/button";

export default function Card() {
  return (
    <div className="m-5 w-200">
      <div className="flex gap-5 p-10 rounded-xl bg-secondary">
        <Logo />
        <div className="flex flex-col gap-2 justify-between">
          <h1 className="text-xl font-semibold ju">Card: Elden Ring (2022)</h1>
          <p className="text-sm">
            Elden Ring é um jogo de ação e RPG em mundo aberto desenvolvido pela
            FromSoftware e publicado pela Bandai Namco. O jogador explora as
            vastas Terras Intermédias, enfrentando inimigos e chefes
            desafiadores enquanto busca restaurar o poder do Anel Prístino
            (Elden Ring) e tornar-se o Lord Prístino. O jogo combina combates
            intensos, exploração livre e uma narrativa sombria criada em
            parceria com o autor George R. R. Martin.
          </p>
          <Button
            className="self-start hover:cursor-pointer hover-sparkles "
            variant="default"
            onClick={() =>
              window.open(
                "https://store.steampowered.com/app/1245620/ELDEN_RING/",
                "_blank"
              )
            }
          >
            Compre agora!
          </Button>
        </div>
      </div>
    </div>
  );
}
