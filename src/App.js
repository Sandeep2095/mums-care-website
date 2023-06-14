import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'swiper/css';
import Herosection from './components/herosection/Herosection';
import Cards from './components/Cards';
import PopularProducts from './components/popularproducts/PopularProducts';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Herosection />
			<Cards />
			<PopularProducts />
			<Footer />
		</div>
	);
}

export default App;
