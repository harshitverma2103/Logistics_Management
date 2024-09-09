import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "./style.css";

const RoutePlan = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    document.title = "Route Planing";
    const map = L.map(mapRef.current).setView([28.6139, 77.209], 11);
    const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: "Leaflet &copy; " + mapLink + ", contribution",
      maxZoom: 22,
    }).addTo(map);

    const truckIcon = L.icon({
      iconUrl: require("../../assets/truck-icon.png"),
      iconSize: [70, 70],
    });

    const locationIcon = L.icon({
      iconUrl: require("../../assets/location-icon.png"),
      iconSize: [40, 40],
    });

    const marker = L.marker([28.6139, 77.209], { icon: truckIcon }).addTo(map);

    map.on("click", (e) => {
      const destinationMarker = L.marker([e.latlng.lat, e.latlng.lng], {
        icon: locationIcon,
      }).addTo(map);

      if (L.Routing) {
        L.Routing.control({
          waypoints: [
            L.latLng(28.6139, 77.209),
            L.latLng(e.latlng.lat, e.latlng.lng),
          ],
        })
          .on("routesfound", (e) => {
            const routes = e.routes;
            const bounds = L.latLngBounds(routes[0].coordinates);
            map.fitBounds(bounds);

            e.routes[0].coordinates.forEach((coord, index) => {
              setTimeout(() => {
                marker.setLatLng([coord.lat, coord.lng]);
                map.panTo([coord.lat, coord.lng]);
                if (index === e.routes[0].coordinates.length - 1) {
                  alert(
                    "The truck has reached its destination. The trip is complete."
                  );
                  window.location.reload();
                }
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
