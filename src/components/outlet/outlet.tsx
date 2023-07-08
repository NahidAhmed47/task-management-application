import React from 'react';
import OutletNav from './outletNav';

const DashboardOutlet = ({children} : any) => {
    return (
        <div className="drawer-content pl-2">
            <OutletNav></OutletNav>
                {children}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
    );
};

export default DashboardOutlet;