import React, { useEffect } from "react";
import LiveTrackingDashboard from "../../components/LiveTrackingDashboard/index";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Logistics Management";
  });

  return (
    <div>
      <LiveTrackingDashboard />
    </div>
  );
};

export default Dashboard;
