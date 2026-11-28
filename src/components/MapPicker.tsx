"use client";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Search, LocateFixed, MapPin } from 'lucide-react';

// Fix leaflet icon issue in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const UBUD_CENTER = { lat: -8.5069, lng: 115.2625 };
const UBUD_RADIUS_METERS = 5000; // 5 km

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI/180;
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
}

// Helper to center the map programmatically
function MapController({ center }: { center: L.LatLng | null }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 15, { animate: true });
    }
  }, [center, map]);
  return null;
}

/** Modal maps often open at 0×0. Until Leaflet remeasures, taps land off the pin. */
function MapReady() {
  const map = useMap();
  useEffect(() => {
    const fix = () => map.invalidateSize();
    const soon = window.setTimeout(fix, 50);
    const later = window.setTimeout(fix, 300);
    const observer = new ResizeObserver(fix);
    observer.observe(map.getContainer());
    return () => {
      window.clearTimeout(soon);
      window.clearTimeout(later);
      observer.disconnect();
    };
  }, [map]);
  return null;
}

export default function MapPicker({
  onLocationSelect,
  initialPosition,
  onLocatingChange,
}: {
  onLocationSelect: (lat: number, lng: number, isOutUbud: boolean, placeName?: string) => void,
  initialPosition?: { lat: number, lng: number } | null
  /** True while Safari’s location prompt is up, so the booking sheet can stop covering it. */
  onLocatingChange?: (locating: boolean) => void
}) {
  const [position, setPosition] = useState<L.LatLng | null>(
    initialPosition ? new L.LatLng(initialPosition.lat, initialPosition.lng) : null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [mapCenter, setMapCenter] = useState<L.LatLng | null>(
    initialPosition ? new L.LatLng(initialPosition.lat, initialPosition.lng) : null
  );

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        const distance = getDistance(UBUD_CENTER.lat, UBUD_CENTER.lng, e.latlng.lat, e.latlng.lng);
        const isOut = distance > UBUD_RADIUS_METERS;
        onLocationSelect(e.latlng.lat, e.latlng.lng, isOut);
      },
    });

    return position === null ? null : (
      <Marker position={position}></Marker>
    );
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      const query = encodeURIComponent(searchQuery + ", Bali, Indonesia");
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
      const data = await res.json();
      
      if (data && data.length > 0) {
        const result = data[0];
        const lat = parseFloat(result.lat);
        const lon = parseFloat(result.lon);
        
        const newPos = new L.LatLng(lat, lon);
        setMapCenter(newPos);
        setPosition(newPos); // Auto-pin the searched location
        
        const distance = getDistance(UBUD_CENTER.lat, UBUD_CENTER.lng, lat, lon);
        const isOut = distance > UBUD_RADIUS_METERS;
        onLocationSelect(lat, lon, isOut, result.name || searchQuery.trim());
      } else {
        alert("Location not found. Please try a different search term or drop the pin manually.");
      }
    } catch (err) {
      console.error("Geocoding error:", err);
      alert("Error searching for location. Please drop the pin manually.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleLocate = () => {
    if (!navigator.geolocation) {
      alert("Location is not available on this device. Please search your hotel or tap the map.");
      return;
    }
    // Must run inside the tap. A short timeout cancels Safari’s “use this
    // position” prompt before the guest can tap it.
    setIsLocating(true);
    onLocatingChange?.(true);
    const finish = () => {
      setIsLocating(false);
      onLocatingChange?.(false);
    };
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPos = new L.LatLng(pos.coords.latitude, pos.coords.longitude);
        setMapCenter(newPos);
        setPosition(newPos);
        const distance = getDistance(UBUD_CENTER.lat, UBUD_CENTER.lng, newPos.lat, newPos.lng);
        onLocationSelect(newPos.lat, newPos.lng, distance > UBUD_RADIUS_METERS);
        finish();
      },
      () => {
        finish();
        alert("Safari did not share your location. Search your hotel name, or tap the map to drop the pin.");
      },
      { enableHighAccuracy: false, maximumAge: 120000, timeout: 25000 }
    );
  };

  return (
    <div className="relative w-full h-full">
      {/* Search Bar Overlay */}
      <div className="absolute top-4 left-4 right-16 md:right-4 z-[500]">
        <form onSubmit={handleSearch} className="flex bg-white rounded-xl shadow-lg border border-brand-green/20 overflow-hidden">
          <input 
            type="text" 
            placeholder="Search hotel or location..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 text-sm text-brand-green outline-none"
          />
          <button 
            type="submit" 
            disabled={isSearching} 
            className="px-4 bg-brand-green text-sand hover:bg-brand-green-light transition-colors flex items-center justify-center disabled:opacity-80"
          >
            {isSearching ? <span className="text-xs font-semibold">Wait...</span> : <Search className="w-5 h-5" />}
          </button>
        </form>
      </div>

      {/* Use-my-location — big touch target for phones */}
      <button
        type="button"
        onClick={handleLocate}
        disabled={isLocating}
        className="absolute top-[74px] right-4 z-[500] inline-flex min-h-[44px] touch-manipulation items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-brand-green shadow-lg border border-brand-green/20 active:scale-[0.98] disabled:opacity-70"
      >
        <LocateFixed className="h-4 w-4 shrink-0" />
        {isLocating ? "Locating…" : "Use my location"}
      </button>

      {/* On-map note: how to set the pin */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-[400] inline-flex max-w-[75%] items-center gap-1.5 rounded-full bg-brand-green/90 px-3 py-2 text-xs font-semibold text-sand shadow-lg">
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        Tap the map to drop your hotel pin
      </div>

      <MapContainer
        center={[UBUD_CENTER.lat, UBUD_CENTER.lng]}
        zoom={12}
        className="touch-none"
        style={{ height: '100%', width: '100%', zIndex: 0, touchAction: 'none' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[UBUD_CENTER.lat, UBUD_CENTER.lng]} radius={UBUD_RADIUS_METERS} pathOptions={{ color: '#0a1628', fillColor: '#0a1628', fillOpacity: 0.15 }} />
        <LocationMarker />
        <MapController center={mapCenter} />
        <MapReady />
      </MapContainer>
    </div>
  );
}
