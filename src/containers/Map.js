import React, { useEffect, useRef } from 'react';
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import '../stylesheets/map.css';

const Map = () => {
  const mapRef = useRef();

  useEffect(() => {
  if (mapRef && mapRef.current) {
    const map = new ArcGISMap({
      basemap: 'satellite',
    });

    const view = new MapView({
      map: map,
      container: 'viewDiv',
      center: [-87.62, 41.87],
      zoom: 12,
    });

    mapRef.current.view = view;
  }
}, [mapRef]);

  return (
		<div className="qsr-map">
			<div className="webmap" id='viewDiv' />
		</div>
	);
}

export default Map;