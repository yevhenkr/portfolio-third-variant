import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../ui/flexWrapper/FlexWrapper";
import logo from "../../../../assets/img/logo.png";
import SocialMediaIcons from "./footerSocialMedia/socialMediaIcons";
import {HeaderMenu} from "../header/headerMenu/HeaderMenu";

export const Footer = () => {
    return (
        <StyledFooter>
            <WrapStyled>
                <Logo src={logo} alt={"Logo images"}/>
                <FlexWrapper display={"flex"} flexDirection={"row"} width={"50%"}>
                    <SpanStyled>+91 12345 09876</SpanStyled>
                    <SocialMediaIcons/>
                </FlexWrapper>
            </WrapStyled>
            <FlexWrapper display={"flex"} flexDirection={"row"} justify={"space-between"}>
                <HeaderMenu></HeaderMenu>
                <SmallStyled>Designed and built by Pavan MG with Love & Coffee</SmallStyled>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    margin: 0 200px;

`
const SmallStyled = styled.small`
width: 50%;
`
const WrapStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid black;
`


const SpanStyled = styled.span`
    width: 100%;`
const Logo = styled.img`
    max-width: 100px;
    width: 50%;
`;