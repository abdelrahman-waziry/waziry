module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://waziry.me`,
    // Your Name
    name: 'Abdelrahman Waziry',
    // Main Site Title
    title: `Abdelrahman Waziry | Front-end Developer`,
    // Description that goes under your name in main bio
    description: `Waziry is a front-end developer based in Cairo, Egypt.`,
    // Optional: Twitter account handle
    author: `@_waziry`,
    // Optional: Github account URL
    github: `https://github.com/abdelrahman-waziry`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/abdelrahmanmohsen/`,
    // Content of the About Me section
    about: `Experienced Front-end developer with a demonstrated history of working in the web industry. Skilled in Web development & Mobile development`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Scholigit',
        description:
          'Scholigit is facilitating interactions between school/nursery, teachers and parents by connecting all parties in an unified platform.',
        link: 'https://scholigit.com/',
      },
      {
        name: 'Twigano',
        description:
          'Twigano is a fun and easy way to make new friends anytime and anywhere eliminating the burden of approaching and igniting the relationship.',
        link: 'https://twigano.com/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'DigitalYard',
        description: 'Front-end Developer, December 2018 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Twigano',
        description: 'Full-Stack Developer, November 2017 - December 2018',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'National Company for roads',
        description: 'Full-Stack Developer, December 2016 - November 2017',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, Express.js, React, PHP',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Waziry`,
        short_name: `Waziry`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
