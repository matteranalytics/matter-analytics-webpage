import { IconifyIcon } from "@iconify/types";

export type LocaleDateString = {
    locales: string;
    options: {
        day: "numeric" | "2-digit";
        month: "numeric" | "2-digit" | "long" | "short" | "narrow";
        year: "numeric" | "2-digit";
    };
};

export type InfoMoreButton = {
    text: string;
    icon: IconifyIcon;
};

export type Image = {
    src: string;
    alt: string;
};

export type ContactItem = {
    title: string;
    icon: IconifyIcon;
    link?: string;
    text?: string;
    address?: string;
};

export type Social = {
    link: string;
    icon: IconifyIcon;
};

export type Sidebar = {
    name: string;
    title: string;
    info_more_btn: InfoMoreButton;
    img: Image;
    contacts: ContactItem[];
    socials: Social[];
};

export type Route = {
    id: string;
    nav: string;
};

export type Paragraphs = string[];

export type Service = {
    img: Image;
    title: string;
    text: string;
};

export type Services = {
    title: string;
    items: Service[];
};

export type Testimonial = {
    qoute: Image;
    img: Image;
    name: string;
    date: string;
    text: string;
};

export type Testimonials = {
    title: string;
    items: Testimonial[];
};

export type Client = {
    link: string;
    img: Image;
};

export type Clients = {
    title: string;
    items: Client[];
};

export type EducationItem = {
    title: string;
    year: string;
    text: string;
};

export type Education = {
    title: string;
    items: EducationItem[];
};

export type ExperienceItem = {
    title: string;
    year: string;
    text: string;
};

export type Experience = {
    title: string;
    items: ExperienceItem[];
};

export type Skill = {
    name: string;
    percentage: number;
};

export type Skills = {
    title: string;
    items: Skill[];
};

export type Project = {
    slug: string;
    title: string;
    category: string;
    client: string;
    img: Image;
};

export type Projects = Project[];

export type About = {
    route: Route;
    title: string;
    paragraphs: Paragraphs;
    services: Services;
    testimonials: Testimonials;
    clients: Clients;
};

export type Resume = {
    route: Route;
    title: string;
    education: Education;
    experience: Experience;
    skills: Skills;
};

export type Portfolio = {
    route: Route;
    title: string;
    select_category_option: string;
    allCategory: string;
    projects: Projects;
};

export type Pages = {
    about: About;
    resume: Resume;
    portfolio: Portfolio;
};
