import './App.css';

import { HashRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'swiper/css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Herosection from './components/herosection/Herosection';
import Cards from './components/Cards';
import PopularProducts from './components/popularproducts/PopularProducts';
import GoTop from './components/GoTop';

// Pages
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ForgetPassword from './pages/ForgetPassword';
import PrivateRoute from './components/PrivateRoute';

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
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/profile' element={<PrivateRoute />}>
						<Route path='/profile' element={<Profile />} />
					</Route>

					<Route path='/forgot-password' element={<ForgetPassword />} />
				</Routes>

				<GoTop />
				<Footer />
			</Router>

			<ToastContainer />
		</div>
	);
}

export default App;
