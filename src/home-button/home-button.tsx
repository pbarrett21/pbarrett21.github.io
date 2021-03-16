import React, {useState} from 'react';
import './home-button-styles.scss';

const HomeButton = () => {
    const [rotate, setRotate] = useState(false);
    return (
        <button className='border-0 bg-transparent'>
            <img className={rotate ? 'w-8 spin' : 'w-8'}
                 onClick={() => setRotate(!rotate)}
                 onAnimationEnd={() => setRotate(!rotate)}
                 src={require('./../resources/logo192.png').default}
                 alt='Home Button'/>
        </button>
    );
}

export default HomeButton;
