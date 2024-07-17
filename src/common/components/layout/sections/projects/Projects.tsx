import React from 'react';
import styled from "styled-components";
import {TitleSection} from "../../../ui/titleSections/TitleSection";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import imgProject from "../../../../../assets/img/ProjecView.jpg";
import {CalendarIcon} from "../../../../../assets/icons/calendarIcon";
import {LinkIcon} from "../../../../../assets/icons/linkIcon";
import {GitIcon} from "../../../../../assets/icons/gitIcon";
import {GitHubIcon} from "../../../../../assets/icons/gitHubIcon";
import {myProjects, myTheme} from "../../../../../styles/Theme.styled";


export const Projects = () => {
    return (
        <ProjectsSection>
            <TitleSection wordOne={"Projects"}/>
            <SubTitle>Things I’ve built so far</SubTitle>
            <FlexWrapper display={"flex"} wrap={"wrap"}>
            {myProjects.map(proj => (
                <FlexWrapper max_width={"375px"} width={"100%"}>
                    <ImgStiled src={imgProject} alt={"Project image"}/>
                    <FlexWrapper padding={"0 10px"} width={"100%"}>
                        <FlexWrapper>
                            <NameProject>{proj.name}</NameProject>
                            <Description>{proj.description}</Description>
                            <FlexWrapper display={"flex"} flexDirection={"row"} width={"100%"}>
                                <TechStack>Tech stack :</TechStack>
                                <span>{proj.name}</span>
                            </FlexWrapper>
                        </FlexWrapper>
                        <FlexWrapper display={"flex"} flexDirection={"row"} justify={"space-between"}>
                            <FlexWrapper><LinkIcon/> <a>Live Preview</a></FlexWrapper>
                            <FlexWrapper><GitHubIcon/> <a> View Code</a></FlexWrapper>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>))}
            </FlexWrapper>
        </ProjectsSection>
    );
};

const ProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 200px;`

const SubTitle = styled.h3``
const NameProject = styled.h4``
const Description = styled.p``
const TechStack = styled.span`
    font-weight: bold`
const ImgStiled = styled.img``
