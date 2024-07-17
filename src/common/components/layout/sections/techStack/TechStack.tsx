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

export const TechStack = () => {
    const icons = [<HTMLIcon />, <CSSIcon />, <JSIcon />, <ReactIcon />, <ReduxIcon />, <SASSIcon />, <GitIcon />, <VscodeIcon />, <VscodeIcon />, <VscodeIcon />];
    return (
        <TechSection>
            <TitleSection wordOne={"My Tech Stack"}/>
            <TechText> Technologies I’ve been working with recently</TechText>
            <SVGGrid icons={icons}/>
        </TechSection>
    );
};

const TechSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 200px;`
const TechText = styled.span``
