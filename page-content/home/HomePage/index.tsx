import Box from "@mui/material/Box";
import { useQuery, NetworkStatus } from '@apollo/client';
import { GET_SHIPS, TGetShipsResult } from "../../../api/ship/queries/getShips";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { ErrorMessage, Heading } from "../../../components"; // Improvement: create alias paths in tsconfig.json
import { InView } from 'react-intersection-observer';
import { CircularProgress, Container, Grid } from "@mui/material";
import { Header } from "../../header";
import { ShipCard } from "../../../containers/ship/ShipCard";

export const getStaticProps: GetStaticProps = () => {
	// Render into page at build time. Great option if data isn't updated often
	// Could also make the GQL query here
	return {
		props: {
			title: "SpaceX Ships",
			description: "SpaceX Ship List",
			url: "https://localhost:3000"
		},
	};
};

/**
 * The @HomePage lists all ships (boats) from the SpaceX GraphQL API @see {@link https://api.spacex.land/graphql/}
 * @param props The meta values generated at build time via @see getStaticProps   
 * @returns 
 * @author jlee
 */
export const HomePage: NextPage = ({ props }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { error, data, networkStatus, fetchMore } = useQuery<TGetShipsResult>(GET_SHIPS, { // Use CSR, but this could be done in static or server side props too
		notifyOnNetworkStatusChange: true,
		variables: {
			offset: 0, 
			limit: 8 // An assumption of 8. This could be toggled in the future for higher/lower limits
		}
	});

	if (networkStatus === NetworkStatus.loading) return <CircularProgress />;
	if (error) return <ErrorMessage error={error.message} />;

	return (
		<>
			{props && <Header {...props} />}
			<Container maxWidth="sm">
				<Heading title="SpaceX Ships" subtitle={`Showing ${data?.ships.length} ships`} />
				<Box>
					{/* I'm always cautious about introducing new libs, but when it comes to scrolling events it can be wildly inconsistent and using 
					the more manual "window.innerHeight" method checks it on every scrolln(rather than just if the user has scrolled to the bottom) so this
					is more lightweight and intuitive */}
					<Grid container columnSpacing={2} rowSpacing={2}>
						{data?.ships?.map(ship =>
							<Grid item xs={6} key={ship.id}>
								<ShipCard ship={ship} />
							</Grid>
						)}
					</Grid>

					{/* Use windowing to determine if in view, and subsequently load next page of results and append to cache of ships */}
					<InView
						onChange={inView => {
							if (inView) {
								console.log('dsfdfdgf')
								fetchMore({
									variables: {
										offset: data?.ships.length
									}
								});
							}
						}}
					/>
				</Box>
			</Container>
		</>
	);
};