import React, { ReactNode } from 'react';
import Header from '../organisms/Header';
import Navbar from '../organisms/Navbar';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>{ children }</main>
        </div>
    );
};

export default DashboardLayout;