import React from 'react';
import styled from "styled-components";
import {TitleSection} from "../../../ui/titleSections/TitleSection";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {HouseIcon} from "../../../../../assets/icons/houseIcon";
import {LocationIcon} from "../../../../../assets/icons/locationIcon";
import {CalendarIcon} from "../../../../../assets/icons/calendarIcon";
import {TitleStyled} from "../about/About";
import {myTheme} from "../../../../../styles/Theme.styled";
import {Button} from "../../../ui/button/Button";

export const Experiens = () => {
    return (
        <>
            <TitleStyled>Work Experience</TitleStyled>
            <FlexWrapper display={"flex"} flexDirection={"column"}>

                <WorkWrap >
                    <FlexWrapper display={"flex"} flexDirection={"row"} justify={"space-between"}>
                        <Positions>Junior Web Developer</Positions>
                        <Button title={"Full time"}/>
                    </FlexWrapper>

                    <FlexWrapper display={"flex"} flexDirection={"row"} padding={"0 0 0 2px"}>
                        <FlexWrapper display={"flex"} flexDirection={"row"} align_i={"center"} padding={" 0 68px 0 0"}>
                            <HouseIcon/>
                            <StyledText>Dr. Rajkumar’s Learning App</StyledText>
                        </FlexWrapper>
                        <FlexWrapper display={"flex"} flexDirection={"row"} align_i={"center"}>
                            <LocationIcon/>
                            <StyledText>Bengaluru</StyledText>
                        </FlexWrapper>

                        <CalendarWrap >
                            <FlexWrapper display={"flex"} flexDirection={"row"} align_i={"center"} >
                                <CalendarIcon/>
                                <StyledText>Sep 2021 - Dec 2021</StyledText>
                            </FlexWrapper>
                        </CalendarWrap>

                    </FlexWrapper>
                </WorkWrap>

            </FlexWrapper>
        </>
    );
};

const WorkWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    position: relative;
    &::before{
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
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: ${myTheme.color.text};
    padding-bottom: 2px;
`
const StyledText = styled.span`
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: ${myTheme.color.text};
`
const ExperiensSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 200px;
`