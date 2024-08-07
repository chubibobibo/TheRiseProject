/** importing createBrowserRouter and RouterProvider for routes */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";

/** Imports for all pages and components*/
import LoginPage from "./pages/authPages/LoginPage";
import RegisterPage from "./pages/authPages/RegisterPage";
import HomeLayout from "./pages/HomeLayout";
import DashboardLayout from "./pages/DashboardLayout";
import ErrorPageComponent from "./components/ErrorPageComponent";
import EventsPage from "./pages/dashboardPages/EventsPage";
import ClientPage from "./pages/dashboardPages/ClientPage";
import ProjectsPage from "./pages/dashboardPages/ProjectsPage";
import DashboardTaskPage from "./pages/dashboardPages/DashboardTaskPage";
import DashboardIndexPage from "./pages/dashboardPages/DashboardIndexPage";
import ClientPageClient from "./components/clientPageElements/ClientPageClient";
import ClientPageContacts from "./components/clientPageElements/ClientPageContacts";
import TasksPage from "./pages/dashboardPages/TasksPage";
import SalesPage from "./pages/dashboardPages/SalesPage";

/** action functions */
import { action as loginAction } from "./pages/authPages/LoginPage";
import { action as registerAction } from "./pages/authPages/RegisterPage";
import { loader as getAllClientsLoader } from "./components/clientPageElements/ClientPageContent";
import { loader as getPaymentLoader } from "./pages/dashboardPages/SalesPage";
import { loader as getAllClientsAndProjects } from "./pages/dashboardPages/ClientPage";
import { loader as getCurrentLoggedUserLoader } from "./pages/DashboardLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPageComponent />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
          action: loginAction,
        },
        {
          path: "register",
          element: <RegisterPage />,
          action: registerAction,
        },
        {
          /**
           * Children components of DashboardLayout are rendered using <Outlet>
           * Outlet components have their path relative to the parent component (DashboardLayout)
           * */
          path: "dashboard",
          element: <DashboardLayout />,
          errorElement: <ErrorPageComponent />,
          loader: getCurrentLoggedUserLoader,
          children: [
            {
              index: true,
              element: <DashboardTaskPage />,
            },
            {
              path: "view-dashboard",
              errorElement: <ErrorPageComponent />,
              element: <DashboardIndexPage />,
            },
            {
              path: "events",
              element: <EventsPage />,
            },
            {
              path: "projects",
              element: <ProjectsPage />,
            },
            {
              path: "tasks",
              element: <TasksPage />,
            },
            {
              path: "clients",
              element: <ClientPage />,
              loader: getAllClientsAndProjects,
            },
            {
              path: "clients-clients",
              element: <ClientPageClient />,
              loader: getAllClientsLoader,
            },
            {
              path: "clients-contacts",
              element: <ClientPageContacts />,
            },
            {
              path: "sales",
              element: <SalesPage />,
              loader: getPaymentLoader,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
