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
            <ProjectsGrid>
                {myProjects.map(proj => (
                    <FlexWrapper overflow={"hidden"} boxShadow={"10px 10px 15px 5px rgba(0, 0, 0, 0.3)"}
                                 max_width={"375px"} width={"100%"} border={"solid 1px red"} borderRadius={"20px"}>
                        <ImgStiled src={imgProject} alt={"Project image"}/>
                        <CardTextPart>
                            <FlexWrapper>
                                <NameProject>{proj.name}</NameProject>
                                <Description>{proj.description}</Description>
                                <FlexWrapper display={"flex"} flexDirection={"row"} width={"100%"}
                                             padding={"0 0 20px 0"}>
                                    <TechStack>Tech stack :</TechStack>
                                    <TechDescriptions>{proj.techStackDetails}</TechDescriptions>
                                </FlexWrapper>
                            </FlexWrapper>
                            <FlexWrapper display={"flex"} flexDirection={"row"} align_i={"space-between"}
                                         justify={"space-between"} width={"100%"} max_width={"314px"}
                                         padding={"0 0 28px 0"}>
                                <FlexWrapper gap={"10px"} display={"flex"} align_i={"center"}><LinkIcon/> <a>Live
                                    Preview</a></FlexWrapper>
                                <FlexWrapper gap={"10px"} display={"flex"} align_i={"center"}><GitHubIcon/> <a> View
                                    Code</a></FlexWrapper>
                            </FlexWrapper>
                        </CardTextPart>
                    </FlexWrapper>))}
            </ProjectsGrid>
        </ProjectsSection>
    );
};

const ProjectsGrid = styled(FlexWrapper)`
    display: grid;
    column-gap: 34px;
    row-gap: 60px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
`
const GridItem = styled(FlexWrapper)`
    display: flex;
    max-width: 375px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid black;

`


const CardTextPart = styled(FlexWrapper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    min-width: auto;
    max-width: 314px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
`
const ProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 200px;`

const SubTitle = styled.h3``
const NameProject = styled.h4`
    font-size: 28px;
    font-weight: 500;
`
const Description = styled.p`
    font-size: 18px;
    font-weight: 300;
    padding-bottom: 12px;
`
const TechStack = styled.span`
    font-size: 16px;
    color: ${myTheme.color.title};
    font-weight: 400`

const TechDescriptions = styled.span`
    font-size: 14px;
    color: ${myTheme.color.title};
    font-weight: 300;
`

const ImgStiled = styled.img`
    padding-bottom: 22px`
