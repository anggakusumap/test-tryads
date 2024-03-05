import React, { ReactNode } from 'react';
import Header from '../organisms/Header';
import Sidebar from '../organisms/Sidebar';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <Sidebar />
            <main>{ children }</main>
        </div>
    );
};

export default DashboardLayout;