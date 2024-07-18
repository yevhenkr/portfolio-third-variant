import React from 'react';
import styled from "styled-components";
import {TitleSection} from "../../../ui/titleSections/TitleSection";
import {Experiens} from "../experiens/Experiens";
import {TechStack} from "../techStack/TechStack";
import {myTheme} from "../../../../../styles/Theme.styled";

export const About = () => {
    return (
        <AboutSection>
            <TitleStyled>About Me</TitleStyled>
            <AboutText>The Generator App is an online tool that helps you to export ready-made templates ready to work
                as your future website. It helps you to combine slides, panels and other components and export it as a
                set of static files: HTML/CSS/JS.</AboutText>
            <Experiens/>
        </AboutSection>
    );
};

export const TitleStyled = styled.h2`
    margin-bottom: 38px;
    font-family: Poppins, sans-serif;
    font-size: 42px;
    font-weight: bold;
    color: ${myTheme.color.title};
`


const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 710px;
    justify-content: flex-start;
`
const AboutText = styled.p`
    display: flex;
    flex-direction: column;
    margin-bottom: 38px;
`
