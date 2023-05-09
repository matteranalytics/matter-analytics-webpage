import Icons from "./icons";

/**
 * @param { import("./vcard.d.ts").LocaleDateString } localeDateString
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
 * @param { import("./vcard.d.ts").Sidebar } sidebar
 */
export const sidebar = {
    name: "Richard hanrick",
    title: "Web developer",
    info_more_btn: {
        text: "Show Contacts",
        icon: Icons.chevronDown,
    },
    img: {
        src: "/images/my-avatar.png",
        alt: "Richard hanrick",
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
            title: "Birthday",
            icon: Icons.calendar,
            date: "1982-06-23",
        },
        {
            title: "Location",
            icon: Icons.location,
            address: "Sacramento, California, USA",
        },
    ],

    socials: [
        { link: "https://github.com/", icon: Icons.github },
        { link: "https://mastodon.social/explore", icon: Icons.mastodon },
        { link: "https://www.youtube.com/", icon: Icons.youtube },
    ],
};

/**
 * @param { import("./vcard.d.ts").Pages } pages
 */
export const pages = {
    about: {
        route: { id: "/", nav: "About" },

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
                    title: "Web design",
                    text: "The most modern and high-quality design made at a professional level.",
                },
                {
                    img: { src: "/images/branding-dev.svg", alt: "Web development icon" },
                    title: "Web development",
                    text: "High-quality development of sites at the professional level.",
                },
                {
                    img: { src: "/images/branding-app.svg", alt: "mobile app icon" },
                    title: "Mobile apps",
                    text: "Professional development of applications for iOS and Android.",
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

        title: "Resume",

        education: {
            title: "Education",
            items: [
                {
                    title: "University school of the arts",
                    year: "2007 — 2008",
                    text: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
                },
                {
                    title: "New york academy of art",
                    year: "2006 — 2007",
                    text: "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.",
                },
                {
                    title: "High school of art and design",
                    year: "2002 — 2004",
                    text: "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
                },
            ],
        },

        experience: {
            title: "Experience",
            items: [
                {
                    title: "Creative director",
                    year: "2015 — Present",
                    text: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
                },
                {
                    title: "Art director",
                    year: "2013 — 2015",
                    text: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
                },
                {
                    title: "Web designer",
                    year: "2010 — 2013",
                    text: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
                },
            ],
        },

        skills: {
            title: "My skills",
            items: [
                { name: "Web design", percentage: 80 },
                { name: "Graphic design", percentage: 70 },
                { name: "Branding", percentage: 90 },
                { name: "WordPress", percentage: 50 },
            ],
        },
    },

    portfolio: {
        route: { id: "/portfolio", nav: "Portfolio" },

        title: "Portfolio",

        select_category_option: "Select category",
        allCategory: "All",

        projects: [
            {
                slug: "finance",
                title: "Finance",
                category: "Web development",
                img: { src: "/images/project-1.jpg", alt: "finance" },
                short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et.",
                long: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et. Nam pulvinar commodo velit at molestie. Vestibulum mattis, nulla eu tempor congue, ligula orci ultrices metus, semper finibus libero erat quis ipsum. Fusce sem metus, vulputate ac libero non, vestibulum auctor sem. Morbi gravida leo eu tempus interdum. Duis feugiat sem luctus nisl interdum, sit amet posuere lorem aliquet. Sed ligula libero, dapibus a auctor ut, tristique a ligula.",
                    "Ut vitae libero ex. Fusce non leo quam. Vivamus ac odio ex. Morbi urna metus, interdum non dolor eu, efficitur eleifend magna. Donec elementum finibus felis at molestie. Donec sit amet enim vel ipsum vestibulum faucibus.",
                    "Aenean eros dui, faucibus id massa eu, faucibus scelerisque sem.",
                ],
            },
            {
                slug: "orizon",
                title: "Orizon",
                category: "Web development",
                img: { src: "/images/project-2.png", alt: "orizon" },
                short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et.",
                long: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et. Nam pulvinar commodo velit at molestie. Vestibulum mattis, nulla eu tempor congue, ligula orci ultrices metus, semper finibus libero erat quis ipsum. Fusce sem metus, vulputate ac libero non, vestibulum auctor sem. Morbi gravida leo eu tempus interdum. Duis feugiat sem luctus nisl interdum, sit amet posuere lorem aliquet. Sed ligula libero, dapibus a auctor ut, tristique a ligula.",
                    "Ut vitae libero ex. Fusce non leo quam. Vivamus ac odio ex. Morbi urna metus, interdum non dolor eu, efficitur eleifend magna. Donec elementum finibus felis at molestie. Donec sit amet enim vel ipsum vestibulum faucibus. Aenean eros dui, faucibus id massa eu, faucibus scelerisque sem.",
                ],
            },
            {
                slug: "fundo",
                title: "Fundo",
                category: "Web design",
                img: { src: "/images/project-3.jpg", alt: "fundo" },
                short: "",
                long: [],
            },
            {
                slug: "brawlhalla",
                title: "Brawlhalla",
                category: "Applications",
                img: { src: "/images/project-4.png", alt: "brawlhalla" },
                short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et.",
                long: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et. Nam pulvinar commodo velit at molestie. Vestibulum mattis, nulla eu tempor congue, ligula orci ultrices metus, semper finibus libero erat quis ipsum. Fusce sem metus, vulputate ac libero non, vestibulum auctor sem. Morbi gravida leo eu tempus interdum. Duis feugiat sem luctus nisl interdum, sit amet posuere lorem aliquet. Sed ligula libero, dapibus a auctor ut, tristique a ligula.",
                    "Ut vitae libero ex. Fusce non leo quam. Vivamus ac odio ex. Morbi urna metus, interdum non dolor eu, efficitur eleifend magna. Donec elementum finibus felis at molestie. Donec sit amet enim vel ipsum vestibulum faucibus. Aenean eros dui, faucibus id massa eu, faucibus scelerisque sem.",
                ],
            },
            {
                slug: "dsm",
                title: "DSM.",
                category: "Web design",
                img: { src: "/images/project-5.png", alt: "dsm" },
                short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et.",
                long: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et. Nam pulvinar commodo velit at molestie. Vestibulum mattis, nulla eu tempor congue, ligula orci ultrices metus, semper finibus libero erat quis ipsum. Fusce sem metus, vulputate ac libero non, vestibulum auctor sem. Morbi gravida leo eu tempus interdum. Duis feugiat sem luctus nisl interdum, sit amet posuere lorem aliquet. Sed ligula libero, dapibus a auctor ut, tristique a ligula.",
                    "Ut vitae libero ex. Fusce non leo quam. Vivamus ac odio ex. Morbi urna metus, interdum non dolor eu, efficitur eleifend magna. Donec elementum finibus felis at molestie. Donec sit amet enim vel ipsum vestibulum faucibus. Aenean eros dui, faucibus id massa eu, faucibus scelerisque sem.",
                ],
            },
            {
                slug: "metaspark",
                title: "MetaSpark",
                category: "Web design",
                img: { src: "/images/project-6.png", alt: "metaspark" },
                short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et.",
                long: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et. Nam pulvinar commodo velit at molestie. Vestibulum mattis, nulla eu tempor congue, ligula orci ultrices metus, semper finibus libero erat quis ipsum. Fusce sem metus, vulputate ac libero non, vestibulum auctor sem. Morbi gravida leo eu tempus interdum. Duis feugiat sem luctus nisl interdum, sit amet posuere lorem aliquet. Sed ligula libero, dapibus a auctor ut, tristique a ligula.",
                    "Ut vitae libero ex. Fusce non leo quam. Vivamus ac odio ex. Morbi urna metus, interdum non dolor eu, efficitur eleifend magna. Donec elementum finibus felis at molestie. Donec sit amet enim vel ipsum vestibulum faucibus. Aenean eros dui, faucibus id massa eu, faucibus scelerisque sem.",
                ],
            },
            {
                slug: "summary",
                title: "Summary",
                category: "Web development",
                img: { src: "/images/project-7.png", alt: "summary" },
                short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et.",
                long: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et. Nam pulvinar commodo velit at molestie. Vestibulum mattis, nulla eu tempor congue, ligula orci ultrices metus, semper finibus libero erat quis ipsum. Fusce sem metus, vulputate ac libero non, vestibulum auctor sem. Morbi gravida leo eu tempus interdum. Duis feugiat sem luctus nisl interdum, sit amet posuere lorem aliquet. Sed ligula libero, dapibus a auctor ut, tristique a ligula.",
                    "Ut vitae libero ex. Fusce non leo quam. Vivamus ac odio ex. Morbi urna metus, interdum non dolor eu, efficitur eleifend magna. Donec elementum finibus felis at molestie. Donec sit amet enim vel ipsum vestibulum faucibus. Aenean eros dui, faucibus id massa eu, faucibus scelerisque sem.",
                ],
            },
            {
                slug: "task-manager",
                title: "Task Manager",
                category: "Applications",
                img: { src: "/images/project-8.jpg", alt: "task manager" },
                short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et.",
                long: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et. Nam pulvinar commodo velit at molestie. Vestibulum mattis, nulla eu tempor congue, ligula orci ultrices metus, semper finibus libero erat quis ipsum. Fusce sem metus, vulputate ac libero non, vestibulum auctor sem. Morbi gravida leo eu tempus interdum. Duis feugiat sem luctus nisl interdum, sit amet posuere lorem aliquet. Sed ligula libero, dapibus a auctor ut, tristique a ligula.",
                    "Ut vitae libero ex. Fusce non leo quam. Vivamus ac odio ex. Morbi urna metus, interdum non dolor eu, efficitur eleifend magna. Donec elementum finibus felis at molestie. Donec sit amet enim vel ipsum vestibulum faucibus. Aenean eros dui, faucibus id massa eu, faucibus scelerisque sem.",
                ],
            },
            {
                slug: "arrival",
                title: "Arrival",
                category: "Web development",
                img: { src: "/images/project-9.png", alt: "arrival" },
                short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et.",
                long: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam ante, non gravida nunc elementum et. Nam pulvinar commodo velit at molestie. Vestibulum mattis, nulla eu tempor congue, ligula orci ultrices metus, semper finibus libero erat quis ipsum. Fusce sem metus, vulputate ac libero non, vestibulum auctor sem. Morbi gravida leo eu tempus interdum. Duis feugiat sem luctus nisl interdum, sit amet posuere lorem aliquet. Sed ligula libero, dapibus a auctor ut, tristique a ligula.",
                    "Ut vitae libero ex. Fusce non leo quam. Vivamus ac odio ex. Morbi urna metus, interdum non dolor eu, efficitur eleifend magna. Donec elementum finibus felis at molestie. Donec sit amet enim vel ipsum vestibulum faucibus. Aenean eros dui, faucibus id massa eu, faucibus scelerisque sem.",
                ],
            },
        ],
    },
};
