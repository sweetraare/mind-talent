const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nosotros: resolve(__dirname, "nosotros/index.html"),
        servicios: resolve(__dirname, "servicios/index.html"),
        cursos: resolve(__dirname, "cursos/index.html"),
        contacto: resolve(__dirname, "contacto/index.html"),
      },
    },
  },
};
