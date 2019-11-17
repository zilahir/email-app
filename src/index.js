import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Grommet } from 'grommet'

import configureStore from './store/configureStore'
import App from './App'
import { theme } from './theme/theme'
import * as serviceWorker from './serviceWorker'

import './index.css'

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<Grommet theme={theme}>
			<App />
		</Grommet>
	</Provider>, document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
