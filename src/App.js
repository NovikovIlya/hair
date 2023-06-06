import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Calendar } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {BrowserRouter, HashRouter,Route,Routes} from 'react-router-dom'
import ItemDate from './panels/Components/ItemDate';
import Home from './panels/Home';
import Calendar1 from './panels/Components/Calendar1';
import DateToday from './panels/Components/DateToday';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [themeUser,setThemeUser] = useState('')



	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			// setPopout(null);
			const theme = await bridge.send('VKWebAppUpdateConfig')
			const themeUser1 = theme.appearance
			setThemeUser(themeUser1)
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	const darkTheme = createTheme({
		palette: {
		  mode: 'dark',
		},
	  });
	  

	return (
		
		// <ConfigProvider appearance={themeUser}>
		<ConfigProvider appearance='dark'>  
			<ThemeProvider theme={darkTheme}>
				<AdaptivityProvider>
					<AppRoot>
						<SplitLayout >
							<SplitCol>
								<HashRouter>
									<Routes>
										<Route path='/home' element={<Home fetchedUser={fetchedUser}/>} />
										<Route path='/:date' element={<ItemDate />} />
										<Route path='/' element={<Calendar1 />} />
										<Route path='/DateToday' element={<DateToday />} />
											
									</Routes>
								</HashRouter>	
							</SplitCol>
						</SplitLayout>
					</AppRoot>
				</AdaptivityProvider>
			</ThemeProvider>
		</ConfigProvider>
	);
}

export default App;
