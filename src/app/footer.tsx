'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function Footer() {
  const pathname = usePathname();

  return (    
    <footer className="fixedFooter">
      <nav>
        <ul>
          <li className={pathname == "/resources" ? "active" : ""}>
            <Link href="/resources">
              <FontAwesomeIcon icon={faHandshake} className="footerIcon fa-2x" />
              Resources
            </Link>
          </li>
          <li className={pathname == "/" ? "active" : ""}>
            <Link href="/">
              <FontAwesomeIcon icon={faHouse} className="footerIcon fa-2xl" />
              Home
            </Link>
          </li>
          <li className={pathname == "/account" ? "active" : ""}>
            <Link href="/account">
              <FontAwesomeIcon icon={faUser} className="footerIcon fa-2xl" />
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}