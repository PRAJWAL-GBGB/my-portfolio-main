import React, { useEffect, useState } from "react";

const getISTTime = (): string => {
  const now = new Date();

  // Convert to IST by offset (IST is UTC+5:30)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 5.5 * 60 * 60 * 1000);

  const time = istTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const date = istTime.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return `${time} • ${date} IST`;
};

const CurrentTimeIST: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(getISTTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getISTTime());
    }, 1000); // updates every second

    return () => clearInterval(interval);
  }, []);

  return <div className="text-gray-400 font-medium text-sm">{currentTime}</div>;
};

export default CurrentTimeIST;
