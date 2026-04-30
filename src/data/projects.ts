import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export type Project = {
  id: number;
  name: string;
  category: "houses" | "cabins" | "materials" | "reforms";
  area: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  image: string;
  badge?: "New" | "Popular";
  slug?: string;
};

export const projects: Project[] = [
  { id: 1, name: "Tunturi", category: "houses", area: 145, bedrooms: 4, bathrooms: 2, price: 185000, image: project1, badge: "Popular", slug: "tunturi" },
  { id: 2, name: "Sodankylä", category: "houses", area: 180, bedrooms: 5, bathrooms: 3, price: 245000, image: project2, badge: "New", slug: "sodankyla" },
  { id: 3, name: "Torku", category: "cabins", area: 48, bedrooms: 2, bathrooms: 1, price: 32400, image: project3, badge: "Popular", slug: "torku" },
  { id: 4, name: "Inari", category: "houses", area: 220, bedrooms: 5, bathrooms: 3, price: 320000, image: project4, badge: "Popular", slug: "inari" },
  { id: 5, name: "Levi", category: "houses", area: 110, bedrooms: 3, bathrooms: 2, price: 145000, image: project5, slug: "levi" },
  { id: 6, name: "Saariselkä", category: "cabins", area: 45, bedrooms: 1, bathrooms: 1, price: 62000, image: project6, badge: "New", slug: "saariselka" },
  { id: 7, name: "Rovaniemi", category: "houses", area: 160, bedrooms: 4, bathrooms: 2, price: 210000, image: project1, slug: "rovaniemi" },
  { id: 8, name: "Oulu", category: "reforms", area: 95, bedrooms: 3, bathrooms: 1, price: 125000, image: project2, slug: "oulu" },
  { id: 9, name: "Kuusamo", category: "cabins", area: 80, bedrooms: 2, bathrooms: 1, price: 95000, image: project3, slug: "kuusamo" },
  { id: 10, name: "Tampere", category: "materials", area: 0, bedrooms: 0, bathrooms: 0, price: 35000, image: project4, slug: "tampere" },
  { id: 11, name: "Helsinki", category: "reforms", area: 120, bedrooms: 3, bathrooms: 2, price: 175000, image: project5, slug: "helsinki" },
];
