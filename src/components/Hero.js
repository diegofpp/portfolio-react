// import React from 'react';

// const Hero = () => {
//      return (
// <div class="hero min-h-screen bg-base-200">
//   <div class="hero-content flex-col lg:flex-row">
//     <img src="https://i.postimg.cc/8CYBSR93/IMG-0402.jpg" class="max-w-sm rounded-lg shadow-2xl" />
//     <div>
//       <h1 class="text-5xl font-bold">Box Office News!</h1>
//       <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//       <button class="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div>
//      );
// };

// export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-center py-8 md:py-24 mx-4 font-roboto">
      <div className="md:ml-80 md:w-40 md:h-64 border border-red-500 justify-center md:justify-center">
        <img
          src='https://i.postimg.cc/8CYBSR93/IMG-0402.jpg'
          alt='Hero'
          className="rounded w-40 h-64 border border-blue-500 md:block"
        />
      </div>

      <div className="md:mr-60 flex-1 w-full md:w-1/2">
        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold mt-4 md:mt-0 text-center md:text-left tracking-tighter">
            Hello, my name is Diego and I am a{' '}
            <span className="text-white bg-black inline-block">Front-end Developer</span>.
          </h1>
          <p className="text-lg md:text-xl mb-8 mt-4 text-center md:text-left">
            I specialize in building web applications and have a passion for creating clean and efficient code.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-black text-white rounded-lg px-3 text-sm font-medium text-center">
              Contact Me
            </button>
            <button className="bg-white text-black rounded-lg text-lg border-2 py-2 px-4">
              See Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
