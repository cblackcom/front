# Project Generation Prompt

Hello!  Can you please create a new React + TypeScript web application with the following setup.

## Prompt Me
- Please ask me what directory I'd like this new application created in.
- Please ask me if I have a Package Token for FontAwesome Pro, and if so, what it is.  Please also ask me who this token belongs to, so you can note the ownership in the comments next to the token, and also a note that states that FontAwesome has been licensed for use on this project and to inquire with the token owner for details.

## Base Stack
- Initialize a Vite project with the `react-ts` template
- Use pnpm as the package manager

## Philosophy
- We assume that the Vite template has been set up with best practice already in mind, and therefore prefer minimal configuration changes from the shipping defaults.
- However, I am open to your suggestions for improvement or modernization of this setup or this prompt.  Please prompt me with any new suggestions you might have before implementing them.

## Dependencies to Install
- React
- Emotion React and Styled
- Redux Toolkit
- React Router
- React Font Awesome SVG (Pro Solid if API key is provided by me, and Free Solid if not)

## Style
- If this is a new repository, set up VSCode workspace editor preferences to be size 4 tabs.
- Please style the generated code using tabs wherever it won't mess anything up (i.e. file types that don't rely on spaces to work correctly).
- Use `code/style.ts` in this repository as the base setup for the Emotion theme and global styling.
- Use Emotion Styled components with Object styles to create the initial interface.
- Use `code/4row-white.svg` as the logo on pages and set its height to `3rem`.
- Ensure that page components consume the available width of their parent containers.
- Use multiples of `0.25rem` and `em` units for spacing and sizing.
- If you need any additional colors, opacities, or typography styles, name them and add them to the theme rather than using one-off literal specifications in the components.
- Use a spinner from Font Awesome for any loading indicators.
- Use Redux for API calls and state management.
- Use `ReduxProvider` as the tag name for the Redux Provider, to avoid ambiguity with other Provider tags.
- Please write a file that Claude Code will automatically read in order to style future code correctly within the project.

## Security
- Be sure to rely on the security of the local cookie store; do not store tokens in local storage.

## Content
- Set up a basic page header that displays on all pages, with the logo at `code/4row-white.svg` and a logout button (when applicable).
- Set up a basic page footer that displays on all pages, with a copyright message programmatically showing the current year and attributed to "Your Name Here!"
- On boot, the application should dispatch a test against `testapi.pndlm.net` (documented at https://testapi.pndlm.net) to see if it is logged in.  If it is not, show a Login page and allow the user to log in.
- Once the user is logged in, they should see a Dashboard page, backed with a dashboard redux slice, that features:
	- A counter and a button to increment it.  Please implement this with a properly-typed plain non-async thunk (not a Redux Toolkit async thunk) in order to provide a good code example of how to do this.
	- A button to request a new joke from the API and display it.  Please give the button a whimsical icon from Font Awesome.

## Cleanup
- Don't use React's `FormEvent` as it has been deprecated.
- Remove unused CSS and SVG files.
