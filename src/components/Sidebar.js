import React from 'react';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const menu = useSelector((state) => state.menu.items);

  return (
    <nav className="sidebar">
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;