import React, { ReactNode } from 'react';

interface ComponentProps {
    children: ReactNode;
}

const layout = ({children} : ComponentProps) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default layout;