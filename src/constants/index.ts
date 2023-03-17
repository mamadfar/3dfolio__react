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
    // figma,
    docker,
    citronityLogo,
    hamimohajerLogo,
    logoPlaceholder,
    // threejs,
    next, sass, antDesign, bootstrap, devsteam, dappazon, blog, airbnb, shareme, codex, gpt3Ui, hamimohajer, person
} from "../assets";
import {IExperience, INavLink, IProject, IService, ITechnology, ITestimonial} from "../models/constants.model";

export const navLinks: ReadonlyArray<INavLink> = [
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

export const services: ReadonlyArray<IService> = [
    {
        id: 1,
        title: "Web Developer",
        icon: web,
    },
    {
        id: 2,
        title: "React Developer",
        icon: mobile,
    },
    {
        id: 3,
        title: "Backend Developer",
        icon: backend,
    },
    {
        id: 4,
        title: "Frontend Engineer",
        icon: creator,
    },
];

export const technologies: ReadonlyArray<ITechnology> = [
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
        name: "Ant Design",
        icon: antDesign,
    },
    {
        id: 9,
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        id: 10,
        name: "Node JS",
        icon: nodejs,
    },
    {
        id: 11,
        name: "Next JS",
        icon: next,
    },
    // {
    //     id: 12,
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        id: 13,
        name: "git",
        icon: git,
    },
    // {
    //     id: 14,
    //     name: "figma",
    //     icon: figma,
    // },
    {
        id: 15,
        name: "docker",
        icon: docker,
    },
    {
        id: 16,
        name: "SASS",
        icon: sass,
    }
];

export const experiences: ReadonlyArray<IExperience> = [
    {
        id: 1,
        title: "Senior Front End Engineer",
        company_name: "Citronity",
        icon: citronityLogo,
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
        icon: hamimohajerLogo,
        iconBg: "#383E56",
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
        icon: logoPlaceholder,
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
        icon: logoPlaceholder,
        iconBg: "#383E56",
        date: "Jun 2017 - Dec 2018",
        points: [
            "Optimized user experience by collaborating with design and product teams to deliver successful feature implementations.",
            "Achieved improved page speeds for mobile users by implementing a cutting-edge, responsive design solution.",
            "Resolved browser compatibility issues, improving customer interaction rates and satisfaction."
        ],
    },
];

export const projects: ReadonlyArray<IProject> = [
    {
        id: 1,
        name: "Devsteam - Portfolio",
        description:
            "Full dynamic SSR application using Next, React, Tailwind, TypeScript, and SCSS.",
        tags: [
            {
                id: 1,
                name: "react",
                color: "blue-text-gradient",
            },
            {
                id: 2,
                name: "nextjs",
                color: "text-gray-600",
            },
            {
                id: 3,
                name: "typescript",
                color: "text-blue-700",
            },
            {
                id: 4,
                name: "tailwind",
                color: "text-cyan-500",
            },
            {
                id: 5,
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: devsteam,
        // source_code_link: "https://github.com/",
        app_link: "https://devsteam.ir/"
    },
    {
        id: 2,
        name: "Dappazon",
        description:
            "A small Amazon clone with Smart Contract on Blockchain using Solidity, Hardhat, React, and TypeScript",
        tags: [
            {
                id: 1,
                name: "react",
                color: "blue-text-gradient",
            },
            {
                id: 2,
                name: "solidity",
                color: "text-gray-700",
            },
            {
                id: 3,
                name: "hardhat",
                color: "text-yellow-300",
            },
            {
                id: 4,
                name: "typescript",
                color: "text-blue-700",
            },
            {
                id: 5,
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: dappazon,
        source_code_link: "https://github.com/mamadfar/dappazon__solidity",
        // app_link: "https://github.com/"
    },
    {
        id: 3,
        name: "Blog",
        description:
            "A small blog with authentication and a rich editor using React, TypeScript, Node, Express, MySQL, and SCSS",
        tags: [
            {
                id: 1,
                name: "react",
                color: "blue-text-gradient",
            },
            {
                id: 2,
                name: "node",
                color: "green-text-gradient",
            },
            {
                id: 3,
                name: "mysql",
                color: "text-blue-900",
            },
            {
                id: 4,
                name: "typescript",
                color: "text-blue-700",
            },
            {
                id: 5,
                name: "scss",
                color: "pink-text-gradient",
            }
        ],
        image: blog,
        source_code_link: "https://github.com/mamadfar/blog__react-node-mysql__fullstack"
    },
    {
        id: 4,
        name: "Airbnb Clone",
        description:
            "Airbnb clone using TypeScript, Tailwind, Next13, and MapBox",
        tags: [
            {
                id: 1,
                name: "react",
                color: "blue-text-gradient",
            },
            {
                id: 2,
                name: "nextjs",
                color: "text-gray-600",
            },
            {
                id: 3,
                name: "typescript",
                color: "text-blue-700",
            },
            {
                id: 4,
                name: "tailwind",
                color: "text-cyan-500",
            },
            {
                id: 5,
                name: "mapbox",
                color: "text-blue-300",
            },
        ],
        image: airbnb,
        source_code_link: "https://github.com/mamadfar/airbnb-clone__nextjs",
        app_link: "https://airbnb-clone-ebon-one.vercel.app/"
    },
    {
        id: 5,
        name: "Shareme",
        description:
            "A full-stack Social media app using React, Typescript, Tailwind, Google Auth, and Sanity",
        tags: [
            {
                id: 1,
                name: "react",
                color: "blue-text-gradient",
            },
            {
                id: 2,
                name: "sanity",
                color: "text-red-500",
            },
            {
                id: 3,
                name: "typescript",
                color: "text-blue-700",
            },
            {
                id: 4,
                name: "tailwind",
                color: "text-cyan-500",
            },
            {
                id: 5,
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: shareme,
        source_code_link: "https://github.com/mamadfar/shareme__fullstack",
        app_link: "https://sharemeeeeee.netlify.app/login/"
    },
    {
        id: 6,
        name: "Chat GPT-3",
        description:
            "A full-stack chat GPT AI application with a speaker using React, Vite, Node, Express, TypeScript, and SCSS",
        tags: [
            {
                id: 1,
                name: "react",
                color: "blue-text-gradient",
            },
            {
                id: 2,
                name: "node",
                color: "green-text-gradient",
            },
            {
                id: 3,
                name: "vite",
                color: "text-purple-400",
            },
            {
                id: 4,
                name: "typescript",
                color: "text-blue-700",
            },
            {
                id: 5,
                name: "scss",
                color: "pink-text-gradient",
            }
        ],
        image: codex,
        source_code_link: "https://github.com/mamadfar/chatgpt",
        app_link: "https://chatgpt-livid.vercel.app/"
    },
    {
        id: 7,
        name: "GPT-3 UI",
        description:
            "A fully responsive website using React, TypeScript, and SCSS",
        tags: [
            {
                id: 1,
                name: "react",
                color: "blue-text-gradient",
            },
            {
                id: 2,
                name: "typescript",
                color: "text-blue-700",
            },
            {
                id: 3,
                name: "scss",
                color: "pink-text-gradient",
            }
        ],
        image: gpt3Ui,
        source_code_link: "https://github.com/mamadfar/gpt3-ui",
        app_link: "https://mamadfar.github.io/gpt3-ui/"
    },
    {
        id: 8,
        name: "Hamimohajer",
        description:
            "Immigration Company website using Laravel, Bootstrap, JavaScript, and SCSS",
        tags: [
            {
                id: 1,
                name: "bootstrap",
                color: "text-purple-600",
            },
            {
                id: 2,
                name: "javascript",
                color: "text-yellow-500",
            },
            {
                id: 3,
                name: "scss",
                color: "pink-text-gradient",
            }
        ],
        image: hamimohajer,
        // source_code_link: "https://github.com/mamadfar/gpt3-ui",
        app_link: "https://hamimohajer.com/"
    },
];

export const testimonials: ReadonlyArray<ITestimonial> = [
    {
        id: 1,
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Mohammad proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Boinabrasa",
        image: person,
    },
    {
        id: 2,
        testimonial:
            "Mohammad is professionally deep into his front-end skills and truly cares about their clients' success.",
        name: "Ashkan Golehpoor",
        designation: "Data Engineer",
        company: "Arz Digital",
        image: "https://atabakhooshangi.ir:/media/profile_photos/ashkan_golehpoor.jpeg",
    },
    {
        id: 3,
        testimonial:
            "After Mohammad optimized our website, our traffic increased by 50%. We can't thank him enough!",
        name: "Mohammad Rad",
        designation: "CTO",
        company: "Hamimohajer",
        image: person,
    },
];
