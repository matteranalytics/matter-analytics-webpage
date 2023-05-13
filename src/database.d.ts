import { IconifyIcon } from "@iconify/types";

declare global {
    namespace Database {
        type LocaleDateString = {
            locales: string;
            options: {
                day: "numeric" | "2-digit";
                month: "numeric" | "2-digit" | "long" | "short" | "narrow";
                year: "numeric" | "2-digit";
            };
        };

        type InfoMoreButton = {
            text: string;
            icon: IconifyIcon;
        };

        type Image = {
            src: string;
            alt: string;
        };

        type Contact = {
            title: string;
            icon: IconifyIcon;
            link?: string;
            text?: string;
            address?: string;
        };

        type Social = {
            link: string;
            icon: IconifyIcon;
        };

        type Sidebar = {
            name: string;
            profession: string;
            info_more_btn: InfoMoreButton;
            img: Image;
            contacts?: Contact[];
            socials?: Social[];
        };

        type Route = {
            id: string;
            nav: string;
        };

        type Image = {
            src: string;
            alt: string;
        };

        type Paragraphs = string[];

        type Service = {
            img: Image;
            title: string;
            text: string;
        };

        type Services = {
            title: string;
            items: Service[];
        };

        type Testimonial = {
            qoute: Image;
            img: Image;
            name: string;
            date: string;
            text: string;
        };

        type Testimonials = {
            title: string;
            items: Testimonial[];
        };

        type Client = {
            link: string;
            img: Image;
        };

        type Clients = {
            title: string;
            items: Client[];
        };

        type EducationItem = {
            title: string;
            year: string;
            text: string;
        };

        type Education = {
            title: string;
            items: EducationItem[];
        };

        type ExperienceItem = {
            title: string;
            year: string;
            text: string;
        };

        type Experience = {
            title: string;
            items: ExperienceItem[];
        };

        type Skill = {
            name: string;
            percentage: number;
        };

        type Skills = {
            title: string;
            items: Skill[];
        };

        type SEO = {
            title: string;
            description: string;
            keywords: string;
        };

        type Project = {
            slug: string;
            title: string;
            category?: string;
            client?: string;
            img: Image;
            description: string;
        };

        type Projects = Project[];

        type About = {
            route: Route;
            seo: SEO;
            title: string;
            paragraphs?: Paragraphs;
            services?: Services;
            testimonials?: Testimonials;
            clients?: Clients;
        };

        type Resume = {
            route: Route;
            seo: SEO;
            title: string;
            education?: Education;
            experience?: Experience;
            skills?: Skills;
        };

        type Portfolio = {
            route: Route;
            seo: SEO;
            title: string;
            select_category_option?: string;
            allCategory?: string;
            projects: Projects;
        };

        type Pages = {
            about: About;
            resume?: Resume;
            portfolio?: Portfolio;
        };
    }
}
