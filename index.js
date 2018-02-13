import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import MainContainer from './src/mainContainer.js'

ReactDOM.render(
	<Provider store={store}>
		<MainContainer className="main-container">
		</MainContainer>
	</Provider>, 
	document.getElementById('root')
);