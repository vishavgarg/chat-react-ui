import React from 'react';

const Header = () => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '80px',
				backgroundColor: '#f0f0f0',
			}}>
			<h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>
				Chat App
			</h1>
		</div>
	);
};

export default Header;
