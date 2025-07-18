import Link from "next/link";

import { me } from "@/infos/me";
import { techs } from "@/infos/techs";
import { projects } from "@/infos/projects";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/Tooltip";

import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section
        id="hero"
        className="flex h-[40vh] flex-wrap items-center justify-center gap-2 border-b-2 border-dashed sm:h-[60vh] sm:justify-start sm:gap-8"
      >
        <div className="border-foreground h-48 w-48 rounded-full border-2 border-dashed"></div>
        <div>
          <h1 className="text-center text-4xl font-bold sm:text-start">
            {me.name}
          </h1>
          <p className="text-midground text-center sm:text-start">
            {me.job_description}
          </p>
        </div>
      </section>

      <section
        id="about_me"
        className="flex flex-col gap-2 border-b-2 border-dashed pb-12"
      >
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
      </section>

      <section
        id="techs"
        className="flex flex-col gap-4 border-b-2 border-dashed pb-12"
      >
        <div>
          <h2 className="text-2xl font-bold">Techs</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            perspiciatis amet inventore neque ea eius quod animi, repudiandae
            eligendi veritatis deleniti explicabo mollitia distinctio
            consequatur ad nulla aliquid laboriosam at!
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {techs.map((tech, index) => (
            <div key={index}>
              <div className="bg-foreground text-background flex items-center gap-2 px-1.5">
                <h3 className="text-xl font-bold">{tech.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2 border-2 border-t-0 border-dashed p-2">
                {tech.items.map((techItem, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger>
                      {techItem.icon && <techItem.icon size={24} />}
                    </TooltipTrigger>
                    <TooltipContent>{techItem.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="flex flex-col gap-4 border-b-2 border-dashed pb-12"
      >
        <div>
          <h2 className="text-2xl font-bold">Projetos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            velit, impedit quam inventore voluptatum modi omnis molestias
            dolores praesentium placeat culpa enim, et ullam ducimus fuga nemo
            cum aut exercitationem.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="bg-foreground text-background flex items-center gap-2 px-1.5">
                <h3 className="text-xl font-bold">{project.name}</h3>
                {project.links && (
                  <div className="flex gap-2">
                    {project.links.map((link, index) => (
                      <Link
                        key={index}
                        title={link.name}
                        href={link.url}
                        target="_blank"
                      >
                        {<link.icon />}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center gap-4 border-2 border-t-0 border-dashed p-4 sm:flex-row">
                <div className="border-foreground aspect-video h-42 rounded-md border-2 border-dashed"></div>
                <div className="flex flex-col gap-4">
                  <p className="text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-foreground text-background rounded-md px-1.5 py-0.5 text-sm text-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="flex flex-col gap-2 pb-12">
        <h2 className="text-2xl font-bold">Contato</h2>
        <div className="flex flex-col gap-4">
          <p>
            Para dúvidas, conexões profissionais ou apenas para um bate papo,
            entre em contato por e-mail ou pelas redes sociais.{" "}
            <b>Vamos conversar</b>.
          </p>
          <div className="flex gap-2">
            <Link
              href={me.contacts.email}
              target="_blank"
              className="bg-foreground text-background hover:bg-midground focus:bg-foreground focus:text-background align-text-center flex w-fit cursor-pointer items-center gap-2 rounded-md p-1.5 px-4 text-center transition-all duration-300 ease-in-out"
            >
              <IoIosMail />
              Entrar em contato
            </Link>
            {me.social.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                target="_blank"
                className="bg-foreground text-background hover:bg-midground focus:bg-foreground focus:text-background align-text-center flex w-fit cursor-pointer items-center gap-2 rounded-md p-1.5 px-4 text-center transition-all duration-300 ease-in-out"
                aria-label={item.title}
              >
                {item.title === "Linkedin" ? (
                  <FaLinkedin size={20} />
                ) : (
                  <FaGithub />
                )}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
