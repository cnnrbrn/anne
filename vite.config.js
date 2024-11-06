import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa",
  // base: process.env.NODE_ENV === 'production' ? '/fed2-js2-ca/annechh' : '/',
  // base: "anne",
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        login: resolve(__dirname, "./auth/login/index.html"),
        auth: resolve(__dirname, "./auth/index.html"),
        register: resolve(__dirname, "./auth/register/index.html"),
        profile: resolve(__dirname, "./profile/index.html"),
        post: resolve(__dirname, "./post/index.html"),
        editPost: resolve(__dirname, "./post/edit/index.html"),
        createPost: resolve(__dirname, "./post/create/index.html"),
      },
    },
  },
});
