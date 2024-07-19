import React from 'react';
import styled from "styled-components";
import {Experience} from "../experiens/Experience";
import {myTheme} from "../../../../../styles/Theme.styled";
import {Education} from "../education/Education";
import {AbstractSVG} from "../../../../../assets/icons/abstractIcon";

export const About = () => {
    return (
        <AboutSection>
            <LeftSide>
                <TitleStyled>About Me</TitleStyled>
                <AboutText>The Generator App is an online tool that helps you to export ready-made templates ready to
                    work as your future website. It helps you to combine slides, panels and other components and export it as
                    a set of static files: HTML/CSS/JS.</AboutText>
                <Experience/>
                <Education/>
            </LeftSide>
        </AboutSection>
    );
};

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 710px;
    justify-content: flex-start;
`

export const TitleStyled = styled.h2`
    margin-bottom: 38px;
    font-size: 42px;
    font-weight: bold;
    color: ${myTheme.color.title};
`

const AboutSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 200px;
`



const AboutText = styled.p`
    display: flex;
    flex-direction: column;
    margin-bottom: 38px;
`
