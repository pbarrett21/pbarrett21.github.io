import React, {useContext} from 'react';
import ThemeContext from '../theme-context';
import GoToButton from '../go-to-button/goToButton';

const Clone2048 = () => {

    const theme = useContext(ThemeContext).theme;

    return (
        <div className={theme === 'dark' ?
            'text-white w-full md:max-w-2xl lg:max-w-2xl'
            : 'w-full md:max-w-2xl lg:max-w-2xl'}>
            <div className='w-full flex loutrails-gradient'>
                <h1 className='head-container-website md:ml-16 md:text-4xl'>2048 Clone</h1>
            </div>
            <div className='m-4'>
                <p className='font-semibold'>I decided to create 2048 Clone as a challenge to myself to recreate the
                    <a className='underline hover:text-green-600 ml-1 mr-1'
                       href='https://play2048.co/'
                       rel='noreferrer'
                       target='_blank'>original 2048 game</a>
                    to the best of my ability. It has been a good opportunity to work with some fairly complicated multi-dimensional
                 arrays, to capture user input via keyboard or mobile swipe gestures, to create a responsive experience for different screen sizes, and more.</p>

                <h1 className='font-semibold mt-10'>Technologies</h1>
                <p className='ml-4'>Angular, Typescript, SCSS, HTML, Netlify CMS</p>

                <h1 className='font-semibold mt-10'>Noteworthy</h1>
                <p className='ml-4'>This was my first time trying to recreate a video game. I had to study the mechanics of the game
                    in-depth in order to capture all of the requirements for creating a clone of it. I gained an appreciation for the
                    finer details of how the game tiles merge upon attempting to implement the same logic in my version of the game. This puzzle
                    game was a puzzling task to recreate at times when considering all of the different game states, possible moves, game-win or
                    game-loss scenarios, and edge cases. I think this project was a good refresher on matrix operations, project structure design,
                    styling and collecting user input.
                </p>
                <p className='ml-4 mt-2'>Moving forward, I would look to improve this project by
                    incorporating the same animations that were used in the original game.</p>

                <div className='flex justify-center mt-4'>
                    <a className='flex'
                       href='https://2048gameclone.netlify.app/'
                       rel='noreferrer'
                       target='_blank'>
                        <GoToButton text={'Try it out'}/>
                    </a>
                </div>

                <div className='flex justify-center mt-4'>
                    <a className='flex'
                       href='https://github.com/pbarrett21/2048clone'
                       rel='noreferrer'
                       target='_blank'>
                        <GoToButton text={'View the Code'}/>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Clone2048;
