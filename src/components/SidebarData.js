import * as BiIcons from 'react-icons/bi';
import * as PiIcons from 'react-icons/pi';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'หน้าหลัก',
    path: '/',
    icon: <BiIcons.BiBarChartAlt />,
    cName: 'nav-text'
  },
  {
    title: 'ข้อมูลนักศึกษา',
    path: '/student-list',
    icon: <PiIcons.PiUserList />,
    cName: 'nav-text'
  },
  {
    title: 'สัญญาหอพัก',
    path: '/room-contract',
    icon: <MdIcons.MdOutlineArticle />,
    cName: 'nav-text'
  },
  {
    title: 'ข้อมูลห้อง',
    path: '/list-room',
    icon: <BiIcons.BiBed />,
    cName: 'nav-text'
  },
];
