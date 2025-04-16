import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import lotData from './lotData.json'; // Make sure this is the correct relative path

interface GeoJsonFeature {
  type: 'Feature';
  properties: Record<string, any>;
  geometry: {
    type: 'Point' | 'LineString' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon';
    coordinates: any; // Adjust based on the specific geometry type
  };
}

interface GeoJsonFeatureCollection {
  type: 'FeatureCollection';
  features: GeoJsonFeature[];
}

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (mapContainer.current) {
      try {
        // Set the Mapbox access token
        mapboxgl.accessToken = 'pk.eyJ1IjoiaGFpZGVuZGFuZSIsImEiOiJjbTZzNmdjZ3UwNHZyMnFwcGt5Y20yc3JvIn0.LbnhtWs_Bayf-yaZzpYByg';

        // Initialize the map
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11', // I liked this style better than the other options 
          center: [-113.991, 46.860], // University of Montana Coordinates
          zoom: 14,
        });

        // Add navigation control
        map.addControl(new mapboxgl.NavigationControl(), 'top-left');

        // Handle map load event
        map.on('load', () => {
          // Ensure the lotData is a valid GeoJSON object
          const validatedLotData: GeoJsonFeatureCollection = {
            type: 'FeatureCollection',
            features: lotData.features.map((feature) => ({
              ...feature,
              type: 'Feature',
              geometry: {
                ...feature.geometry,
                type: feature.geometry.type as 'Point' | 'LineString' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon', // Handles all types of geometry
              },
            })),
          };

          // Add the GeoJSON data source
          map.addSource('parking-lots', {
            type: 'geojson',
            data: validatedLotData, // Use the validated GeoJSON
          });

          // Add a fill layer for polygons (for example parking lots)
          map.addLayer({
            id: 'parking-lots-fill',
            type: 'fill',
            source: 'parking-lots',
            paint: {
              'fill-color': '#088', // Color of the fill
              'fill-opacity': 0.5,   // Transparency of the fill
            },
          });

          // Add an outline layer for the polygons
          map.addLayer({
            id: 'parking-lots-outline',
            type: 'line',
            source: 'parking-lots',
            paint: {
              'line-color': '#000',  // Color of the outline
              'line-width': 2,       // Line width of the outline
            },
          });
        });

        return () => {
          // Cleanup the map when the component unmounts
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
        <div ref={mapContainer} id="map-container" style={{ width: '600px', height: '600px' }} />
      )}
    </div>
  );
};

export default MapComponent;
