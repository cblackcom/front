# Add Authentication Prompt

Hello!  Can we please add some authentication to the web application we just created.

## Security
- When implementing, be sure to rely on the security of the local cookie store; do not store tokens in local storage.
- Please enable `host: true` and `allowedHosts: true` on Vite dev server to enable use with ngrok.

## Content
- On boot, the application should dispatch a test against `testapi.pndlm.net` (documented at https://testapi.pndlm.net) to see if it is logged in.  If it is not, show a Login page and allow the user to log in.
- Once the user is logged in, they should see a Dashboard page, backed with a dashboard redux slice, that features:
	- A counter and a button to increment it.  Please implement this with a properly-typed plain non-async thunk (not a Redux Toolkit async thunk) in order to provide a good code example of how to do this.
	- A button to request a new joke from the API and display it.  Please give the button a whimsical icon from Font Awesome.

## Cleanup
- Don't use React's `FormEvent` as it has been deprecated.
- Please remind me that I need to proxy the Vite dev server through ngrok using a custom domain ending in `.pndlm.net` in order for the cookie-based authentication to work.
