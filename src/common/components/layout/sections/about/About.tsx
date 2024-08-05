import React from 'react';
import styled from "styled-components";
import {Experience} from "../experiens/Experience";
import {myTheme} from "../../../../../styles/Theme.styled";
import {Education} from "../education/Education";
import {AbstractSVG} from "../../../../../assets/icons/abstractIcon";

export const About = () => {
    return (
        <AboutSection id={'About'}>
            <LeftSide>
                <TitleStyled>About Me</TitleStyled>
                <AboutText>The Generator App is an online tool that helps you to export ready-made templates ready to
                    work as your future website. It helps you to combine slides, panels and other components and export it as
                    a set of static files: HTML/CSS/JS.</AboutText>
                <Experience/>
                <Education/>
                <AbstractImg>
                    <AbstractSVG />
                </AbstractImg>
            </LeftSide>
        </AboutSection>
    );
};

const AbstractImg = styled.div`
    position: absolute;
    max-width: 834px;
    right: 0;
    margin-bottom: 38px;
    @media (max-width: ${myTheme.screen.small}) {
            top: 400px;
            max-width: 382px;
            right: 0;
            overflow: hidden;
            object-fit: cover;
    }
`

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

    @media (max-width: ${myTheme.screen.small}) {
        font-size: 20px;
        margin-bottom: 10px;
    }
`

const AboutSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 200px;
    @media (max-width: ${myTheme.screen.medium}) {
        padding: 0 10px;
    }
    @media (max-width: ${myTheme.screen.small}) {
        margin-bottom: 100px;
    }
`

const AboutText = styled.p`
    color: ${myTheme.color.text};
    display: flex;
    flex-direction: column;
    margin-bottom: 38px;
    @media (max-width: ${myTheme.screen.small}) {
        margin-bottom: 20px;
    }
`