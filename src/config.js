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
    showNewsletter: true,
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
        learnMore: "Learn More",
      },
      mission: {
        title: "Our Sacred Mission",
        description: "We are dedicated to providing shelter, food, and medical care to stray, abandoned, and sick cows. In our sanctuary, every life is revered.",
        quote: "Service to the cow is service to the universe.",
        readMore: "Read our full story →"
      },
      impact: {
        title: "Your Impact",
        subtitle: "See what your donation can achieve.",
        feed: "Feeds a cow for a day",
        shelter: "Contributes to a new shed",
        medical: "Provides critical medicine",
      },
      homeExtras: {
         howItWorksTitle: "How It Works",
         howItWorksSubtitle: "Transparent and simple process",
         step1Title: "Choose Amount",
         step1Desc: "Select a cause close to your heart.",
         step2Title: "Make Payment",
         step2Desc: "Secure UPI or Bank Transfer.",
         step3Title: "We Serve",
         step3Desc: "100% reaches the cows immediately.",
         testimonialsTitle: "Voices of Devotion",
         testimonial1: "Visiting this Goshala changed my perspective on life. The peace here is divine.",
         testimonial1Author: "- Rajesh Kumar, Donor",
         testimonial2: "Transparency is what I love about them. I know my donation actually feeds a cow.",
         testimonial2Author: "- Anjali Singh, Volunteer"
      },
      footer: {
        copyright: "© 2024 Divya Goshala. All rights reserved.",
        quote: "The cow is the mother of all creatures.",
        quickLinks: "Quick Links",
        newsletterTitle: "Stay Connected",
        newsletterDesc: "Get updates on our cows and events.",
        subscribe: "Subscribe",
      },
      stats: {
        saved: "Cows Saved",
        care: "Medical Care",
        meals: "Meals Served",
        volunteer: "Volunteer Run"
      },
      // Inner Pages
      aboutPage: {
        title: "Our Journey",
        subtitle: "From a humble shed to a sanctuary of hope.",
        timeline: [
          { year: "2015", title: "The Beginning", description: "Started with just 2 injured cows in a small shed." },
          { year: "2018", title: "Expanding Love", description: "Moved to a larger facility, housing 50+ cattle." },
          { year: "2020", title: "Medical Unit", description: "Established a 24/7 veterinary clinic on-site." },
          { year: "2024", title: "Today", description: "Home to 150+ cows, bulls, and calves." },
        ]
      },
      galleryPage: {
        title: "Life at Goshala",
        all: "All",
        calves: "Calves",
        rescued: "Rescued",
        feeding: "Feeding",
      },
      donatePage: {
        title: "Make a Difference",
        subtitle: "Your contribution directly saves lives.",
        chooseImpact: "Choose Your Impact",
        customAmount: "Custom Amount (₹)",
        upiTitle: "Scan to Donate via UPI",
        upiSubtitle: "Supports GPay, PhonePe, Paytm",
        bankTitle: "Bank Transfer Details",
        accName: "Account Name",
        accNo: "Account No",
        ifsc: "IFSC Code",
        impacts: [
           { value: 100, label: "Feed a cow for a meal" },
           { value: 500, label: "Feed a cow for a day" },
           { value: 2500, label: "Feed a cow for a week" },
           { value: 5000, label: "Medical Kit for one cow" },
        ]
      },
      contactPage: {
        title: "Get in Touch",
        subtitle: "We'd love to hear from you. Visit us or send a message.",
        infoTitle: "Contact Information",
        addressLabel: "Address",
        phoneLabel: "Phone",
        emailLabel: "Email",
        firstName: "First Name",
        lastName: "Last Name",
        message: "Message",
        send: "Send Message"
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
        learnMore: "और जानें",
      },
      mission: {
        title: "हमारा पवित्र उद्देश्य",
        description: "हम बेसहारा और बीमार गायों को आश्रय, भोजन और चिकित्सा प्रदान करने के लिए समर्पित हैं। हमारे आश्रम में, हर जीवन पूजनीय है।",
        quote: "गौ सेवा ही विश्व सेवा है।",
        readMore: "हमारी पूरी कहानी पढ़ें →"
      },
      impact: {
        title: "आपका प्रभाव",
        subtitle: "देखें कि आपका दान क्या कर सकता है।",
        feed: "एक दिन के लिए गाय का भोजन",
        shelter: "नई गौशाला के लिए योगदान",
        medical: "महत्वपूर्ण दवाएं प्रदान करता है",
      },
      homeExtras: {
         howItWorksTitle: "यह कैसे काम करता है",
         howItWorksSubtitle: "पारदर्शी और सरल प्रक्रिया",
         step1Title: "राशि चुनें",
         step1Desc: "अपने दिल के करीब एक उद्देश्य चुनें।",
         step2Title: "भुगतान करें",
         step2Desc: "सुरक्षित UPI या बैंक हस्तांतरण।",
         step3Title: "हम सेवा करते हैं",
         step3Desc: "100% तुरंत गायों तक पहुंचता है।",
         testimonialsTitle: "भक्तों की आवाज",
         testimonial1: "इस गौशाला में आने से मेरा जीवन के प्रति नजरिया बदल गया। यहाँ की शांति दिव्य है।",
         testimonial1Author: "- राजेश कुमार, दानकर्ता",
         testimonial2: "पारदर्शिता ही मुझे इनके बारे में पसंद है। मुझे पता है कि मेरा दान वास्तव में गाय को खिलाता है।",
         testimonial2Author: "- अंजलि सिंह, स्वयंसेवक"
      },
      footer: {
        copyright: "© 2024 दिव्य गौशाला। सर्वाधिकार सुरक्षित।",
        quote: "गायो विश्वस्य मातरः।",
        quickLinks: "त्वरित लिंक",
        newsletterTitle: "जुड़े रहें",
        newsletterDesc: "हमारी गायों और आयोजनों पर अपडेट प्राप्त करें।",
        subscribe: "सदस्य बनें",
      },
      stats: {
        saved: "गायों की रक्षा की",
        care: "चिकित्सा देखभाल",
        meals: "भोजन परोसा गया",
        volunteer: "स्वयंसेवक संचालित"
      },
      // Inner Pages
      aboutPage: {
        title: "हमारी यात्रा",
        subtitle: "एक विनम्र शेड से आशा के अभयारण्य तक।",
        timeline: [
          { year: "2015", title: "शुरुआत", description: "एक छोटे से शेड में सिर्फ 2 घायल गायों के साथ शुरुआत की।" },
          { year: "2018", title: "विस्तार", description: "एक बड़ी सुविधा में चले गए, जिसमें 50+ मवेशी रहते हैं।" },
          { year: "2020", title: "चिकित्सा इकाई", description: "साइट पर 24/7 पशु चिकित्सालय की स्थापना की।" },
          { year: "2024", title: "आज", description: "150+ गायों, बैलों और बछड़ों का घर।" },
        ]
      },
      galleryPage: {
        title: "गौशाला में जीवन",
        all: "सभी",
        calves: "बछड़े",
        rescued: "बचाया गया",
        feeding: "भोजन",
      },
      donatePage: {
        title: "परिवर्तन लाएं",
        subtitle: "आपका योगदान सीधे जीवन बचाता है।",
        chooseImpact: "अपना प्रभाव चुनें",
        customAmount: "कस्टम राशि (₹)",
        upiTitle: "UPI के माध्यम से दान करें",
        upiSubtitle: "GPay, PhonePe, Paytm का समर्थन करता है",
        bankTitle: "बैंक हस्तांतरण विवरण",
        accName: "खाता नाम",
        accNo: "खाता संख्या",
        ifsc: "IFSC कोड",
        impacts: [
           { value: 100, label: "एक गाय को भोजन कराएं" },
           { value: 500, label: "एक गाय को दिन भर भोजन कराएं" },
           { value: 2500, label: "एक गाय को सप्ताह भर भोजन कराएं" },
           { value: 5000, label: "एक गाय के लिए चिकित्सा किट" },
        ]
      },
      contactPage: {
        title: "संपर्क करें",
        subtitle: "हम आपसे सुनना पसंद करेंगे। हमसे मिलें या संदेश भेजें।",
        infoTitle: "संपर्क जानकारी",
        addressLabel: "पता",
        phoneLabel: "फ़ोन",
        emailLabel: "ईमेल",
        firstName: "पहला नाम",
        lastName: "अंतिम नाम",
        message: "संदेश",
        send: "संदेश भेजें"
      }
    }
  }
};
