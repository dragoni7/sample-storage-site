import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <CssBaseline />
      <NavBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: { xs: 8, sm: 9 },
        }}
      >
        content
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
