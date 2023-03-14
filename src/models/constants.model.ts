
export interface INavLink {
    id: string;
    title: string;
}
export interface IService {
    id: number;
    title: string;
    icon: string;
}

export interface IExperience {
    id: number;
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
}

export interface ITechnology {
    id: number;
    name: string;
    icon: string;
}

export interface ITestimonial {
    id: number;
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
}

export interface IProject {
    id: number;
    name: string;
    description: string;
    tags: {
        id: number,
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link?: string;
    app_link?: string;
}
