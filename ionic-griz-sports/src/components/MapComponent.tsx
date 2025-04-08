import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (mapContainer.current) {
      try {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaGFpZGVuZGFuZSIsImEiOiJjbTZzNmdjZ3UwNHZyMnFwcGt5Y20yc3JvIn0.LbnhtWs_Bayf-yaZzpYByg';

        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-113.991, 46.860],  // Coordinates for University of Montana parking lot
          zoom: 14,  // Zoom level adjusted for parking lot
        });

        // Add zoom controls
        map.addControl(new mapboxgl.NavigationControl(), 'top-left');

        return () => {
          map.remove();
        };
      } catch (err) {
        setError('Failed to load the map. Please check the console for errors.');
        console.error('Error loading Mapbox:', err);
      }
    }
  }, []);

  return (
    <div>
      {error ? (
        <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>{error}</div>
      ) : (
        <div ref={mapContainer} id="map-container" style={{ width: '100%', height: '100%' }} />
      )}
    </div>
  );
};

export default MapComponent;
