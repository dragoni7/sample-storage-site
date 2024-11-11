import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from './About';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/about',
      element: <About />,
    },
  ]);
};
