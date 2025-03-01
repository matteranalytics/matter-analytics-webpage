import type Icon from "@iconify/svelte";
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
            img: Image;
            showContacts: InfoMoreButton;
            contacts?: Contact[];
            socials?: Social[];
        };

        type Image = {
            src: string;
            alt: string;
        };

        type Paragraphs = string[];

        type Service = {
            title: string;
            text: string;
            icon: IconifyIcon;
        };

        type Services = {
            title: string;
            items: Service[];
        };

        type Testimonial = {
            name: string;
            date: string;
            text: string;
            img: Image;
        };

        type Testimonials = {
            title: string;
            closeIcon: IconifyIcon;
            quoteIcon: IconifyIcon;
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
            icon: IconifyIcon;
            items: EducationItem[];
        };

        type ProdItem = {
            title: string;
            year: string;
            text: string;
        };

        type Prod = {
            title: string;
            icon: IconifyIcon;
            items: ProdItem[];
        };

        type ExperienceItem = {
            title: string;
            year: string;
            text: string;
        };

        type Experience = {
            title: string;
            icon: IconifyIcon;
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

        type CategoryFilter = {
            instruction: string;
            icon: IconifyIcon;
            allCategory: string;
        };

        type Project = {
            slug: string;
            title: string;
            category?: string;
            client?: string;
            description: string;
            img: Image;
        };

        type Projects = Project[];

        type Post = {
            slug: string;
            title: string;
            category?: string;
            date?: string;
            description: string;
            img: Image;
        };

        type Posts = Post[];

        type Home = {
            nav: string;
            title: string;
            seo: SEO;
            paragraphs?: Paragraphs;
            services?: Services;
            testimonials?: Testimonials;
            clients?: Clients;
        };

        type Resume = {
            nav: string;
            title: string;
            seo: SEO;
            paragraphs?: Paragraphs;
            education?: Education;
            experience?: Experience;
            prod?: Prod;
            skills?: Skills;
        };

        type Portfolio = {
            nav: string;
            title: string;
            seo: SEO;
            imageIcon: IconifyIcon;
            categoryFilter?: CategoryFilter;
            projects: Projects;
        };

        type Blog = {
            nav: string;
            title: string;
            seo: SEO;
            categoryFilter?: CategoryFilter;
            posts: Posts;
        };

        type About = {
            nav: string;
            title: string;
            seo: SEO;
            paragraphs?: Paragraphs;
            img: Image;
        };

        type Pages = {
            home: Home;
            resume?: Resume;
            portfolio?: Portfolio;
            blog?: Blog;
            about?: About;
        };
    }
}
