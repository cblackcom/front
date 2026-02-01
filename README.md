# @cblackcom/front

This is my opinionated AI prompt for creating a new React web application.  It starts with the [Vite](https://vite.dev) team's excellent `react-ts` template and adds several things that we commonly use at PNDLM.  This has been most recently tested and tweaked for Claude Sonnet 4.5.

- React
- Emotion
- Redux Toolkit
- React Router
- Font Awesome

## Instructions

Create a new git repo or `cd` to the one you already have—
```bash
mkdir new-project
cd new-project
git init
```

Now, aim Claude Code at it and say—

```text
Claude, please create a new web application according to the prompt located at  
https://github.com/cblackcom/front/blob/main/PROMPT.md
```

Then, if you want to add authentication—

```text
Claude, please update the web application we just created using the prompt located at  
https://github.com/cblackcom/front/blob/main/PROMPT-Auth.md
```

Note that due to third-party cookie restrictions, in order to authenticate successfully against the test API out of the box using a strict browser like Safari, you will need to proxy the Vite dev server through ngrok using a custom domain ending in `.pndlm.net`.
