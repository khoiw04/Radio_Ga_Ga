import { fileURLToPath, URL } from 'url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { analyzer } from 'vite-bundle-analyzer'
import viteCompression from 'vite-plugin-compression'
import { compression } from 'vite-plugin-compression2'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import preload from 'vite-plugin-preload'
import Font from 'vite-plugin-font'

const ReactCompilerConfig = {
  target: '19' // '17' | '18' | '19'
}

const DEFAULT_OPTIONS = {
  test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  ansiColors: true,
  svg: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false // https://github.com/svg/svgo/issues/1128
          },
          cleanupIDs: {
            minify: false,
            remove: false
          },
          convertPathData: false
        }
      },
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }]
        }
      }
    ]
  },
  png: {
    // https://sharp.pixelplumbing.com/api-output#png
    quality: 100
  },
  jpeg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 100
  },
  jpg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 100
  },
  tiff: {
    // https://sharp.pixelplumbing.com/api-output#tiff
    quality: 100
  },
  // gif does not support lossless compression
  // https://sharp.pixelplumbing.com/api-output#gif
  gif: {},
  webp: {
    // https://sharp.pixelplumbing.com/api-output#webp
    lossless: true
  },
  avif: {
    // https://sharp.pixelplumbing.com/api-output#avif
    lossless: true
  },
  cache: false,
  cacheLocation: undefined
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]]
      }
    }),
    tailwindcss(),
    ViteImageOptimizer(DEFAULT_OPTIONS),
    preload(),
    // analyzer(),
    // compression(),
    // viteCompression(),

    Font.vite({
      scanFiles: ['src/**/*.{vue,ts,tsx,js,jsx}']
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  }
})
