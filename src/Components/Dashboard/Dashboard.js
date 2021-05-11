import React from "react";
import MemberCard from "../MemberCard/MemberCard";
import "./dashboard.css";
const Dashboard = ({ team, children }) => {
  const handelName = (myname) => {
    alert(`Hello I am ${myname}`);
  };

  return (
    <>
      <div className="team">
        {team.map((member, i) => (
          <MemberCard member={member} key={i} handelName={handelName} />
        ))}
      </div>

      <div>
        <span>Children</span>
        {children}
      </div>
    </>
  );
};

export default Dashboard;
