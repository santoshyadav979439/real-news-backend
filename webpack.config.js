var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeModules = {};
module.exports = [
    {
        name: 'server',
        entry: './src/index.js',
        target: 'node',
        output: {
            path: __dirname + '/dist/server',
            filename: 'bundle.js',
        },
    }
 
];