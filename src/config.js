/**
 * CLIENT CONFIGURATION
 * Duplicate this file for each client, or later replace it with CMS/admin data.
 * No client-specific content should be hardcoded inside components.
 */
export const weddingConfig = {
  meta: {
    templateName: "Noor Cinematic Walima",
    slug: "zeenat-and-mustafa",
    language: "en",
    passwordProtected: false,
  },

couple: {
  brideName: "Zeenat Shaikh",
  brideShortName: "Zeenat",
  brideParents: "Daughter of Zamir Shaikh & Nazima Shaikh",

  groomName: "Mustafa Rationwala",
  groomShortName: "Mustafa",
  groomParents: "Son of Ahmed Rationwala & Mehajabin Rationwala",

  monogram: "Z · M",
},

  copy: {
    tapToOpen: "Tap to open",
    openingKicker: "An invitation filled with joy and barakah",
    heroBismillah: "﷽",
    heroIntroLineOne: "We request the honour of your presence at the Walima reception of",

    heroIntroLineTwo: "",

    heroIntroLineThree: "",

    heroClosingLine: "as they begin their journey of love, faith, and togetherness.",
    invitation:
      "In the name of Allah, the Most Gracious, the Most Merciful. With gratitude to Allah and joy in our hearts, together with our families, we invite you to witness and celebrate the Walima ceremony of Zeenat and Mustafa.",
    welcomeTitle: "With joyful hearts",
    welcomeBody:
      "Zeenat and Mustafa are honoured to welcome you as they begin a new chapter together. Your presence, prayers, and blessings will make this celebration even more meaningful.",
    dateIntro: "A beautiful day awaits",
    datePrompt: "Scratch to reveal",
    dateRevealed: "Our forever begins",
    galleryTitle: "A glimpse of our journey",
    countdownTitle: "Counting down to the Walima",
    timelineTitle: "The celebration",
    venueTitle: "Where we will celebrate",
    dressCodeTitle: "Dress code",
    preWeddingTitle: "The festivities begin",
    giftsTitle: "Your presence is our present",
    giftsBody:
      "Your love, duas, blessings, and presence are the greatest gifts we could ever ask for. We feel truly grateful to celebrate this special day with you.",
    rsvpTitle: "Will you be joining us?",
    rsvpSubtitle: "Kindly respond by December 10, 2026.",
    closingTitle: "We cannot wait to celebrate with you",
    closingBody:
      "May Allah place barakah in this union and fill the journey ahead with love, mercy, and peace.",
    closingCard: {
      date: "FRIDAY, DEC 25, 2026",
      title: "WALIMA RECEPTION",
      text: "Hamvi Hall mein dawat-e-shukrana, InshaAllah aap sab ko hai aana. Mohabbat, barkat, aur khushi ke saath Manayenge hum naya rishta, naya jazbaat.",
    },
  },

  wedding: {
    isoDateTime: "2026-12-25T19:30:00+05:30",
    timezone: "Asia/Kolkata",
    displayDate: "December 25, 2026",
    day: "Friday",
    time: "7:30 PM",
    endIsoDateTime: "2026-12-25T23:30:00+05:30",
    calendarTitle: "Walima of Zeenat & Mustafa",
    calendarDescription:
      "With gratitude to Allah, please join us to witness and celebrate the Walima reception of Zeenat and Mustafa.",
  },

  media: {
    introVideo: "./assets/video/intro-placeholder1.mp4",
    introPoster: "./assets/video/intro-poster.webp",
    backgroundMusic: "./assets/audio/bismillah.mp3",
    gallery: [
      { src: "./assets/gallery/gallery-01.jpg", alt: "Gallery placeholder one" },
      { src: "./assets/gallery/gallery-02.jpg", alt: "Gallery placeholder two" },
      { src: "./assets/gallery/gallery-03.jpg", alt: "Gallery placeholder three" },
      { src: "./assets/gallery/gallery-04.jpg", alt: "Gallery placeholder four" },
      { src: "./assets/gallery/gallery-05.jpg", alt: "Gallery placeholder five" },
    ],
  },

  intro: {
    namesAppearAtSeconds: 6,
    unlockScrollOnTap: true,
    musicButtonVisibleFromStart: true,
  },
  
  galleryOptions: {
  autoplay: true,
  intervalMs: 3000,
  pauseAfterInteractionMs: 3000,
},

  venue: {
    name: "Hamvi Hall (The Grand Hamvi Garden)",
    address: "Veera Desai Road, Jogeshwari (West), Mumbai",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hamvi+Hall+The+Grand+Hamvi+Garden+Veera+Desai+Road+Jogeshwari+West+Mumbai",
    note: "Hamvi Hall mein dawat-e-shukrana, InshaAllah aap sab ko hai aana.",
  },

  dressCode: {
    title: "Modest Festive Formal",
    description:
      "Elegant traditional or formal attire. Rich jewel tones and soft neutrals are warmly encouraged.",
    palette: ["#123f35", "#d5b875", "#8c3d53", "#e9dfcf", "#24344d"],
  },

  preWeddingEvents: [
    {
      title: "Mehendi Evening",
      date: "December 23, 2026",
      time: "6:30 PM",
      venue: "The Courtyard",
      note: "An intimate evening of colour, music, and family celebrations.",
    },
    {
      title: "Family Dinner",
      date: "December 24, 2026",
      time: "7:00 PM",
      venue: "The Garden Room",
      note: "A warm gathering before the wedding day.",
    },
  ],

  program: [
    { time: "7:30 PM", title: "Guest arrival", detail: "Welcome drinks & refreshments" },
    { time: "8:30 PM", title: "Walima reception", detail: "Greetings and photographs with the couple" },
    { time: "9:30 PM", title: "Celebratory feast", detail: "Dinner is served" },
    { time: "11:30 PM", title: "Farewell & duas", detail: "With warm memories and gratitude" },
  ],

  rsvp: {
    deadlineIso: "2026-12-10T23:59:59+05:30",
    endpoint: "",
    previewStorageKey: "noor-template-rsvps",
    fields: {
      guestName: true,
      attendance: true,
      guestCount: true,
      events: true,
      mealPreference: true,
      dietaryRestrictions: true,
      message: true,
    },
    mealOptions: ["Vegetarian", "Non-vegetarian", "No preference"],
  },

  sections: {
    welcome: true,
    scratchReveal: true,
    gallery: true,
    countdown: true,
    timeline: true,
    venue: true,
    dressCode: true,
    preWeddingEvents: false,
    gifts: true,
    rsvp: false,
    closing: true,
  },

  theme: {
    name: "Emerald Noor",
    colors: {
      emerald: "#123f35",
      emeraldDeep: "#082c26",
      ivory: "#fbf6ea",
      paper: "#f3ead9",
      gold: "#d5b875",
      goldDeep: "#aa8742",
      ink: "#17312c",
      muted: "#6b746f",
    },
    fonts: {
      arabic: '"Noto Naskh Arabic", serif',
      names: '"Great Vibes", serif',
  display: '"Noto Serif Display", serif',
  body: '"Manrope", sans-serif',
    },
    revealEffect: "gold-petals",
  },
};
