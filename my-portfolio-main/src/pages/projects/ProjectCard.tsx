interface ExperienceCardProps {
  emoji: string;
  title: string;
  projectUrl: string;
 
  description: string;
}

const ProjectCard = ({
  emoji,
  title,
  projectUrl,
  description,
}: ExperienceCardProps) => {
  return (
    <div className="bg-[#0e1117] p-4 py-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <h2 className="text-start text-xl font-bold text-amber-100">{emoji}</h2>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-50 hover:text-amber-100 px-2 text-cneter text-[14px] bg-blue-500 rounded-3xl cursor-pointer"
        >
          {title}
        </a>
      </div>

      <p className="mt-2 text-white">{description}</p>
    </div>
  );
};

export default ProjectCard;
