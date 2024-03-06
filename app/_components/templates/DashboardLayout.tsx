import React, { ReactNode } from 'react';
import styles from "./DashboardLayout.module.css";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <main className={ styles.dashboard }>{ children }</main>
    );
};

export default DashboardLayout;