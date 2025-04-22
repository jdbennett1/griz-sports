import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import rawLotData from 'ionic-griz-sports/src/lotData.json'; // Import raw JSON
import './MapComponent.css'

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

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;


    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-113.9852647, 46.8621548],
      zoom: 14.5,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-left');

    map.on('load', async () => {
      map.resize(); // Resize the map to fit the container
      console.log('Static test popup added')
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
              vacancy,
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
        console.log(validatedLotData)


        map.addLayer({
          id: 'parking-lots-fill',
          type: 'fill',
          source: 'parking-lots',
          paint: {
            'fill-color': ['get', 'fillColor'],
            'fill-opacity': 0.5,
          },

        }, 'waterway-label');

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

    let popup: mapboxgl.Popup | null = null;

    map.on('mousemove', 'parking-lots-fill', (e) => {
      console.log('Mousemove event fired on parking-lots-fill');

      if (!e.features || e.features.length === 0) return;

      const feature = e.features[0];
      const lotId = feature.properties?.lot_id || 'Unknown Lot ID';
      const vacancy = feature.properties?.vacancy ?? 'Unknown';

      console.log('Hovered feature:', feature);
      if (popup) popup.remove(); // Remove existing popup

      const coordinates = (feature.geometry.type === 'Polygon')
        ? feature.geometry.coordinates[0][0] as [number, number] // Use the first coordinate of the first polygon
        : [e.lngLat.lng, e.lngLat.lat] as [number, number]; // Fallback to the event coordinates

      const vac = typeof vacancy === 'number' ? vacancy * 100 : 0; // Convert to percentage
      const acc = 100 - vac

      const formattedVacancy = typeof vacancy === 'number' ? `${(acc).toFixed(0)}%` : 'Unknown';
      const html = `
        <div style="text-align: center; font-size: 14px; color: black;">
      <strong>Lot ID:</strong> ${lotId}<br/>
      <strong>Vacancy:</strong> ${formattedVacancy}
        </div>
      `;
      console.log('Popup HTML:', html);

      // Remove any existing popup
      if (popup) {
        popup.remove();
      }

      popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 15,
      })
        .setLngLat(coordinates)
        .setHTML(html)
        .addTo(map);
      console.log('Popup added:', e.lngLat);
    });

    map.on('mouseleave', 'parking-lots-fill', () => {
      if (popup) {
        popup.remove();
        popup = null;
      }
    });


    return () => map.remove();
  }, []);

  return (
    <div style={{ width: '100%', height: '50%' }}>
      {error ? (
        <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>{error}</div>
      ) : (
        <div ref={mapContainer} id="map-container" style={{ width: '650px', height: '550px' }} />
      )}
    </div>
  );
};

export default MapComponent;