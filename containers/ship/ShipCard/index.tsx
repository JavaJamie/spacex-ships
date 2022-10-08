import { IShip } from "../../../api/ship/types";
import { Card, CardProps } from "../../../components/Card";

interface ShipCardProps
	extends Omit<
		CardProps,
		"label" | "description" | "image" | "alt" | "href" | "loading"
	> {
	ship?: IShip;
	loading?: boolean;
}

export const ShipCard = ({ ship, loading, ...restProps }: ShipCardProps) =>
	<Card
		label={ship?.name}
		loading={loading || false}
		description={ship?.model || "No Model"}
		image={ship?.image}
		alt={ship?.name}
		{...(!!ship && { href: `/ship/${ship?.id}` })}
		{...restProps}
	/>