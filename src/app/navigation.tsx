'use client'
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header>
            <nav>
                <div className='navBar'>
                    <h1>Hi Jennifer</h1>
                    <div className="hidden md:block">
                        <ul className="flex md:flex-row flex-col">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/settings">Settings</Link></li>
                            <li><Link href="/support">Support</Link></li>
                            <li><Link href="/add-account">Add Account</Link></li>
                        </ul>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="" onClick={toggleMenu}>
                            {menuOpen ? <FontAwesomeIcon icon={faXmark} className="footerIcon fa-2x" /> : <FontAwesomeIcon icon={faBars} className="footerIcon fa-2x" />}
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md:hidden mobileNavBar">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/settings">Settings</Link></li>
                            <li><Link href="/support">Support</Link></li>
                            <li><Link href="/add-account">Add Account</Link></li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}