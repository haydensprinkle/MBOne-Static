require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const linkResolver = require("./src/utils/linkResolver");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.multipliedbyone.com",
    title: "Multiplied By One",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-web-font-loader",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        schemas: {
          my_deleted_schemas: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `mbo-static-staging`,
      },
    },
  ],
};
