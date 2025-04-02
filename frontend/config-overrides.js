// config-overrides.js
module.exports = {
    webpack: (config) => {
      // Add the fallback for 'os' module here
      config.resolve.fallback = {
        os: require.resolve('os-browserify/browser')
      };
      return config;
    }
  };