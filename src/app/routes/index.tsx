import { createBrowserRouter } from 'react-router-dom';
import About from './About';
import Landing from './Landing';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/about',
      element: <About />,
    },
  ]);
};
