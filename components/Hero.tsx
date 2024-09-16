import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='white' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />

                <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.09] bg-grid-black/[0.3] relative flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

                    <div className='flex justify-center relative my-20 z-10'>
                        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                                Dynamic Web Magic with Next.js
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero