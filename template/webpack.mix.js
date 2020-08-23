const mix = require('laravel-mix')
const CopyPlugin = require('copy-webpack-plugin')
const crypto = require('crypto')

// to compare to latest default version from laravel-mix, see:
// node_modules/laravel-mix/setup/webpack.mix.js

const versionString = () => crypto.randomBytes(8).toString('hex')

mix.setPublicPath('public')

mix.react('src/app.jsx', 'public/')
mix.sass('src/app.scss', 'public/').options({
	// https://laravel.com/docs/7.x/mix#url-processing
	processCssUrls: false,
})

mix.webpackConfig({
	plugins: [
		// using this instead of mix.version()
		// so we can ship changes in a static HTML file
		new CopyPlugin([{
			from: 'src/index.html',
			to: 'index.html',
			transform(content) {
				return content
					.toString()
					.replace(/app.css/g, 'app.css?' + versionString())
					.replace(/app.js/g, 'app.js?' + versionString())
			}
		}])
	],
	// https://webpack.js.org/configuration/dev-server
	devServer: {
		inline: true,
		port: 8080,
		// make it publicly available
		// host: '0.0.0.0',
		// disableHostCheck: true,
	},
	watchOptions: {
		ignored: /node_modules/
    },
})
