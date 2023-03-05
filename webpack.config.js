module.exports = {
  // ... other config settings
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!mapbox-gl\/dist\/mapbox-gl.js)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
