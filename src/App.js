import { Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat';
import { client } from './ApolloClient/client';
import { ApolloProvider } from '@apollo/client';
import SignIn from './pages/SignIn';
const App = () => {
	return (
		<ApolloProvider client={client}>
			<Routes>
				<Route path='/' element={<SignIn />} />
				<Route path='/chat' element={<Chat />} />
			</Routes>
		</ApolloProvider>
	);
};

export default App;
