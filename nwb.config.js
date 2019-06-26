module.exports = {
  type: 'react-component',
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
