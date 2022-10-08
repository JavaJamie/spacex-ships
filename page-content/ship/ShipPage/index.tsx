import React from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { NetworkStatus, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { CircularProgress, Container, Grid } from '@mui/material';
import { TGetShipResult, GET_SHIP } from '../../../api/ship/queries/getShip';
import { ErrorMessage, Heading } from '../../../components';
import { Header } from '../../header';
import ShipDetailsItem from './components/ShipDetailsItem';

export const getStaticProps: GetStaticProps = async() => {
    // As this is run at build time it does not know about our Apollo instance in _app.tsx so we would need to create a new ApolloClient instance to make the data fetch
    /**
     * e.g.,
     * const client = new ApolloClient({
            uri: "https://api.spacex.land/graphql",
            cache
	    });

        const ships = client.query({
            query: GET_SHIP,
            variables: {
                id: context.params?.id
            }
        })
     */
	return {
		props: {
			title: "SpaceX Ship Details",
			description: "SpaceX Ship Details",
			url: "https://localhost:3000/ship",
            // ships // The ships returned from SSG fetch
		},
	};
};

/**
 * The @getStaticPaths function is necessary as uses a dynamic page
 * @returns 
 */
export const getStaticPaths = () => {
    return {
        paths: [], // We do not know the ID of the ship ahead of time as the pages aren't generated via SSG
        fallback: 'blocking'
    }
}

export const ShipPage: NextPage = ({ props }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const { id } = router.query;
    const { error, networkStatus, data } = useQuery<TGetShipResult>(GET_SHIP, { // CSR
        variables: {
            id
        }
    });

    if (networkStatus === NetworkStatus.loading) return <CircularProgress />;
    if (error) return <ErrorMessage error={error.message} />;

    {/* Create dumb component for these to pass in header and values */}
	return (
        <>
            {/* If the data was fetched via getStaticProps or getServerSideProps, we could populate the OpenGraph image tag here */}
            {props && <Header {...props} />}
            <Container maxWidth="xs">
                <Grid container xs={12}>
                    <Grid item xs={12}>
                        <Heading title={data?.ship?.name || ''} subtitle={data?.ship.type || 'No type specified'} />
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center" mb={4}>
                        <img src={data?.ship?.image} alt={data?.ship?.name} loading="lazy" width="400px" height="300px" />
                    </Grid>

                    <ShipDetailsItem title="Weight (kg)" value={data?.ship?.weight_kg} />
                    <ShipDetailsItem title="Year built" value={data?.ship?.year_built} />
                    <ShipDetailsItem title="Home port" value={data?.ship?.home_port} />
                    <ShipDetailsItem title="Active" value={data?.ship?.status ? 'Yes' : 'No'} />
                    <ShipDetailsItem title="URL" value={<a href={data?.ship?.url} target="_blank" rel="noreferrer">See more</a>} />
                    <ShipDetailsItem title="Missions"
                        value={data?.ship?.missions.map(mission =>
                            <>
                                {mission.name} - {mission.flight}
                            </>
                        )}
                    />
                </Grid>
            </Container>
        </>
	);
};