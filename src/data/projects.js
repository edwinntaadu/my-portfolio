const projects = [
  {
    id: 1,
    slug: "little-lemon-restaurant-booking",
    title: "Little Lemon Restaurant Booking System",
    category: "Full Stack Project",
    shortDescription:
      "A full stack restaurant booking system with a React frontend and Django backend, allowing users to reserve tables through a dynamic interface.",
    description:
      "Little Lemon is a full stack restaurant booking application that integrates a React frontend with a Django backend and MySQL database. The application allows users to reserve tables through a user-friendly interface, while managing booking data through secure and structured API endpoints.\n\nOn the frontend, I built responsive booking forms and interactive UI components to improve user experience. On the backend, I implemented RESTful API endpoints to handle booking creation, updates, retrieval, and deletion (CRUD operations). The project helped me gain hands-on experience with full stack integration, API communication, database design, and connecting frontend user actions to backend logic.",
    image: "/images/littleLemon.png",
    technologies: ["React", "Django", "MySQL", "REST API", "JavaScript"],
    liveDemo: "https://little-lemon-sab.netlify.app/",
    github: "https://github.com/edwinntaadu/Little-Lemon",
    featured: true,
  },
  {
    id: 2,
    slug: "homecho-food-delivery-ui",
    title: "HomeCho Food Delivery UI",
    category: "Frontend Project",
    shortDescription:
      "A responsive food ordering interface focused on reusable components, clean layout, and user-friendly design.",
    description:
      "This project is a food delivery frontend interface focused on responsive design, reusable React components, and clean user experience. It includes structured sections for browsing content, improved layout organization, and a scalable frontend setup. While building this project, I practiced UI composition, state-driven rendering, component reusability, responsive styling, and improving the visual consistency of a larger React application.",
    image: "/images/project-2.jpg",
    technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
    liveDemo: "",
    github: "",
    featured: true,
  },
  {
    id: 3,
    slug: "google-oauth-authentication-system",
    title: "Google OAuth Authentication System",
    category: "Full Stack Practice",
    shortDescription:
      "An authentication setup exploring login flows, Google OAuth integration, backend routing, and user management.",
    description:
      "This project explores user authentication using Google OAuth in a Node.js and Express application with MongoDB. It focuses on building secure login flows, handling authentication logic, and structuring backend routes in a maintainable way. Through this project, I gained practical experience with authentication concepts, Express middleware, Passport.js integration, backend/frontend responsibilities, and full stack workflow.",
    image: "/images/project-3.jpg",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "JavaScript",
    ],
    liveDemo: "",
    github: "",
    featured: true,
  },
  {
    id: 4,
    slug: "responsive-dashboard-interface",
    title: "Responsive Dashboard Interface",
    category: "UI Project",
    shortDescription:
      "A dashboard-style interface built to practice reusable layout sections, cards, spacing, and responsive structure.",
    description:
      "This dashboard interface project was built to practice creating structured layouts with reusable cards, clear content hierarchy, and responsive behavior across screen sizes. The project focuses on UI consistency, layout organization, and maintainable frontend structure. It helped me strengthen my understanding of reusable design systems, scalable styling, and modern frontend composition.",
    image: "/images/project-4.jpg",
    technologies: ["React", "Bootstrap", "CSS", "JavaScript"],
    liveDemo: "",
    github: "",
    featured: false,
  },
];

export default projects;
