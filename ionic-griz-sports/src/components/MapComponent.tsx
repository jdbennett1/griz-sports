import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import rawLotData from 'ionic-griz-sports/src/lotData.json'; // Import raw JSON

interface GeoJsonFeature {
  type: 'Feature';
  properties: {
    lot_id?: string;
    fillColor?: string;
    [key: string]: any;
  };
  geometry: {
    type: string;
    coordinates: any;
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
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFpZGVuZGFuZSIsImEiOiJjbTZzNmdjZ3UwNHZyMnFwcGt5Y20yc3JvIn0.LbnhtWs_Bayf-yaZzpYByg';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-113.991, 46.860],
      zoom: 14,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-left');

    map.on('load', async () => {
      try {
        // ✅ Step 1: Fetch the vacancy data
        const response = await fetch('/vacancy_data.txt');
        const text = await response.text();
        console.log('Raw vacancy data:\n', text); // Check contents

        // ✅ Step 2: Parse it into a map
        const vacancyMap: Record<string, number | null> = {};
        text.split('\n').forEach(line => {
          const [rawId, val] = line.trim().split(':');
          const lotId = rawId?.trim();
          if (lotId) {
            vacancyMap[lotId] = val === 'None' ? null : parseFloat(val);
          }
        });

        console.log('Parsed vacancyMap:', vacancyMap);

        // ✅ Step 3: Process lot data and apply colors
        const lotData = rawLotData as GeoJsonFeatureCollection;

        const updatedFeatures = lotData.features.map((feature: GeoJsonFeature) => {
          const rawLotId = feature.properties.lot_id;
          const lotId = rawLotId?.trim(); // normalize
          const vacancy = lotId ? vacancyMap[lotId] : null;

          console.log(`Lot ${lotId} -> Vacancy: ${vacancy}`);

          let fillColor = '#000000'; // Default color
          if (typeof vacancy === 'number') {
            if (vacancy > 0.85) fillColor = '#E74C3C';      // Red (high vacancy)
            else if (vacancy > 0.6) fillColor = '#E67E22';   // Orange
            else if (vacancy > 0.3) fillColor = '#F1C40F';   // Yellow
            else fillColor = '#2ECC71';                      // Green (low vacancy)
          }
          
          return {
            ...feature,
            properties: {
              ...feature.properties,
              fillColor,
            },
          };
        });

        const validatedLotData: GeoJsonFeatureCollection = {
          type: 'FeatureCollection',
          features: updatedFeatures,
        };

        // ✅ Step 4: Add GeoJSON source and layers
        map.addSource('parking-lots', {
          type: 'geojson',
          data: validatedLotData as GeoJSON.FeatureCollection,

        });

        map.addLayer({
          id: 'parking-lots-fill',
          type: 'fill',
          source: 'parking-lots',
          paint: {
            'fill-color': ['get', 'fillColor'],
            'fill-opacity': 0.5,
          },
        });

        map.addLayer({
          id: 'parking-lots-outline',
          type: 'line',
          source: 'parking-lots',
          paint: {
            'line-color': '#000',
            'line-width': 2,
          },
        });
      } catch (err) {
        console.error('Error loading map or data:', err);
        setError('Something went wrong while loading the map.');
      }
    });

    return () => map.remove();
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