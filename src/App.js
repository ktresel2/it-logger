import React, { useEffect, Fragment } from 'react'
import SearchBar from './components/layout/SearchBar'
import AddBtn from './components/layout/AddBtn'
import Logs from './components/logs/Logs'
import AddLogModal from './components/logs/AddLogModal'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

const App = () => {
	useEffect(() => {
		M.AutoInit()
	})
	return (
		<div className="App">
			<Fragment>
				<SearchBar />
				<div className="container">
					<AddBtn />
					<AddLogModal />
					<Logs />
				</div>
			</Fragment>
		</div>
	)
}

export default App
