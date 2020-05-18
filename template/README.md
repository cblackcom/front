# @cblackcom/front Template

## Tweaks
* Move `package.json.default` to `package.json` and hack accordingly

## Install depenencies
```bash
npm i laravel-mix cross-env copy-webpack-plugin@5 --save-dev
npm i react react-dom bootstrap
```

## Use it

```bash
# create an empty public directory to hold the compiled files
mkdir public

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
