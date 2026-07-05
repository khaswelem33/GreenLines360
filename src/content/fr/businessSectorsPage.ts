import type { AnchorPageContent } from "../types";

const businessSectorsPage: AnchorPageContent = {
  meta: {
    title: "Secteurs d'activité",
    description:
      "Six secteurs intégrés le long de la chaîne de valeur agroalimentaire — de la mise en valeur des terres et l'agriculture à la transformation, la chaîne du froid, les solutions industrielles et les services de sites.",
  },
  eyebrow: "Secteurs d'activité",
  title: "Secteurs d'activité",
  intro:
    "Six secteurs intégrés le long de la chaîne de valeur agroalimentaire — de la mise en valeur des terres et l'agriculture à la transformation, la chaîne du froid, les solutions industrielles et les services de sites.",
  sections: [
    {
      id: "agriculture-land-reclamation",
      title: "Agriculture et mise en valeur des terres",
      description:
        "Mise en valeur des terres, cultures de plein champ et sous serre, production végétale et infrastructures d'irrigation.",
    },
    {
      id: "food-manufacturing",
      title: "Transformation alimentaire",
      description:
        "Tri, nettoyage, séchage, conditionnement, emballage et transformation agroalimentaire.",
    },
    {
      id: "cold-chain-storage",
      title: "Chaîne du froid et stockage",
      description:
        "Réfrigération, congélation, conservation, stockage, manutention et reconditionnement des produits alimentaires.",
    },
    {
      id: "industrial-infrastructure",
      title: "Infrastructures industrielles et ingénierie",
      description:
        "Solutions d'ingénierie et industrielles pour les usines, les lignes de production, la manutention et les infrastructures.",
    },
    {
      id: "environmental-facility-services",
      title: "Services environnementaux et de sites",
      description:
        "Recyclage, nettoyage des sites, lutte antiparasitaire, désinfection et stérilisation.",
    },
  ],
  note: "Les détails complets de chaque secteur sont en préparation pour une phase ultérieure.",
};

export default businessSectorsPage;
