import React, {useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export default function useMapbox(container, center, zoom) {
    mapboxgl.accessToken = "pk.eyJ1IjoiYW5uYWFraG1ldCIsImEiOiJjbDJoZjdybTAwZDllM2lwaGpwMjZreHhsIn0.VpRx5KdVw-9fAvWYptlseg";

    useLayoutEffect(() => {

      const map = new mapboxgl.Map({
        container: container ? container : "map",
        style: "mapbox://styles/mapbox/dark-v10",
        center: center ? center : [37.61192, 55.76199],
        zoom: zoom ? zoom :10
      });
    }, [container, center, zoom]);

}