import React from 'react'
import Link from "next/link";
import {Button} from "./ui/button";

// components
import Nav from './Nav';
import MobileNav from './ui/MobileNav';

const Header = () => {
    return(
        <header className = "py-8 xl:py-12 text-white bg-pink-50/20">
            <div className = "container mx-auto flex justify-between items-center">
                <Link href = "/home">
                <h1 className = "text-4xl front-semibold">
                    Kevin <span className="text-accent">.</span>
                </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                 <Nav />
                 <Link href = "/contact">
                    <Button>Hire me</Button>
                 </Link>
                </div>
            
                <div className="xl hidden">
                    <MobileNav />
                </div>
            
            </div>
            </header>
    );
};

export default Header;