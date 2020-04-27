#!/usr/bin/env node

var path = require('path')
var ncp = require('ncp').ncp

ncp(path.resolve(__dirname, 'template'), '.')
