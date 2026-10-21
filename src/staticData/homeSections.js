import {
  CalendarDays,
  CalendarHeart,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export const heroSectionData = {
  eyebrow: "PERSONAL CARE, CLOSE TO HOME",
  eyebrowIcon: Sparkles,
  heading: "Your doctor. Your story.",
  headingAccent: "Care that feels personal.",
  description:
    "I take the time to listen, answer your questions, and make a care plan together so you always feel heard and understood.",
  primaryAction: { label: "Book your visit", href: "#schedule" },
  secondaryAction: { label: "Get to know me", href: "#about" },
  proof: {
    avatars: ["J", "M", "A"],
    headline: "One-to-one care, every visit",
    detail: "A personal approach to your health",
  },
  image: {
    src: "/assets/doctor.jpg",
    alt: "Doctor smiling in her white coat",
    label: "Doctor ready to help",
  },
  availability: {
    icon: CalendarDays,
    headline: "Time to talk about your health",
    detail: "Care shaped around your needs",
  },
  care: {
    icon: ShieldCheck,
    headline: "Care that feels like yours",
    detail: "Personal, thoughtful, and focused on you.",
  },
  caption: {
    line: "Good care",
    emphasis: "starts with a conversation",
  },
};

export const servicesSectionData = {
  eyebrow: "THE WAY I CARE FOR YOU",
  title: "A more personal kind of care",
  description: "Thoughtful, one-to-one care that begins with listening to you.",
  note: "Your health deserves a personal touch.",
  items: [
    {
      icon: Stethoscope,
      title: "Care that starts with listening",
      description: "Your questions and concerns always have room.",
    },
    {
      icon: CalendarDays,
      title: "Appointments made simple",
      description: "A straightforward way to plan your visit.",
    },
    {
      icon: HeartPulse,
      title: "A familiar face, every visit",
      description: "Personal care built around you.",
    },
    {
      icon: ShieldCheck,
      title: "Personalized care plans",
      description: "Thoughtful care shaped around your individual needs.",
    },
    {
      icon: CalendarHeart,
      title: "Preventive health checkups",
      description: "Make time for regular checkups and health advice.",
    },
    {
      icon: Sparkles,
      title: "Support at every step",
      description: "Clear guidance to help you feel confident about your care.",
    },
  ],
};

export const counterSectionData = {
  label: "Clinic experience and care",
  items: [
    { value: "500+", label: "Patients cared for" },
    { value: "1,500+", label: "Appointments" },
    { value: "200+", label: "Personal care plans" },
    { value: "15+", label: "Years of experience" },
  ],
};

export const newsSectionData = {
  eyebrow: "NOTES FROM MY CLINIC",
  title: "See my latest news & events",
  description:
    "Helpful updates, a little insight into my approach, and what’s happening at the clinic.",
  items: [
    {
      category: "HEALTH NOTES",
      title: "Small steps toward a healthier heart",
      description:
        "A few everyday habits can be a good place to start caring for your wellbeing.",
      details: [
        "Looking after your heart can start with small, sustainable choices in your everyday routine. Regular movement, balanced meals, quality sleep, and making time to unwind can all support general wellbeing.",
        "Everyone’s health needs are different. If you have questions about changes that may be right for you, bring them to your next appointment so we can talk them through together.",
      ],
      icon: HeartPulse,
      image: "/assets/clinic-news.jpg",
      imageAlt: "Stethoscope beside a laptop in a clinic",
    },
    {
      category: "FROM MY CLINIC",
      title: "What to expect at your first visit",
      description:
        "A little about how I make time for your questions and get to know your needs.",
      details: [
        "Your first visit is a chance for me to understand what has brought you in and what matters most to you. We’ll talk through your health concerns and leave time for your questions.",
        "Together, we can discuss suitable next steps and make a plan that takes your individual needs into account. You’re welcome to bring a list of questions or any information you think may be helpful.",
      ],
      icon: Stethoscope,
      artwork: "news-art-visit",
    },
    {
      category: "EVENTS & UPDATES",
      title: "Clinic news and upcoming events",
      description:
        "I’ll share future event dates and clinic updates here. Get in touch to ask what’s coming up.",
      details: [
        "This is where I’ll share news from the clinic, health-focused events, and updates for patients.",
        "Event dates will be posted here when they’re confirmed. If you’d like to ask about upcoming events or clinic updates, please get in touch.",
      ],
      icon: CalendarHeart,
      artwork: "news-art-events",
      action: { label: "Ask about events", href: "#contact" },
    },
    {
      category: "HEALTH NOTES",
      title: "Understanding your blood pressure",
      description:
        "A little context can make it easier to talk about your readings at your next visit.",
      details: [
        "Blood pressure readings can vary, and a single result may not tell the whole story. Your clinician can help explain what your readings mean in the context of your health and medical history.",
        "If you have questions about a reading or how it was measured, write them down and bring them to your next appointment so we can discuss them together.",
      ],
      icon: HeartPulse,
      artwork: "news-art-heart",
    },
  ],
};

export const footerSectionData = {
  tagline: "Personal care, close to home.",
  address: "A welcoming space for thoughtful, one-to-one care.",
  supportTitle: "Patient support",
  supportLinks: [
    { label: "Book an appointment", href: "#schedule" },
    { label: "Services & care", href: "#services" },
    { label: "Health notes", href: "#news" },
    { label: "Get in touch", href: "#contact" },
  ],
  navigationTitle: "Explore",
  contactTitle: "Contact",
  copyright: "Rogeeta Clinic. All rights reserved.",
};

export const aboutSectionData = {
  eyebrow: "A PERSONAL APPROACH",
  title: "Care starts with getting to know you",
  description:
    "I believe good healthcare begins with a conversation. I’ll listen to what’s concerning you, explain your options clearly, and work with you on care that feels right for your needs.",
  values: [
    {
      icon: HeartPulse,
      title: "You come first",
      description: "Your health, questions, and comfort guide every visit.",
    },
    {
      icon: Stethoscope,
      title: "Care that listens",
      description:
        "We make time to understand the whole picture, not just symptoms.",
    },
    {
      icon: ShieldCheck,
      title: "A plan made together",
      description:
        "Clear explanations help you feel confident about next steps.",
    },
  ],
};

export const appointmentSectionData = {
  eyebrow: "LET’S PLAN YOUR VISIT",
  title: "Request an appointment",
  description:
    "Share a few details and I’ll be in touch to help find a time that works for you.",
  formLabels: {
    name: "Your name",
    age: "Your age",
    gender: "Gender",
    email: "Email address",
    submit: "Continue to WhatsApp",
  },
  genderOptions: ["Female", "Male", "Non-binary", "Prefer not to say"],
  whatsappNumber: "+20-10-6928-8988",
  privacyNotice:
    "Your details will be added to a WhatsApp message addressed to the clinic. Nothing is sent until you review and press Send in WhatsApp.",
  availabilityNote: "I’ll reply to confirm availability and next steps.",
};

export const contactSectionData = {
  eyebrow: "HERE WHEN YOU NEED ME",
  title: "Let’s talk about your care",
  description:
    "Have a question before booking? Get in touch and I’ll be happy to help.",
  phone: "+20-10-6928-8988",
  email: "doctor@doctor.com",
  whatsappNumber: "+20-10-6928-8988",
  whatsappLabel: "Message me on WhatsApp",
};
