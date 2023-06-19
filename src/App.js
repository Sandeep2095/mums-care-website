import './App.css';

import { HashRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import 'swiper/css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Herosection from './components/herosection/Herosection';
import Cards from './components/Cards';
import PopularProducts from './components/popularproducts/PopularProducts';
import GoTop from './components/GoTop';
import Contact from './pages/Contact';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Herosection />
								<Cards />
								<PopularProducts />
							</>
						}
					/>
					<Route path='/contactus' element={<Contact />} />
				</Routes>

				<GoTop />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
