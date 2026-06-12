import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage";
import OtherPage from "./pages/OtherPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "OtherPage/:name",
    element: <OtherPage />,
  },
];

export default routes;