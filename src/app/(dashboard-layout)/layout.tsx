import VerticalNav from '@/components/navigation/verticalNav';
import DashboardOutlet from '@/components/outlet/outlet';
import React, { ReactNode } from 'react';

interface ComponentProps {
    children: ReactNode;
}

const layout = ({ children }: ComponentProps) => {
    return (
        <div className="drawer lg:drawer-open p-2 bg-[#e4e6eb]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <DashboardOutlet>{children}</DashboardOutlet>
            <VerticalNav></VerticalNav>
        </div>
    );
};

export default layout;