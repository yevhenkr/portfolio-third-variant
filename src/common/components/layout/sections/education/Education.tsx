import React from 'react';
import {TitleStyled} from "../about/About";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {TimeWork} from "../../../ui/button/TimeWork";
import {HouseIcon} from "../../../../../assets/icons/houseIcon";
import {CalendarIcon} from "../../../../../assets/icons/calendarIcon";
import {CalendarWrap, Positions, StyledText, WorkWrap} from "../experiens/Experience";

export const Education = () => {
    return (
        <>
            <TitleStyled>Education</TitleStyled>
            <WorkWrap $index={0} >
                <FlexWrapper display={"flex"} $flex_direction={"row"}
                             $justify={"space-between"}>
                    <Positions>Bachelor in Electronics & Communication</Positions>
                    <TimeWork title={"Full Time"}/>
                </FlexWrapper>
                <FlexWrapper display={"flex"} $flex_direction={"row"} $padding={"0 0 0 2px"}>
                    <FlexWrapper display={"flex"} $flex_direction={"row"} $align_i={"center"}
                                 $padding={" 0 68px 0 0"}>
                        <HouseIcon/>
                        <StyledText>Bangalore Instutute of Technology</StyledText>
                    </FlexWrapper>
                    <CalendarWrap>
                        <FlexWrapper display={"flex"} $flex_direction={"row"} $align_i={"center"}>
                            <CalendarIcon/>
                            <StyledText>Aug 2015 - Dec 2020</StyledText>
                        </FlexWrapper>
                    </CalendarWrap>
                </FlexWrapper></WorkWrap>
        </>
    );
};