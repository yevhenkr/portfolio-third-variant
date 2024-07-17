import React from 'react';
import styled from "styled-components";
import {TitleSection} from "../../../ui/titleSections/TitleSection";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {HouseIcon} from "../../../../../assets/icons/houseIcon";
import {LocationIcon} from "../../../../../assets/icons/locationIcon";
import {CalendarIcon} from "../../../../../assets/icons/calendarIcon";

export const Experiens = () => {
    return (
        <ExperiensSection>
            <TitleSection wordOne={"Work Experience"}/>
            <FlexWrapper display={"flex"} flexDirection={"column"}>
                <FlexWrapper display={"flex"} flexDirection={"column"}>
                    <FlexWrapper display={"flex"} flexDirection={"row"}>
                        <Positions>Junior Web Developer</Positions>
                        <button>full time</button>
                    </FlexWrapper>
                    <FlexWrapper display={"flex"} flexDirection={"row"}>
                        <FlexWrapper display={"flex"} flexDirection={"row"}>
                            <HouseIcon/>
                            <StyledText>Dr. Rajkumar’s Learning App</StyledText>
                        </FlexWrapper>
                        <FlexWrapper display={"flex"} flexDirection={"row"}>
                            <FlexWrapper display={"flex"} flexDirection={"row"}>
                                <LocationIcon/>
                                <StyledText>Bengaluru</StyledText>
                            </FlexWrapper><FlexWrapper display={"flex"} flexDirection={"row"}>
                                <CalendarIcon/>
                                <StyledText>Sep 2021 - Dec 2021</StyledText>
                            </FlexWrapper>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </ExperiensSection>
    );
};

const Positions = styled.h3``
const StyledText = styled.span``
const ExperiensSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 200px;
`