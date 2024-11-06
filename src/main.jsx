// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GadgetsProvider } from './context/GadgetsContext';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Importing Components
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import DetailsPage from './components/DetailsPage/DetailsPage';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import CartPage from './components/CartPage/CartPage';
import WishlistPage from './components/WishlistPage/WishlistPage';
import SupportPage from './components/SupportPage/SupportPage';

// Configuring routes
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
        element: <Home />, 
      },
      {
        path: '/support',
        element:<SupportPage></SupportPage>
      }
    ],
  },
]);

// Rendering the app with GadgetsProvider context and RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GadgetsProvider>
      {/* Set global title and meta tags */}
      <Helmet>
        <title>Gadget Heaven</title>
        <meta name="description" content="Explore the latest gadgets at My Gadgets Store!" />
      </Helmet>
      <RouterProvider router={router} />
    </GadgetsProvider>
  </StrictMode>
);
