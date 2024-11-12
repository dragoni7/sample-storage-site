import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'start',
        bgcolor: 'background.paper',
        mt: 'auto',
        width: '100vw',
      }}
    >
      <hr />
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary">
          © Lock N Key
          <br />
          <a
            target="_blank"
            href="http://www.storable.com/products/facility-websites/"
            rel="noopener noreferrer"
            style={{ color: 'inherit' }}
          >
            <Box
              sx={{
                gap: 1,
                color: 'inherit',
                display: 'flex',
              }}
            >
              <span>Powered by</span>
              <img
                src="https://assets.website.storedge.com/img/storable-logo.svg"
                alt="Storable Websites"
                height="16"
                width="70"
                loading="lazy"
              />
            </Box>
          </a>
        </Typography>
      </Container>
    </Box>
  );
}
