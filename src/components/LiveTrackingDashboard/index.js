import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { simulateTruckData } from "../../utils/MockData";
import "./style.css";

// Create custom icons based on truck status
const truckIcons = {
  inTransit: new L.Icon({
    iconUrl: require("../../assets/truck-in-transit.png"),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  maintenance: new L.Icon({
    iconUrl: require("../../assets/truck-repair.png"),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
};

const getTruckIcon = (status) => {
  switch (status) {
    case "In Transit":
      return truckIcons.inTransit;
    case "Maintenance":
      return truckIcons.maintenance;
    default:
      return false;
  }
};

const AdjustView = ({ bounds }) => {
  const map = useMap();
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds);
    }
  }, [bounds, map]);
  return null;
};

const LiveTrackingDashboard = () => {
  const [truckData, setTruckData] = useState([]);
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    const data = simulateTruckData();
    setTruckData(data);

    const bounds = L.latLngBounds(
      data.map((truck) => L.latLng(truck.lat, truck.lng))
    );
    setBounds(bounds);
  }, []);

  return (
    <div className="live-tracking-dashboard">
      <header className="dashboard-header">
        <h1>Live Truck Tracking Dashboard</h1>
        <p>Monitor the real-time location and status of trucks in our fleet.</p>
      </header>
      <div className="map-container">
        <MapContainer
          center={[12.9716, 77.5946]}
          zoom={25}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {truckData.map((truck) => (
            <Marker
              key={truck.id}
              position={[truck.lat, truck.lng]}
              icon={getTruckIcon(truck.status)}
            >
              <Popup>
                <strong>Truck ID:</strong> {truck.id}
                <br />
                <strong>Name:</strong> {truck.name}
                <br />
                <strong>Status:</strong> {truck.status}
                <br />
                <strong>Capacity:</strong> {truck.capacity}
                <br />
                <strong>Driver:</strong> {truck.driver}
              </Popup>
            </Marker>
          ))}
          {bounds && <AdjustView bounds={bounds} />}
        </MapContainer>
      </div>
      <footer className="dashboard-footer">
        <p>Data updated every 5 seconds for accurate tracking.</p>
      </footer>
    </div>
  );
};

export default LiveTrackingDashboard;
