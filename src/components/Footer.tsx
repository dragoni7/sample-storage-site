import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper', mt: 'auto' }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2024 My Website
      </Typography>
    </Box>
  );
}
