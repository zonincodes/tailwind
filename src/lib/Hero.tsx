import React from 'react'

function Hero() {
  return (
    // Hero
    <section id="hero">
      {/* Flex container */}
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* left container */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold  md:text-5xl md:textleft">
            Bring everyone together to build better products.
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping larger team goals in veiw.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#a"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a>
          </div>
        </div>
        {/* image div */}
        <div className='md:w-1/2'>
          <img src='img/illustration-intro.svg' alt='illustration intoduction'/>
        </div>
      </div>
    </section>
  );
}

export default Hero