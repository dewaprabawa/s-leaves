"use client";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Search } from 'lucide-react';

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

export default function MapPicker({ 
  onLocationSelect,
  initialPosition
}: { 
  onLocationSelect: (lat: number, lng: number, isOutUbud: boolean) => void,
  initialPosition?: { lat: number, lng: number } | null
}) {
  const [position, setPosition] = useState<L.LatLng | null>(
    initialPosition ? new L.LatLng(initialPosition.lat, initialPosition.lng) : null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
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
        onLocationSelect(lat, lon, isOut);
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

  return (
    <div className="relative w-full h-full">
      {/* Search Bar Overlay */}
      <div className="absolute top-4 left-4 right-16 md:right-4 z-[400]">
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

      <MapContainer center={[UBUD_CENTER.lat, UBUD_CENTER.lng]} zoom={12} style={{ height: '100%', width: '100%', zIndex: 0 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[UBUD_CENTER.lat, UBUD_CENTER.lng]} radius={UBUD_RADIUS_METERS} pathOptions={{ color: '#17372b', fillColor: '#17372b', fillOpacity: 0.15 }} />
        <LocationMarker />
        <MapController center={mapCenter} />
      </MapContainer>
    </div>
  );
}
