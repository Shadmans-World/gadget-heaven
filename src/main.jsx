import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GadgetsProvider } from './context/GadgetsContext';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Importing Components
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import DetailsPage from './components/DetailsPage/DetailsPage';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import CartPage from './components/CartPage/CartPage';
import WishlistPage from './components/WishlistPage/WishlistPage';


// Configuring routes, including nested routes for categories within Home
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/details/:productId',
        element: <DetailsPage />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/wishlist',
        element: <WishlistPage />,
      },
      
      {
        path: '/allData/:category?',
        element: <Home />, // Home component includes Banner and AllData
      }
    ],
  },
]);

// Rendering the app with GadgetsProvider context and RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GadgetsProvider>
      <RouterProvider router={router} />
    </GadgetsProvider>
  </StrictMode>
);
