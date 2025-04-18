import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import rawLotData from 'ionic-griz-sports/src/lotData.json';

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
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [error, setError] = useState<string | null>(null);

  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  const fetchAndUpdateVacancyData = async () => {
    if (!mapRef.current) return;

    try {
      const response = await fetch('/vacancy_data.txt');
      const text = await response.text();

      const vacancyMap: Record<string, number | null> = {};
      text.split('\n').forEach(line => {
        const [rawId, val] = line.trim().split(':');
        const lotId = rawId?.trim();
        if (lotId) {
          vacancyMap[lotId] = val === 'None' ? null : parseFloat(val);
        }
      });

      const lotData = rawLotData as GeoJsonFeatureCollection;

      const updatedFeatures = lotData.features.map((feature: GeoJsonFeature) => {
        const lotId = feature.properties.lot_id?.trim();
        const vacancy = lotId ? vacancyMap[lotId] : null;

        let fillColor = '#000000';
        if (typeof vacancy === 'number') {
          if (vacancy > 0.85) fillColor = '#E74C3C';
          else if (vacancy > 0.6) fillColor = '#E67E22';
          else if (vacancy > 0.3) fillColor = '#F1C40F';
          else fillColor = '#2ECC71';
        }

        return {
          ...feature,
          properties: {
            ...feature.properties,
            fillColor,
          },
        };
      });

      const updatedGeoJSON: GeoJsonFeatureCollection = {
        type: 'FeatureCollection',
        features: updatedFeatures,
      };

      const source = mapRef.current.getSource('parking-lots') as mapboxgl.GeoJSONSource;
      if (source) {
        source.setData(updatedGeoJSON as GeoJSON.FeatureCollection);
      }
    } catch (err) {
      console.error('Error fetching vacancy data:', err);
      setError('Failed to update parking lot data.');
    }
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-113.991, 46.860],
      zoom: 14,
    });

    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl(), 'top-left');

    map.on('load', async () => {
      try {
        map.addSource('parking-lots', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [],
          },
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

        await fetchAndUpdateVacancyData();
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
        <div style={{ position: 'relative' }}>
          {/* Floating button panel */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'white',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <button
              onClick={() => mapRef.current?.zoomIn()}
              style={{
                padding: '8px 12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: '#3498db',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Zoom In
            </button>
            <button
              onClick={() => mapRef.current?.zoomOut()}
              style={{
                padding: '8px 12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: '#2980b9',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Zoom Out
            </button>
            <button
              onClick={fetchAndUpdateVacancyData}
              style={{
                padding: '8px 12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: '#27ae60',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Fetch Lot Vacancy
            </button>
          </div>

          {/* Map container */}
          <div
            ref={mapContainer}
            id="map-container"
            style={{ width: '100%', height: '600px', borderRadius: '8px', overflow: 'hidden' }}
          />
        </div>
      )}
    </div>
  );
};

export default MapComponent;
