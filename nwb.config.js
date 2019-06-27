module.exports = {
  type: 'react-component',
  webpack: {
    extra: {
      externals: ['tls', 'net', 'fs'],
    }
  },
  npm: {
    esModules: true,
    umd: {
      global: 'doopoll-nps-widget',
      externals: {
        react: 'React'
      }
    }
  }
}
