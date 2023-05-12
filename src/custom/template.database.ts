import Icons from "./icons";

/**
 * @param { import("./database.d.ts").LocaleDateString } localeDateString
 */
export const localeDateString = {
    locales: "en-US",
    options: {
        day: "numeric" as const,
        month: "long" as const,
        year: "numeric" as const,
    },
};

/**
 * @param { import("./database.d.ts").Sidebar } sidebar
 */
export const sidebar = {
    name: "Richard Hanrick",
    profession: "Data Scientist",
    info_more_btn: {
        text: "Show Contacts",
        icon: Icons.chevronDown,
    },
    img: {
        src: "/images/my-avatar.png",
        alt: "Richard Hanrick",
    },

    contacts: [
        {
            title: "Email",
            icon: Icons.mail,
            link: "mailto:richard@example.com",
            text: "richard@example.com",
        },
        {
            title: "Phone",
            icon: Icons.phonePortrait,
            link: "tel:+12133522795",
            text: "+1 (213) 352-2795",
        },
        {
            title: "Location",
            icon: Icons.location,
            address: "Sacramento, California, USA",
        },
    ],

    socials: [
        { link: "https://facebook.com", icon: Icons.facebook },
        { link: "https://twitter.com/", icon: Icons.twitter },
        { link: "https://instagram.com/", icon: Icons.instagram },
        { link: "https://github.com/", icon: Icons.github },
        { link: "https://linkedin.com/", icon: Icons.linkedin },
    ],
};

/**
 * @param { import("./database.d.ts").Pages } pages
 */
export const pages = {
    about: {
        route: { id: "/", nav: "About" },

        seo: {
            // Keep it very short
            title: "Richard Hanrick · Portfolio",
            // Max. 155 characters
            description:
                "Richard Hanrick's portfolio: Explore services, view client work, and read testimonials to see how Richard Hanrick can elevate your project.",
            // The more unique they are, the better.
            keywords: "freelancer, data science, analytics",
        },

        title: "About me",

        paragraphs: [
            "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
            "My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.",
        ],

        services: {
            title: "What i'm doing",
            items: [
                {
                    img: { src: "/images/branding-design.svg", alt: "design icon" },
                    title: "Machine Learning",
                    text: "I create top-notch ML models to tackle various challenges",
                },
                {
                    img: { src: "/images/branding-dev.svg", alt: "Web development icon" },
                    title: "Statistics",
                    text: "Analyzing and interpreting data using essential statistical concepts.",
                },
                {
                    img: { src: "/images/branding-app.svg", alt: "mobile app icon" },
                    title: "Prompt Engineering",
                    text: "Creating quality prompts for improved AI language model performance.",
                },
                {
                    img: { src: "/images/branding-photo.svg", alt: "camera icon" },
                    title: "Photography",
                    text: "I make high-quality photos of any category at a professional level.",
                },
            ],
        },

        testimonials: {
            title: "Testimonials",
            items: [
                {
                    qoute: { src: "/images/branding-quote.svg", alt: "quote icon" },
                    img: { src: "/images/avatar-1.png", alt: "Daniel lewis" },
                    name: "Daniel lewis",
                    date: "2021-06-14",
                    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
                },
                {
                    qoute: { src: "/images/branding-quote.svg", alt: "quote icon" },
                    img: { src: "/images/avatar-2.png", alt: "Jessica miller" },
                    name: "Jessica miller",
                    date: "2021-06-14",
                    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
                },
                {
                    qoute: { src: "/images/branding-quote.svg", alt: "quote icon" },
                    img: { src: "/images/avatar-3.png", alt: "Emily evans" },
                    name: "Emily evans",
                    date: "2021-06-14",
                    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
                },
                {
                    qoute: { src: "/images/branding-quote.svg", alt: "quote icon" },
                    img: { src: "/images/avatar-4.png", alt: "Henry william" },
                    name: "Henry william",
                    date: "2021-06-14",
                    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
                },
            ],
        },

        clients: {
            title: "Clients",
            items: [
                {
                    link: "https://svelte.dev/",
                    img: { src: "/images/logo-1-color.png", alt: "client logo" },
                },
                {
                    link: "https://kit.svelte.dev/",
                    img: { src: "/images/logo-2-color.png", alt: "client logo" },
                },
                {
                    link: "https://fonts.google.com/",
                    img: { src: "/images/logo-3-color.png", alt: "client logo" },
                },
                {
                    link: "https://icon-sets.iconify.design/",
                    img: { src: "/images/logo-4-color.png", alt: "client logo" },
                },
                {
                    link: "https://vercel.com/",
                    img: { src: "/images/logo-5-color.png", alt: "client logo" },
                },
                {
                    link: "https://github.com/",
                    img: { src: "/images/logo-6-color.png", alt: "client logo" },
                },
            ],
        },
    },

    resume: {
        route: { id: "/resume", nav: "Resume" },

        seo: {
            title: "Richard Hanrick · Resume",
            description:
                "Richard Hanrick's portfolio: Explore services, view client work, and read testimonials to see how Richard Hanrick can elevate your project.",
            keywords: "freelancer, data science, analytics",
        },

        title: "Resume",

        education: {
            title: "Education",
            items: [
                {
                    title: "Microsoft Certified Solutions Expert",
                    year: "2021",
                    text: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
                },
                {
                    title: "MSc in Data Science, UCLA",
                    year: "2015 — 2018",
                    text: "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.",
                },
                {
                    title: "BSc in Statistics, UCLA",
                    year: "2012 — 2015",
                    text: "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
                },
            ],
        },

        experience: {
            title: "Experience",
            items: [
                {
                    title: "Data Scientist",
                    year: "2020 — Present",
                    text: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
                },
                {
                    title: "Machine Learning Specialist",
                    year: "2018 — 2020",
                    text: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
                },
                {
                    title: "Statistical Programmer",
                    year: "2016 — 2018",
                    text: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
                },
            ],
        },

        skills: {
            title: "My skills",
            items: [
                { name: "Machine Learning", percentage: 80 },
                { name: "Statistical analysis", percentage: 70 },
                { name: "Data Wrangling", percentage: 90 },
                { name: "Cloud Computing", percentage: 50 },
            ],
        },
    },

    portfolio: {
        route: { id: "/portfolio", nav: "Portfolio" },

        seo: {
            title: "Richard Hanrick · Portfolio",
            description:
                "Richard Hanrick's portfolio: Explore services, view client work, and read testimonials to see how Richard Hanrick can elevate your project.",
            keywords: "freelancer, data science, analytics",
        },

        title: "Portfolio",

        select_category_option: "Select category",
        allCategory: "All",

        projects: [
            /** The `_template` Project page serves as a showcase for the supported Markdown syntax,
             * demonstrating the various formatting options available.
             */

            {
                slug: "_template",
                title: "Template Markdown",
                category: "_Template",
                client: "Acme Comp",
                img: { src: "/images/_template.png", alt: "_template" },
                description: "Supported Markdown syntax showcase",
            },

            {
                slug: "finance",
                title: "Finance",
                category: "Statistics",
                client: "Acme Comp",
                img: { src: "/images/project-1.jpg", alt: "finance" },
                description: "A short (max. 155 charaters) description which can be nicely appear in SEO",
            },
            {
                slug: "orizon",
                title: "Orizon",
                category: "Statistics",
                client: "Acme Comp",
                img: { src: "/images/project-2.png", alt: "orizon" },
                description: "A short (max. 155 charaters) description for SEO",
            },
            {
                slug: "fundo",
                title: "Fundo",
                category: "Machine Learning",
                client: "Acme Comp",
                img: { src: "/images/project-3.jpg", alt: "fundo" },
                description: "A short (max. 155 charaters) description for SEO",
            },
            {
                slug: "brawlhalla",
                title: "Brawlhalla",
                category: "Big Data",
                client: "Acme Comp",
                img: { src: "/images/project-4.png", alt: "brawlhalla" },
                description: "A short (max. 155 charaters) description for SEO",
            },
            {
                slug: "dsm",
                title: "DSM.",
                category: "Machine Learning",
                client: "Acme Comp",
                img: { src: "/images/project-5.png", alt: "dsm" },
                description: "A short (max. 155 charaters) description for SEO",
            },
            {
                slug: "metaspark",
                title: "MetaSpark",
                category: "Machine Learning",
                client: "Acme Comp",
                img: { src: "/images/project-6.png", alt: "metaspark" },
                description: "A short (max. 155 charaters) description for SEO",
            },
            {
                slug: "summary",
                title: "Summary",
                category: "Statistics",
                client: "Acme Comp",
                img: { src: "/images/project-7.png", alt: "summary" },
                description: "A short (max. 155 charaters) description for SEO",
            },
            {
                slug: "task-manager",
                title: "Task Manager",
                category: "Big Data",
                client: "Acme Comp",
                img: { src: "/images/project-8.jpg", alt: "task manager" },
                description: "A short (max. 155 charaters) description for SEO",
            },
            {
                slug: "arrival",
                title: "Arrival",
                category: "Statistics",
                client: "Acme Comp",
                img: { src: "/images/project-9.png", alt: "arrival" },
                description: "A short (max. 155 charaters) description for SEO",
            },
        ],
    },
};
