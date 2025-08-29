const AboutPage = () => {
  return (
    <div className='max-w-5xl max-auto px-6 py-16 bg-gray-900 rounded-lg '>
      <div className='flex flex-col md:flex-row md:flex-start items-center gap-10 mb-12'>
        <img
          src='/public/images/profile.jpg'
          alt='profile'
          className='w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md'
        />
        <div>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Hey, I'am Unu. I am a Web developer.
          </h1>
          <p className='text-gray-300 text-lg'>
            Hello, I'm Unuching Marma from Bangladesh, a passionate web
            developer. Although I do not have a formal background in computer
            science, I have taught myself web development and continue to expand
            my skills through hands-on learning and projects. I am currently in
            the learning phase, but I am confident that with dedication and
            continuous practice, I will soon become a proficient and skilled
            developer.
          </p>
        </div>
      </div>
      {/* Bio */}
      <div className='mb-12'>
        <h2 className='text-2xl font-semibold font-white mb-4'>My Mission</h2>
        <p className='text-gray-300 leading-relaxed'>
          Continuously improve my coding skills and stay updated with the latest
          technologies. Learn multiple programming languages and frameworks to
          become a versatile developer. Create innovative web applications that
          solve real-world problems. Contribute to open-source projects to give
          back to the developer community.
        </p>
      </div>
      {/* tech stack */}
      <h2 className='text-2xl font-semibold text-white mb-4'>Tech I Use</h2>
      <ul className='flex flex-wrap gap-4 text-sm text-gray-300'>
        {[
          'react',
          'motion',
          'next-js',
          'sql',
          'mongoDB',
          'react-router',
          'typescript',
          'docker',
        ].map((tech) => (
          <li key={tech} className='bg-gray-700 px-3 py-1 rounded-md'>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
