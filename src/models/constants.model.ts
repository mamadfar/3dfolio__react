import {ReactNode} from "react";

export interface INavLinks {
    id: string;
    title: string;
}
export interface IServices {
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

export interface ITechnologies {
    id: number;
    name: string;
    icon: string;
}

export interface ITestimonials {
    id: number;
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
}

export interface IProjects {
    id: number;
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link: string;
}
