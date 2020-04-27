# @cblackcom/front Template

## Install depenencies
```bash
npm i laravel-mix cross-env copy-webpack-plugin --save-dev
npm i react react-dom bootstrap
```

## Configure package.json

Copy `package.json.default` to `package.json` and hack accordingly.

## Use it

```bash
# watch for changes and recompile
npm run watch

# hot reload local development server
npm run hot

# compile development version
npm run dev

# compile production version
# (includes cache busting on index.html)
npm run production
```
