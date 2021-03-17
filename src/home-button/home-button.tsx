import React, {useState} from 'react';
import './home-button-styles.scss';
import { useHistory } from "react-router-dom";

const HomeButton = () => {
    const [rotate, setRotate] = useState(false);
    const history = useHistory();

    function handleClick() {
        setRotate(!rotate)
        history.push("/");
    }
    return (
        <button className='border-0 bg-transparent'>
            <img className={rotate ? 'w-8 spin' : 'w-8'}
                 onClick={handleClick}
                 onAnimationEnd={() => setRotate(!rotate)}
                 src={require('./../resources/logo192.png').default}
                 alt='Home Button'/>
        </button>
    );
}

export default HomeButton;
