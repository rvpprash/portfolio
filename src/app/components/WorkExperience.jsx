import Accordion from "./Accordion";

const jobData = [
  {
    title: "Senior Software Engineer | Homegenius a subsidiary of Radian",
    dateRange: "2022 – Present",
    location: "Remote",
    website: "https://homegeniusrealestate.com/",
    content:
      "Built a high-traffic real estate search platform with React, Next.js, and TypeScript, developing 50%+ of a reusable UI component library and integrating Google Maps.Implemented secure Azure AD authentication and scalable APIs with Nest.js, Prisma, MongoDB and Redis, using Zustand for seamless state management",
    tags: [
      "React",
      "NextJS",
      "JavaScript",
      "TypeScript",
      "Emotion",
      "Chart.js",
      "Figma",
      "RxJS",
      "GraphQL",
      "MongoDB",
      "NestJS",
      "Zustand",
    ],
  },
  {
    title: "Software Engineer II | Bank of America",
    dateRange: "2021 – 2022",
    location: "Plano, TX",
    content:
      "I designed and built a reusable front-end component library using React, JavaScript, and Material-UI, which sped up development across several projects. I also focused on accessibility by ensuring the components met WCAG Level AA standards, wrote thorough unit tests with Jest, and used Storybook to document and demonstrate the components for easier team adoption.",
    tags: ["HTML/CSS", "JavaScript", "React", "Redux", "Material-UI"],
  },
  {
    title: "Web Developer | Tapestry Inc",
    dateRange: "Feb 2021 – Sep 2021",
    location: "Remote",
    content:
      "I developed and maintained Splunk Rigor scripts to monitor web performance and Core Web Vitals. Improved page load times by 25% by optimizing Largest Contentful Paint through techniques like image compression, lazy loading, and prefetching. Additionally, built a responsive dashboard using React.js, Next.js, and Recoil to visualize performance metrics. ",
    tags: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "NextJS",
      "Recoil",
      "Splunk Rigor",
      "Lighthouse",
    ],
  },
  {
    title: "Web Developer | State Street",
    dateRange: "2019 – 2021",
    location: "Boston, MA",
    content:
      "I built a responsive front-end application to enhance real-time risk monitoring for financial data, visualizing NASDAQ and BFDS fund volumes using React, TypeScript, and Webpack. Developed custom React components with D3.js for versatile data visualization across projects. Delivered insightful dashboards displaying risk, incident, and SLA metrics to enable proactive performance and issue management.",
    tags: ["HTML/CSS", "JavaScript", "React", "Redux", "Material-UI", "D3.js"],
  },
  {
    title: "Web Application Developer | Fannie Mae",
    dateRange: "2019 – 2021",
    location: "Herndon,VA",
    content:
      "At Fannie Mae, I worked as a Web Application Developer, focusing on customizing and enhancing SharePoint sites. I built both server-side and client-side solutions using .NET, JavaScript, and jQuery, integrated Google Analytics for user tracking, and developed custom dashboards and data visualizations to give business users actionable insights. I also replaced legacy web forms with modern solutions and created Power BI reports to support data-driven decision-making.",
    tags: [
      "HTML/CSS",
      "JavaScript",
      "jQuery",
      ".NET",
      "Microsoft SharePoint",
      "Power BI",
      "Google Analytics",
      "Google Tag Manager",
    ],
  },
  {
    title: "Web Developer | Macys",
    dateRange: "2017 – 2019",
    location: "San Francisco, CA",
    content:
      "At Macy’s, I worked with the digital analytics team to integrate and optimize the data layer for both macys.com and bloomingdale.com using Tealium, which improved analytics script loading efficiency by 30%. I also developed built automation tools with Backbone.js/Marionette to streamline processes like Incident and Change Management.",
    tags: [
      "HTML/CSS",
      "JavaScript",
      "Backbone.js",
      "Marionette.js",
      "Tealium",
      "BrightTag",
      "Handlebars.js",
    ],
  },
  {
    title: "Front-end Developer | GoTo",
    dateRange: "2015 – 2017",
    location: "San Francisco, CA",
    content:
      "I developed and maintained a single-page web application for video, voice, and PSTN calling as part of the GoToMeeting platform. I built user-facing features like onboarding guides, chat notifications, role-based controls, and feedback forms, using KnockoutJS and the Durandal framework. I also worked on cross-browser compatibility, analytics integration, and contributed to the GoToMeeting Chromebox Kiosk app.",
    tags: [
      "HTML/CSS",
      "JavaScript",
      "KnockoutJS",
      "Durandal",
      "WebRTC",
      "Google Analytics",
      "Google Tag Manager",
    ],
  },
];

const WorkExperience = () => {
  return <Accordion items={jobData} />;
};

export default WorkExperience;
