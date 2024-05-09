import { useContext } from 'react'
import GoToButton from '../go-to-button/goToButton'
import ThemeContext from '../theme-context'
import './aesthetic-styles.scss'

const Aesthetic = () => {
    const theme = useContext(ThemeContext).theme

    return (
        <div
            className={
                theme === 'dark'
                    ? 'text-white w-full md:max-w-2xl lg:max-w-2xl'
                    : 'w-full md:max-w-2xl lg:max-w-2xl'
            }
        >
            <div className='w-full flex aesthetic-gradient'>
                <h1 className='head-container-website md:ml-16 md:text-4xl'>
                    Aesthetic
                </h1>
            </div>
            <div className='flex flex-column justify-center p-4'>
                <video className='max-h-96' controls autoPlay loop>
                    <source
                        src={
                            require('../resources/aestheticAnimations.mp4')
                                .default
                        }
                        type='video/mp4'
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='m-4'>
                <p className='font-semibold'>
                    I decided to create Aesthetic as an experiment in creating a
                    responsive, e-commerce style website that utilizes many
                    images, animations, and shifting layouts. It was a great
                    opportunity to learn more about image optimization and the
                    GSAP library.
                </p>

                <h1 className='font-semibold mt-10'>Technologies</h1>
                <p className='ml-4'>
                    React, Typescript, GSAP, Vite, CSS, HTML, Netlify CMS
                </p>

                <h1 className='font-semibold mt-10'>Noteworthy</h1>
                <p className='ml-4'>
                    This was also my first serious project using Vite, which is
                    a local development server that ships with a variety of
                    features to improve development experience. In particular,
                    Vite's Hot Module Replacement feature was the most polished
                    implementation of HMR I've seen yet and dev times were
                    greatly increased as a result. I would say that Vite is a
                    great solution for small projects like this one.
                </p>
                <p className='ml-4 mt-2'>
                    In addition to Vite, this was also my first real experience
                    in using the animation library GSAP. I found it to be very
                    feature rich and fairly easy to use. Organizing and creating
                    effects was made simple by using GSAP's 'timeline' method.
                    In the past, I've always used the vanilla CSS methods to
                    create animations, which has given me a strong foundation.
                    However, I believe I'll be using tools like GSAP in the
                    future more often to simplify the dev process.
                </p>
                <p className='ml-4 mt-2'>
                    Moving forward, I would look to improve this project by
                    fleshing out the website more. My initial goal was to work
                    with animations and to improve my CSS skills, and I believe
                    I achieved that. However, I didn't decide to add anything
                    beyond the landing screen, leading to some buttons in the
                    menus being unusable.
                </p>

                <div className='flex justify-center mt-4'>
                    <a
                        className='flex'
                        href='https://stupendous-basbousa-c822a4.netlify.app/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <GoToButton text={'Try it out'} />
                    </a>
                </div>

                <div className='flex justify-center mt-4'>
                    <a
                        className='flex'
                        href='https://github.com/pbarrett21/aesthetic'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <GoToButton text={'View the Code'} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Aesthetic
