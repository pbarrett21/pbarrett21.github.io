import React, {useContext} from 'react';
import './experience-card-styles.scss';
import {useHistory} from "react-router-dom";
import ThemeContext from '../theme-context';
import GoToButton from '../go-to-button/goToButton';

const ExperienceCard = (props: {
    cardTitle: string,
    imgSrc: any,
    imgAlt: string,
    blurb: string,
    role: string,
    dates: string,
    technologies: string,
    learnMorePath: string
}) => {

    const history = useHistory();

    const theme = useContext(ThemeContext).theme;

    const learnMore = () => {
        history.push(props.learnMorePath);
    }

    return (
        <div className={theme === 'dark' ? 'bg-darkMode text-white' : 'bg-white'}>
            <img className='bg-white m-auto lg:max-w-xl mb-8 mt-8'
                 src={props.imgSrc}
                 alt={props.imgAlt}/>
            <h1 className='font-extrabold lg:font-black mt-8 text-2xl mb-4'>{props.cardTitle}</h1>
            <p className='lg:text-lg'>{props.blurb}</p>
            <ul className='mt-8 grid'>
                <li className='list-grid'>
                    <p className='font-semibold'>Role</p>
                    <p>{props.role}</p>
                </li>
                <li className='list-grid'>
                    <p className='font-semibold'>Dates</p>
                    <p>{props.dates}</p>
                </li>
                <li className='list-grid'>
                    <p className='font-semibold'>Technologies</p>
                    <p>{props.technologies}</p>
                </li>
            </ul>
            <div className='flex justify-center'>
                <button className='flex mb-8' onClick={learnMore}>
                    <GoToButton text={'Learn Mode'}/>
                </button>
            </div>
        </div>
    );
}

export default ExperienceCard;
