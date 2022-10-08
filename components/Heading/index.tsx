import { Box, Typography } from '@mui/material';
import React from 'react';

/**
 * The @Header component displays the title and subtitle of each page
 * @param title
 * @param subtitle
 * @returns
 */
export const Heading = ({ title, subtitle }: { title: string, subtitle: string }) => 
    <Box data-testid="heading-component">
        <Box component={Typography} mt={2} align="center" variant="h3">
            {title}
        </Box>
        <Box component={Typography} mb={4} align="center" variant="h6">
            {subtitle}
        </Box>
    </Box>

export default Heading;