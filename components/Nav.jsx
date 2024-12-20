"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'projects',
        path: '/projects',
    },
    {
        name: 'biography',
        path: '/biography'
    },
    {
        name: 'contact',
        path: '/contact'
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`capitalize font-medium hover:text-accent transition-all ${
                        link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
