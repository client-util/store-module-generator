process.env.BABEL_ENV = 'production'

var fs = require('fs')
var zlib = require('zlib')
var rollup = require('rollup')
const terser = require('rollup-plugin-terser').terser
var babel = require('rollup-plugin-babel')
var version = process.env.VERSION || require('../package.json').version
var moduleName = require('../package.json').name

var banner =
  '/*!\n' +
  moduleName +
  version +
  '\n' +
  ' * (c) ' +
  new Date().getFullYear() +
  ' Ace \n' +
  ' * Released under the MIT License.\n' +
  ' */'

const inputOptions = {
  input: 'src/index.js',
  plugins: [babel(), terser()]
}
const outputOptions = {
  file: 'dist/main.js',
  name: moduleName,
  format: 'esm',
  banner
}

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions)

  console.log(bundle.watchFiles) // an array of file names this bundle depends on

  // generate code
  // const { output } = await bundle.generate(outputOptions)

  // for (const chunkOrAsset of output) {
  // }

  await bundle.write(outputOptions)
}

build().catch(logError)

function logError(e) {
  console.log(e)
}
