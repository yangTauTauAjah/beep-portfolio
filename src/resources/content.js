import { Logo } from "@once-ui-system/core";

export const CV_LINK = "https://drive.google.com/file/d/1bxVSTF1Q6blXpaf0kno8_riQxm88jE_H/view?usp=sharing";

const person = {
  firstName: "Habib",
  lastName: "Anwash",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Typescript Developer",
  avatar: "/images/avatar.jpg",
  email: "ans54bit@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English (Business)", "Indonesian (Native)", "Japanese (Basic)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/yangTauTauAjah",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/habib-anwash-320779244/",
  },
  {
    name: "X (fka Twitter)",
    icon: "squareXTwitter",
    link: "https://x.com/HabibAnwash",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.gg/habibanwash1447",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/habib_anwash",
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/@habib_anwash",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Inventing ideas and building innovation with ones and zeros</>,
  featured: {
    display: true,
    content: [
      {
        title: <>Recent project: <strong className="ml-4">NFT Marketplace</strong></>,
        href: "https://nft-marketplace-tawny-eight.vercel.app/",
      },
      {
        title: <strong className="ml-4">Download CV</strong>,
        href: CV_LINK,
      }
    ]
  },
  subline: (
    <>
      I'm Habib Anwash, a passionate game programmer who thrives on continuous learning and innovation. I enjoy exploring new technologies and building creative solutions that push the boundaries of what's possible.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, my name is Habib Anwash. I'm a skilled web developer with expertise in front-end development, as well as back-end programming and database management. I have a good understanding in React, Node JS and also have been practicing myself with it by building projects. With a commitment to delivering exceptional results and a collaborative approach, I am dedicated to creating unique and user-friendly websites that meet the specific needs of my clients.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Red Eagle Studio",
        timeframe: "August 2023 - Present",
        role: "Game Programmer",
        achievements: [
          <>
            Designed and developed scalable game systems and physics mechanics for interactive gaming experiences.
          </>,
          <>
            Optimized code performance and collaborated with design teams to achieve technical goals while maintaining gameplay quality.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/blaster-addon/1.png",
            alt: "Minecraft Addon Project - 1",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/blaster-addon/2.png",
            alt: "Minecraft Addon Project - 2",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "HIMTI UNAIR Company Profile Website",
        timeframe: "February 2025 - Present",
        role: "Backend Developer",
        achievements: [
          <>
            Developed robust backend infrastructure using PHP Laravel and designed MySQL database architecture for dynamic content management.
          </>,
          <>
            Built RESTful APIs and implemented secure authentication systems while collaborating with frontend teams using Tailwind CSS.
          </>,
        ],
        images: [
          {
            src: "/images/projects/himti_unair/1.png",
            alt: "HIMTI Compro - 1",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/himti_unair/2.png",
            alt: "HIMTI Compro - 2",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "XZhor Store",
        timeframe: "July 2024 - August 2024",
        role: "Fullstack Developer",
        achievements: [
          <>
            Developed and implemented a complete e-commerce platform using Next.js with optimized user experience and performance.
          </>,
          <>
            Collaborated with UX/UI teams to revamp website performance and enhance user engagement through responsive design.
          </>,
        ],
        images: [],
      },
      {
        company: "MCPEDL",
        timeframe: "March 2021 - Present",
        role: "Content Creator and Programmer",
        achievements: [
          <>
            Published engaging content and maintained platform content to match user demand and industry trends.
          </>,
          <>
            Received and addressed user feedback to enhance content quality and improve user experience across the platform.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Airlangga",
        description: <>Studied computer science and software engineering.</>,
      },
      {
        name: "Self-Learning & Online Courses",
        description: <>Continuously learning web2, web3, and gaming development technologies through online platforms and hands-on projects.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Tech Stack",
    skills: [
      {
        title: "Back End",
        tech: [
          {
            logo: "/images/png/Supabase_Logo.png",
            name: "Supabase"
          },
          {
            logo: "/images/logo/Laravel_Logo.svg",
            name: "Laravel"
          },
          {
            logo: "/images/png/Postgresql_Logo.png",
            name: "Postgresql"
          },
          {
            logo: "/images/png/Node_Logo.png",
            name: "Node JS"
          },
          {
            logo: "/images/logo/Express_Logo.png",
            name: "Express js"
          },
          {
            logo: "/images/png/Graphql_Logo.png",
            name: "GraphQL"
          },
          {
            logo: "/images/png/Rest_Logo.png",
            name: "REST API"
          },
          {
            logo: "/images/png/Jest_Logo.png",
            name: "Jest"
          },
          {
            logo: "/images/png/MongoDB_Logo.png",
            name: "MongoDB"
          },
          {
            logo: "/images/logo/Mysql_Logo.png",
            name: "MySQL"
          }
        ]
      },
      {
        title: "Front end",
        tech: [
          {
            logo: "/images/png/React_Logo.png",
            name: "React"
          },
          {
            logo: "/images/png/Redux_Logo.png",
            name: "Redux"
          },
          {
            logo: "/images/png/Vite_Logo.png",
            name: "Vite"
          },
          {
            logo: "/images/png/Mui_Logo.png",
            name: "Material UI"
          },
          {
            logo: "/images/png/Tailwind_Logo.png",
            name: "Tailwind CSS"
          },
          {
            logo: "/images/png/Antdesign_Logo.png",
            name: "Ant Design"
          },
          {
            logo: "/images/png/Jquery_Logo.png",
            name: "JQuery"
          }
        ]
      },
      {
        title: "Other tools and languages",
        tech: [
          {
            logo: "/images/logo/ChatGPT_Logo.svg",
            name: "ChatGPT"
          },
          {
            logo: "/images/png/Gemini_Logo.png",
            name: "Gemini"
          },
          {
            logo: "/images/png/Claude_Logo.png",
            name: "Claude AI"
          },
          {
            logo: "/images/png/CursorAI_Logo.png",
            name: "Cursor AI"
          },
          {
            logo: "/images/png/Solidity_Logo.png",
            name: "Solidity"
          },
          {
            logo: "/images/png/Next_Logo.png",
            name: "Next JS"
          },
          {
            logo: "/images/logo/Nuxt_Logo.svg",
            name: "Nuxt JS"
          },
          {
            logo: "/images/png/Vscode_Logo.png",
            name: "VS Code"
          },
          {
            logo: "/images/logo/Js_Logo.jpg",
            name: "Javascript"
          },
          {
            logo: "/images/png/Typescript_Logo.png",
            name: "Typescript"
          },
          {
            logo: "/images/png/Java_Logo.png",
            name: "Java"
          },
          {
            logo: "/images/png/PHP_Logo.png",
            name: "PHP"
          },
          {
            logo: "/images/png/Git_Logo.png",
            name: "Git VCS"
          },
          {
            logo: "/images/png/Figma_Logo.png",
            name: "Figma"
          }
        ]
      }
    ]
  }
  /* technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Development",
        description: <>Full-stack development with React, Next.js, PHP Laravel, MySQL, and modern web technologies for building scalable applications.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Web Development Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Web Development Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Game Development",
        description: <>Game programming with focus on scalable systems, physics mechanics, and performance optimization for interactive gaming experiences.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Game Development Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Blockchain & Web3",
        description: <>Developing decentralized applications using Solidity, Ethereum, and Web3 technologies for innovative blockchain solutions.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Web3 Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  }, */
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

