import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Manoj Kumar",
  initials: "MK",
  url: "https://dillion.io",
  location: "Udaipur, India",
  locationLink: "https://www.google.com/maps/place/Udaipur",
  description:
  "A Full-Stack Developer who loves building scalable web apps and diving into DevOps & innovation!",
  summary: 
  `I’m  [Manoj Meena](#), an [Artificial Intelligence and Data Science](#) student at [CTAE, Udaipur](https://www.ctae.ac.in/), and a [full-stack developer skilled in MERN Stack & Next.js](#). I build scalable, high-performance web apps with seamless user experiences. Always eager to learn and innovate. [📩 Contact me ](mailto:${process.env.NEXT_PUBLIC_USER_EMAIL}).`,
  avatarUrl: "/me1.png", 
  skills: [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "REST APIs",
  "FastAPI",
  "MongoDB",
  "Mongoose",
  "Redux Toolkit",
  "JWT Authentication",
  "Docker",
  "AWS Basic",
  "Git & GitHub",
  "Postman",
  "Cloudinary",
  "Tailwind CSS",
  "ShadCN UI",
  "Python",
  "c++"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: process.env.NEXT_PUBLIC_USER_EMAIL,
    tel: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    social: {
      GitHub: {
        name: "GitHub",
        url: process.env.NEXT_PUBLIC_GITHUB_URL,
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: process.env.NEXT_PUBLIC_X_URL,
      //   icon: Icons.x,

      //   navbar: true,
      // },
      email: {
        name:"Send Email",
        url:`mailto:${process.env.NEXT_PUBLIC_USER_EMAIL}`,
        icon: Icons.email,
        navbar: true,
      },
    },
  },



  education: [
    {
      school:  "CTAE, Udaipur",
      href: "https://www.ctae.ac.in/",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/College_of_Technology_%26_Engineering%2C_Udaipur.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "Chhatrapati Shivaji sr. sec school",
      href: "https://cseg.in/",
      degree: "12th, (Mathematics)",
      logoUrl: "https://cseg.in/images/logo.jpg",
      start: "2019",
      end: "2020",
    },
    
  ],

  projects: [
    {
      title: "MockMacker-AI",
      href: "https://mock-maker-ai.vercel.app/",
      dates: "Feb 2025 - Mar 2025",
      active: true,
      description:
        "MockMacker AI, a platform designed to help students and job seekers practice real interview scenarios, get AI-driven feedback, and boost confidence before facing actual recruiters!",
      technologies: [
        "Next.js",
        "JavaScript",
        "NeonPostgreSQL",
        "Drrizal ORM",
        "TailwindCSS",
        "Clerk Authentication",
        "Razorpay",
        "Gemini API",
        "Shadcn UI",
        "Accertainity UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://mock-maker-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manoj2990/MockMaker-Ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MockInterview.gif",
      video:"",
    },
    {
      title: "Study Notion",
      href: "https://study-notion-manoj2990.vercel.app/",
      dates: "December 2024 - March 2023",
      active: true,
      description:
        "StudyNotion is a scalable EdTech platform for course creation, sales, and interactive learning. It features secure payments, video hosting, progress tracking, and certifications.",
      technologies: [
        "JavaScript",
        "React.js",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Tailwind CSS",
        "Vercel",
        "Render "
      ],
      links: [
        {
          type: "Website",
          href: "https://study-notion-manoj2990.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manoj2990/StudyNotion",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/StudyNotion.gif",
      video: "",
    },
    {
      title: "StudyHub - NoteSharing Platform",
      href: "https://notes-sharing-system12.vercel.app/",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "A web platform where users can upload, share, and download study materials, with Google Drive integration and authentication.",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
        "Mongoose",
        "JWT Token",
        "Cloudinary",
        "Redux Toolkit",
      ],
      links: [
        {
          type: "Website",
          href: "https://notes-sharing-system12.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manoj2990/Notes-Sharing-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/StudyHub.gif",
      video: "",
    },
   
    
  ],

  certificates :[
    {
      title: "Full-Stack Web Development",
      issuer: "CodeHelp",
      date: "September 2024",
      image: "/MYWeb internship.jpg", // Correct way to access public folder images
      link: "https://drive.google.com/file/d/1flFklCqV9XKh66Mcn-FtekuDCbBtE1aM/view?usp=sharing",
      tags: ["JavaScript", "React", "Node.js","Expree.js","MongoDB"],
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "Udamy",
      date: "july 2023",
      image: "/python certificate_page-0001.jpg",
      link: "https://drive.google.com/file/d/1HU2UTa9DL8S2keNo_ivDRNC60HBCeMCf/view?usp=sharing",
      tags: ["Python"],
    }
  ]
  
} as const;
