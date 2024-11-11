import { createTheme, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './routes';

const AppRouter = () => {
  const router = useMemo(() => createRouter(), []);

  return <RouterProvider router={router} />;
};

const theme = createTheme({
  typography: {
    fontFamily: ['Helvetica'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 2000,
      xl: 3000,
    },
  },
  palette: {
    mode: 'dark',
    background: {},
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
