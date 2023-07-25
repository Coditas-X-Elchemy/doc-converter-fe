import React from 'react';
import style from './Header.module.scss';
import { IHeader } from '../Header/IHeader';
import brand from '../../assets/images/brand.svg';

const Header: React.FC<IHeader> = ({ links = [] }) => {
  return (
    <header className={style.header}>
      <div className={style.logoSection}>
        <img src={brand} alt="Elchemy" className={style.logo} />
      </div>

      <nav className={style.navLinks}>
        {links.map((link, index) => (
          <a key={index} href={link}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
