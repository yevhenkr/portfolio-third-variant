import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {HouseIcon} from "../../../../../assets/icons/houseIcon";
import {LocationIcon} from "../../../../../assets/icons/locationIcon";
import {CalendarIcon} from "../../../../../assets/icons/calendarIcon";
import {TitleStyled} from "../about/About";
import {myExperience, myProjects, myTheme} from "../../../../../styles/Theme.styled";
import {TimeWork} from "../../../ui/button/TimeWork";

export const Experience = () => {
    return (
        <>
            <TitleStyled>Work Experience</TitleStyled>
            <FlexWrapper display={"flex"} flexDirection={"column"} margin={" 0 0 200px 0"}>

                {myExperience.map((work, index) => (
                    <WorkWrap key={index} index={index}>
                        <FlexWrapper display={"flex"} flexDirection={"row"}
                                     justify={"space-between"}>
                            <Positions>{work.position}</Positions>
                            <TimeWork title={work.time}/>
                        </FlexWrapper>
                        <FlexWrapper display={"flex"} flexDirection={"row"} padding={"0 0 0 2px"}>
                            <FlexWrapper display={"flex"} flexDirection={"row"} align_i={"center"}
                                         padding={" 0 68px 0 0"}>
                                <HouseIcon/>
                                <StyledText>{work.product}</StyledText>
                            </FlexWrapper>
                            <FlexWrapper display={"flex"} flexDirection={"row"} align_i={"center"}>
                                <LocationIcon/>
                                <StyledText>{work.location}</StyledText>
                            </FlexWrapper>
                            <CalendarWrap>
                                <FlexWrapper display={"flex"} flexDirection={"row"} align_i={"center"}>
                                    <CalendarIcon/>
                                    <StyledText>{work.timePeriod}</StyledText>
                                </FlexWrapper>
                            </CalendarWrap>
                        </FlexWrapper></WorkWrap>))}


            </FlexWrapper>
        </>
    );
};
interface WorkWrapProps {
    index: number;
}
const WorkWrap = styled(FlexWrapper)<WorkWrapProps>`
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    position: relative;
    padding-top: ${({index}) => (index === 1 || index === 2) ? "30px" : ''};

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${myTheme.color.bar};
        left: 0;
        bottom: 0;
    }
`

const CalendarWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-left: auto;
`

const Positions = styled.h3`
    font-weight: 400;
    font-size: 20px;
    color: ${myTheme.color.text};
    padding-bottom: 2px;
`
const StyledText = styled.span`
    font-family: Poppins, sans-serif;
    padding-left: 8px;
    font-weight: 500;
    font-size: 12px;
    color: ${myTheme.color.text};
`