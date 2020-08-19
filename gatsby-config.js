module.exports = {
  siteMetadata: {
    title: `Hacktoberfest - São Paulo - 2020`,
    description: `Hacktoberfest - SP - 2020`,
    author: `@larissaabreu`,
    siteUrl: `https://hacktoberfest-sp.github.io/`,
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
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/images/icon.png`
      },
    },
  ],
}
