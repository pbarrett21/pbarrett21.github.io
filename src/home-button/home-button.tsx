import React from 'react';
import styles from './home-button.module.css'

const HomeButton = () => {

    return (
        <button style={{border: 'none', backgroundColor: 'unset'}}>
            <img
                // className={styles.imgStyles}
                // style={{maxWidth: '2rem'}}
                src={require('./../resources/logo192.png').default}
                alt='Home Button'/>
        </button>
    );
}

export default HomeButton;
