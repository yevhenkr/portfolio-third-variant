import imgProject from "../assets/img/CardsProj.jpg";
import portfolioProject from "../assets/img/PortfolioProj.png";
import sFoodProject from "../assets/img/SFoodProj.png";
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    :root[data-theme='dark'] {
        --color-BG: #191919;
        --color-text: #A7A7A7;
        --color-title: #ccc;
        --color-cardBG: #363636;
        --color-card-title: #ccc;
        --color-card-text: #ccc;
        --color-proj-link: #fff;
        --color-black-white: #fff;
        --color-button-theme: #666666;
        
        
        --color-black: #07253C;
        --color-mailTitle: #1E0E62;
        --color-buttonBG: #D7FFE0;
        --color-buttonText: #018C0F;
        --color-bar: #EBEAED;
    }

    :root[data-theme='light'] {
        --color-BG: #fff;
        --color-text: #666666;
        --color-title: #42446E;
        --color-cardBG: #fff;
        --color-card-title: #000;
        --color-card-text: #666666;
        --color-buttonBG: #D7FFE0;
        --color-buttonText: #018C0F;
        --color-proj-link: #000;
        --color-black-white: #000;
        --color-button-theme:  #666666;
        
        
        
        --color-black: #fff;
    }
`;

export interface ThemeColor {
    backGround: string;
    title: string;
    text: string;
    black: string;
    white: string;
    mailTitle: string;
    buttonBG: string;
    buttonText: string;
    bar: string;
}

export interface ThemeFont {
    weights: {
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
    };
}

export interface ThemeMedia {
    phone: string;
    tablet: string;
}

export interface ThemeScreen {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
}

export interface Theme {
    color: ThemeColor;
    media: ThemeMedia;
    font: ThemeFont;
    screen: ThemeScreen;
    headerHeight: string;
}

let ThemeColor;
export const myTheme = {
    color:ThemeColor= {
        backGround: 'var(--color-BG)',
        title: 'var(--color-title)',
        text: 'var(--color-text)',
        cardBG: 'var(--color-cardBG)',
        cardTitle: 'var(--color-card-title)',
        cardText: 'var(--color-card-text)',
        projLink: 'var(--color-proj-link)',
        blackWhite: 'var(--color-black-white)',
        buttonTheme: 'var(--color-button-theme)',

        black: 'var(--color-black)',
        white: 'var(--color-white)',
        mailTitle: 'var(--color-mailTitle)',
        buttonBG: 'var(--color-buttonBG)',
        buttonText: 'var(--color-buttonText)',
        bar: 'var(--color-bar)',
    },

    media: {
        phone: 'screen and (max-width: 576)',
        tablet: 'screen and (max-width: 768)',
    },
    font: {
        weights: {
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
        }
    },
    screen: {
        extraLarge: "1200px",
        large: "992px",
        medium: "768px",
        small: "576px",
    },
    headerHeight: "20px"
}

export const mySections = [
    ['#Home', 'Home'],
    ['#About', 'About'],
    ['#Tech Stack', 'Tech Stack'],
    ['#Projects', 'Projects'],
    ['#Mail me', 'Mail me'],
    ['#Contact', 'Contact'],
]

export const myProjects = [
    {
        name: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "Tech stack :",
        techStackDetails: "HTML , JavaScript, SASS, React",
        img: imgProject,
        previewLink: "https://cards-for-study.vercel.app/login",
        codeLink: "https://github.com/MrEvgeniy1989/cards",
    },
    {
        name: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStackDetails: "HTML , JavaScript, SASS, React",
        img: portfolioProject,
        previewLink: "https://vasilenko-evgen-xd8s.vercel.app/",
        codeLink: "https://github.com/yevhenkr/vasilenkoEvgen",
    },
    {
        name: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStackDetails: "HTML , JavaScript, SASS, React",
        img: sFoodProject,
        previewLink: "https://simpel-food.vercel.app/",
        codeLink: "https://github.com/yevhenkr/simpel_food",
    },
    {
        name: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStackDetails: "HTML , JavaScript, SASS, React",
        img: imgProject,
        previewLink: "https://cards-for-study.vercel.app/login",
        codeLink: "https://github.com/MrEvgeniy1989/cards",
    },
    {
        name: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStackDetails: "HTML , JavaScript, SASS, React",
        img: portfolioProject,
        previewLink: "https://vasilenko-evgen-xd8s.vercel.app/",
        codeLink: "https://github.com/yevhenkr/vasilenkoEvgen",
    },
    {
        name: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStackDetails: "HTML , JavaScript, SASS, React",
        img: sFoodProject,
        previewLink: "https://simpel-food.vercel.app/",
        codeLink: "https://github.com/yevhenkr/simpel_food",
    }
]

export const myExperience = [
    {
        position: "Junior Web Developer",
        product: "Dr. Rajkumar’s Learning App",
        location: "Bengaluru",
        time: "Full Time",
        timePeriod: "Sep 2021 - Dec 2021",
    },
    {
        position: "Web Development Intern",
        product: "IonPixelz Web Solutions",
        location: "Bengaluru",
        time: "Internship",
        timePeriod: "Sep 2022 - Dec 2023",
    },
    {
        position: "SEO / SEM Specialist",
        product: "HAAPS",
        location: "Bengaluru",
        time: "Internship",
        timePeriod: "Sep 2023 - Dec 2024",
    }

]

export let heightMenu = {large:100}

export default GlobalStyles;