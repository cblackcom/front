import { combineReducers, configureStore, ThunkAction, UnknownAction } from '@reduxjs/toolkit'
import appReducer from './appReducer'

export const rootReducer = combineReducers({
	app: appReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefault) => getDefault().concat(
		// custom middleware goes here
	),
})

// https://redux.js.org/usage/usage-with-typescript
// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppRootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

// https://redux.js.org/usage/usage-with-typescript#type-checking-redux-thunks
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppRootState,
	unknown,
	UnknownAction
>
