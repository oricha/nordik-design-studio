import { siteContact } from "@/data/siteContact";

export type Location = {
  id: string;
  title: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  timezone: string;
  openHour: string;
  closeHour: string;
  hoursLabel: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  lat: number;
  lon: number;
};

function buildGoogleMapsUrl(lat: number, lon: number) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
}

function buildGoogleMapsEmbedUrl(lat: number, lon: number) {
  return `https://maps.google.com/maps?q=${lat},${lon}&z=14&hl=es&output=embed`;
}

export const locations: Location[] = siteContact.offices.map((office) => {
  const city = office.addressLines[1]?.split(" ").slice(1).join(" ") || office.title;
  const country = office.addressLines[2] ?? "";

  return {
    id: office.id,
    title: office.title,
    city,
    country,
    address: office.addressLines.join(", "),
    phone: office.phoneDisplay,
    phoneHref: office.phoneHref,
    email: siteContact.emailDisplay,
    timezone: office.timeZone,
    openHour: office.weekdayOpen,
    closeHour: office.weekdayClose,
    hoursLabel: office.hoursLabel,
    mapsUrl: buildGoogleMapsUrl(office.lat, office.lon),
    mapsEmbedUrl: buildGoogleMapsEmbedUrl(office.lat, office.lon),
    lat: office.lat,
    lon: office.lon,
  };
});
