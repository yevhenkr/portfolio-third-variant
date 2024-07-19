import React from 'react';
import styled from "styled-components";
import {Experience} from "../experiens/Experience";
import {myTheme} from "../../../../../styles/Theme.styled";

export const About = () => {
    return (
        <AboutSection>
            <TitleStyled>About Me</TitleStyled>
            <AboutText>The Generator App is an online tool that helps you to export ready-made templates ready to work
                as your future website. It helps you to combine slides, panels and other components and export it as a
                set of static files: HTML/CSS/JS.</AboutText>
            <Experience/>
            {/*<Education/>*/}
            {/*    TODO*/}
        </AboutSection>
    );
};

export const TitleStyled = styled.h2`
    margin-bottom: 38px;
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
