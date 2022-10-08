import { ApolloError } from '@apollo/client';
import { Box, Typography } from '@mui/material';
import React from 'react';

/**
 * The @ErrorMessage component displays an error message to the user to indicate why the error has occurred.
 * I've just added 'error', but naturally this could be extended with more information.
 * @param error the error message to display
 * @returns 
 */
export const ErrorMessage = ({ error }: { error: string }) => // Return type inferred
    <Box component={Typography} mt={2} mb={4} align="center" variant="h2" data-testid="error-message-component">
        {error}
    </Box>

export default ErrorMessage;