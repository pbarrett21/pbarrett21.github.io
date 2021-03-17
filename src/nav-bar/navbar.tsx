import React from 'react';
import HomeButton from '../home-button/home-button';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const links = [
        {label: 'Experience', link: 'experience'},
        {label: 'Projects', link: 'projects'},
        {label: 'About Me', link: 'about'},
    ];
    return (
        <nav>
            <ol className='flex list-none justify-between'>
                <li className='m-4'><HomeButton/></li>
                <span className='flex'>
                {links.map(link => (
                    <li key={link.label} className='m-4 whitespace-nowrap'>
                        <Link to={link.link}>{link.label}</Link>
                    </li>
                ))}
                </span>
            </ol>
        </nav>
    );
}

export default NavBar;
