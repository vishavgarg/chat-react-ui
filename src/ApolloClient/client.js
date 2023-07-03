import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

const link = new WebSocketLink({
	uri: 'ws://localhost:4000/graphql',
	options: {
		reconnect: true,
	}
});  

export const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});
