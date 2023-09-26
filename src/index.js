import './App.css';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import StudentList from './pages/StudentList';
import RoomContract from './pages/RoomContract';
import ListRooms from './pages/ListRooms';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "studentlist",
        element: <StudentList />,
      },
      {
        path: "roomcontract",
        element: <RoomContract />,
      },
      {
        path: "listofroom",
        element: <ListRooms />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);