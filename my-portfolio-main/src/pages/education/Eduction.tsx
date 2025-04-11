import EducationCard from "./EductionCard";

const Education = () => {
  const details = [
    {
      degree: "Bachelor of Engineering",
      branch: "Information Science",
      duration: "2022 - 2025",
      college: "Siddaganga Institute Of Technology",
      CGPA: "8.15 CGPA",
    },
  ];

  return (
    <div className="w-full  flex flex-col md:flex-row items-center md:items-start justify-start gap-1 max-w-screen-md mx-auto  px-4 ">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          Education
        </h1>
      </div>
      <div className="flex flex-col gap-4 justify-evenly py-2 px-4">
        {details.map((item, index) => (
          <EducationCard
            key={index}
            degree={item.degree}
            branch={item.branch}
            duration={item.duration}
            college={item.college}
            CGPA={item.CGPA}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
