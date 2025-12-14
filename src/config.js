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

  // Mock Data for "Adopt a Cow"
  adoptableCows: [
    { id: 101, category: "Cow", name: "Gauri", breed: "Gir", age: "5 Years", img: "https://images.unsplash.com/photo-1545634024-34537759a29e?q=80&w=2940&auto=format&fit=crop", desc: "Gentle soul, loves fresh grass." },
    { id: 102, category: "Cow", name: "Nandi", breed: "Sahiwal", age: "3 Years", img: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2940&auto=format&fit=crop", desc: "Rescued from street, very playful." },
    { id: 103, category: "Cow", name: "Shyama", breed: "Rathi", age: "7 Years", img: "https://images.unsplash.com/photo-1605001011156-cbf0b0f6f05c?q=80&w=2940&auto=format&fit=crop", desc: "Mother of two, needs medical care." },
    { id: 104, category: "Bull", name: "Bhole", breed: "Tharparkar", age: "4 Years", img: "https://images.unsplash.com/photo-1523480717984-24cba3ebae92?q=80&w=2940&auto=format&fit=crop", desc: "Strong bull, protector of the herd." },
  ],

  // Mock Data for Accreditations
  accreditations: [
    { id: 1, name: "Animal Welfare Board", icon: "Shield" },
    { id: 2, name: "80G Tax Exemption", icon: "FileCheck" },
    { id: 3, name: "CSR Certified", icon: "Award" },
    { id: 4, name: "ISO 9001:2015", icon: "BadgeCheck" },
  ],

  // Mock Blog Posts
  blogPosts: [
    { id: 1, title: "Winter Drive Success", date: "Dec 10, 2024", excerpt: "Thanks to your donations, we distributed 500 blankets." },
    { id: 2, title: "New Shed Opening", date: "Nov 24, 2024", excerpt: "Inaugurated a new shelter for 50 more cows." },
    { id: 3, title: "Govardhan Puja", date: "Nov 15, 2024", excerpt: "Celebrations at the Goshala with 1000+ devotees." },
  ],

  // Mock Quick Actions
  quickActions: [
    { id: 1, titleKey: "freeMilk", icon: "Droplet" },
    { id: 2, titleKey: "feeding", icon: "Wheat" },
    { id: 3, titleKey: "rescue", icon: "HeartPulse" },
    { id: 4, titleKey: "foodDist", icon: "Utensils" }
  ],

  // Mock Astrology Services
  astrologyServices: [
    { id: 1, title: "Kundali", icon: "Star" },
    { id: 2, title: "Match Making", icon: "Heart" },
    { id: 3, title: "Horoscope", icon: "Sun" },
    { id: 4, title: "Panchang", icon: "Calendar" },
    { id: 5, title: "Numerology", icon: "Hash" },
    { id: 6, title: "Vedic Talk", icon: "User" },
  ],

  // Content (English & Hindi)
  content: {
    en: {
      nav: {
        home: "Home",
        about: "About",
        gallery: "Gallery",
        donate: "Donate",
        adopt: "Adopt",
        contact: "Contact",
        login: "Login",
      },
      hero: {
        title: "Protect & Serve Mother Cow",
        subtitle: "Your small contribution can save a life today.",
        cta: "Donate Now",
        learnMore: "Learn More",
      },
      quickActions: {
        freeMilk: "Free Milk Distribution",
        feeding: "Stray Feeding",
        rescue: "Rescue & Care",
        foodDist: "Food Distribution"
      },
      mission: {
        title: "Know Us",
        description: "We are dedicated to providing shelter, food, and medical care to stray, abandoned, and sick cows. In our sanctuary, every life is revered.",
        quote: "Service to the cow is service to the universe.",
        readMore: "Read More"
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
         testimonialsTitle: "Testimonials",
         testimonial1: "Visiting this Goshala changed my perspective on life. The peace here is divine.",
         testimonial1Author: "- Rajesh Kumar, Donor",
         testimonial2: "Transparency is what I love about them. I know my donation actually feeds a cow.",
         testimonial2Author: "- Anjali Singh, Volunteer",
         accreditationsTitle: "Accreditations & Recognitions",
         latestUpdatesTitle: "Latest News & Updates",
         readMoreBtn: "Read More",
         achievementsTitle: "Our Achievements",
         achievementsDesc: "Our dedication to cow welfare has been recognized by various governmental and non-governmental bodies.",
         astrologyTitle: "Free Astrology",
         astrologySubtitle: "Navigate life's cosmic journey with guidance.",
         adoptPreviewTitle: "Adopt a Gauvansh"
      },
      initiatives: {
        title: "What We Do",
        subtitle: "Holistic care for the environment and Gauvansh.",
        items: [
          { title: "Protection", desc: "Sheltering 21,000+ stray cows." },
          { title: "Shelter", desc: "Building large sheds for comfort." },
          { title: "Medical Facility", desc: "24/7 Veterinary care." },
          { title: "Free Milk", desc: "Distributed to saints and needy." },
          { title: "Protection Drive", desc: "Rescuing abandoned cattle." },
          { title: "Organic Farming", desc: "Promoting chemical-free food." },
          { title: "Calamity Relief", desc: "Helping during floods/disasters." },
          { title: "Yagya & Puja", desc: "Spiritual activities for peace." },
          { title: "Hospital", desc: "Medical care for the poor." },
          { title: "Yoga Center", desc: "Holistic health & meditation." },
          { title: "Bio-Gas", desc: "Clean energy from cow dung." },
          { title: "Bio Fertilizer", desc: "Organic manure production." }
        ]
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
        saved: "Gauvansh Sheltered",
        care: "Gauvansh Medicated",
        meals: "Gauvansh Rescued",
        volunteer: "Food Distributed"
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
        title: "Book Your Sewa",
        subtitle: "Choose a cause to support.",
        chooseImpact: "Seva Options",
        customAmount: "Custom Amount (₹)",
        upiTitle: "Scan to Donate via UPI",
        upiSubtitle: "Supports GPay, PhonePe, Paytm",
        bankTitle: "Bank Transfer Details",
        accName: "Account Name",
        accNo: "Account No",
        ifsc: "IFSC Code",
        addBtn: "Add Items to Donate",
        impacts: [
           { value: 100, label: "Green Fodder (Gau Grass)", desc: "Feed a cow fresh green grass." },
           { value: 500, label: "Full Day Meal", desc: "Complete nutrition for one cow for a day." },
           { value: 2500, label: "Medical Emergency", desc: "Contribute to the surgery/care of an injured cow." },
           { value: 11000, label: "Adopt a Cow (Yearly)", desc: "Support all needs of one cow for a year." },
           { value: 5100, label: "Sadhu Seva", desc: "Provide milk and food to saints in need." },
           { value: 2100, label: "General Donation", desc: "Use where needed most." },
           { value: 1100, label: "Celebrate Birthday", desc: "Special puja on your birthday." },
           { value: 1100, label: "Shradh Service", desc: "Feed cows in memory of ancestors." },
           { value: 500, label: "Food for Poor", desc: "Distribute food packets to the needy." },
        ]
      },
      adoptPage: {
        title: "Adopt a Gauvansh",
        subtitle: "Select a soul to support and build a lifelong bond.",
        adoptBtn: "Adopt Now",
        category: "Category",
        breed: "Breed",
        age: "Age",
        dob: "DOB"
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
        donate: "सेवा बुक करें",
        adopt: "गोद लें",
        contact: "संपर्क",
        login: "लॉग इन",
      },
      hero: {
        title: "गौ माता की सेवा और रक्षा",
        subtitle: "आपका छोटा सा योगदान आज एक जीवन बचा सकता है।",
        cta: "अभी दान करें",
        learnMore: "और जानें",
      },
      quickActions: {
        freeMilk: "निःशुल्क दुग्ध वितरण",
        feeding: "आवारा गौवंश खिलाना",
        rescue: "बचाव और देखभाल",
        foodDist: "भोजन वितरण"
      },
      mission: {
        title: "हमें जानें",
        description: "हम बेसहारा और बीमार गायों को आश्रय, भोजन और चिकित्सा प्रदान करने के लिए समर्पित हैं। हमारे आश्रम में, हर जीवन पूजनीय है।",
        quote: "गौ सेवा ही विश्व सेवा है।",
        readMore: "और पढ़ें"
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
         testimonialsTitle: "प्रशंसापत्र",
         testimonial1: "इस गौशाला में आने से मेरा जीवन के प्रति नजरिया बदल गया। यहाँ की शांति दिव्य है।",
         testimonial1Author: "- राजेश कुमार, दानकर्ता",
         testimonial2: "पारदर्शिता ही मुझे इनके बारे में पसंद है। मुझे पता है कि मेरा दान वास्तव में गाय को खिलाता है।",
         testimonial2Author: "- अंजलि सिंह, स्वयंसेवक",
         accreditationsTitle: "मान्यताएं और पुरस्कार",
         latestUpdatesTitle: "नवीनतम समाचार",
         readMoreBtn: "और पढ़ें",
         achievementsTitle: "हमारी उपलब्धियां",
         achievementsDesc: "गौ कल्याण के प्रति हमारे समर्पण को विभिन्न सरकारी और गैर-सरकारी निकायों द्वारा मान्यता दी गई है।",
         astrologyTitle: "निःशुल्क ज्योतिष",
         astrologySubtitle: "मार्गदर्शन के साथ जीवन की ब्रह्मांडीय यात्रा को नेविगेट करें।",
         adoptPreviewTitle: "एक गौवंश गोद लें"
      },
      initiatives: {
        title: "हम क्या करते हैं",
        subtitle: "पर्यावरण और गौवंश के लिए समग्र देखभाल।",
        items: [
          { title: "संरक्षण", desc: "21,000+ आवारा गायों को आश्रय।" },
          { title: "आश्रय", desc: "आराम के लिए बड़े शेड बनाना।" },
          { title: "चिकित्सा सुविधा", desc: "24/7 पशु चिकित्सा देखभाल।" },
          { title: "निःशुल्क दूध", desc: "संतों और जरूरतमंदों को वितरित।" },
          { title: "संरक्षण अभियान", desc: "परित्यक्त मवेशियों को बचाना।" },
          { title: "जैविक खेती", desc: "रसायन मुक्त भोजन को बढ़ावा देना।" },
          { title: "आपदा राहत", desc: "बाढ़/आपदाओं के दौरान मदद करना।" },
          { title: "यज्ञ और पूजा", desc: "शांति के लिए आध्यात्मिक गतिविधियाँ।" },
          { title: "अस्पताल", desc: "गरीबों के लिए चिकित्सा देखभाल।" },
          { title: "योग केंद्र", desc: "समग्र स्वास्थ्य और ध्यान।" },
          { title: "बायो-गैस", desc: "गाय के गोबर से स्वच्छ ऊर्जा।" },
          { title: "बायो फर्टिलाइजर", desc: "जैविक खाद उत्पादन।" }
        ]
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
        saved: "गौवंश आश्रय",
        care: "गौवंश औषधीय",
        meals: "गौवंश बचाया",
        volunteer: "भोजन वितरित"
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
        title: "अपनी सेवा बुक करें",
        subtitle: "समर्थन के लिए एक कारण चुनें।",
        chooseImpact: "सेवा विकल्प",
        customAmount: "कस्टम राशि (₹)",
        upiTitle: "UPI के माध्यम से दान करें",
        upiSubtitle: "GPay, PhonePe, Paytm का समर्थन करता है",
        bankTitle: "बैंक हस्तांतरण विवरण",
        accName: "खाता नाम",
        accNo: "खाता संख्या",
        ifsc: "IFSC कोड",
        addBtn: "दान करने के लिए आइटम जोड़ें",
        impacts: [
           { value: 100, label: "हरी घास (गौ ग्रास)", desc: "गाय को ताजी हरी घास खिलाएं।" },
           { value: 500, label: "पूरे दिन का भोजन", desc: "एक गाय के लिए एक दिन का पूरा पोषण।" },
           { value: 2500, label: "चिकित्सा आपातकाल", desc: "घायल गाय की सर्जरी/देखभाल में योगदान करें।" },
           { value: 11000, label: "गाय गोद लें (वार्षिक)", desc: "एक वर्ष के लिए एक गाय की सभी जरूरतों का समर्थन करें।" },
           { value: 5100, label: "साधु सेवा", desc: "जरूरतमंद संतों को दूध और भोजन उपलब्ध कराएं।" },
           { value: 2100, label: "सामान्य दान", desc: "जहां सबसे ज्यादा जरूरत हो वहां उपयोग करें।" },
           { value: 1100, label: "जन्मदिन मनाएं", desc: "अपने जन्मदिन पर विशेष पूजा।" },
           { value: 1100, label: "श्राद्ध सेवा", desc: "पूर्वजों की याद में गायों को खिलाएं।" },
           { value: 500, label: "गरीबों के लिए भोजन", desc: "जरूरतमंदों को भोजन के पैकेट वितरित करें।" },
        ]
      },
      adoptPage: {
        title: "एक गौवंश गोद लें",
        subtitle: "समर्थन करने के लिए एक आत्मा चुनें और जीवन भर का बंधन बनाएं।",
        adoptBtn: "अभी गोद लें",
        category: "श्रेणी",
        breed: "नस्ल",
        age: "उम्र",
        dob: "जन्मतिथि"
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
