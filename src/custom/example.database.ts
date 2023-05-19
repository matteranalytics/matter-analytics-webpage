import Icons from "./icons";

export const localeDateString: Database.LocaleDateString = {
    locales: "en-US",
    options: {
        day: "numeric" as const,
        month: "long" as const,
        year: "numeric" as const,
    },
};

export const sidebar: Database.Sidebar = {
    name: "Richard Hanrick",
    profession: "Data Scientist",
    img: {
        src: "/example_images/my-avatar.png",
        alt: "Richard Hanrick",
    },

    showContacts: {
        text: "Show Contacts",
        icon: Icons.chevronDown,
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
            icon: Icons.phone,
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

export const pages: Database.Pages = {
    about: {
        route: { id: "/", nav: "About" },

        seo: {
            // Keep it very short
            title: "Richard Hanrick · Profile",
            // Max. 155 characters
            description:
                "Richard Hanrick's profile: Explore services, view client work, and read testimonials to see how Richard Hanrick can elevate your project.",
            // The more unique they are, the better.
            keywords: "freelancer, data science, analytics",
        },

        title: "About me",

        paragraphs: [
            "I'm a Data Scientist and Machine Learning Engineer from Sacramento, California, working in the field of data analysis and predictive modeling. I am passionate about transforming complex data into valuable insights and actionable solutions.",
            "My job is to analyze your data and create models that are both efficient and easy to understand, while ensuring they deliver accurate predictions. My aim is to help you make data-driven decisions and unlock the full potential of your data. I have developed data-driven solutions for numerous renowned companies across various industries.",
        ],

        services: {
            title: "What I'm doing",
            items: [
                {
                    title: "Machine Learning",
                    text: "I create top-notch ML models to tackle various challenges.",
                    icon: Icons.brain,
                },
                {
                    title: "Statistics",
                    text: "Analyzing and interpreting data using essential statistical concepts.",
                    icon: Icons.chartPie,
                },
                {
                    title: "Prompt Engineering",
                    text: "Creating quality prompts for improved AI language model performance.",
                    icon: Icons.code,
                },
                {
                    title: "Photography",
                    text: "I make high-quality photos of any category at a professional level.",
                    icon: Icons.camera,
                },
            ],
        },

        testimonials: {
            title: "Testimonials",
            closeIcon: Icons.close,
            quoteIcon: Icons.qoute,
            items: [
                {
                    name: "Daniel lewis",
                    date: "2021-06-14",
                    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
                    img: { src: "/example_images/avatar-1.png", alt: "Daniel lewis" },
                },
                {
                    name: "Jessica miller",
                    date: "2021-06-14",
                    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
                    img: { src: "/example_images/avatar-2.png", alt: "Jessica miller" },
                },
                {
                    name: "Emily evans",
                    date: "2021-06-14",
                    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
                    img: { src: "/example_images/avatar-3.png", alt: "Emily evans" },
                },
                {
                    name: "Henry william",
                    date: "2021-06-14",
                    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
                    img: { src: "/example_images/avatar-4.png", alt: "Henry william" },
                },
            ],
        },

        clients: {
            title: "Clients",
            items: [
                {
                    link: "https://svelte.dev/",
                    img: { src: "/example_images/logo-1-color.png", alt: "client logo" },
                },
                {
                    link: "https://kit.svelte.dev/",
                    img: { src: "/example_images/logo-2-color.png", alt: "client logo" },
                },
                {
                    link: "https://fonts.google.com/",
                    img: { src: "/example_images/logo-3-color.png", alt: "client logo" },
                },
                {
                    link: "https://icon-sets.iconify.design/",
                    img: { src: "/example_images/logo-4-color.png", alt: "client logo" },
                },
                {
                    link: "https://vercel.com/",
                    img: { src: "/example_images/logo-5-color.png", alt: "client logo" },
                },
                {
                    link: "https://github.com/",
                    img: { src: "/example_images/logo-6-color.png", alt: "client logo" },
                },
            ],
        },
    },

    resume: {
        route: { id: "/resume", nav: "Resume" },

        seo: {
            title: "Richard Hanrick · Resume",
            description:
                "Richard Hanrick's profile: Explore services, view client work, and read testimonials to see how Richard Hanrick can elevate your project.",
            keywords: "freelancer, data science, analytics",
        },

        title: "Resume",

        education: {
            title: "Education",
            icon: Icons.book,
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
            icon: Icons.book,
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
                "Richard Hanrick's profile: Explore services, view client work, and read testimonials to see how Richard Hanrick can elevate your project.",
            keywords: "freelancer, data science, analytics",
        },

        title: "Portfolio",
        imageIcon: Icons.eye,

        categoryFilter: {
            instruction: "Select Category",
            icon: Icons.chevronDown,
            allCategory: "All",
        },

        projects: [
            /** The `_markdown_syntax` Project page serves as a showcase for the supported Markdown syntax,
             * demonstrating the various formatting options available.
             * Comment out this item, so it will not appear as your first Project on your site!
             */
            {
                slug: "_markdown_syntax",
                title: "Markdown Syntax",
                category: "Markdown",
                client: "Acme Comp",
                description: "Supported Markdown syntax showcase",
                img: { src: "/example_images/_markdown_syntax.png", alt: "markdown syntax" },
            },

            {
                slug: "finance",
                title: "Finance",
                category: "Statistics",
                client: "Acme Comp",
                description: "A short (max. 155 charaters) description which can be nicely appear in SEO",
                img: { src: "/example_images/project-1.jpg", alt: "finance" },
            },
            {
                slug: "orizon",
                title: "Orizon",
                category: "Statistics",
                client: "Acme Comp",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/project-2.png", alt: "orizon" },
            },
            {
                slug: "fundo",
                title: "Fundo",
                category: "Machine Learning",
                client: "Acme Comp",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/project-3.png", alt: "fundo" },
            },
            {
                slug: "brawlhalla",
                title: "Brawlhalla",
                category: "Big Data",
                client: "Acme Comp",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/project-4.png", alt: "brawlhalla" },
            },
            {
                slug: "dsm",
                title: "DSM",
                category: "Machine Learning",
                client: "Acme Comp",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/project-5.png", alt: "dsm" },
            },
        ],
    },
};
