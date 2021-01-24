/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Visual Builder Onepage Landing`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
        extensions: ["js", "scss", "sass"],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Mukta:400,700,800"],
        },
        custom: {
          families: ["Feather"],
          urls: ["/resources/fonts/font-feathericons/dist/feather.css"],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "",
    //   },
    // },
  ],
}
