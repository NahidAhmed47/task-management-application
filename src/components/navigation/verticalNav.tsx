import React from 'react';
import NavLink from '../styles/navLink';
import nav from '@/data/nav/nav';

const VerticalNav = () => {
    return (
        <div className="drawer-side h-[98vh] overflow-y-scroll">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <div className='p-4 w-[240px] h-full bg-white text-base-content '>
                <div className=''>
                    <h1 className='text-center text-base md:text-xl font-bold font-serif'>Manage Tasks</h1>
                </div>
                <h1 className="mt-4 md:mt-5 text-slate-400 font-semibold">Navigation</h1>
                <ul className='pl-5 mt-1 space-y-1'>
                {
                    nav.map(({ path, title, icon }: any) => <li key={path}>
                        <NavLink exact={path === '/'} activeClassName="text-blue-500 font-medium flex items-center gap-1" href={path} className="flex items-center gap-1">{icon}{title}</NavLink>
                    </li>)
                }
                </ul>
            </div>

        </div>
    );
};

export default VerticalNav;