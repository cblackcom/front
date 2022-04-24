# @cblackcom/front Template

## Tweaks
* Move `gitignore` to `.gitignore`
* Move `package.json.default` to `package.json`

## Install depenencies
```bash
npm i laravel-mix@6 copy-webpack-plugin@10 --save-dev
npm i react react-dom react-redux @reduxjs/toolkit @mui/material @emotion/react @emotion/styled react-router-dom
```

## Use it

```bash
# create an empty public directory to hold the compiled files
mkdir public

# watch for changes and recompile
npx mix watch

# hot reload local development server
npx mix watch --hot

# compile development version
npx mix

# compile production version
# (includes cache busting on index.html)
npx mix --production
```
