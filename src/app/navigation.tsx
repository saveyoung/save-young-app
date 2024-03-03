'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
    return (
        <header>
            <nav className='navBar'>
                <h1>Hi Jennifer</h1>
                <div className="">
                    <ul className="flex md:flex-row flex-col">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/settings">Settings</Link></li>
                        <li><Link href="/support">Support</Link></li>
                        <li><Link href="/add-account">Add Account</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}