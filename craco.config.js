const CracoLess = require('craco-less')
const aliases = require('./aliases.config').webpack

module.exports = {
  babel: {
    plugins: [['import', { libraryName: 'antd', style: true }]],
  },
  webpack: {
    alias: aliases,
  },
  plugins: [
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              hack: `true;
                @import "~@design";
              `,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
