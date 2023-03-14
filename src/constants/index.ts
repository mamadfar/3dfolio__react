import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs
} from "../assets";
import {IExperience, INavLinks, IProjects, IServices, ITechnologies, ITestimonials} from "../models/constants.model";

export const navLinks:ReadonlyArray<INavLinks> = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const services:ReadonlyArray<IServices> = [
    {
        id: 1,
        title: "Web Developer",
        icon: web,
    },
    {
        id: 2,
        title: "React Native Developer",
        icon: mobile,
    },
    {
        id: 3,
        title: "Backend Developer",
        icon: backend,
    },
    {
        id: 4,
        title: "Content Creator",
        icon: creator,
    },
];

export const technologies: ReadonlyArray<ITechnologies> = [
    {
        id: 1,
        name: "HTML 5",
        icon: html,
    },
    {
        id: 2,
        name: "CSS 3",
        icon: css,
    },
    {
        id: 3,
        name: "JavaScript",
        icon: javascript,
    },
    {
        id: 4,
        name: "TypeScript",
        icon: typescript,
    },
    {
        id: 5,
        name: "React JS",
        icon: reactjs,
    },
    {
        id: 6,
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        id: 7,
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        id: 8,
        name: "Node JS",
        icon: nodejs,
    },
    {
        id: 9,
        name: "MongoDB",
        icon: mongodb,
    },
    {
        id: 10,
        name: "Three JS",
        icon: threejs,
    },
    {
        id: 11,
        name: "git",
        icon: git,
    },
    {
        id: 12,
        name: "figma",
        icon: figma,
    },
    {
        id: 13,
        name: "docker",
        icon: docker,
    },
];

export const experiences: ReadonlyArray<IExperience> = [
    {
        id: 1,
        title: "Senior Front End Engineer",
        company_name: "Citronity",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Oct 2021 - Present",
        points: [
            "Engineered multiple web apps utilizing ReactJs, Redux, and Ant Design to enhance user experience and boost customer satisfaction by 99%.",
            "Resolved technical issues quickly and improved UX by 50% through debugging, adjusting, and troubleshooting React code.",
            "Constructed reusable React components with render props and hooks, streamlining development time and productivity.",
            "Guided junior developers in improving team productivity and code quality; resulting in a 20% rise.",
        ],
    },
    {
        id: 2,
        title: "Senior Front End Engineer",
        company_name: "Hamimohajer",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Oct 2020 - Oct 2021",
        points: [
            "Optimized dashboard and website to boost user attention and satisfaction by 40%.",
            "Built React-based applications resulting in a 50% increase in user engagement.",
            "Applied best practices in React.js and Next.js for 50% improved performance.",
            "Integrated 30 RESTFUL APIs with React for real-time data updates and seamless UX.",
        ],
    },
    {
        id: 3,
        title: "Front End Engineer",
        company_name: "Tadbir Hesab Mohaseban",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2019 - Oct 2020",
        points: [
            "Optimized code for increased website longevity and stability, resulting in a 20% decrease in downtime.",
            "Mobile optimization achieved a 15% reduction in mobile page traffic.",
            "Incorporated React.js, SCSS, TypeScript, and Tailwind to enhance UI components and improve product appearance."
        ],
    },
    {
        id: 4,
        title: "Front End Developer",
        company_name: "Novin Tarh Gostaran",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jun 2017 - Dec 2018",
        points: [
            "Optimized user experience by collaborating with design and product teams to deliver successful feature implementations.",
            "Achieved improved page speeds for mobile users by implementing a cutting-edge, responsive design solution.",
            "Resolved browser compatibility issues, improving customer interaction rates and satisfaction."
        ],
    },
];

export const testimonials: ReadonlyArray<ITestimonials> = [
    {
        id: 1,
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        id: 2,
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        id: 3,
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

export const projects: ReadonlyArray<IProjects> = [
    {
        id: 1,
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        id: 2,
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        id: 3,
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];
