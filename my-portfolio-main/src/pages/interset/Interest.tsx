

const Interest = () => {
  return (
    <div className="w-full  flex flex-col md:flex-row items-center md:items-start justify-center gap-7 max-w-screen-md mx-auto  px-4 ">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          Interest
        </h1>
      </div>
      <div className="text-white flex-wrap flex flex-col gap-4  text-start ">
        <p>
          <strong>Web Development –   </strong>especially working with React,
          Tailwind CSS, and building full-stack apps using Hono, Node.js, and
          PostgreSQL.
        </p>
        <p>
          <strong>Cybersecurity –   </strong>particularly fileless malware
          detection using memory dumps and advanced analysis tools.
        </p>
        <p>
          <strong>Cricket –   </strong> active participation in college-level
          cricket, combining teamwork and strategic thinking.
        </p>
        <p>
          <strong>UI/UX Design –   </strong>
          designing clean, responsive, and user-friendly interfaces for your
          projects.
        </p>
        <p>
          <strong> Tech Communities –   </strong> attending meetups like Synerz,
          collaborating with peers, and staying updated with the latest trends.
        </p>
      </div>
    </div>
  );
}

export default Interest