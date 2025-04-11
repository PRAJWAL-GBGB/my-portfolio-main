import ProjectCard from "./ProjectCard";

const Projects = () => {
  const details = [
    {
      emoji: "🌐",
      title: "Hackernews-Server",
      projectUrl: "https://github.com/jagadish018/hackernews-server",
      description: "Developed Hackernews server clone",
    },
    {
      emoji: "🐞",
      title: "Fileless Malware Detection",
      projectUrl: "https://github.com/jswaroop123/FileLess_Malware",
      description:
        "Developed ML model using Random Forest. It detects Fileless Malware",
    },
    {
      emoji: "🎗️",
      title: "Colon Cancer Prediction",
      projectUrl: "https://github.com/jagadish018/colon_cancer_prediction",
      description:
        "Developed Deep learning model using ResNet50 + Streamlit . It detects Colon Cancer",
    },
    {
      emoji: "💻⚙️",
      title: "CPU Schedule Visualizer",
      projectUrl:
        "https://github.com/jagadish018/CPU-Scheduler-Algo-Visualizer",
      description: "Developed Algorithm visualizer using React + TailwindCSS",
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
