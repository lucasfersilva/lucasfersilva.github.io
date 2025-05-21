// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lucasfersilva', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projetos Github',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Meus Projetos',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Implantação Zabbix',
          description:
            'Fui responsável pela implantação do Zabbix nas empresas Didatica e Modernização. Diminuímos em 70% as falhas e quedas, hoje mantemos o mínimo 99.5% de disponibilidade de servidores.',
          imageUrl:
            'https://i.ibb.co/5D6XN37/Clean-Shot-2025-05-20-at-01-46-53-2x.png',
          link:null
        },
        {
          title: 'Migração Para Cloud Modernização Pública',
          description:
            'Participei da modernização da infraestrutura da empresa por meio da migração dos servidores para a IBM Cloud. A iniciativa envolveu: Migração de 80 servidores de aplicação, Transferência de 3 servidores de banco de dados, cada um com 20 instâncias de SQL Server  ',
          imageUrl:
            'https://i.ibb.co/R4Pf7s1r/72f33312f662415bc296afd8f3727a95cb449f3767a7d265bc8bd74142f3608c.png',
          link: null,
        },
        
        {
          title: 'Migração Para Cloud Didatica Digital',
          description:
            'Fui responsável pela migração da Didática Digital para a nuvem, incluindo 10 servidores de aplicação e um de banco de dados, além da implantação de VPN para acesso seguro e monitoramento 24/7 via Zabbix.',
          imageUrl:
            'https://i.ibb.co/kscfjc7y/f2919432abb9ba98812e2161c59227c1a05d16f9c977cf8f1b5ab5887660ed80.png',
          link: 'https://example.com',
        },
        {
          title: 'Implantação De Wazuh',
          description:
            'Implementei a ferramenta Wazuh nas empresas da Modernização e Didática para fortalecer a segurança da informação. Com ela, foi possível centralizar o monitoramento, detectar ameaças em tempo real, analisar logs e garantir a integridade dos sistemas. O resultado foi uma resposta mais rápida a incidentes, maior controle do ambiente e alinhamento com requisitos de conformidade.',
          imageUrl:
            'https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/home/siem-dashboard.png?ver=1744815409521',
          link: 'https://example.com',
        },
        {
          title: 'Implantação Fortigate',
          description:
            'Implementei a solução de segurança FortiGate em 120 servidores com o objetivo de reforçar o controle de tráfego e proteger os serviços corporativos contra acessos não autorizados. Também configuramos o FortiClient VPN para permitir conexões seguras e criptografadas aos ambientes internos, garantindo acesso remoto confiável aos servidores e sistemas da empresa.',
          imageUrl:
            'https://i.ibb.co/R4Pf7s1r/72f33312f662415bc296afd8f3727a95cb449f3767a7d265bc8bd74142f3608c.png',
          link: 'https://example.com',
        },
        {
          title: 'Implantação Fortiweb',
          description:
            'Implantei o WAF Fortiweb em varias aplicações da Modernização para reforçar a segurança dos sistemas e consequentemente da infraestrutura.',
          imageUrl:
            'https://tisec.com.br/wp-content/uploads/2025/01/fortinet-640x640.webp',
          link: 'https://example.com',
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio de Lucas Fernandes',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'lucasde-oliveira-fernandes-silva',
    instagram: 'lucasfernsil',
    //youtube: '', // example: 'pewdiepie'
    medium: 'lucasmatdlx',
    website: 'https://www.lucasfersilva.github.io/',
    phone: '+55(21)996017319',
    email: 'lucasmatdlx@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Zabbix',
    'Docker',
    'Hyper-v',
    'VMWare',
    'Fortigate',
    'Fortiweb',
    'Microsoft SQL-Server',
    'PostgreSQL',
    'Git',
    'Docker',
    'Java',
    'Javascript',
    'Ansible',
    'Bash',
  ],
  experiences: [
    { 
      company: 'Modernização Pública',
      position: 'Gerente de Projetos de Infraestrutura',
      from: 'Fevereiro 2020',
      to: 'Presente',
      companyLink: 'https://www.modernizacao.com.br/',
    },
    {
      company: 'Didática Digital',
      position: 'Consultor de TI',
      from: 'Fevereiro 2022',
      to: 'Presente',
      companyLink: 'https://www.didaticadigital.com.br/',
    },
    {
      company: 'Upwork',
      position: 'Freelancer',
      from: 'Março 2019',
      to: 'Fevereiro 2021',
      companyLink: 'https://www.upwork.com/freelancers/~01164223e728cbb0cc',
    },
    {
      company: 'DGnet Watchdog',
      position: 'Estagiario em Desenvolvimento de Sistemas Python',
      from: 'Setembro 2019',
      to: 'Julho 2020',
      companyLink: 'https://damianoglobal.com/dgnet-watchdog',
    },
  ],
  certifications: [
    {
      
      name: 'Google IT Automation with Python Professional Certificate ',
      body: 'Certificado de Automação de TI em Python emitido pelo Google',
      year: 'Agosto de 2020',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/BDFTQVHE3DND',
    },
  ],
  educations: [
    {
      institution: 'UniFOA',
      degree: 'Bacharel em Sistemas De Informação',
      from: '2018',
      to: '2020',
    },
    {
      institution: 'Análise e Desenvolvimento de Sistemas',
      degree: 'Tecnólogo em análise e desenvolvimento de sistemas',
      from: '2020',
      to: '2021',
    },
  ],
  /*
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],*/
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'retro',
      'wireframe',
      'black',
      'business',
      'acid',
      'lemonade',
      'night',
 
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
