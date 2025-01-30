import Icons from "./icons";

export const sidebar: Database.Sidebar = {
    name: "Richard Hendricks",
    profession: "Software Engineer",
    img: {
        src: "/example_images/richard-hendricks.jpg",
        alt: "Richard Hendricks",
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
        nav: "About",
        title: "About me",

        seo: {
            // Keep it very short
            title: "Richard Hendricks · CEO Pied Piper",
            // Max. 155 characters
            description:
                "Richard Hendricks' profile: Explore services, view client work, and read testimonials to see how Richard Hendricks can elevate your project.",
            // The more unique they are, the better.
            keywords: "tech entrepreneur, Pied Piper, compression technology, Silicon Valley, CEO",
        },

        paragraphs: [
            "I'm Richard Hendricks, the CEO and founder of Pied Piper. Originally from Tulsa, Oklahoma, I moved to Silicon Valley to pursue my dream of making a significant impact on the tech industry. My passion lies in creating and developing revolutionary technologies.",
            "My life's work is dedicated to revolutionizing the world of data compression with Pied Piper's Middle-Out technology. Our aim is to make data storage and transfer more efficient than ever before, thereby improving the technology landscape as a whole. I have had the privilege to lead a team of brilliant minds and together, we've brought Pied Piper to the forefront of innovation.",
        ],

        services: {
            title: "What I'm doing",
            items: [
                {
                    title: "Leading Pied Piper",
                    text: "I steer the ship of Pied Piper towards creating and implementing game-changing technology.",
                    icon: Icons.compass,
                },
                {
                    title: "Innovative Tech Development",
                    text: "Leading the creation of disruptive technology, including the Middle-Out compression algorithm.",
                    icon: Icons.code,
                },
                {
                    title: "Strategic Planning",
                    text: "Planning and executing strategies to bring Pied Piper's technology to the market.",
                    icon: Icons.pawn,
                },
                {
                    title: "Team Building",
                    text: "Cultivating a creative and productive work environment to foster innovation and drive growth.",
                    icon: Icons.group,
                },
            ],
        },

        testimonials: {
            title: "Testimonials",
            closeIcon: Icons.close,
            quoteIcon: Icons.qoute,
            items: [
                {
                    name: "Jared Dunn",
                    date: "2023-05-26",
                    text: "Richard's vision for Pied Piper was simply astounding. His meticulous attention to detail and unwavering commitment to creating a new, disruptive technology was truly inspiring. His ability to navigate through the complexities of the tech industry and keep his team focused is nothing short of amazing.",
                    img: { src: "/example_images/testimonial-jared-dunn.jpg", alt: "Jared Dunn" },
                },
                {
                    name: "Bertram Gilfoyle",
                    date: "2023-05-26",
                    text: "Despite our disagreements, I have to admit, Richard knew how to build something out of nothing. His Middle-Out compression algorithm was a game-changer. It's rare to find someone so dedicated to pushing boundaries and refusing to settle for mediocrity.",
                    img: { src: "/example_images/testimonial-bertram-gilfoyle.jpg", alt: "Bertram Gilfoyle" },
                },
                {
                    name: "Dinesh Chugtai",
                    date: "2023-05-26",
                    text: "Working with Richard has been an interesting experience, to say the least. His relentless drive to turn Pied Piper into a market-leading company was infectious. His knack for problem-solving and thinking outside of the box has often been the key to our success.",
                    img: { src: "/example_images/testimonial-dinesh-chugtai.jpg", alt: "Dinesh Chugtai" },
                },
                {
                    name: "Erlich Bachman",
                    date: "2023-05-26",
                    text: "Richard may not have been the easiest person to work with, but his sheer genius cannot be denied. His drive to revolutionize the tech industry with Pied Piper was a force to be reckoned with. As much as it pains me to admit it, Richard's leadership was instrumental in our achievements.",
                    img: { src: "/example_images/testimonial-erlich-bachman.jpg", alt: "Erlich Bachman" },
                },
            ],
        },

        clients: {
            title: "Clients",
            items: [
                {
                    link: "https://silicon-valley.fandom.com/wiki/Pied_Piper_(company)",
                    img: { src: "/example_images/client-piedpiper-logo.png", alt: "client logo" },
                },
                {
                    link: "https://google.com/",
                    img: { src: "/example_images/client-google-logo.png", alt: "client logo" },
                },
                {
                    link: "https://meta.com/",
                    img: { src: "/example_images/client-meta-logo.png", alt: "client logo" },
                },
                {
                    link: "https://datalumina.io/",
                    img: { src: "/example_images/client-datalumina-logo.png", alt: "client logo" },
                },
                {
                    link: "https://microsoft.com/",
                    img: { src: "/example_images/client-microsoft-logo.png", alt: "client logo" },
                },
                {
                    link: "https://amazon.com/",
                    img: { src: "/example_images/client-amazon-logo.png", alt: "client logo" },
                },
            ],
        },
    },

    resume: {
        nav: "Resume",
        title: "Resume",

        seo: {
            title: "Richard Hendricks · Resume",
            description:
                "Richard Hendricks' profile: Explore services, view client work, and read testimonials to see how Richard Hendricks can elevate your project.",
            keywords: "freelancer, data science, analytics",
        },

        education: {
            title: "Education",
            icon: Icons.book,
            items: [
                {
                    title: "Self-taught Programmer and Engineer",
                    year: "2000 - Present",
                    text: "Began coding from a young age, leveraging open-source resources and community forums to learn various programming languages and algorithms.",
                },
                {
                    title: "BSc in Computer Science, University of Oklahoma",
                    year: "2005 — 2009",
                    text: "Studied Computer Science where I cultivated my passion for algorithmic problem-solving and began developing the foundation for Pied Piper's compression technology.",
                },
            ],
        },

        experience: {
            title: "Experience",
            icon: Icons.suitcase,
            items: [
                {
                    title: "CEO, Pied Piper",
                    year: "2014 — Present",
                    text: "Founded and led a tech startup, developed the revolutionary Middle-Out compression algorithm, and navigated through various business and technical challenges to make Pied Piper a prominent name in the tech industry.",
                },
                {
                    title: "Software Engineer, Hooli",
                    year: "2009 — 2013",
                    text: "Worked on various projects as a part of the core development team, honed my programming skills, and gained experience that led to the conception of Pied Piper.",
                },
            ],
        },

        skills: {
            title: "My skills",
            items: [
                { name: "Algorithm Design", percentage: 90 },
                { name: "Software Engineering", percentage: 85 },
                { name: "Leadership & Team Management", percentage: 70 },
                { name: "Product Development", percentage: 80 },
            ],
        },
    },

    portfolio: {
        nav: "Portfolio",
        title: "Portfolio",

        seo: {
            title: "Richard Hendricks · Portfolio",
            description:
                "Richard Hendricks' profile: Explore services, view client work, and read testimonials to see how Richard Hendricks can elevate your project.",
            keywords: "freelancer, data science, analytics",
        },

        imageIcon: Icons.eye,

        categoryFilter: {
            instruction: "Select Category",
            icon: Icons.chevronDown,
            allCategory: "All",
        },

        projects: [
            {
                slug: "pied-piper",
                title: "Pied Piper",
                category: "Algorithms",
                client: "In-House Project",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/project-pied-piper.jpg", alt: "pied-piper" },
            },
            {
                slug: "finance",
                title: "Finance",
                category: "Data Visualization",
                client: "Acme Comp",
                description: "A short (max. 155 charaters) description which can be nicely appear in SEO",
                img: { src: "/example_images/project-finance.jpg", alt: "finance" },
            },
            {
                slug: "orizon",
                title: "Orizon",
                category: "Data Visualization",
                client: "Acme Comp",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/project-orizon.png", alt: "orizon" },
            },
            {
                slug: "fundo",
                title: "Fundo",
                category: "Algorithms",
                client: "Acme Comp",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/project-fundo.png", alt: "fundo" },
            },
            {
                slug: "dsm",
                title: "DSM",
                category: "Algorithms",
                client: "Acme Comp",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/project-dsm.png", alt: "dsm" },
            },

            /** The `_markdown-syntax` Project page serves as a showcase for the supported Markdown syntax,
             * demonstrating the various formatting options available.
             * Comment out this item, so it will not appear as your first Project on your site!
             */
            {
                slug: "_markdown-syntax",
                title: "Markdown Syntax",
                category: "Markdown",
                client: "Acme Comp",
                description: "Supported Markdown syntax showcase",
                img: { src: "/example_images/_project-markdown-syntax.png", alt: "markdown syntax" },
            },
        ],
    },

    blog: {
        nav: "Blog",
        title: "Blog",

        seo: {
            title: "Richard Hendricks · Blog",
            description:
                "Richard Hendricks' profile: Explore services, view client work, and read testimonials to see how Richard Hendricks can elevate your post.",
            keywords: "freelancer, data science, analytics",
        },

        categoryFilter: {
            instruction: "Select Category",
            icon: Icons.chevronDown,
            allCategory: "All",
        },

        posts: [
            {
                slug: "pied-piper",
                title: "Pied Piper",
                category: "Algorithms",
                date: "2023-05-26",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/post-pied-piper.jpg", alt: "pied-piper" },
            },
            {
                slug: "finance",
                title: "Finance",
                category: "Data Visualization",
                date: "2023-04-26",
                description: "A short (max. 155 charaters) description which can be nicely appear in SEO",
                img: { src: "/example_images/post-finance.jpg", alt: "finance" },
            },
            {
                slug: "orizon",
                title: "Orizon",
                category: "Data Visualization",
                date: "2023-03-26",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/post-orizon.png", alt: "orizon" },
            },
            {
                slug: "fundo",
                title: "Fundo",
                category: "Algorithms",
                date: "2023-02-26",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/post-fundo.png", alt: "fundo" },
            },
            {
                slug: "dsm",
                title: "DSM",
                category: "Algorithms",
                date: "2023-01",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/post-dsm.png", alt: "dsm" },
            },
        ],
    },
};
