module.exports = {
  siteTitle: 'Adrian Moravec Portfolio', // <title>
  manifestName: 'Prologue',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/headshot.jpeg',
  pathPrefix: `/gatsby-starter-prologue/`, // This path is subpath of your hosting https://domain/portfolio
  authorName: 'Adrian',
  heading: 'Web Developer',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/moraveca',
    },
    {
      icon: 'fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adrian-moravec/',
    },
    // {
    //   icon: 'fa-twitter',
    //   name: 'Twitter',
    //   url: '',
    // },
    // {
    //   icon: 'fa-facebook',
    //   name: 'Facebook',
    //   url: '',
    // },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:moraveca@gmail.com',
    },
  ],
};
