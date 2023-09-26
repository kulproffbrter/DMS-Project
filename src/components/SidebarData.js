import * as BiIcons from 'react-icons/bi';
import * as PiIcons from 'react-icons/pi';
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <BiIcons.BiBarChartAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Student List',
    path: '/studentlist',
    icon: <PiIcons.PiUserList />,
    cName: 'nav-text'
  },
  {
    title: 'Room contract',
    path: '/roomcontract',
    icon: <MdIcons.MdOutlineArticle />,
    cName: 'nav-text'
  },
  {
    title: 'List of rooms',
    path: '/listofroom',
    icon: <MdIcons.MdOutlineBedroomChild />,
    cName: 'nav-text'
  },
];
