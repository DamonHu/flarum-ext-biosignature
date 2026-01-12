const path = require('path');

module.exports = {
  entry: './src/forum/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'forum.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-react', { "pragma": "m", "pragmaFrag": "m.Fragment" }]
          ],
        },
      },
    ],
  },
  // 核心配置：告诉 Webpack 遇到这些 import 时，直接从 Flarum 全局变量里取
  externals: {
    'flarum/common/extend': 'flarum.core.compat["extend"]',
    'flarum/forum/app': 'flarum.core.app',
    'flarum/forum/components/Post': 'flarum.core.compat["components/Post"]',
  },
};