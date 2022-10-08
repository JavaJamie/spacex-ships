import { gql } from "@apollo/client";
import { IShip } from "../types";

export type TGetShipsResult = {
	ships: IShip[];
}

/**
 * Return the list of all the ships
 * Improvement: Transfer to .gql files for linting, and create fragments for shared fields (as the ships and ship queries return a lot of the same fields).
 */
export const GET_SHIPS = gql`
	query getShips($offset: Int, $limit: Int) {
		ships(offset: $offset, limit: $limit) {
			id
			image
			name
			model
			year_built
			type
		}
	}
`;