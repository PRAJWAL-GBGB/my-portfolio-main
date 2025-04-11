interface ExperienceCardProps {
  role: string;
  company: string;
  companyUrl: string;
  duration: string;
  description: string;
}

const ExperienceCard = ({
  role,
  company,
  companyUrl,
  duration,
  description,
}: ExperienceCardProps) => {
  return (
    <div className="bg-[#0e1117] p-4 py-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 px-8 w-fit">
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <h2 className="text-start text-xl font-bold text-amber-100">{role}</h2> 
        <div className=" flex flex-row gap-3">
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-white bg-purple-500 px-2 rounded-3xl hover:text-amber-100"
          >
            {company}
          </a>
          <span className="text-sm text-white bg-gray-600 px-2 rounded-3xl">
            {duration}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="mt-2 text-white">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
