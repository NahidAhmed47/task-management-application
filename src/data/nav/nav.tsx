import { ReactNode } from "react";
import { BsReceipt, BsGrid1X2 } from "react-icons/bs";

interface NavItem {
    title: string;
    path: string;
    icon?: ReactNode
  }

const nav: NavItem[] = [
    {
        title: 'Overview',
        path: '/',
        icon: <BsGrid1X2 className='w-5 h-5' />
    },
    {
        title: 'View Tasks',
        path: '/view-tasks',
        icon: <BsReceipt className='w-5 h-5' />
    }
]
export default nav;