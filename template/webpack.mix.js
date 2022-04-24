const mix = require('laravel-mix')
const CopyPlugin = require('copy-webpack-plugin')
const crypto = require('crypto')

// to compare to latest default version from laravel-mix, see:
// node_modules/laravel-mix/setup/webpack.mix.js

const versionString = () => crypto.randomBytes(8).toString('hex')

mix.setPublicPath('public')

mix.js('src/App.jsx', 'public/').react()

// if you want an actual CSS file,
// uncomment these lines
// mix.sass('src/app.scss', 'public/').options({
// 	// https://laravel.com/docs/7.x/mix#url-processing
// 	processCssUrls: false,
// })

mix.webpackConfig({
	plugins: [
		// using this instead of mix.version()
		// so we can ship changes in a static HTML file
		new CopyPlugin({
			patterns: [
				{
					from: 'src/index.html',
					to: 'index.html',
					transform(content) {
						return content
							.toString()
							// if you want an actual CSS file,
							// uncomment this line
							// .replace(/app.css/g, 'app.css?' + versionString())
							.replace(/App.js/g, 'App.js?' + versionString())
					}
				}
			]
		})
	],
	// https://webpack.js.org/configuration/dev-server
	devServer: {
		port: 8080,
		// make it publicly available
		// host: '0.0.0.0',
		// disableHostCheck: true,
	},
	watchOptions: {
		ignored: /node_modules/
	},
})
