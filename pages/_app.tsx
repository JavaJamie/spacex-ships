import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import type { AppProps } from "next/app";
import { Header } from "../page-content/header";

const typePolicies = {
	Query: {
		fields: {
			ships: offsetLimitPagination()
		}
	}
}

/**
 * The @App component is the entry point into our application. It uses @ApolloProvider to inject an instance of the client and cache so that we can access it throughout
 * the app courtesy of the @useApolloClient hook for SSG/SSR fetches.
 * 
 * @param param0 
 * @returns 
 * @author jlee
 */
const App = ({ Component, pageProps }: AppProps) => {
	const cache = pageProps.cache
	? new InMemoryCache({ typePolicies }).restore(pageProps.cache)
	: new InMemoryCache({ typePolicies });

	const client = new ApolloClient({
		uri: "https://api.spacex.land/graphql",
		cache,
	});

	return (
		<ApolloProvider client={client}>
			<header>
				<Header pageProps={pageProps} />
			</header>
			<main>
				<Component {...pageProps} />
			</main>
		</ApolloProvider>
	);
};

export default App;