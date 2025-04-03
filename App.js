import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const profiles = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://via.placeholder.com/150",
    description: "Software Engineer from NY",
    address: "New York, USA",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://via.placeholder.com/150",
    description: "Designer from LA",
    address: "Los Angeles, USA",
    lat: 34.0522,
    lng: -118.2437,
  },
];

export default function ProfileMapApp() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [search, setSearch] = useState("");
  
  const filteredProfiles = profiles.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <Input
        placeholder="Search profiles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProfiles.map((profile) => (
          <Card key={profile.id} className="p-4 flex items-center">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <CardContent>
              <h2 className="text-lg font-bold">{profile.name}</h2>
              <p>{profile.description}</p>
              <Button
                className="mt-2"
                onClick={() => setSelectedProfile(profile)}
              >
                Show on Map
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProfile && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Location of {selectedProfile.name}</h3>
          <MapContainer
            center={[selectedProfile.lat, selectedProfile.lng]}
            zoom={10}
            style={{ width: "100%", height: "400px" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[selectedProfile.lat, selectedProfile.lng]}>
              <Popup>{selectedProfile.address}</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
}
