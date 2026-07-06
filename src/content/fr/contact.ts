import type { ContactPageContent } from "../types";

const contact: ContactPageContent = {
  meta: {
    title: "Contact | Green Lines for Investment",
    description:
      "Contactez Green Lines for Investment par téléphone, e-mail ou Google Maps pour vos partenariats, demandes et opportunités d'affaires.",
  },
  placeholderHints: {
    recommended: "Recommandé",
    replaceWith: "À remplacer par",
  },
  hero: {
    eyebrow: "Contact",
    title: "Commençons une conversation créatrice de valeur",
    subtitle:
      "Chez Green Lines for Investment, nous accueillons vos demandes, partenariats, opportunités d'affaires et communications institutionnelles. Nous restons proches de vous grâce à des canaux de contact clairs et accessibles.",
    callCta: "Appeler maintenant",
    mapsCta: "Ouvrir dans Google Maps",
  },
  quickCards: {
    phone: {
      title: "Appelez-nous",
      description:
        "Notre équipe est prête à répondre à vos demandes et à discuter des opportunités de coopération.",
      cta: "Appel direct",
    },
    email: {
      title: "Écrivez-nous",
      description:
        "Pour les demandes générales, la communication institutionnelle et la correspondance officielle.",
      cta: "Envoyer un e-mail",
    },
    location: {
      title: "Notre localisation",
      description: "Vous pouvez nous trouver directement via Google Maps.",
      cta: "Voir la localisation",
    },
    business: {
      title: "Demandes professionnelles",
      description:
        "Pour les partenariats, les opportunités d'affaires et les contacts professionnels.",
      cta: "Démarrer l'échange",
    },
  },
  details: {
    heading: "Coordonnées",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    locationLabel: "Localisation",
    locationNote: "Localisation disponible via Google Maps",
    mapsCta: "Ouvrir dans Google Maps",
    mapTitle: "Carte de localisation de Green Lines for Investment",
  },
  form: {
    title: "Envoyez-nous un message",
    fullName: "Nom complet",
    companyName: "Nom de l'entreprise",
    email: "Adresse e-mail",
    phone: "Numéro de téléphone",
    subject: "Objet",
    message: "Message",
    submit: "Envoyer le message",
    helper: "Nous vous répondrons dans les meilleurs délais.",
    success:
      "Merci ! L'envoi du formulaire sera activé lors d'une phase ultérieure — en attendant, contactez-nous directement par e-mail.",
    error: "Veuillez remplir correctement les champs obligatoires.",
  },
  why: {
    title: "Pourquoi nous contacter",
    cards: [
      {
        title: "Communication claire et directe",
        body: "Des canaux directs et des réponses claires, sans complexité.",
      },
      {
        title: "Ouverture aux partenariats stratégiques",
        body: "Nous accueillons des partenariats de qualité créateurs de valeur partagée.",
      },
      {
        title: "Engagement professionnel",
        body: "Une communication institutionnelle fondée sur le respect et le professionnalisme.",
      },
      {
        title: "Réactivité orientée business",
        body: "Des réponses pensées pour soutenir les décisions et l'avancement des affaires.",
      },
    ],
  },
  finalCta: {
    text: "Nous sommes prêts à écouter, collaborer et construire avec vous une valeur durable.",
    callCta: "Appeler maintenant",
    emailCta: "Nous écrire par e-mail",
  },
};

export default contact;
