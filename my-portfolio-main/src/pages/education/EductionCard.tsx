interface EducationCardProps {
  degree: string;
  branch: string;
  duration: string;
    college: string;
    CGPA: String;
}

const EducationCard = ({
    degree,
    branch,
    duration,
    college,
    CGPA
}: EducationCardProps) => {
  return (
    <div className="bg-[#0e1117] p-4 py-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 px-8 w-fit">
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <h2 className="text-start text-xl font-bold text-amber-100">
          {degree}
        </h2>
        <div className=" flex flex-row gap-3">
          <span className="text-sm text-white  text-center bg-gray-600 px-2 p-1 rounded-3xl">
            {branch}
          </span>

          <span className="text-sm text-white text-center bg-gray-600 px-2 p-1 rounded-3xl">
            {duration}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="mt-2 text-white">{college}</p>
        <p className="mt-2 text-white">{CGPA}</p>
      </div>
    </div>
  );
};

export default EducationCard;
