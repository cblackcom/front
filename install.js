#!/usr/bin/env node

var path = require('path')
var ncp = require('ncp').ncp
var fs = require('fs')

ncp(path.resolve(__dirname, 'template'), '.')
fs.renameSync('gitignore', '.gitignore')
