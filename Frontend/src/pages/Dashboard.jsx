import React from "react";
import Stats from "../components/Stats";
import MessageCard from "../components/MessageCard";

const Dashboard = () => {
  return (
    <div>
      <div className="mt-[60px] md:mt-0">
        <Stats />
      </div>
      <MessageCard/>
    </div>
  );
};

export default Dashboard;
