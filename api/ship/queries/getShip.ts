import { gql } from "@apollo/client";
import { IShipDetails } from "../types";

export type TGetShipResult = {
	ship: IShipDetails;
};

/**
 * Return the details of each ship by its id
 * Improvement: Transfer to .gql files for linting, and create fragments for shared fields (as the ships and ship queries return a lot of the same fields).
 */
export const GET_SHIP = gql`
	query getShip($id: ID!) {
		ship(id: $id) {
			id
			image
			name
			type
			home_port
			weight_kg
			year_built
			active
			url
			missions {
				name
				flight
			}
		}
	}
`;
