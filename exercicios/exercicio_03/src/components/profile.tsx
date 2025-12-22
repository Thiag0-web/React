import { Button } from "./ui/button";

interface ProfileProps {
  img: string;
  nome: string;
  bio: string;
  phone: string;
  email: string;
  githubUrl: string;
  linkedlinUrl: string;
  twitterUrl: string;
}

export function Profile(props: ProfileProps) {
  return (
    <section className="flex items-center justify-center min-h-screen bg-blue-300 ">
      <div className="flex flex-col bg-white p-10 items-center justify-center rounded-2xl ">
        <img
          className="  rounded-full shadow-[0_8px_16px_-8px_rgba(0,0,0,0.5)] my-8 mt-8 mb-4"
          src={props.img}
          alt={props.nome}
        />
        <h2 className="font-bold m-1">{props.nome}</h2>
        <p className="">{props.bio}</p>

        <p>{props.phone}</p>
        <p>{props.email}</p>
        <div className="flex flex-col items-center gap-4 ">
          <a href={props.githubUrl} target="_blank">
            <Button className=" bg-linear-to-br from-[rgb(30,112,189)] to-[rgb(124,212,235)]">
              GitHub
            </Button>
          </a>
          <a href={props.linkedlinUrl} target="_blank">
            <Button className=" bg-linear-to-br from-[rgb(30,112,189)] to-[rgb(124,212,235)]">
              Linkedlin
            </Button>
          </a>
          <a href={props.twitterUrl} target="_blank">
            <Button className=" bg-linear-to-br from-[rgb(30,112,189)] to-[rgb(124,212,235)]">
              Twitter
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
