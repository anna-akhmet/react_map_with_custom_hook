import React, {useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

// / The following is required to stop "npm build" from transpiling mapbox code.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

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