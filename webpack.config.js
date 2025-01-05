const path = require('path');

module.exports = {
  entry: './src/CalendarEmbed.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'calendar.js', 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], 
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], 
  },
  mode: 'production',
};
