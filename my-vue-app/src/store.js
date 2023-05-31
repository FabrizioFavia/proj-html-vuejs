import { Dropdown } from "bootstrap";
import { reactive } from "vue"


export const store = reactive({

    filter: null,
    currentSlide: 0,

    movies: [
        {
            title: "alalalalal",
            category: "coming soon",
            rate: "0/10",
            views: 666,
            smUrlPath: "src/assets/1-234x300.jpg",
            xlUrlPath: "src/assets/1.jpg",
        },
        {
            title: "alalalalal",
            category: "coming soon",
            rate: "0/10",
            views: 666,
            smUrlPath: "src/assets/2-1-100x100.jpg",
            mdUrlPath: "src/assets/2-1-150x150.jpg",
            lgUrlPath: "src/assets/2-1-270x270.jpg",
            xlUrlPath: "src/assets/2-1-216x300.jpg",
        },
        {
            title: "alalalalal",
            category: "Latest Movie",
            rate: "0/10",
            views: 322,
            smUrlPath: "/src/assets/5-100x100.jpg",
            mdUrlPath: "/src/assets/5-150x150.jpg",
            lgUrlPath: "/src/assets/5-238x300.jpg",
            xlUrlPath: "/src/assets/5.jpg",
        },
        {
            title: "alalalalal",
            category: "Top Rating",
            rate: "0/10",
            views: 488,
            smUrlPath: "/src/assets/blog3-100x100.jpg",
            mdUrlPath: "/src/assets/blog3-150x150.jpg",
            lgUrlPath: "/src/assets/blog3-300x300.jpg",
            xlUrlPath: "/src/assets/blog3-570x570.jpg",
        },
        {
            title: "alalalalal",
            category: "TV Series",
            rate: "0/10",
            views: 563,
            smUrlPath: "/src/assets/blog4-100x100.jpg",
            mdUrlPath: "/src/assets/blog4-150x150.jpg",
            lgUrlPath: "/src/assets/blog4-300x300.jpg",
            xlUrlPath: "/src/assets/blog4-570x570.jpg",
        },
        {
            title: "alalalalal",
            category: "Coming soon",
            rate: "0/10",
            views: 768,
            smUrlPath: "/src/assets/blog-100x100.jpg",
            mdUrlPath: "/src/assets/blog-150x150.jpg",
            lgUrlPath: "/src/assets/blog-300x300.jpg",
            xlUrlPath: "/src/assets/blog-570x570.jpg",
        },
        {
            title: "alalalalal",
            category: "coming soon",
            rate: "0/10",
            views: 666,
            smUrlPath: "src/assets/2-1-150x150 (1).jpg",
            mdUrlPath: "src/assets/2-1-216x300.jpg",
            lgUrlPath: "src/assets/2-1-270x270.jpg",
            xlUrlPath: "src/assets/2-1-300x300 (1).jpg",
        },
        {
            title: "alalalalal",
            category: "coming soon",
            rate: "0/10",
            views: 666,
            smUrlPath: "/src/assets/blog5-100x100.jpg",
            mdUrlPath: "/src/assets/blog5-150x150.jpg",
            lgUrlPath: "/src/assets/blog5-300x300.jpg",
            xlUrlPath: "/src/assets/blog5-570x570.jpg",
        },

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
                    label: "lorem 1",
                    link: "#",
                    disable: true,
                },
                {
                    label: "lorem 2",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem 3",
                    link: "#",
                    disable: true,
                },
                {
                    label: "lorem 4",
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
                    label: "lorem 5",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem 6",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem 7",
                    link: "#",
                    disable: false,
                },
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
            ]
        },
        {
            label: "Shop",
            link: null,
            subMenu: [
                {
                    label: "lorem 5",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem 4",
                    link: "#",
                    disable: false,
                },
                {
                    label: "lorem 7",
                    link: "#",
                    disable: false,
                },
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
