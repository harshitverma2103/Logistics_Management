import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "./style.css";

const RoutePlan = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([28.6139, 77.209], 11);
    const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: "Leaflet &copy; " + mapLink + ", contribution",
      maxZoom: 18,
    }).addTo(map);

    const taxiIcon = L.icon({
      iconUrl: require("../../assets/truck-icon.png"),
      iconSize: [70, 70],
    });

    const marker = L.marker([28.6139, 77.209], { icon: taxiIcon }).addTo(map);

    map.on("click", (e) => {
      const newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

      if (L.Routing) {
        L.Routing.control({
          waypoints: [
            L.latLng(28.6139, 77.209),
            L.latLng(e.latlng.lat, e.latlng.lng),
          ],
        })
          .on("routesfound", (e) => {
            const routes = e.routes;
            console.log(routes);

            e.routes[0].coordinates.forEach((coord, index) => {
              setTimeout(() => {
                marker.setLatLng([coord.lat, coord.lng]);
              }, 100 * index);
            });
          })
          .addTo(map);
      } else {
        console.error("L.Routing is not available");
      }
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="route-plan-container">
      <h1 className="title">Route Planning</h1>
      <p className="description">
        Click on the map to select a destination and see the route from the
        starting point.
      </p>
      <div className="map" ref={mapRef}></div>
    </div>
  );
};

export default RoutePlan;
