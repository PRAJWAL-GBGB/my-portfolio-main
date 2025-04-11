import { BiLogoInstagramAlt } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  const socialLinks = [
    {
      title: "GitHub",
      tag: <VscGithubInverted size={20} />,
      url: "https://github.com/PRAJWAL-GBGB",
    },
    {
      title: "Instagram",
      tag: <BiLogoInstagramAlt size={20} />,
      url: "https://instagram.com/yourusername",
    },
    {
      title: "X/Twitter",
      tag: <FaXTwitter size={16} />,
      url: "https://x.com/JagadishCK4056",
    },
    {
      title: "LinkedIn",
      tag: <FaLinkedin size={20} />,
      url: "www.linkedin.com/in/prajwal-g-b-278a24/",
    },
    
  ];

  return (
    <div className="w-full px-4 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 max-w-screen-md mx-auto  ">
      <img
        src="/profil.jpg"
        alt="Prajwal G B"
        className="rounded-full w-38 h-38 object-cover border p-1"
      />

      <div className="flex flex-col items-center md:items-start w-full gap-4 ">
        
        <h1 className="text-l md:text-3xl font-semibold text-amber-50 text-center md:text-left">
        Prajwal G B(Fullstack Developer)
        </h1>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <button className="text-sm text-blue-500 transition duration-150 ease-in-out px-3 py-1 rounded-xl cursor-pointer border border-blue-500">
            Developer
          </button>
        </div>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
              className="text-sm text-amber-50 hover:text-blue-400 flex items-center gap-1"
            >
              {item.tag}
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
