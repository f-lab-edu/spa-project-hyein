import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@router': path.resolve(__dirname, 'src/js/router.js'),
      '@navigate': path.resolve(__dirname, 'src/js/navigate.js'),
      '@views': path.resolve(__dirname, 'src/js/views'),
      '@api': path.resolve(__dirname, 'src/js/api'),
      '@abstract': path.resolve(__dirname, 'src/js/views/AbstractView.js'),
    },
    extensions: ['.js', '.json', '.scss'],
  },
  mode: 'development',
};