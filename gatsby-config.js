const path = require('path')

require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
		title: `Robbert Tuerlings`,
		description: `The personal website of a Dutch tech savvy analytical human. Always looking out for a new adventure`,
		author: `@sgnilreutr`,
		siteUrl: `https://robberttuerlings.online`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qyxj595mgdfb`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `rtuerlings-personal-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#EEEEEE`,
        theme_color: `#EEEEEE`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
			resolve: `gatsby-plugin-hotjar`,
			options: {
				id: 1969414,
				sv: 6,
			},
    },
    {
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://robberttuerlings.online',
				sitemap: 'https://robberttuerlings.online/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }],
				output: '/robots.txt',
			},
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
