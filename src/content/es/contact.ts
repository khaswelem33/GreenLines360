import type { ContactPageContent } from "../types";

const contact: ContactPageContent = {
  meta: {
    title: "Contacto | Green Lines for Investment",
    description:
      "Contacte con Green Lines for Investment por teléfono, correo electrónico o Google Maps para alianzas, consultas y oportunidades de negocio.",
  },
  placeholderHints: {
    recommended: "Recomendado",
    replaceWith: "Reemplazar por",
  },
  hero: {
    eyebrow: "Contacto",
    title: "Iniciemos una conversación que cree valor",
    subtitle:
      "En Green Lines for Investment damos la bienvenida a sus consultas, alianzas, oportunidades de negocio y comunicaciones corporativas. Estamos cerca de usted con canales de contacto claros y accesibles.",
    callCta: "Llamar ahora",
    mapsCta: "Abrir en Google Maps",
  },
  quickCards: {
    phone: {
      title: "Llámenos",
      description:
        "Nuestro equipo está listo para responder a sus consultas y hablar de oportunidades de cooperación.",
      cta: "Llamada directa",
    },
    email: {
      title: "Escríbanos",
      description:
        "Para consultas generales, comunicación corporativa y correspondencia oficial.",
      cta: "Enviar un correo",
    },
    location: {
      title: "Nuestra ubicación",
      description: "Puede encontrarnos directamente a través de Google Maps.",
      cta: "Ver ubicación",
    },
    business: {
      title: "Consultas de negocio",
      description:
        "Para alianzas, oportunidades de negocio y contacto profesional.",
      cta: "Iniciar el contacto",
    },
  },
  details: {
    heading: "Datos de contacto",
    phoneLabel: "Teléfono",
    emailLabel: "Correo electrónico",
    locationLabel: "Ubicación",
    locationNote: "Ubicación disponible en Google Maps",
    mapsCta: "Abrir en Google Maps",
    mapTitle: "Mapa de ubicación de Green Lines for Investment",
  },
  form: {
    title: "Envíenos un mensaje",
    fullName: "Nombre completo",
    companyName: "Nombre de la empresa",
    email: "Correo electrónico",
    phone: "Número de teléfono",
    subject: "Asunto",
    message: "Mensaje",
    submit: "Enviar el mensaje",
    helper: "Le responderemos lo antes posible.",
    success:
      "¡Gracias! El envío del formulario se activará en una fase posterior — mientras tanto, escríbanos directamente por correo electrónico.",
    error: "Por favor, complete correctamente los campos obligatorios.",
  },
  why: {
    title: "Por qué contactarnos",
    cards: [
      {
        title: "Comunicación clara y directa",
        body: "Canales directos y respuestas claras, sin complejidad.",
      },
      {
        title: "Apertura a alianzas estratégicas",
        body: "Damos la bienvenida a alianzas de calidad que crean valor compartido.",
      },
      {
        title: "Trato profesional",
        body: "Comunicación corporativa basada en el respeto y la profesionalidad.",
      },
      {
        title: "Capacidad de respuesta orientada al negocio",
        body: "Respuestas pensadas para apoyar decisiones y el avance del negocio.",
      },
    ],
  },
  finalCta: {
    text: "Estamos listos para escuchar, colaborar y construir valor sostenible con usted.",
    callCta: "Llamar ahora",
    emailCta: "Escríbanos por correo",
  },
};

export default contact;
