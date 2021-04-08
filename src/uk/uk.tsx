import React, {useContext} from 'react';
import './uk-styles.scss';
import ThemeContext from '../theme-context';

const Uk = () => {

    const theme = useContext(ThemeContext).theme;

    return (
        <div className={theme === 'dark' ?
            'text-white w-full md:max-w-2xl lg:max-w-2xl'
            : 'w-full md:max-w-2xl lg:max-w-2xl'}>
            <div className='w-full flex uk-banner'>
                <h1 className='head-container-uk md:ml-16 md:text-4xl'>University of Kentucky</h1>
            </div>
            <div className='m-4'>
                <p className='font-semibold'>I graduated from the University of Kentucky with a B.S. in Computer Science
                    and a minor in Mathematics in May of 2019. During my time there I was fortunate to explore many
                    different areas of interest and
                    gained a great foundation to build on.</p>

                <h1 className='font-semibold mt-10'>Relevant Coursework</h1>
                <h2 className='font-semibold ml-4 mt-4'>Computer Science and Software Engineering</h2>
                <p className='ml-4'>
                    <a className='underline hover:text-green-600'
                       href='https://github.com/pbarrett21/311App'
                       rel='noreferrer'
                       target='_blank'>Senior Design Project</a>
                    , Machine Learning, Cryptology, Algorithm Design and Analysis, Theory of Computing, Systems
                    Programming, Database Systems, Computer Science Ethics, Web Programming,
                    Computer Networking</p>
                <h2 className='font-semibold ml-4 mt-4'>Mathematics</h2>
                <p className='ml-4'>Applicable Algebra, Discrete Mathematics, Numerical Methods, Matrix Algebra, Calc
                    III</p>

                <h1 className='font-semibold mt-10'>Accomplishments</h1>
                <p className='ml-4'>Dean's List 2018-2019</p>

                <h1 className='font-semibold mt-10'>CatHacks Hackathon</h1>
                <p className='ml-4'>Entered and placed 2nd in the CatHacks Hackathon. We used an Amazon Alexa to
                    transcribe speech to text to a Google Docs document using a custom Alexa Skill. View the
                    implementation <a className='underline hover:text-green-600'
                                      href='https://github.com/pbarrett21/cathacks-2018'
                                      rel='noreferrer'
                                      target='_blank'>here</a>.</p>
            </div>
        </div>
    );
}

export default Uk;
