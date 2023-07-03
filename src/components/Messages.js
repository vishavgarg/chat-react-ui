import React, { useEffect, useRef } from 'react';

const Messages = ({ messages }) => {
	const AlwaysScrollToBottom = () => {
		const elementRef = useRef();
		useEffect(() => elementRef.current.scrollIntoView());
		return <div ref={elementRef} />;
	};

	return (
		<>
			{messages.map((item, index) => {
				if (
					item.receiver.id.toString() !==
					localStorage.receiverId.toString()
				) {
					return (
						<div
							key={index}
							style={{
								textAlign: 'left',
								width: '100%',
							}}>
							<img
								style={{
									width: '30px',
									height: '30px',
									borderRadius: '50%',
								}}
								src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
								alt='Icon'
								className='icon'
							/>
							<span>
								<p
									style={{
										padding: 10,
										borderRadius: '10px',
										backgroundColor: 'green',
										color: 'white',
										display: 'inline-block',
										maxWidth: '50%',
									}}>
									{item.text}
								</p>
							</span>
						</div>
					);
				} else {
					return (
						<div
							key={index}
							style={{
								textAlign: 'right',
								width: '100%',
							}}>
							<span>
								<p
									style={{
										padding: 10,
										borderRadius: '10px',
										backgroundColor: 'black',
										color: 'white',
										display: 'inline-block',
										maxWidth: '50%',
									}}>
									{item.text}
								</p>
								<img
									style={{
										width: '30px',
										height: '30px',
										borderRadius: '50%',
										marginRight: '1rem',
									}}
									src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
									alt='Icon'
									className='icon'
								/>
							</span>
						</div>
					);
				}
			})}
			<AlwaysScrollToBottom />
		</>
	);
};

export default Messages;
