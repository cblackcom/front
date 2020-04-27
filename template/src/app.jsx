import React from 'react'
import ReactDOM from 'react-dom'

const App = React.memo(props => (
	<div>
		<h1>🥃</h1>
		You did it.  Cheers.
	</div>
))

ReactDOM.render(<App />, document.getElementById('root'))
