import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Footer, Navbar, Main} from './components/index.jsx';
import App from './App.jsx';
import {About} from './pages/about/About.jsx';
import { ErrorPageNotFound } from "./pages/errorPageNotFound/ErrorPageNotFound.jsx";
import {ApartmentPage} from './pages/apartmentPages/ApartmentPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPageNotFound />
  },
  {
    path: "/apartments",
    element:
    <>
      <Navbar />
      <Main>
      <ApartmentPage />
      </Main>
      <Footer />
    </>
  },
  {
    path: "/about",
    element: 
    <>
      <Navbar />
      <Main>
        <About />
      </Main>
      <Footer />
    </>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);