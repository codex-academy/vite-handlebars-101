// vite.config.js
import handlebars from 'vite-plugin-handlebars';

import andre from "./andre.json";

export default {
  plugins: [handlebars({
    context : {
        title : "Hello",
        show : false,
        andre
    }
  })],
};