import React, { useEffect } from "react";
import LiveTrackingDashboard from "../../components/LiveTrackingDashboard/index";
import { SpeedInsights } from "@vercel/speed-insights/react"

const Dashboard = () => {
  useEffect(() => {
    document.title = "Logistics Management";
  });

  return (
    <div>
      <LiveTrackingDashboard />
      <SpeedInsights />
    </div>
  );
};

export default Dashboard;
