import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Products from './Pages/Products/Products.jsx';
import Root from './Root/Root.jsx';
import { ApolloProvider } from '@apollo/client';
import client from './components/utils/UseGraphql.jsx';
import TestStore from './testStore/TestStore.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "teststore",
        element: <TestStore/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
