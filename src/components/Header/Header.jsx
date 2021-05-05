import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <a href="/armaggedon" className="header__logo">
          armaggedon V
        </a>
        <span className="header__logo-descr">
          Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
          Земле
        </span>
      </div>
      <nav className="header__nav">
        <NavLink
          to="/asteroids"
          activeClassName="header__link_active"
          className="header__link"
        >
          <span>Астероиды</span>
        </NavLink>
        <NavLink
          to="/destruction"
          activeClassName="header__link_active"
          className="header__link"
        >
          <span>Уничтожение</span>
        </NavLink>
      </nav>
    </header>
  );
}
