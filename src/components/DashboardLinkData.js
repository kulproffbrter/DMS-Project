import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md'

export const DashboardLinkData = [
    {
        title: 'Total Rooms',
        path: '/total-rooms',
        icon: <BsIcons.BsBorderAll />,
        cName: 'nav-link'
    },
    {
        title: 'Registered',
        path: '/registered',
        icon: <BsIcons.BsFillPersonCheckFill />,
        cName: 'nav-link'
    },
    {
        title: 'Payment Notification',
        path: '/payment-notification',
        icon: <MdIcons.MdOutlinePayment />,
        cName: 'nav-link'
    },
    {
        title: 'Student Request',
        path: '/request',
        icon: <MdIcons.MdOutlineReportGmailerrorred />,
        cName: 'nav-link'
    },
];
