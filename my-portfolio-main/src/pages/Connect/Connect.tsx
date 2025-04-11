import CurrentTimeIST from "../../components/CurrentTimeIST";

const Connect = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-start gap-1 max-w-screen-md mx-auto px-4">
      <div>
        <h1 className="text-white md:w-35 font-medium text-start md:text-center">
          Connect
        </h1>
      </div>
      <div className=" p-4  rounded-lg shadow-md hover:shadow-lg transition-all duration-300 px-8 w-fit">
        <div className="flex flex-col gap-4 items-center">
          <CurrentTimeIST /> 
          <a
            href="www.linkedin.com/in/prajwal-g-b-278a24/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-50 hover:text-amber-100 text-center bg-blue-500 rounded-3xl cursor-pointer p-2 w-36"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
