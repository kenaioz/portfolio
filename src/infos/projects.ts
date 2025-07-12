import { SiGithub } from "react-icons/si";

import { IconType } from "react-icons";

interface Projects {
  image: string;
  name: string;
  description: string;
  techs: string[];
  links?: {
    name: string;
    url: string;
    icon: IconType;
  }[];
}

const projects: Projects[] = [
  {
    image: "Teste",
    name: "FutSuperstition",
    description:
      "Ferramenta pessoal que uso para acompanhar e registrar minhas superstições com futebol, nele registro as camisas que tenho, os locais que assisto os jogos e no final cadastro o jogo que assisti cruzando essas informações para gerar as combinações mais vitoriosas.",
    techs: ["TypeScript", "React", "Remix", "TailwindCSS"],
    links: [
      {
        name: "GitHub Repo",
        url: "https://github.com/kenaioz/futsuperstition-ui",
        icon: SiGithub,
      },
    ],
  },
  {
    image: "Teste",
    name: "Eletron-UI",
    description:
      "Design System da Eletrônica Santana que estabelece o compartilhamento de estilos e linguagem de todas as aplicações internas do grupo. Com a Eletron-UI padronizamos as interfaces e usabilidade das aplicações, garantindo uma melhor experiencia para os desenvolvedores que agora precisam de menos tempo para construir interfaces e para os usuários que agoram precisam de menos guias para navegarem nas aplicações.",
    techs: ["TypeScript", "React", "Storybook", "Styled-Components"],
  },
];

export { projects };
export type { Projects };
