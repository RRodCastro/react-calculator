import React from 'react'
import { render } from 'react-dom';
import Calculator from './components/Calculator.jsx'
const root = document.getElementById('root');
import RedBox from 'redbox-react';

try {
	console.log("Wow");
	render(<Calculator/>, root)
	}catch (e){
		render(<RedBox error={e}/>, root)
	}