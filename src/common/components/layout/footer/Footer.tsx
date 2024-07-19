import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../ui/flexWrapper/FlexWrapper";
import {LogoBlackIcon} from "../../../../assets/icons/logoBlackIcon";
import SocialMediaIcons from "./footerSocialMedia/socialMediaIcons";
import {HeaderMenu} from "../header/headerMenu/HeaderMenu";

export const Footer = () => {
    return (
        <StyledFooter>
            <WrapStyled>
                <LogoBlackIcon/>
                <FlexWrapper display={"flex"} flexDirection={"row"} width={"50%"} align_i={"center"}>
                    <SpanStyled>+91 12345 09876</SpanStyled>
                    <SpanStyled>info@example.com</SpanStyled>
                    <SocialMediaIcons/>
                </FlexWrapper>
            </WrapStyled>
            <FlexWrapper display={"flex"} flexDirection={"row"} justify={"space-between"}>
                <StyledHeaderMenu className={"margin-bottom: 24px"}></StyledHeaderMenu>
                <SmallStyled>Designed and built by Pavan MG with Love & Coffee</SmallStyled>
            </FlexWrapper>
        </StyledFooter>
    );
};
const StyledHeaderMenu = styled(HeaderMenu)`
    margin-left: 10px;
    `
const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;

`

const SmallStyled = styled.small`
    display: flex;
    align-items: center;
`
const WrapStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding-bottom: 40px
`


const SpanStyled = styled.span`
    
    width: 100%;`
const Logo = styled.img`
    max-width: 100px;
    width: 50%;
`;