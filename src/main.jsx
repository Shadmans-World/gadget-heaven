import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GadgetsProvider } from './context/GadgetsContext';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';

import DetailsPage from './components/DetailsPage/DetailsPage';
import Dashboard from './components/Dashboard/Dashboard';

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
        element:<DetailsPage></DetailsPage>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GadgetsProvider>
      <RouterProvider router={router} />
    </GadgetsProvider>
  </StrictMode>
);
