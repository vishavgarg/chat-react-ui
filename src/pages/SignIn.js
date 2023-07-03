import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
const GET_USERS = gql`
	query GetUsers {
		users {
			name
			id
		}
	}
`;
const SignIn = () => {
	const [users, setUsers] = useState([]);
	const { data, } = useQuery(GET_USERS);
	useEffect(() => {
		if (data) setUsers(data.users);
	}, [data]);
	const [sender, setSender] = useState('');
	const [receiver, setReceiver] = useState('');
	const navigate = useNavigate();
	const handleSenderChange = (e) => {
		setSender(e.target.value);
	};

	const handleReceiverChange = (e) => {
		setReceiver(e.target.value);
	};

	const handleSignIn = () => {
		if (receiver === sender) {
			alert("Receiver and sender can't be same");
			return;
		}
		if (receiver && sender) {
			localStorage.setItem('receiverId', receiver);
			localStorage.setItem('senderId', sender);
			navigate('/chat');
		}
	};
	return (
		<div>
			<h1>Sign In</h1>
			<label htmlFor='sender'>Sender:</label>
			<select id='sender' value={sender} onChange={handleSenderChange}>
				<option value=''>Select sender</option>
				{users.map((sender, i) => {
					return (
						<option key={i} value={sender.id}>
							{sender.name}
						</option>
					);
				})}
			</select>
			<br />
			<label htmlFor='receiver'>Receiver:</label>
			<select
				id='receiver'
				value={receiver}
				onChange={handleReceiverChange}>
				<option value=''>Select receiver</option>
				{users.map((receiver, i) => {
					return (
						<option key={i} value={receiver.id}>
							{receiver.name}
						</option>
					);
				})}
			</select>
			<br />
			<button onClick={handleSignIn}>Sign In</button>
		</div>
	);
};

export default SignIn;
