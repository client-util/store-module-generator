process.env.BABEL_ENV = 'production'

const terser = require('rollup-plugin-terser').terser
const babel = require('rollup-plugin-babel')
const moduleName = require('./package.json').name

module.exports = {
  input: 'src/index.js',
  plugins: [babel(), terser()],
  output: {
    file: 'dist/main.js',
    format: 'esm',
    name: moduleName
  }
}
