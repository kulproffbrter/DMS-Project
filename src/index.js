import './App.css';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { StudentList } from './pages/StudentList';
import { RoomContract } from './pages/RoomContract';
import ListRooms from './pages/ListRooms';
import TotolRooms from './pages/TotolRooms';
import Payment from './pages/Payment';
import StudentReq from './pages/StudentReq';
import MakeBill from './pages/MakeBill';
import UserMember from './pages/UserMember';
// import Login from './pages/access/Login';


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
      //Dashboard Page
      {
        path: "/",
        element: <Dashboard />,

      },
      {
        path: "/dashboard/total-rooms",
        element: <TotolRooms />,
      },
      {
        path: "/dashboard/total-rooms/user-member",
        element: <UserMember />,
      },
      {
        path: "/dashboard/payment-notifications",
        element: <Payment />,
      },
      {
        path: "/dashboard/student-request",
        element: <StudentReq />,
      },

      //Student Page
      {
        path: "student-list",
        element: <StudentList />,
      },

      //Room Contract Page
      {
        path: "room-contract",
        element: <RoomContract />,
      },

      // List of Rooms
      {
        path: "list-room",
        element: <ListRooms />,
      },
      {
        path: "/list-room/make-bill",
        element: <MakeBill />,
      },
    ],
  },

]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);