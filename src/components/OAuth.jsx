import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import googleIcon from '../assests/svg/googleIcon.svg';

const OAuth = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const onGoogleClick = async () => {
		try {
			const auth = getAuth();
			const provider = new GoogleAuthProvider();
			const result = await signInWithPopup(auth, provider);
			const user = result.user;

			const docRef = doc(db, 'users', user.uid);
			const docSnap = await getDoc(docRef);

			if (!docSnap.exists()) {
				await setDoc(doc(db, 'users', user.uid), {
					name: user.displayName,
					email: user.email,
					timestamp: serverTimestamp(),
				});
			}

			navigate('/profile');
		} catch (error) {
			toast.error('Could not authorize with Google');
		}
	};
	return (
		<div className='socialLogin'>
			<p>Sign {location.pathname === '/signup' ? 'up' : 'in'} with</p>
			<button className='socialIconDiv' onClick={onGoogleClick}>
				<img src={googleIcon} className='socialIconImg' alt='google' />
			</button>
		</div>
	);
};

export default OAuth;
