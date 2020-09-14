/* eslint-env node */
/* eslint-disable functional/immutable-data */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#ffffff',
        display: 'standalone',
        icon: 'src/images/icon.svg',
        name: 'Stream Overlays',
        start_url: '/',
        theme_color: '#444444',
      },
    },
  ],
};
