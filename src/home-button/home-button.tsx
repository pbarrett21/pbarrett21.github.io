import React, {useContext, useState} from 'react';
import './home-button-styles.scss';
import {useHistory} from "react-router-dom";
import ThemeContext from '../theme-context';

const HomeButton = (props: { spin: boolean }) => {
    const [rotate, setRotate] = useState(false);
    const history = useHistory();

    const theme = useContext(ThemeContext).theme;

    function handleClick() {
        if (props.spin) {
            setRotate(!rotate)
        }
        history.push("/");
    }

    return (
        <button className='border-0 bg-transparent'>
            <img className={rotate ? 'w-8 h-8 spin' : 'h-8 w-8'}
                 onClick={handleClick}
                 onAnimationEnd={() => setRotate(!rotate)}
                 src={require(`../resources/${theme}-thick.png`).default}
                 alt='Home Button'/>
        </button>
    );
}

export default HomeButton;
