import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import dts from 'rollup-plugin-dts'
import svgr from '@svgr/rollup'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: packageJson.name
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      external(), // To prevent bundling peerDependencies
      resolve(), // Resolve third party dependencies in node_modules
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(), // To minify our bundle
      svgr({ exportType: 'named', jsxRuntime: 'automatic' })
    ],
    external: ['react', 'react-dom', 'styled-components']
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }

]
