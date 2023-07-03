import React from 'react';

const Button = ({ disabled, onClick, children }) => {
	return (
		<button
			style={{
				backgroundColor: 'black',
				color: 'white',
				borderRadius: 'none',
				border: 'none',
				padding: '10px 20px',
				cursor: disabled ? 'not-allowed' : 'pointer',
				opacity: disabled ? '0.5' : '1',
				transition: 'all 0.2s ease-in-out',
			}}
			disabled={disabled}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
