import React, { ReactNode } from 'react';
import Navbar from '../organisms/Navbar';
import Aside from '../organisms/Aside';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{ children }</main>
            <Aside />
        </>
    );
};

export default DashboardLayout;