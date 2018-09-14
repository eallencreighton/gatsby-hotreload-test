module.exports = {
    siteMetadata: {
      title: `Pandsas Eating lots`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
          },
      `gatsby-plugin-emotion`,
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }