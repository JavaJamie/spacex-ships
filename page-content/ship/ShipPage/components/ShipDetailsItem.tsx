import { Grid, Typography } from '@mui/material';
import React, { memo } from 'react';

interface IShipDetailsItem {
    title: string;
    value: any;
}

/**
 * The @ShipDetailsItem component is specific to the @see DetailsPage page only so it is inside this nested components folder.
 * If this needed to be used elsewhere, it would be straightforward enough to hoist it up to the global components folder.
 * @param title
 * @param value
 * @author jlee
 */
const ShipDetailsItem = memo(({ title, value }: IShipDetailsItem) =>
    <Grid container py={1} borderBottom="1px solid rgba(0, 0, 0, 0.6)" data-testid="ship-details-item-test-id">
        <Grid xs={6} item>
            <Typography textAlign="center" fontWeight="700">{title}</Typography>
        </Grid>
        <Grid xs={6} item>
            <Typography textAlign="center">{value}</Typography>
        </Grid>
    </Grid>
);

export default ShipDetailsItem;