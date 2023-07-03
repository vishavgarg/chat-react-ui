import React from 'react';
import Input from './Input';
import Button from './Button';
const MessageBox = ({ inputMessage, setInputMessage, handleSendMessage }) => {
	return (
		<div
			style={{
				marginTop: "auto",
				display: 'flex',
				justifyContent: 'space-between',
			}}>
			<Input
				placeholder='Type Something...'
				value={inputMessage}
				onChange={setInputMessage}
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						handleSendMessage();
					}
				}}
			/>
			<Button
				disabled={inputMessage.trim().length <= 0}
				onClick={handleSendMessage}>
				Send
			</Button>
		</div>
	);
};

export default MessageBox;
