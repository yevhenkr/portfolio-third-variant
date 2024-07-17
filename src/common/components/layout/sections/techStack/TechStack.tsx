import React from 'react';
import {TitleSection} from "../../../ui/titleSections/TitleSection";
import styled from "styled-components";
import {SVGGrid} from "../../../ui/SVGGrid/SVGGrid";
import {HTMLIcon} from "../../../../../assets/icons/htmlIcon";

export const TechStack = () => {
    const icons = [<HTMLIcon />, <HTMLIcon />];
    return (
        <TechSection>
            <TitleSection wordOne={"My Tech Stack"}/>
            <TechText> Technologies I’ve been working with recently</TechText>
            <SVGGrid icons={icons}/>
        </TechSection>
    );
};

const TechSection = styled.section``
const TechText = styled.span``
