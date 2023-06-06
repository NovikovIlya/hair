import React from 'react';
import Container from 'react-bootstrap/Container';
import  './Home.css'
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { Link } from 'react-router-dom';



const Home = ({ fetchedUser }) => (
	< >
		<Container>
			<div className='whLink'>
				<Link className='liink' to='DateToday'>
					<Button className='btnLink' variant="contained" >
						Перейти на сегодгя
					</Button>
				</Link>
			</div>

			<div className='whLink'>
				<Link className='liink' to='Calendar'>
					<Button className='btnLink' variant="contained" >
						Календарь
					</Button>
				</Link>
			</div>

		</Container>
	</>
);



export default Home;
