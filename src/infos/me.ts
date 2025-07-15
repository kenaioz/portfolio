interface Me {
  name: string;
  job_description: string;
  contacts: {
    email: string;
  };
  social: {
    title: string;
    url: string;
  }[];
  links: {
    title: string;
    url: string;
  }[];
}

const me: Me = {
  name: "Silvio Cesar",
  job_description: "FullStack Developer",
  contacts: {
    email: "silvio.kenaioz@gmail.com",
  },
  social: [
    {
      title: "GitHub",
      url: "https://github.com/kenaioz/",
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/silviocesarjr/",
    },
  ],
  links: [
    {
      title: "Portfólio, mais sobre mim",
      url: "#",
    },
    {
      title: "Artigos, mais sobre como penso",
      url: "#",
    },
    {
      title: "Home Lab",
      url: "#",
    },
  ],
};

export { me };
export type { Me };
