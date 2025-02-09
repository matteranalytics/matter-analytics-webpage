import Icons from "./icons";

export const sidebar: Database.Sidebar = {
    name: "Matter Analytics",
    profession: "Tailored Generative AI & ML Solutions to Elevate Your Business",
    img: {
        src: "/example_images/base_icon_transparent_background.png",
        alt: "Matter Analytics Logo",
    },

    showContacts: {
        text: "Show Contact Info",
        icon: Icons.chevronDown,
    },

    contacts: [
        {
            title: "Email",
            icon: Icons.mail,
            link: "mailto:info@matteranalytics.io",
            text: "info@matteranalytics.io",
        },
        // {
        //     title: "Phone",
        //     icon: Icons.phone,
        //     link: "tel:+12133522795",
        //     text: "+1 (213) 352-2795",
        // },
        {
            title: "Location",
            icon: Icons.location,
            address: "Chicago, Illinois, USA",
        },
    ],

    socials: [
        // { link: "https://facebook.com", icon: Icons.facebook },
        // { link: "https://twitter.com/", icon: Icons.twitter },
        // { link: "https://instagram.com/", icon: Icons.instagram },
        { link: "https://github.com/matteranalytics", icon: Icons.github },
        { link: "https://www.linkedin.com/company/90429478/admin/dashboard/", icon: Icons.linkedin },
    ],
};

export const pages: Database.Pages = {
    about: {
        nav: "Home",
        title: "Let’s figure out what matters",

        seo: {
            // Keep it very short
            title: "Matter Analytics",
            // Max. 155 characters
            description:
                "Matter Analytics Mission.",
            // The more unique they are, the better.
            keywords: "ML, AI, Data Science",
        },

        paragraphs: [
            "By partnering closely with your leadership, we leverage our deep AI and ML expertise to drive measurable business value. Our collaborative approach ensures each solution is not just cutting-edge, but also aligned with your strategic vision—delivering tangible impact that propels your organization forward.",
        ],

        services: {
            title: "Our Services",
            items: [
                {
                    title: "AI Engineering & Automation",
                    text: "End-to-end design and implementation of AI-driven systems and automated workflows that enhance operational efficiency.",
                    icon: Icons.brain,
                },
                {
                    title: "Generative AI & Conversational Experiences",
                    text: "Specialized development of generative AI solutions, from large language model (LLM) fine-tuning to custom chatbots that deliver human-like interactions.",
                    icon: Icons.robot,
                },
                {
                    title: "ML Developement & Intelligent Insights",
                    text: "Advanced analytics and machine learning solutions aimed at extracting actionable insights, forecasting trends, and driving data-backed decisions.",
                    icon: Icons.gears,
                },
                {
                    title: "Data Strategy & AI Readiness Consulting",
                    text: "A structured approach to evaluating your data architecture, governance, and analytics maturity to ensure you’re set up for scalable AI adoption.",
                    icon: Icons.chartLine,
                },
                {
                    title: "MLOps & AI Lifecycle Management",
                    text: "Ensuring that AI and ML solutions don’t just work once but continue to deliver reliable, high-quality results over time through robust deployment and maintenance processes.",
                    icon: Icons.arrowsRotate,
                },
            ],
        },

        // testimonials: {
        //     title: "Testimonials",
        //     closeIcon: Icons.close,
        //     quoteIcon: Icons.qoute,
        //     items: [
        //         {
        //             name: "Jared Dunn",
        //             date: "2023-05-26",
        //             text: "Richard's vision for Pied Piper was simply astounding. His meticulous attention to detail and unwavering commitment to creating a new, disruptive technology was truly inspiring. His ability to navigate through the complexities of the tech industry and keep his team focused is nothing short of amazing.",
        //             img: { src: "/example_images/testimonial-jared-dunn.jpg", alt: "Jared Dunn" },
        //         },
        //         {
        //             name: "Bertram Gilfoyle",
        //             date: "2023-05-26",
        //             text: "Despite our disagreements, I have to admit, Richard knew how to build something out of nothing. His Middle-Out compression algorithm was a game-changer. It's rare to find someone so dedicated to pushing boundaries and refusing to settle for mediocrity.",
        //             img: { src: "/example_images/testimonial-bertram-gilfoyle.jpg", alt: "Bertram Gilfoyle" },
        //         },
        //         {
        //             name: "Dinesh Chugtai",
        //             date: "2023-05-26",
        //             text: "Working with Richard has been an interesting experience, to say the least. His relentless drive to turn Pied Piper into a market-leading company was infectious. His knack for problem-solving and thinking outside of the box has often been the key to our success.",
        //             img: { src: "/example_images/testimonial-dinesh-chugtai.jpg", alt: "Dinesh Chugtai" },
        //         },
        //         {
        //             name: "Erlich Bachman",
        //             date: "2023-05-26",
        //             text: "Richard may not have been the easiest person to work with, but his sheer genius cannot be denied. His drive to revolutionize the tech industry with Pied Piper was a force to be reckoned with. As much as it pains me to admit it, Richard's leadership was instrumental in our achievements.",
        //             img: { src: "/example_images/testimonial-erlich-bachman.jpg", alt: "Erlich Bachman" },
        //         },
        //     ],
        // },

        clients: {
            title: "Clients",
            items: [
                {
                    link: "https://www.fasdcamp.org/",
                    img: { src: "/example_images/client-camp_fasd.png", alt: "client logo" },
                },
                {
                    link: "https://www.convergency.cloud/en-us/",
                    img: { src: "/example_images/client-convergency.png", alt: "client logo" },
                },
                {
                    link: "https://www.ama-assn.org/",
                    img: { src: "/example_images/client-ama.png", alt: "client logo" },
                },
            ],
        },
    },

    resume: {
        nav: "Approach",
        title: "Our Approach",

        seo: {
            title: "Matter Analytics - Our Approach",
            description:
                "Matter Analytics approach to AI & ML Projects",
            keywords: "freelancer, data science, analytics",
        },

        education: {
            title: "Data Assessement | DAS",
            icon: Icons.database,
            items: [
                {
                    title: "Stakeholder Alignment & Requirements Gathering",
                    year: "Phase 1.1 | Timeline Estimate: 1-2 Weeks",
                    text: "Identify business objectives, clarify data needs, and define success metrics. This foundational step ensures every subsequent activity aligns with your strategic goals.",
                },
                {
                    title: "AI & Data Scope with Roadmap Design",
                    year: "Phase 1.2 | Timeline Estimate: 1-2 Weeks",
                    text: "Conduct an in-depth review of your data pipelines, database structures, and access protocols to understand the full data environment. Based on these insights, refine the AI/ML solution vision, outline a phased project plan, and maintain comprehensive documentation—capturing key decisions, open questions, and next steps to ensure all stakeholders remain aligned on the path forward.",
                },
                {
                    title: "AI & Data Scope with Roadmap Design",
                    year: "Phase 1.3 | Timeline Estimate: (Ongoing as Needed)",
                    text: "Maintain comprehensive records of findings, strategies, and proposed solutions. This ensures stakeholders remain aligned and fully informed at each milestone.",
                },
            ],
        },

        experience: {
            title: "Proof of Concept | PoC",
            icon: Icons.flask,
            items: [
                {
                    title: "Custom Solution Construction",
                    year: "Phase 2.1 | Timeline Estimate: 2-4 Weeks",
                    text: "Leverage insights from DAS to build an initial prototype using a representative and appropriate subset of data. Demonstrate feasibility and potential impact of the AI/ML solution.",
                },
                {
                    title: "Iterative Development & Stakeholder Feedback",
                    year: "Phase 2.2 | Timeline Estimate: Concurrent / Ongoing",
                    text: "Continuously refine the model and design based on stakeholder input. Our lean, feedback-driven approach accelerates delivery while minimizing overhead.",
                },
                {
                    title: "Production-Readiness & Architecture Assessment",
                    year: "Phase 2.3 | Timeline Estimate: 1 Week",
                    text: "Define a robust plan to transition the PoC into a production environment, including data governance, security protocols, and infrastructure considerations. Evaluate best-fit architectures to ensure scalability and long-term maintainability for your AI/ML solution.",
                },
                
            ],
        },

        prod: {
            title: "Production | Prod",
            icon: Icons.rocket,
            items: [
                {
                    title: "Seamless Integration & Final Deployment",
                    year: "Phase 3.1 | Timeline Estimate: 2-4 Weeks",
                    text: "Transition the refined PoC to a production environment. Fine-tune performance, security, and scalability to meet enterprise standards and deliver immediate value.",
                },
                {
                    title: "Impact Measurement & ROI Maximization",
                    year: "Phase 3.2 | Timeline Estimate: Post-Deployment / Ongoing",
                    text: "Implement automatic metric tracking to evaluate solution performance and validate ROI. This data-driven lens informs further optimizations and strategic enhancements.",
                },
                {
                    title: "Training, Support & Optional CI/CD",
                    year: "Phase 3.3 | Timeline Estimate: As-Needed",
                    text: "Equip your team with the skills to leverage new AI/ML capabilities. We also offer optional CI/CD for continuous updates, on-call support, and rapid model iteration—keeping the solution fresh and high-performing.",
                },
            ],
        },

        // skills: {
        //     title: "My skills",
        //     items: [
        //         { name: "Algorithm Design", percentage: 90 },
        //         { name: "Software Engineering", percentage: 85 },
        //         { name: "Leadership & Team Management", percentage: 70 },
        //         { name: "Product Development", percentage: 80 },
        //     ],
        // },
    },

    portfolio: {
        nav: "Services",
        title: "Our Services",

        seo: {
            title: "Matter Analytics · Services",
            description:
                "Matter Analytics' services",
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
                slug: "ai-engineering-and-automation",
                title: "AI Engineering & Automation",
                category: "Generative AI",
                // client: "In-House Project",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/service-ai-engineering.jpeg", alt: "pied-piper" },
            },
            {
                slug: "gen-ai-and-conversationa-experiences",
                title: "Generative AI & Conversational Experiences",
                category: "Generative AI",
                // client: "Acme Comp",
                description: "A short (max. 155 charaters) description which can be nicely appear in SEO",
                img: { src: "/example_images/service-chatbot.jpeg", alt: "finance" },
            },
            {
                slug: "ml-dev-and-intelligent-insights",
                title: "ML Developement & Intelligent Insights",
                category: "Machine Leaning",
                // client: "Acme Comp",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/service-ml-insights.jpg", alt: "orizon" },
            },
            {
                slug: "data-strat-and-ai-readiness-consult",
                title: "Data Strategy & AI Readiness Consulting",
                category: "Consultation",
                // client: "Acme Comp",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/service-consulting.png", alt: "fundo" },
            },
            {
                slug: "mlops-ai-lifecycle-mgmt",
                title: "MLOps & AI Lifecycle Management",
                category: "CI/CD",
                // client: "Acme Comp",
                description: "A short (max. 155 charaters) description for SEO",
                img: { src: "/example_images/service-mlops.jpeg", alt: "dsm" },
            },

            /** The `_markdown-syntax` Project page serves as a showcase for the supported Markdown syntax,
             * demonstrating the various formatting options available.
             * Comment out this item, so it will not appear as your first Project on your site!
             */
            // {
            //     slug: "_markdown-syntax",
            //     title: "Markdown Syntax",
            //     category: "Markdown",
            //     client: "Acme Comp",
            //     description: "Supported Markdown syntax showcase",
            //     img: { src: "/example_images/_project-markdown-syntax.png", alt: "markdown syntax" },
            // },
        ],
    },

    // blog: {
    //     nav: "Projects",
    //     title: "Our Projects",

    //     seo: {
    //         title: "Richard Hendricks · Blog",
    //         description:
    //             "Richard Hendricks' profile: Explore services, view client work, and read testimonials to see how Richard Hendricks can elevate your post.",
    //         keywords: "freelancer, data science, analytics",
    //     },

    //     categoryFilter: {
    //         instruction: "Select Category",
    //         icon: Icons.chevronDown,
    //         allCategory: "All",
    //     },

    //     posts: [
    //         {
    //             slug: "pied-piper",
    //             title: "Pied Piper",
    //             category: "Algorithms",
    //             date: "2023-05-26",
    //             description: "A short (max. 155 charaters) description for SEO",
    //             img: { src: "/example_images/post-pied-piper.jpg", alt: "pied-piper" },
    //         },
    //         {
    //             slug: "finance",
    //             title: "Finance",
    //             category: "Data Visualization",
    //             date: "2023-04-26",
    //             description: "A short (max. 155 charaters) description which can be nicely appear in SEO",
    //             img: { src: "/example_images/post-finance.jpg", alt: "finance" },
    //         },
    //         {
    //             slug: "orizon",
    //             title: "Orizon",
    //             category: "Data Visualization",
    //             date: "2023-03-26",
    //             description: "A short (max. 155 charaters) description for SEO",
    //             img: { src: "/example_images/post-orizon.png", alt: "orizon" },
    //         },
    //         {
    //             slug: "fundo",
    //             title: "Fundo",
    //             category: "Algorithms",
    //             date: "2023-02-26",
    //             description: "A short (max. 155 charaters) description for SEO",
    //             img: { src: "/example_images/post-fundo.png", alt: "fundo" },
    //         },
    //         {
    //             slug: "dsm",
    //             title: "DSM",
    //             category: "Algorithms",
    //             date: "2023-01",
    //             description: "A short (max. 155 charaters) description for SEO",
    //             img: { src: "/example_images/post-dsm.png", alt: "dsm" },
    //         },
    //     ],
    // },
};
