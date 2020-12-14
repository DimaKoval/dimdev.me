const base = new URL("https://dimdev.me");
module.exports = {
  siteMetadata: {
    title: `dimdev.me`,
    description: `description`,
    author: `Dima Koval <iamdimakoval@gmail.com>`,
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${base}`,
        sitemap: `${base}sitemap.xml`,
        policy: [{ userAgent: "*", disallow: "/" }],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Signature.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "dimdev.me",
        region: "eu-west-1",
      },
    },
  ],
};
