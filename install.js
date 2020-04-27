#!/usr/bin/env node

var path = require('path')
var ncp = require('ncp').ncp
var fs = require('fs')

ncp(path.resolve(__dirname, 'template'), '.', (err) => {
	if(err) throw err
	if(fs.existsSync('.npmignore') && !fs.existsSync('.gitignore')) {
		fs.renameSync('.npmignore', '.gitignore')
	}
})
