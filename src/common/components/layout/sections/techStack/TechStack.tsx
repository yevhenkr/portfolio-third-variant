import React from 'react';
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
import {myTheme} from "../../../../../styles/Theme.styled";
import {GitBigIcon} from "../../../../../assets/icons/gitBigIcon";
import {MenIcon} from "../../../../../assets/icons/menIcon";

export const TechStack = () => {
    const icons = [<HTMLIcon/>, <CSSIcon/>, <JSIcon/>, <ReactIcon/>, <ReduxIcon/>, <SASSIcon/>, <GitIcon />,
        <VscodeIcon/>, <GitBigIcon stroke={`${myTheme.color.blackWhite}`}/>, <MenIcon stroke={`${myTheme.color.blackWhite}`}/>];
    return (
        <TechSection id={'Tech Stack'}>
            <Title>My Tech Stack</Title>
            <SubTitle> Technologies I’ve been working with recently</SubTitle>
            <SVGGrid icons={icons}/>
        </TechSection>
    );
};

const TechSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 214px;
    @media (max-width: ${myTheme.screen.small}) {
        padding-bottom: 50px;
    }
`

const Title = styled.h2`
    font-weight: bold;
    font-size: 48px;
    color: ${myTheme.color.title};
    margin-bottom: 50px;
    @media (max-width: ${myTheme.screen.small}) {
        font-size: 20px;
        margin-bottom: 20px;
    }
`
const SubTitle = styled.h3`
    font-weight: 400;
    font-size: 32px;
    color: ${myTheme.color.text};
    margin-bottom: 110px;
    @media (max-width: ${myTheme.screen.medium}) {
        text-align: center;
    }
    @media (max-width: ${myTheme.screen.small}) {
        font-size: 18px;
        margin-bottom: 50px;
    }
`
