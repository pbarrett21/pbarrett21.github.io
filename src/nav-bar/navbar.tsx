import React from 'react';
import HomeButton from '../home-button/home-button';

const NavBar = () => {
    const links = ['Experience', 'Projects', 'About Me'];
    return (
        <nav>
            <ol className='flex list-none justify-between'>
                <li className='m-4'><HomeButton/></li>
                <span className='flex'>
                {links.map(link => (
                    <li className='m-4 whitespace-nowrap'>{link}</li>
                ))}
                </span>
            </ol>
        </nav>
    );
}

export default NavBar;
