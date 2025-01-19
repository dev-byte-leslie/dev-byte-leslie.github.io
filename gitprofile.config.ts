// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dev-byte-leslie', // Your GitHub org/user name. (This is the only required config)
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
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['dev-byte-leslie/SurveyForm'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'External Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Pesky',
          description:
            'Your only goal is to wreak havoc on the town. Be careful, ' +
            'the more chaos you cause the more likely you are to be caught  ' +
            'by animal control! Knock garbage cans over, attack citizens ' +
            'and even destroy the insides of their homes. ' +
            "Lose all three lives and it's game over!\n" +
            '\n' +
            'Play as Walter the goose, Tammy the skunk, and Carlos the raccoon in this wacky game!',
          imageUrl:
            'https://img.itch.zone/aW1hZ2UvMTM0NjU0OC83ODQyNDg1LnBuZw==/original/%2BeFu8a.png',
          link: 'https://murles29.itch.io/pesky',
        },
        {
          title: 'Murder on the Train Jam Express',
          description:
            'In the 48 hours before GDC, strangers bonded over making games on the TrainJam Express. ' +
            'The revelry was crushed by a mysterious murder… with no body to be found. ' +
            'But where did it happen, and how? And most importantly, who is the murderer???\n' +
            '\n' +
            'That’s where you come in. Please, bring light to this very real tragedy. ' +
            'Try to find the one real solution to this murder.\n' +
            '\n' +
            'Features include: ' +
            'Terrier-turkey lead detective,\n' +
            'Angry banana-man,\n' +
            'Romance, jealousy, and other human emotions,\n' +
            'Sweet parallax background movement,\n' +
            'Lots and lots of words,\n' +
            'MURDER,\n' +
            '27 DIFFERENT ENDINGS (SERIOUSLY!)\n',
          imageUrl:
            'https://img.itch.zone/aW1hZ2UvMjM1OTE2LzExMjE0MjMucG5n/original/1msXfL.png',
          link: 'https://justonia.itch.io/murder-on-the-train-jam-express',
        },
      ],
    },
  },
  seo: {
    title: 'Leslie Murphy',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/leslie-murphy29',
    website: 'https://www.lesliemurphy.dev',
    /*twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    phone: '',
    email: '',*/
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'Javascript',
    'Typescript',
    'C++',
    'Three.js',
    'React',
    'Redux',
    'React Three Fiber (R3F)',
    'HTML',
    'CSS',
    'Python',
    'Java',
    'Unity',
    'Unreal Engine 4',
    'Jet Brains',
    'PostgreSQL',
    'Git',
    'Docker',
    'Postman',
    'XR',
  ],
  experiences: [
    {
      company: 'Fair Worlds',
      position: 'Unity Developer',
      from: 'March 2022',
      to: 'Present',
      companyLink: 'https://www.fairworlds.com/',
    },
    {
      company: 'ReadySet Technologies',
      position: 'Unity Developer',
      from: 'March 2020',
      to: 'March 2022',
      companyLink: 'https://readysetvr.com/',
    },
    {
      company: 'Thrivent Financial',
      position: 'Associate IT Support Specialist',
      from: 'August 2019',
      to: 'March 2020',
      companyLink: 'https://www.thrivent.com/',
    },
    {
      company: 'Sentry Insurance',
      position: 'Software Engineer Intern',
      from: 'May 2018',
      to: 'August 2018',
      companyLink: 'https://www.sentry.com/',
    },
    {
      company: 'Regal Rexnord',
      position: 'Game Design Technician',
      from: 'May 2018',
      to: 'August 2018',
      companyLink: 'https://www.regalrexnord.com/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'University of Wisconsin - Stout',
      degree: 'B.S Computer Science - Game Design and Development (Math)',
      from: '2014',
      to: '2018',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'retro',

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
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
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

  // // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
