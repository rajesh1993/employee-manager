import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 60 }}>
			<Scene key='root'>
				<Scene 
					key='login' 
					component={LoginForm} 
					title='Please Login'
					headerMode='screen'
					initial
				/>
				<Scene key='employeeMain'>
					<Scene 
						key='employeeList' 
						component={EmployeeList} 
						title='Employees' 
					/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
