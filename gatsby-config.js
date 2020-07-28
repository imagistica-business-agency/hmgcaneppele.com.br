module.exports = {
  siteMetadata: {
    title: `HMG & CANEPPELE`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla in neque tincidunt suscipit. Ut ac tempor magna. Suspendisse potenti. In mollis risus in semper tempor.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1260,
              linkImagesToOriginal: false,
              showCaptions: true,
              quality: 80,
              withWebp: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HMG & CANEPPELE`,
        short_name: `HMG & CANEPPELE`,
        start_url: `/`,
        background_color: `#0E3151`,
        theme_color: `#0E3151`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
        icon_options: {
          purpose: `maskable`
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `300i`, `600`, `700`]
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
}
