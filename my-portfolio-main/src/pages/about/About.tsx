const About = () => {
  return (
    <div className="w-full  flex flex-col md:flex-row items-center md:items-start justify-center gap-7 max-w-screen-md mx-auto  px-4 ">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          About
        </h1>
      </div>
      <div className="text-white flex-wrap flex flex-col gap-2  text-start ">
        <p>I'm Jagadish C K, a passionate Fullstack Developer</p>
        <p>
          with experience in building responsive web applications using modern
        </p>
        <p>technologies like React, Tailwind CSS, Node.js, and PostgreSQL.</p>
        <p>
          I enjoy solving real-world problems with clean code and scalable
          architecture.
        </p>
        <p>
          Outside of coding, I'm a learner, a creator, and someone who believes
          in constant growth and collaboration.
        </p>
        
      </div>
    </div>
  );
};

export default About;
