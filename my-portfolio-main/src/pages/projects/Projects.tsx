import ProjectCard from "./ProjectCard";

const Projects = () => {
  const details = [
    {
      emoji: "🌐",
      title: "Hackernews-Server",
      projectUrl: "https://github.com/PRAJWAL-GBGB/hackernews-server-main.git",
      description: "Developed Hackernews server clone",
    },
    
  
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-4 max-w-screen-md mx-auto px-4">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-evenly py-2 px-4">
        {details.map((item, index) => (
          <ProjectCard
            key={index}
            emoji={item.emoji}
            title={item.title}
            projectUrl={item.projectUrl}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
