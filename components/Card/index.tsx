import MaterialCard, {
  CardProps as MaterialCardProps,
} from "@mui/material/Card";

import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia, { CardMediaProps } from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { Skeleton } from "@mui/material";

export interface CardProps extends MaterialCardProps {
	image?: CardMediaProps["image"];
	alt?: React.ImgHTMLAttributes<HTMLImageElement>["alt"];
	label?: TypographyProps["children"];
	description?: TypographyProps["children"];
	href?: string;
	loading?: boolean;
	onClick?: () => void;
}

/**
 * the @Card component displays the details for each ship. Every property is optional.
 * @param param0 
 * @returns 
 */
export const Card = ({
	image,
	alt,
	label,
	description,
	href,
	loading,
	onClick,
}: CardProps) =>
	<Box component={MaterialCard} maxWidth={345} onClick={onClick} aria-label="Ship card">
		{!image || loading ? (
			<Skeleton
				variant="rectangular"
				height={140}
				animation={loading ? "pulse" : false}
			/>
			) : (
				<CardMedia component="img" height="140" image={image} alt={alt} />
		)}

		<CardContent>
			<Box
				component={Typography}
				gutterBottom
				variant="body1"
				textOverflow="ellipsis"
				overflow="hidden"
				whiteSpace="nowrap"
			>
				{loading ? <Skeleton /> : label}
			</Box>
			<Typography variant="body2" color="text.secondary">
				{loading ? <Skeleton /> : description}
			</Typography>
		</CardContent>
		<CardActions>
			{loading ? (
				<Box pl={1} pb={0.5}>
					<Skeleton width={100} />
				</Box>
			) : (
				// Add into CSS Module, Styled Cmps or SASS (or the desired approach)
				<Button  size="small" style={{ textTransform: 'none' }} {...(!!href && { href })}>
					Learn More &rarr;
				</Button>
			)}
		</CardActions>
    </Box>

export default Card;