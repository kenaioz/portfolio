import { techs } from "@/infos/techs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/Tooltip";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-8 border-b-2 border-dashed pb-16">
        <div className="border-foreground h-48 w-48 rounded-full border-2 border-dashed"></div>
        <div>
          <h1 className="text-4xl font-bold">Silvio Cesar</h1>
          <p className="text-midground">FullStack Developer</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b-2 border-dashed py-8">
        <h2 className="text-2xl font-bold">Sobre Mim</h2>
        <p className="text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum
          dolore voluptatum dolor pariatur ab commodi exercitationem animi,
          provident odit libero inventore quisquam fugiat, nostrum ipsum
          voluptates at similique doloribus?
        </p>
        <p className="text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          placeat reprehenderit repellat aspernatur, voluptate velit harum
          tenetur omnis atque quo hic quos corrupti dolore, neque accusamus!
          Iste sed animi iure.
        </p>
        <p className="text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          placeat reprehenderit repellat aspernatur, voluptate velit harum
          tenetur omnis atque quo hic quos corrupti dolore, neque accusamus!
          Iste sed animi iure.
        </p>
      </div>

      <div className="border-b-2 border-dashed py-8">
        <h2 className="text-2xl font-bold">Techs</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          perspiciatis amet inventore neque ea eius quod animi, repudiandae
          eligendi veritatis deleniti explicabo mollitia distinctio consequatur
          ad nulla aliquid laboriosam at!
        </p>
        <br />
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="bg-foreground text-background px-1.5 text-xl font-bold">
              Front-End
            </h3>
            <div className="flex flex-wrap border-2 border-dashed">
              {techs.frontend.map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    {tech.name && <tech.icon size={24} />}
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          <div>
            <h3 className="bg-foreground text-background px-1.5 text-xl font-bold">
              Back-End
            </h3>
            <div className="flex flex-wrap border-2 border-dashed">
              {techs.backend.map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    {tech.name && <tech.icon size={24} />}
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          <div>
            <h3 className="bg-foreground text-background px-1.5 text-xl font-bold">
              Databases
            </h3>
            <div className="flex flex-wrap border-2 border-dashed">
              {techs.database.map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    {tech.name && <tech.icon size={24} />}
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          <div>
            <h3 className="bg-foreground text-background px-1.5 text-xl font-bold">
              Tools
            </h3>
            <div className="flex flex-wrap border-2 border-dashed">
              {techs.tools.map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    {tech.name && <tech.icon size={24} />}
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b-2 border-dashed py-8">
        <h2 className="text-2xl font-bold">Projetos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          velit, impedit quam inventore voluptatum modi omnis molestias dolores
          praesentium placeat culpa enim, et ullam ducimus fuga nemo cum aut
          exercitationem.
        </p>

        <div>
          <h3 className="bg-foreground text-background px-1.5 text-xl font-bold">
            Tools
          </h3>
          <div className="flex items-center gap-4 border-2 border-dashed p-4">
            <div className="border-foreground h-36 w-full rounded-md border-2 border-dashed"></div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maxime, incidunt est! Nesciunt, sequi nemo doloribus, quidem
                similique enim itaque amet, excepturi consectetur eum dolore
                dignissimos quia repellendus id numquam consequuntur?
              </p>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maxime, incidunt est! Nesciunt, sequi nemo doloribus, quidem
                similique enim itaque amet, excepturi consectetur eum dolore
                dignissimos quia repellendus id numquam consequuntur?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-8">
        <h2 className="text-2xl font-bold">Sobre Mim</h2>
        <p className="text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum
          dolore voluptatum dolor pariatur ab commodi exercitationem animi,
          provident odit libero inventore quisquam fugiat, nostrum ipsum
          voluptates at similique doloribus?
        </p>
        <p className="text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          placeat reprehenderit repellat aspernatur, voluptate velit harum
          tenetur omnis atque quo hic quos corrupti dolore, neque accusamus!
          Iste sed animi iure.
        </p>
        <p className="text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          placeat reprehenderit repellat aspernatur, voluptate velit harum
          tenetur omnis atque quo hic quos corrupti dolore, neque accusamus!
          Iste sed animi iure.
        </p>
      </div>
    </div>
  );
}
