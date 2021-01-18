import React from "react";
import MemberCard from "../MemberCard/MemberCard";
import "./dashboard.css";
const Dashboard = ({ team }) => {
  const handelName = (x) => {
    alert(x);
  };

  return (
    <div className="team">
      {team.map((member, i) => (
        <MemberCard
          member={member}
          // desc={"desc"}
          key={i}
          handelName={handelName}
        />
      ))}
    </div>
  );
};

export default Dashboard;
