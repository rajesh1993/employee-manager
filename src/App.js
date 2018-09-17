import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyAJZ5DW-QRm2NMjlYeSjS597b6KRo6oWjw',
			authDomain: 'managerapp-755ad.firebaseapp.com',
			databaseURL: 'https://managerapp-755ad.firebaseio.com',
			projectId: 'managerapp-755ad',
			storageBucket: 'managerapp-755ad.appspot.com',
			messagingSenderId: '89635581293'
		};

		firebase.initializeApp(config);
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
