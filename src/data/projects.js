const projects = [
  {
    id: 1,
    slug: "now-thats-delicious",
    title: "Now That's Delicious!",
    type: "web",
    category: "Full Stack Development",
    year: 2022,
    shortDescription:
      "A database-backed restaurant discovery platform with authentication, search, maps, reviews, and store management.",
    description:
      "Now That's Delicious! is a full-stack restaurant platform focused on discovery and community-driven content. Users can browse and search restaurants, explore categories and top-rated locations, view places on a map, create accounts, manage store listings, upload images, and publish reviews. Unlike Little Lemon's frontend booking prototype, this project demonstrates end-to-end product architecture across server-rendered interfaces, Express routing, authentication, MongoDB persistence, validation, search, media handling, and third-party integrations.",
    role: "Full-stack developer responsible for the application architecture, server-rendered interface, database models, authentication, store management, search, reviews, image handling, and deployment.",
    keyFeatures: [
      "Browse and search restaurants by name, category, and tags",
      "Discover restaurant locations through an interactive map",
      "Register, log in, and maintain authenticated user sessions",
      "Add and manage restaurant listings with uploaded images",
      "Review restaurants and explore top-rated locations",
    ],
    technicalChallenges: [
      "Coordinating Express routes, controllers, Pug templates, and MongoDB models across a full-stack workflow",
      "Protecting user-only actions with authentication, authorization, validation, and session handling",
      "Integrating image uploads, location data, search, and map functionality while keeping errors user-friendly",
    ],
    whatILearned: [
      "How to structure a maintainable MVC-style Express application",
      "How authentication, sessions, validation, and data ownership work together",
      "How to integrate third-party services and deploy a database-backed Node.js application",
    ],
    plannedImprovements: [
      "Add authenticated table reservations from individual restaurant pages",
      "Calculate available booking times from restaurant hours and capacity",
      "Let customers view, modify, and cancel upcoming reservations",
      "Send booking confirmation and cancellation emails",
      "Create a restaurant-owner dashboard for managing availability and reservations",
      "Prevent conflicting or over-capacity bookings with server-side validation",
    ],
    image: "/images/now-thats-delicious.png",
    technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    liveDemo: "https://now-thats-delicious-ochre.vercel.app/",
    github: "https://github.com/edwinntaadu/now-thats-delicious",
    featured: true,
  },
  {
    id: 2,
    slug: "little-lemon-restaurant",
    title: "Little Lemon Restaurant",
    type: "web",
    category: "Frontend Development",
    year: 2023,
    shortDescription:
      "A React frontend prototype focused on responsive design, validated forms, and a clear table-reservation journey.",
    description:
      "Little Lemon is a frontend-focused React project that explores the user experience of discovering a restaurant and reserving a table. Its primary purpose is to demonstrate reusable component architecture, responsive interface implementation, dynamic booking-time selection, Formik and Yup validation, accessible feedback, and a clear confirmation flow. It acts as a focused reservation UX prototype rather than a database-backed restaurant platform.",
    role: "Frontend developer responsible for translating the restaurant concept into reusable React components, responsive pages, navigation, reservation form behavior, validation, and booking confirmation.",
    keyFeatures: [
      "Responsive restaurant homepage with menu specials and testimonials",
      "Interactive table-reservation flow with dynamic available times",
      "Validated booking inputs for date, time, guests, occasion, and email",
      "Reservation confirmation page with clear user feedback",
      "Reusable components and responsive navigation across screen sizes",
    ],
    technicalChallenges: [
      "Keeping available reservation times synchronized with the selected date",
      "Building clear validation and error feedback without interrupting the booking flow",
      "Maintaining consistent layouts and navigation across desktop and mobile views",
    ],
    whatILearned: [
      "How to design a multi-step user journey with reusable React components",
      "How to manage form state and validation with Formik and Yup",
      "How responsive design and accessible form feedback improve usability",
    ],
    image: "/images/littleLemon.png",
    technologies: ["React", "JavaScript", "Formik", "Yup", "Bootstrap"],
    liveDemo: "https://little-lemon-sab.netlify.app/",
    featured: true,
  },
];

export default projects;
