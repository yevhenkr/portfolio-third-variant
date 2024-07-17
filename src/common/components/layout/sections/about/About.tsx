import React from 'react';
import styled from "styled-components";
import {TitleSection} from "../../../ui/titleSections/TitleSection";

export const About = () => {
    return (
        <AboutSection>
            <TitleSection wordOne={"About Me"}/>
            <AboutText>The Generator App is an online tool that helps you to export ready-made templates ready to work
                as your future website. It helps you to combine slides, panels and other components and export it as a
                set of static files: HTML/CSS/JS.</AboutText>
        </AboutSection>
    );
};

const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 200px;
`
const AboutText = styled.p`
    display: flex;
    flex-direction: column;
`
