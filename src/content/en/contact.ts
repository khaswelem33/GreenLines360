import type { ContactPageContent } from "../types";

const contact: ContactPageContent = {
  meta: {
    title: "Contact Us | Green Lines for Investment",
    description:
      "Contact Green Lines for Investment by phone, email, or Google Maps, and reach us for partnerships, inquiries, and business opportunities.",
  },
  placeholderHints: {
    recommended: "Recommended",
    replaceWith: "Replace later with",
  },
  hero: {
    eyebrow: "Contact Us",
    title: "Let's Start a Conversation that Creates Value",
    subtitle:
      "At Green Lines for Investment, we welcome your inquiries, partnerships, business opportunities, and corporate communications. We are here to stay close through clear and accessible contact channels.",
    callCta: "Call Now",
    mapsCta: "Open in Google Maps",
  },
  quickCards: {
    phone: {
      title: "Call Us",
      description:
        "Our team is ready to answer your inquiries and discuss cooperation opportunities.",
      cta: "Call directly",
    },
    email: {
      title: "Email Us",
      description:
        "For general inquiries, corporate communication, and official correspondence.",
      cta: "Send an email",
    },
    location: {
      title: "Our Location",
      description: "You can reach us directly via Google Maps.",
      cta: "View location",
    },
    business: {
      title: "Business Inquiries",
      description:
        "For partnerships, business opportunities, and professional communication.",
      cta: "Start a conversation",
    },
  },
  details: {
    heading: "Contact Details",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Location",
    locationNote: "Location available via Google Maps",
    mapsCta: "Open in Google Maps",
    mapTitle: "Green Lines for Investment location map",
  },
  form: {
    title: "Send Us a Message",
    fullName: "Full Name",
    companyName: "Company Name",
    email: "Email Address",
    phone: "Phone Number",
    subject: "Subject",
    message: "Message",
    submit: "Send Message",
    helper: "We will respond as soon as possible.",
    success:
      "Thank you! Form submission will be enabled in an upcoming phase — for now, please reach us directly by email.",
    error: "Please complete the required fields correctly.",
  },
  why: {
    title: "Why Connect With Us",
    cards: [
      {
        title: "Clear & Direct Communication",
        body: "Straightforward channels and clear answers, without complexity.",
      },
      {
        title: "Openness to Strategic Partnerships",
        body: "We welcome quality partnerships that create shared value.",
      },
      {
        title: "Professional Engagement",
        body: "Corporate communication built on respect and professionalism.",
      },
      {
        title: "Business-Oriented Responsiveness",
        body: "Responses designed to support decisions and business progress.",
      },
    ],
  },
  finalCta: {
    text: "We are ready to listen, collaborate, and build sustainable value with you.",
    callCta: "Call Now",
    emailCta: "Email Us",
  },
};

export default contact;
