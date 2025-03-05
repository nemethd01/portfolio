import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';
import glob from 'glob';

export default defineConfig(
    {
        // base: '/buld/',
        base: '/', // for local
        // base: '/build/portfolio/', // for GitHub pages
        // assetsInclude: ['**/*.jpg', '**/*.png', '**/*.mp4', '**/*.svg'],
        css: {
             devSourcemap: true
         },
        server: {
            host: "local.portfolio.com",
            port:
                8000,
            hmr:
                {
                host: "local.portfolio.com",
            },
            watch: {
                usePolling: true,
            },
        },
        plugins: [
            vue(),
        ],
         build: {
             emptyOutDir: true,
             // assetsDir: 'assets',
             outDir: 'public/build',
             // outDir: 'docs', // for GitHub pages
             rollupOptions: {
                 plugins: [commonjs({'requireReturnsDefault': 'auto'})],
                 input: glob.sync(path.resolve(__dirname, 'src/**/*.{vue,js,css}')),
                 // external: [
                 // ]
             },
         }
    }

)