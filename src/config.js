module.exports = {
  siteTitle: 'Ravi Hooda | Software Engineer',
  siteDescription:
    'Ravi Hooda is a software engineer based in Pune,India who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Ravi Hooda, ravihooda155,ravihooda7, software engineer, back-end engineer, web developer,Golang, India',
  siteUrl: 'https://ravihooda155.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Ravi Hooda',
  location: 'Pune,India',
  email: 'ravihooda155@gmail.com',
  github: 'https://github.com/ravihooda155',
  twitterHandle: '@r7hooda',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ravihooda155',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ravihooda7',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ravihooda155',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ravihooda7',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
