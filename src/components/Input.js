import React from 'react';

const Input = ({ placeholder, value, onChange, onKeyPress }) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			onKeyPress={onKeyPress}
			style={{
				border: 'none',
				borderRadius: 'none',
				borderBottom: '1px solid black',
				outline: 'none',
				fontSize: '16px',
				padding: '8px',
				width: '95%',
			}}
		/>
	);
};

export default Input;
