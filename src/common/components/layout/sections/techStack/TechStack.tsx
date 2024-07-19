import React from 'react';
import {TitleSection} from "../../../ui/titleSections/TitleSection";
import styled from "styled-components";
import {SVGGrid} from "../../../ui/SVGGrid/SVGGrid";
import {CSSIcon} from "../../../../../assets/icons/cssIcon";
import {HTMLIcon} from "../../../../../assets/icons/htmlIcon";
import {JSIcon} from "../../../../../assets/icons/jsIcon";
import {ReactIcon} from "../../../../../assets/icons/reactIcon";
import {ReduxIcon} from "../../../../../assets/icons/reduxIcon";
import {SASSIcon} from "../../../../../assets/icons/sassIcon";
import {GitIcon} from "../../../../../assets/icons/gitIcon";
import {VscodeIcon} from "../../../../../assets/icons/vscodeIcon";
import {TitleStyled} from "../about/About";
import {myTheme} from "../../../../../styles/Theme.styled";
import {GitBigIcon} from "../../../../../assets/icons/gitBigIcon";
import {MenIcon} from "../../../../../assets/icons/menIcon";

export const TechStack = () => {
    const icons = [<HTMLIcon />, <CSSIcon />, <JSIcon />, <ReactIcon />, <ReduxIcon />, <SASSIcon />, <GitIcon />, <VscodeIcon />, <GitBigIcon />, <MenIcon />];
    return (
        <TechSection>
            <Title>My Tech Stack</Title>
            <TechText> Technologies I’ve been working with recently</TechText>
            <SVGGrid icons={icons}/>
        </TechSection>
    );
};

const TechSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 214px;
`

const Title = styled(TitleStyled)`
    margin-bottom: 50px;
`

const TechText = styled.span`
    font-size: 32px;
    color: ${myTheme.color.text};
    font-family: Poppins, sans-serif;
    font-weight: 400;
    padding-bottom: 124px;
`
