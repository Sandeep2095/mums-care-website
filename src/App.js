import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'swiper/css';
import Herosection from './components/herosection/Herosection';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Herosection />
			<Footer />
		</div>
	);
}

export default App;
