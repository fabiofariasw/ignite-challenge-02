import { ReactNode } from 'react';

import './sidebar.scss'

interface SideBar {
  children: ReactNode;
}

export function SideBar({ children }: SideBar) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {children}
      </div>

    </nav>
  );
}