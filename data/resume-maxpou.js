module.exports = {
  basics: {
    name: "Maxence Poutord",
    title: "Frontend Engineer",
    email: "hello@maxpou.fr",
    nationality: "French",
    age: "31",
    website: "https://www.maxpou.fr",
    cvUrl: "https://www.maxpou.fr/cv",
    phone: "",
    location: "",
    lastUpdate: "November 2020",
    profiles: [
      {
        network: "Twitter",
        url: "https://twitter.com/_maxpou",
      },
      {
        network: "GitHub",
        url: "https://github.com/maxpou",
      },
      {
        network: "LinkedIn",
        url: "https://www.linkedin.com/in/maxpou",
      },
    ],
  },

  skills: [
    {
      category: "Proficient",
      content: ["JavaScript", "Vue.js", "Git", "Testing (Jest&Testing library)"],
    },
    {
      category: "Comfortable",
      content: ["React.js", "Gatsby.js", "CI/CD", "Web Accessibility (A11Y)", "Web Performances", "Functional Programming"],
    },
    {
      category: "Familiar",
      content: ["Node.js", "Docker", "Firebase", "GraphQL"],
    },
  ],

  projects: [
    {
      name: "maxpou.fr",
      description: "my personal website",
      url: "https://www.maxpou.fr",
      highlights: [
        "Write Technical posts (French & English)",
        "Built with Gatsby, React, CSS-in-JS and MDX"
      ],
    },
    {
      name: "Public speaker",
      description: "at technical conferences",
      url: "https://www.maxpou.fr/speaking",
      highlights: [
        "Conference topic: JavaScript, Testing, PWA and Software quality",
        "Workshops/Training: Vue.js and PHP",
      ],
    },
    {
      name: "Open-source contributions",
      description: "",
      url: "https://github.com/maxpou",
      highlights: [
        "gatsby-starter-morning-dew - A Gatsby theme/starter to build lightning-fast blog/websites",
        "docker-symfony - A multi-container stack with NGINX, PHP7-FPM, MySQL and ELK (Elasticsearch, Logstash and Kibana)",
        "Other (see my GitHub profile)"
      ],
    },
  ],

  experiences: [
    {
      company: "VSware",
      position: "Senior Software Engineer",
      period: "May 2018 - Present",
      location: "Remote",
      activities: [
        "Improving the frontend infrastructure of a massive Vue.js application (~5k vue&js files / ~650k lines of codes). Frontend part rely on a big monorepo",
        "Working on the application architecture",
        "Introduced and maintaining a testing culture (for unit and integration testing)",
        "Working on application accessibility (A11Y) to meet AA criteria (WCAG)",
        "Maintaining decent performances optimisation",
        "Mentoring developers",
      ],
    },
    {
      company: "Hostelworld",
      position: "Software Engineer",
      period: "Nov 2016 - Apr 2018",
      location: "Dublin, Ireland",
      activities: [
        "Architecture definition, development and maintenance of the main website (back+front)",
        "Co-refactor complete frontend architecture of the main website (from jQuery to Vue.js)",
        "Train and mentor team to modern JavaScript and Vue.js",
      ],
    },
    {
      company: "Conserto",
      position: "Consultant",
      period: "May 2015 - Apr 2016",
      location: "Nantes, France",
      activities: [
        "Architecture definition, development and maintenance of various web applications",
        "Build proof of concepts/research and development",
        "Draft and give training in PHP, Symfony2",
      ],
    },
    {
      company: "Energy Formation (ENGIE Group)",
      position: "Web Developer/Project Manager",
      period: "Oct 2011 - Jan 2015",
      location: "Nantes, France",
      activities: [
        "Creation of a web application based on the Symfony Framework (expose/consume API)",
        "Lead a project which aims to reduce paper consumption by supplying dematerialized documentation to customers",
        'Monitor project that empowers technical people of Storengy. Project awarded by the "transverse award (prix transverse)" at innovation challenge of Storengy',
      ],
    },
  ],

  education: [
    {
      school: "ENI Ecole Informatique",
      degree: "Architecte Logiciel / Software Architect title (master degree)",
      period: "2013 - 2015",
      location: "St Herblain, France",
      detail: [],
    },
    {
      school: "ENI Ecole Informatique",
      degree:
        "Concepteur Développeur Informatique / IT developer designer (bachelor degree)",
      period: "2011 - 2013",
      location: "St Herblain, France",
      detail: [],
    },
    {
      school: "Lycée S. de Mauléon",
      degree: "BTS Informatique de Gestion / IT management (technical degree)",
      period: "2009 - 2011",
      location: "Vendée, France",
      detail: [],
    },
  ],

  languages: [
    {
      level: "Advanced",
      language: ["English"],
    },
    {
      level: "Native",
      language: ["French"],
    },
    {
      level: "Intermediate",
      language: ["Spanish"],
    },
  ],

  hobbies: `
    Personal development, canyoning (I guide), running, hiking, cinema (especially Danish), 
    cooking, travelling.
  `,

  values: ['knowledge sharing', 'user privacy', 'diversity']
}
