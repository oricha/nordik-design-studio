export type Location = {
  id: string;
  city: string;
  country: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  openingHours: {
    day: string;
    hours: string;
  }[];
  timezone: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
};

export const locations: Location[] = [
  {
    id: "madrid",
    city: "Madrid",
    country: "España",
    address: "Calle Principal, 123",
    postalCode: "28001 Madrid",
    phone: "+34 91 234 5678",
    email: "madrid@nordik.es",
    openingHours: [
      { day: "Lunes - Viernes", hours: "09:00 - 18:00" },
      { day: "Sábado", hours: "10:00 - 14:00" },
      { day: "Domingo", hours: "Cerrado" },
    ],
    timezone: "CET",
    coordinates: { lat: 40.4168, lng: -3.7038 },
  },
  {
    id: "barcelona",
    city: "Barcelona",
    country: "España",
    address: "Paseo de Gracia, 456",
    postalCode: "08007 Barcelona",
    phone: "+34 93 345 6789",
    email: "barcelona@nordik.es",
    openingHours: [
      { day: "Lunes - Viernes", hours: "09:00 - 18:00" },
      { day: "Sábado", hours: "10:00 - 14:00" },
      { day: "Domingo", hours: "Cerrado" },
    ],
    timezone: "CET",
    coordinates: { lat: 41.3851, lng: 2.1734 },
  },
];
