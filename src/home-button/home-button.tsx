import React, {useState} from 'react';
import './home-button-styles.scss';
import {useHistory} from "react-router-dom";

const HomeButton = (props: { spin: boolean }) => {
    const [rotate, setRotate] = useState(false);
    const history = useHistory();

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
                 src={require('./../resources/Group 33.png').default}
                 alt='Home Button'/>
        </button>
    );
}

export default HomeButton;
