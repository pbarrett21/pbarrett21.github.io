import React, {useEffect, useState} from 'react';
import HomeButton from '../home-button/home-button';
import {Link, useHistory} from 'react-router-dom';
import {useLocation} from "react-router-dom";
import './navbar-styles.scss';

const NavBar = () => {
    const location = useLocation();
    const history = useHistory();

    const pathMap = new Map<string, number>([
        ['/experience', 1],
        ['/projects', 2],
        ['/about', 3],
    ]);

    const [activeTab, setActiveTab] = useState(pathMap.get(location.pathname));

    const links = [
        {id: 1, label: 'Experience', link: 'experience'},
        {id: 2, label: 'Projects', link: 'projects'},
        {id: 3, label: 'About Me', link: 'about'},
    ];

    const determineClass = (id: number) => {
        const classInfo = 'm-4 md:ml-8 whitespace-nowrap';
        return id === activeTab ? classInfo + ' selected-tab' : classInfo
    }

    useEffect(() => {
        // equivalent to component mount
        const unlisten = history.listen(location => {
            setActiveTab(pathMap.get(location.pathname));
        })
        return () => {
            // equivalent to component unmount
            unlisten();
        }
    })

    return (
        <nav className='w-full sticky -top-1 bg-white'>
            <ol className='flex list-none justify-between items-center max-w-full md:max-w-2xl lg:max-w-2xl m-auto'>
                <li onClick={() => setActiveTab(0)} className='m-4 flex-shrink-0'>
                    <HomeButton bounce={false}/>
                </li>
                <span className='flex ml-auto'>
                {links.map(link => (
                    <li className={determineClass(link.id)}
                        onClick={() => setActiveTab(link.id)}
                        key={link.label}>
                        <Link to={link.link}>{link.label}</Link>
                    </li>
                ))}
                </span>
            </ol>
        </nav>
    );
}

export default NavBar;
