// The "Whitelabel" Configuration Engine
// Toggle features, manage text (EN/HI), and update images here.

export const config = {
  // Global Settings
  goshalaName: "Divya Goshala",
  contactEmail: "help@divyagoshala.org",
  contactPhone: "+91 98765 43210",

  // Feature Toggles
  features: {
    showLanguageToggle: true,
    showGalleryTeaser: true,
    showImpactCards: true,
    showStories: true,
    showNewsletter: false, // Hidden by default
  },

  // Content (English & Hindi)
  content: {
    en: {
      nav: {
        home: "Home",
        about: "About",
        gallery: "Gallery",
        donate: "Donate",
        contact: "Contact",
      },
      hero: {
        title: "Protect & Serve Mother Cow",
        subtitle: "Your small contribution can save a life today.",
        cta: "Donate Now",
      },
      mission: {
        title: "Our Sacred Mission",
        description: "We are dedicated to providing shelter, food, and medical care to stray, abandoned, and sick cows. In our sanctuary, every life is revered.",
      },
      impact: {
        title: "Your Impact",
        subtitle: "See what your donation can achieve.",
        feed: "Feeds a cow for a day",
        shelter: "Contributes to a new shed",
        medical: "Provides critical medicine",
      },
      footer: {
        copyright: "© 2024 Divya Goshala. All rights reserved.",
        quote: "The cow is the mother of all creatures.",
      }
    },
    hi: {
      nav: {
        home: "मुख्य पृष्ठ",
        about: "हमारे बारे में",
        gallery: "तस्वीरें",
        donate: "दान करें",
        contact: "संपर्क",
      },
      hero: {
        title: "गौ माता की सेवा और रक्षा",
        subtitle: "आपका छोटा सा योगदान आज एक जीवन बचा सकता है।",
        cta: "अभी दान करें",
      },
      mission: {
        title: "हमारा पवित्र उद्देश्य",
        description: "हम बेसहारा और बीमार गायों को आश्रय, भोजन और चिकित्सा प्रदान करने के लिए समर्पित हैं। हमारे आश्रम में, हर जीवन पूजनीय है।",
      },
      impact: {
        title: "आपका प्रभाव",
        subtitle: "देखें कि आपका दान क्या कर सकता है।",
        feed: "एक दिन के लिए गाय का भोजन",
        shelter: "नई गौशाला के लिए योगदान",
        medical: "महत्वपूर्ण दवाएं प्रदान करता है",
      },
      footer: {
        copyright: "© 2024 दिव्य गौशाला। सर्वाधिकार सुरक्षित।",
        quote: "गायो विश्वस्य मातरः।",
      }
    }
  }
};
