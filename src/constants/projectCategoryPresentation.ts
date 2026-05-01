import { Home, TreePine, Layers, Hammer, type LucideIcon } from "lucide-react";
import type { Project } from "@/data/projects";

/** F3.1.2: mismo set estético lucide stroke 2 para tarjetas de catálogo y filtros si se reusan. */
export const projectCategoryPresentation: Record<
  Project["category"],
  { Icon: LucideIcon; label: string }
> = {
  houses: { Icon: Home, label: "Casa" },
  cabins: { Icon: TreePine, label: "Cabaña" },
  materials: { Icon: Layers, label: "Material / kit SIP" },
  reforms: { Icon: Hammer, label: "Reforma" },
};
