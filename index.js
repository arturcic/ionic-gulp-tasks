var buildBrowserify = require('./browserify-typescript');
var buildSass = require('./sass-build');
var copyHTML = require('./html-copy');
var copyFonts = require('./fonts-copy');
var copyScripts = require('./scripts-copy');
var webpack = require('./webpack');

module.exports = {
    buildBrowserify: buildBrowserify,
    buildSass: buildSass,
    copyHTML: copyHTML,
    copyFonts: copyFonts,
    copyScripts: copyScripts,
    webpack: webpack,
}