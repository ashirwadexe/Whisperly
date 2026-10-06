import React from "react";
import Stats from "../components/Stats";
import MessageCard from "../components/MessageCard";

const Dashboard = () => {
  return (
    <div>

      <Stats />

      <div className="space-y-4">

        <MessageCard />

        <MessageCard
          message="You are actually one of the nicest people I've met. Don't ever change."
          time="18 minutes ago"
          unread={false}
        />

        <MessageCard
          message="I know you probably don't remember me, but I still remember that conversation."
          time="1 hour ago"
          unread={false}
        />

      </div>
    </div>
  );
};

export default Dashboard;