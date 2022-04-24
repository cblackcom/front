import { appStatusSet } from './appReducer'

export const appBoot = () => async (dispatch) => {
	dispatch(appStatusSet())
}
