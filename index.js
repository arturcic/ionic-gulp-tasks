var buildBrowserify_es2015 = require('./browserify-es2015');
var buildBrowserify_typescript = require('./browserify-typescript');
var buildSass = require('./sass-build');
var copyHTML = require('./html-copy');
var copyFonts = require('./fonts-copy');
var copyScripts = require('./scripts-copy');
var webpack = require('./webpack');

module.exports = {
    buildBrowserify_es2015: buildBrowserify_es2015,
    buildBrowserify_typescript: buildBrowserify_typescript,
    buildSass: buildSass,
    copyHTML: copyHTML,
    copyFonts: copyFonts,
    copyScripts: copyScripts,
    webpack: webpack,
}