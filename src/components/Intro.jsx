import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col 
    text-center pt-20 pb-6">
        <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Fiorenso</h1>
        <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
        <p className='text-sm max-w-xl mb-6 font-bold'>Hi! This is the first version of my
        portfolio where I will showcase the ideas that I cook. I am a computing graduate 
        that's expanding his horizons daily and on the road to become an excellent full-stack developer.
        Let's connect on {" "}
        <a 
            href="https://www.linkedin.com/in/fiorenso-wattalage-fernando/"
            target='_blank'
            className='text-cyan-600 hover:underline
            underline-offset-2 decoration-2 decoration-red-600'
            rel="noreferrer opener">
                LinkedIn
        </a>
        ? 
        </p>
    </div>
  )
}

export default Intro;