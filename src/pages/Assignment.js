import React from 'react';
import './Assignment.css';
import { useState } from 'react';
import Layout from '../components/shared/Layout';

const Assignment = () => {
	const [color, setColor] = useState(true);
	const change = () => {
		setColor(color => !color);
	}
  return (
     <Layout>
		
			<div className={color?'back_ground_true':'back_ground_false'}>
				{color?<p>True에용</p>:<p>False에용</p>}
				<button onClick={change}>색 바꾸기!</button>
			</div>
		</Layout>
		
  );
}

export default Assignment;