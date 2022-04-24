import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'app',
	initialState: {
		APP_ENV: null,
		APP_BUILDTIME: null,
		
		// for initial boot
		booted: false,
		authenticated_user: null,
	},
	reducers: {
		appStatusSet(state, action) {
			return {
				...state,
				...action.payload,
				booted: true
			}
		}
	},
})

export const { appStatusSet } = slice.actions
export default slice.reducer
