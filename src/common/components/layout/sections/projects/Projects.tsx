import React, {useContext} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {LinkIcon} from "../../../../../assets/icons/linkIcon";
import {myProjects, myTheme} from "../../../../../styles/Theme.styled";
import git from "../../../../../assets/img/git.png";
import gitWhite from "../../../../../assets/img/git-white.png";
import {ThemeContext} from "../../../ui/themeProvider/ThemeProvider";

const Projects = () => {
    const theme = useContext(ThemeContext);
    const imageSrc = theme === 'dark' ? gitWhite : git;
    return (
        <ProjectsSection id={'Projects'}>
            <Title>Projects</Title>
            <SubTitle>Things I’ve built so far</SubTitle>
            <ProjectsGrid>
                {myProjects.map(proj => (
                    <GridItem key={proj.name}>
                        <ImgStiled src={proj.img} alt={"Project image"}/>
                        <CardTextPart>
                            <FlexWrapper>
                                <NameProject>{proj.name}</NameProject>
                                <Description>{proj.description}</Description>
                                <FlexWrapper display={"flex"} flexDirection={"row"} width={"100%"}
                                             padding={"0 0 10px 0"}>
                                    <TechStack>Tech stack :</TechStack>
                                    <TechDescriptions>{proj.techStackDetails}</TechDescriptions>
                                </FlexWrapper>
                            </FlexWrapper>
                            <TextWrap>
                                <FlexWrapper gap={"10px"} display={"flex"} align_i={"center"}>
                                    <LinkIcon stroke={`${myTheme.color.title}`}/>
                                    <LinkStyled href={proj.previewLink}>
                                        Live Preview</LinkStyled>
                                </FlexWrapper>
                                <FlexWrapper gap={"10px"} display={"flex"} align_i={"center"}>
                                    <FlexWrapper padding={"10px 0 0 0"}>
                                        <IconStyled src={imageSrc} alt={"Project image"}/>
                                    </FlexWrapper>
                                    <LinkStyled href={proj.codeLink}>
                                        View Code</LinkStyled>
                                </FlexWrapper>
                            </TextWrap>
                        </CardTextPart>
                    </GridItem>))}
            </ProjectsGrid>
        </ProjectsSection>
    );
};
const IconStyled = styled.img`
    width: 100%;
    height: 100%;`
const TextWrap = styled(FlexWrapper)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 314px;
    padding: 0 0 28px 0;
    @media (max-width: ${myTheme.screen.small}) {
        padding-bottom: 10px;
    }
`

const GridItem = styled(FlexWrapper)`
    overflow: hidden;
    box-shadow: 10px 10px 15px 5px rgba(0, 0, 0, 0.3);
    background-color: ${myTheme.color.cardBG};
    min-width: 365px;
    width: 100%;
    border-radius: 20px;
    @media (max-width: ${myTheme.screen.small}) {
        min-width: 240px;
        border-radius: 10px;
    }
`

const ProjectsGrid = styled(FlexWrapper)`
    display: grid;
    column-gap: 34px;
    row-gap: 60px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    @media (max-width: ${myTheme.screen.extraLarge}) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    } 
    @media (max-width: ${myTheme.screen.large}) {
        grid-template-columns: repeat(1, 1fr);
    }
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
    color: ${myTheme.color.cardText};
    @media (max-width: ${myTheme.screen.small}) {
        max-width: 210px;
    }
`

const ProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 200px;
    margin-bottom: 184px;
    @media (max-width: ${myTheme.screen.small}) {
        margin-bottom: 50px;
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
    @media (max-width: ${myTheme.screen.small}) {
        font-size: 16px;
        margin-bottom: 50px;
    }
`

const NameProject = styled.h4`
    color: ${myTheme.color.cardTitle};
    font-size: 28px;
    font-weight: 500;
    @media (max-width: ${myTheme.screen.small}) {
        font-size: 12px;
    }
`
const Description = styled.p`
    font-size: 18px;
    font-weight: 300;
    padding-bottom: 12px;
    @media (max-width: ${myTheme.screen.small}) {
        font-size: 10px;
        padding-bottom: 8px;
    }
`
const TechStack = styled.span`
    font-size: 16px;
    color: ${myTheme.color.title};
    font-weight: 400;
    @media (max-width: ${myTheme.screen.small}) {
        font-size: 10px;
    }
`

const TechDescriptions = styled.span`
    font-size: 14px;
    color: ${myTheme.color.title};
    font-weight: 300;
    @media (max-width: ${myTheme.screen.small}) {
        font-size: 10px;
    }
`

const ImgStiled = styled.img`
    padding-bottom: 22px;
    width: 100%; /* Ensures the image takes up the full width of the container */
    height: auto;
    object-fit: contain;

    @media (max-width: ${myTheme.screen.small}) {
        padding-bottom: 12px;
    }
`

const LinkStyled = styled.a`
    color: ${myTheme.color.blackWhite};
    @media (max-width: ${myTheme.screen.small}) {
        font-size: 10px;
    }

    &:hover {
        color: blue;
    }
`

export default Projects;
