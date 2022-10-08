export interface IShip { // Prefix with 'I' to denote interface
	id: string;
	image: string;
	name: string;
	model: string;
	year_built: number;
	type: string;
}

export interface IShipDetails {
	id: string;
	image: string;
	name: string;
	type: string;
	missions: IMission[]
	home_port: string;
	status: boolean;
	class: number;
	weight_kg: number;
	year_built: number;
	url: string;
}

/**
 * We don't want to export this as it's a nested child of @IShipDetails
 */
interface IMission {
	name: string;
	flight: string;
}

/**
 * A generic type to facilitate GET API results for the purpose of the spacex-ships.
 * @author jlee
 */
export type TGetResult<T> = {
  	(arg: T): T;
}
