module.exports = {
  basics: {
    name: "John Doe",
    about: "Software Engineer • Public speaker • Blogger",
    email: "hello@maxpou.fr",
    nationality: "French",
    age: "30",
    website: "https://www.maxpou.fr",
    phone: "",
    location: "",
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
      content: ["JavaScript", "React.js"],
    },
    {
      category: "Comfortable",
      content: ["Redux", "ReasonML", "Python", "Rust"],
    },
    {
      category: "Familiar",
      content: ["Node.js", "Docker", "GraphQL", "MongoDB"],
    },
  ],

  projects: [
    {
      name: "TC39",
      description: "",
      url: "https://github.com/tc39/proposal-nullish-coalescing",
      highlights: [
        "Champion for Nullish Coalescing proposal",
      ],
    },
    {
      name: "Public speaker",
      description: "at technical conferences",
      url: "",
      highlights: [
        "Topics addressed: Future of JavaScript, Performances and Testing",
        "Workshop: React Hooks, testing with Jest",
      ],
    },
    {
      name: "Firefox debugger",
      description: "",
      url: "https://github.com/firefox-devtools/debugger",
      highlights: [
        "Implemented the algorithm for step-by-step debugging",
        "Wrote documentation for team and external contributors"
      ],
    },
  ],

  experiences: [
    {
      company: "Gatsby.inc",
      position: "Software Engineer",
      period: "May 2018 - Present",
      location: "Remote",
      activities: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a reiciendis nesciunt",
        "officia voluptas fuga magnam dolorum laudantium, exercitationem, quas asperiores voluptatum",
      ],
    },
    {
      company: "Mozilla",
      position: "Production Engineer",
      period: "Nov 2016 - Apr 2018",
      location: "Berlin, Germany",
      activities: [
        "enim eaque consequuntur, adipisci aperiam harum laboriosam reprehenderit",
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
      ],
    },
  ],

  education: [
    {
      school: "University of California",
      degree: "Computer Science (Minor)",
      period: "2015",
      location: "CA, US",
      detail: [
        "Studied speech recognition."
      ],
    },
    {
      school: "University of Oxford",
      degree: "Mathematics and Computer Science",
      period: "2013",
      location: "Oxford, UK",
      detail: [],
    },
  ],

  languages: [
    {
      level: "Native",
      language: ["English"],
    },
    {
      level: "Advanced",
      language: ["French", "Spanish"],
    },
    {
      level: "Intermediate",
      language: ["German"],
    },
  ],

  hobbies: `
    Cooking, Hockey and Base Jump.
  `,
}
