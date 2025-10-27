"use client";

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export function OrderMap() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (map.current || !mapContainer.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [105.76788000125505, 10.018288286882687], // starting position [lng, lat]
            zoom: 16 // starting zoom
        });

        map.current?.addControl(new mapboxgl.NavigationControl());

        setTimeout(() => {
            map.current?.resize();
        }, 500);
    }, []);

    return (
        <div className="w-full h-[700px]" ref={mapContainer} />
    );
}
