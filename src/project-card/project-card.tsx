import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import ThemeContext from '../theme-context';
import GoToButton from '../go-to-button/goToButton';
import {Chip} from '@material-ui/core';

const ProjectCard = (props: {
    cardTitle: string,
    imgSrc: any,
    imgAlt: string,
    blurb: string,
    technologies: string[],
    learnMorePath: string
}) => {

    const history = useHistory();

    const theme = useContext(ThemeContext).theme;

    return (
        <div className={theme === 'dark' ? 'bg-darkMode text-white' : 'bg-white'}>
            <img className='m-auto lg:max-w-xl mb-8 mt-8'
                 src={props.imgSrc}
                 alt={props.imgAlt}/>
            <h1 className='font-bold lg:font-extrabold mt-8 text-2xl mb-4'>{props.cardTitle}</h1>
            <p className='lg:text-lg'>{props.blurb}</p>
            <div className='mt-2 flex justify-end'>
                {props.technologies.map(tech => (
                    <Chip key={tech} label={tech} size="small" className='ml-1' color="primary" variant="outlined"/>
                ))}
            </div>
            <div className='flex justify-center mt-4'>
                <button className='flex mb-8' onClick={() => history.push(props.learnMorePath)}>
                    <GoToButton text={'Learn More'}/>
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;
