import { Dropdown } from "bootstrap";
import { reactive } from "vue"


export const store = reactive({

    filter: null,
    currentSlide: 0,

    movies: [
        {
            title: "alalalalal",
            category: "Coming soon",
            rate: "0/10",
            views: 768,
            smUrlPath: "../assets/blog-100x100.jpg",
            mdUrlPath: "../assets/blog-150x150.jpg",
            lgUrlPath: "../assets/blog-300x300.jpg",
            xlUrlPath: "../assets/blog-570x570.jpg",
        },
        {
            title: "alalalalal",
            category: "Latest Movie",
            rate: "0/10",
            views: 322,
            smUrlPath: "../assets/blog2-100x100.jpg",
            mdUrlPath: "../assets/blog2-150x150.jpg",
            lgUrlPath: "../assets/blog2-300x300.jpg",
            xlUrlPath: "../assets/blog2-570x570.jpg",
        },
        {
            title: "alalalalal",
            category: ["Top Rating", "Latest Movie"],
            rate: "0/10",
            views: 488,
            smUrlPath: "../assets/blog3-100x100.jpg",
            mdUrlPath: "../assets/blog3-150x150.jpg",
            lgUrlPath: "../assets/blog3-300x300.jpg",
            xlUrlPath: "../assets/blog3-570x570.jpg",
        },
        {
            title: "alalalalal",
            category: "TV Series",
            rate: "0/10",
            views: 563,
            smUrlPath: "../assets/blog4-100x100.jpg",
            mdUrlPath: "../assets/blog4-150x150.jpg",
            lgUrlPath: "../assets/blog4-300x300.jpg",
            xlUrlPath: "../assets/blog4-570x570.jpg",
        },
        {
            title: "alalalalal",
            category: "coming soon",
            rate: "0/10",
            views: 666,
            smUrlPath: "../assets/blog5-100x100.jpg",
            mdUrlPath: "../assets/blog5-150x150.jpg",
            lgUrlPath: "../assets/blog5-300x300.jpg",
            xlUrlPath: "../assets/blog5-570x570.jpg",
        }
    ],

    slides: [
        {
            urlPath: "/src/assets/slider-1536x520.jpg",
        },
        {
            urlPath: "/src/assets/slider-2-1536x520.jpg",
        }
    ],

    navItems: [
        {
            label: "Home",
            link: null,
            subMenu: [
                {
                    label: "lorem",
                    link: "#",
                    disable: true,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: true,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                }
            ]
        },
        {
            label: "Celebrity",
            link: null,
            subMenu: [
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                }
            ]
        },
        {
            label: "Movie",
            link: null,
            subMenu: [
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                }
            ]
        },
        {
            label: "Page",
            link: null,
            subMenu: [
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                }
            ]
        },
        {
            label: "Shop",
            link: null,
            subMenu: [
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem",
                    link: "#",
                    disable: false,
                }
            ]
        },
        {
            label: "Blog",
            link: "#",
            subMenu: []
        },
        {
            label: "About us",
            link: "#",
            subMenu: []
        }
    ]

});
