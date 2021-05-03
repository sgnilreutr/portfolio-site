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
    {
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/sitemap.xml`,
				// Exclude specific pages or groups of pages using glob parameters
				// See: https://github.com/isaacs/minimatch
				// The example below will exclude the single `path/to/page` and all routes beginning with `category`
				exclude: [`/category/*`, `/path/to/page`],
				query: `
					{
						site {
							siteMetadata {
								siteUrl
							}
						}

						allSitePage {
							nodes {
								path
							}
						}
				}`,
				resolveSiteUrl: ({ site, allSitePage }) => {
					//Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
					return site.siteMetadata.siteUrl;
				},
				serialize: ({ site, allSitePage }) =>
					allSitePage.nodes.map((node) => {
						return {
							url: `${site.siteMetadata.siteUrl}${node.path}`,
							changefreq: `daily`,
							priority: 0.7,
						};
					}),
			},
		},
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
