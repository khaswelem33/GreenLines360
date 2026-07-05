import type { AnchorPageContent } from "../types";

const businessSectorsPage: AnchorPageContent = {
  meta: {
    title: "Business Sectors",
    description:
      "Six integrated sectors covering the agri-food value chain — from land reclamation and agriculture to manufacturing, cold chain, industrial solutions, and facility services.",
  },
  eyebrow: "Business Sectors",
  title: "Business Sectors",
  intro:
    "Six integrated sectors covering the agri-food value chain — from land reclamation and agriculture to manufacturing, cold chain, industrial solutions, and facility services.",
  sections: [
    {
      id: "agriculture-land-reclamation",
      title: "Agriculture & Land Reclamation",
      description:
        "Land reclamation, open-field and protected agriculture, crop production, and irrigation infrastructure.",
    },
    {
      id: "food-manufacturing",
      title: "Food Manufacturing",
      description:
        "Sorting, cleaning, drying, packing, packaging, and agri-food processing.",
    },
    {
      id: "cold-chain-storage",
      title: "Cold Chain & Storage",
      description:
        "Chilling, freezing, preservation, storage, handling, and repacking for food products.",
    },
    {
      id: "industrial-infrastructure",
      title: "Industrial Infrastructure & Engineering",
      description:
        "Engineering and industrial solutions supporting factories, production lines, handling, and infrastructure.",
    },
    {
      id: "environmental-facility-services",
      title: "Environmental & Facility Services",
      description:
        "Recycling, facility cleaning, pest control, disinfection, and sterilization services.",
    },
  ],
  note: "Full sector details are being prepared in an upcoming phase.",
};

export default businessSectorsPage;
