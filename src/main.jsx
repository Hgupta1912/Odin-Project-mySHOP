import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './App.jsx'
import OtherPage from './pages/OtherPage.jsx';
import SomeComponent from './components/someComponent.jsx';
import ErrorPage from "./pages/ErrorPage";
import routes from "./routes";

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
