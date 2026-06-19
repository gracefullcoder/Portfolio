import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { SpringBoot } from "@/components/ui/svgs/springboot";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { ExpressJs } from "@/components/ui/svgs/expressjs";
import { Webrtc } from "@/components/ui/svgs/webrtc";
import { Aws } from "@/components/ui/svgs/Aws";
import { Firebase } from "@/components/ui/svgs/Firebase";
import { CloudFlare } from "@/components/ui/svgs/CloudFlare";
import { Prisma } from "@/components/ui/svgs/Prisma";
import { JavaScript } from "@/components/ui/svgs/Javascript";

export const DATA = {
  name: "Vaibhav Gupta",
  initials: "VG",
  url: "https://vaibhavgupta.vercel.app",
  location: "Surat, Gujarat",
  locationLink: "https://www.google.com/maps/place/Surat,+Gujarat",
  description:
    "Software Engineer | Full Stack Developer | Passionate about building scalable applications and solving real-world problems",
  summary:
  "Software Engineer and Computer Science graduate from [SVNIT Surat](https://www.svnit.ac.in) with experience building scalable web applications, cloud-native systems, and business solutions. Successfully delivered [multiple freelance projects](#projects), helping businesses launch and improve their digital products with clean, maintainable, and industry-ready solutions. Currently working at [Publicis Sapient](https://www.publicissapient.com), contributing to [enterprise banking applications](#work) and cloud-native platforms using modern backend technologies.",avatarUrl: "/me.png",
  skills: [
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Prisma", icon: Prisma },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: Mongodb },
    { name: "Express.js", icon: ExpressJs },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: JavaScript },
    { name: "Python", icon: Python },
    { name: "C++", icon: Csharp },
    { name: "Java", icon: Java },
    { name: "SpringBoot", icon: SpringBoot },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "WebRTC", icon: Webrtc },
    { name: "Firebase", icon: Firebase },
    { name: "AWS", icon: Aws },
    { name: "CloudFlare", icon: CloudFlare },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "vaibhavgupta11j@gmail.com",
    tel: "+918780770435",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gracefullcoder",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vaibhavgupta11",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/vaibhavgupta11j",
        icon: Icons.x,
        navbar: true,
      },
      EMAIL: {
        name: "EMAIL",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavgupta11j@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      // LeetCode: {
      //   name: "LeetCode",
      //   url: "https://leetcode.com/u/vaibhavgupta11/",
      //   icon: Icons.leetcode,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:vaibhavgupta11j@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Publicis Sapient ",
      href: "https://www.publicissapient.com",
      badges: ["Incoming SDE"],
      location: "India",
      title: "Software Development Engineer",
      logoUrl: "/PS_BG.jpg",
      start: "2026",
      end: "Present",
      description:
        "Joining Publicis Sapient as a Software Development Engineer after successfully completing the Associate Software Development Engineer Internship. Will be contributing to the design and development of scalable enterprise applications and cloud-native solutions.",
    },
    {
      company: "Publicis Sapient",
      href: "https://en.wikipedia.org/wiki/Publicis_Sapient",
      badges: ["ASDE Intern"],
      location: "Remote",
      title: "Associate Software Development Engineer Intern",
      logoUrl: "/PS_BG.jpg",
      start: "May 2025",
      end: "July 2025",
      description:
        "Worked on ADCB Bank Project using Spring Boot, Azure Kubernetes, Kafka, and Quartz. Built a scheduled job using Quartz Scheduler to automate daily DOM payment initiation and integrated Kafka messaging for downstream processing. Refactored the Payment PDF Service using the Strategy Pattern, enabling support for multiple payment types (WPS, VAT, GPSSA) with clean, maintainable code. Wrote component test cases for the Reference Data Ingestion Service covering service and controller layers. Worked on containerized microservices deployed via Azure Kubernetes Service (AKS) and monitored job executions in a cloud-native environment.",
    },
  ],
  education: [
    {
      school: "Sardar Vallabhbhai National Institute of Technology, Surat",
      href: "https://en.wikipedia.org/wiki/Sardar_Vallabhbhai_National_Institute_of_Technology,_Surat#/media/File:NIT_Surat_Logo.svg",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/NIT_Surat_Logo.svg",
      start: "2022",
      end: "2026",
      description: "CGPA: 8.11",
    },
  ],
  projects: [
    {
      title: "SNMP + ICMP Network Monitoring System",
      href: "https://github.com/gracefullcoder/snmp-icmp-monitor",
      dates: "2025",
      active: true,
      description:
        "Developed a high-performance asynchronous network monitoring platform that automatically discovers SNMP-enabled devices and monitors network health using SNMP and ICMP. Integrated Prometheus metrics export for Grafana dashboards, enabling real-time visibility into device availability, latency, packet loss, interface traffic, CPU utilization, memory usage, and system uptime across enterprise networks.",
      technologies: [
        "Python",
        "AsyncIO",
        "PySNMP",
        "Prometheus",
        "Grafana",
        "SNMP",
        "ICMP",
        "Network Monitoring"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gracefullcoder/Network-Monitoring-System",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://ik.imagekit.io/vaibhav11/Project%20Demo/Screenshot%202026-06-18%20151422.png?updatedAt=1781775907466",
      video: ""
    },
    {
      title: "HelperBuddy - Home Service Marketplace",
      href: "https://helperbuddy.in",
      dates: "2025",
      active: true,
      description:
        "Built a full-stack home services marketplace connecting customers with verified professionals for appliance installation, repair, and maintenance services. Implemented secure JWT authentication, OTP-based service verification, Razorpay payment integration, referral rewards, real-time order management, partner analytics dashboards, pincode-based service allocation, and comprehensive admin tools for service, user, and content management.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "jose",
        "Tailwind CSS",
        "Razorpay",
        "Vercel",
        "Render"
      ],
      links: [
        // {
        //   type: "Source",
        //   href: "https://github.com/gracefullcoder/HelperBuddy",
        //   icon: <Icons.github className="size-3" />,
        // },
        {
          type: "Live Demo",
          href: "https://helperbuddy.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://ik.imagekit.io/vaibhav11/Project%20Demo/HelperBuddy_Demo.mp4"
    },
    {
      title: "Recruit Ease",
      href: "https://recruit-ease.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Advanced video interview platform featuring custom assessment templates, real-time rating systems, multi-skill evaluations, and post-interview analytics. Implemented Auth0 authentication using JWT and a custom WebRTC architecture with screen sharing, togglable media controls, and in-call text communication. Designed a signaling server for SDP exchange and a post-interview analytics dashboard.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "WebRTC",
        "WebSockets",
        "Auth0",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gracefullcoder/recruit-ease",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://recruit-ease.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://ik.imagekit.io/vaibhav11/Project%20Demo/Recruit_Ease_Demo.mp4",
    },
    {
      title: "Koe the Café",
      href: "https://koe-the-cafe.vercel.app",
      dates: "2023",
      active: true,
      description:
        "Winner of Google Winter Of Code '23. Real-time table booking and food ordering automation integrated with Razorpay for secure payments. Admins can view top trending dishes, ratings by category, and detailed reviews. Track detailed website traffic including dish additions, menu views, contact and social link visits, page interactions, and booking attempts. Filtered user insights enable targeted mail and Firebase push notifications.",
      technologies: [
        "ReactJS",
        "Node.js",
        "ExpressJS",
        "MongoDB",
        "Sass",
        "WebSockets",
        "Firebase",
        "Razorpay API",
        "Gmail API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gracefullcoder/Koe_The_Cafe_MERN_APP",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://koe-the-cafe.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://dms.licdn.com/playlist/vid/v2/D4D05AQFJC3IjldLgZA/feedshare-ambry-analyzed_servable_progressive_video/feedshare-ambry-analyzed_servable_progressive_video/0/1725143636579?e=1782320400&v=beta&t=7PYLPEwa4TYqfGNZg8qG-Qa_fy8A0Wrgjw92q3oREOw",
    }
  ],
  hackathons: [
    {
      title: "GWOC 2023",
      dates: "December 2023",
      location: "GDSC NIT Surat",
      description:
        "Winner - Ranked 1st among all participants in Google Winter Of Code 2023 organized by GDSC NIT Surat.",
      image: "https://images.seeklogo.com/logo-png/39/2/google-developers-logo-png_seeklogo-394547.png",
      mlh: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/gracefullcoder/Koe_The_Cafe_MERN_APP",
        }
      ],
    },
    {
      title: "Hack The Tank 2.0",
      dates: "March 2024",
      location: "PAN India Hackathon - GDSC NIT Surat",
      description:
        "Runners Up - Secured 2nd position in this PAN India hackathon organized by GDSC NIT Surat.",
      image: "https://hack-the-tank-2.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fb63065e90f4242eaa8301b8444dd450f%2Fassets%2Ffavicon%2F287.png&w=1440&q=75",
      mlh: "",
      links: [{
        title: "Devfolio",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://hack-the-tank-2.devfolio.co/overview",
      },
      {
        title: "Source",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/gracefullcoder/SAS-SLIM-AND-FIT",
      },
      ],
    },
    {
      title: "Inception 9.0",
      dates: "September 2024",
      location: "ACM NIT Surat",
      description:
        "Achieved 3rd position in competitive programming competition organized by ACM NIT Surat.",
      image: "https://ik.imagekit.io/vaibhav11/Project%20Demo/ac8483a824-acm-logo-acm-logo-png-transparent-amp-svg-vector-freebie-supply.png?updatedAt=1781866997244",
      mlh: "",
      links: [
        {
          title: "Linkedin",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/inception9-acmnitsurat-share-7255903570099654657-xYdg/",
        },
      ],
    },
    // {
    //   title: "CodeWars",
    //   dates: "March 2024",
    //   location: "Mindbend - Gujarat Technical Fest",
    //   description:
    //     "Achieved 3rd position out of 80 teams in CodeWars competitive programming contest.",
    //   image: "",
    //   mlh: "",
    //   links: [],
    // },
  ],
} as const;