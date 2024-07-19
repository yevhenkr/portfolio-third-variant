import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../ui/flexWrapper/FlexWrapper";
import {LogoBlackIcon} from "../../../../assets/icons/logoBlackIcon";
import SocialMediaIcons from "./footerSocialMedia/socialMediaIcons";
import {HeaderMenu} from "../header/headerMenu/HeaderMenu";
import {heightMenu} from "../../../../styles/Theme.styled";

export const Footer = () => {
    return (
        <StyledFooter id={'Contact'}>
            <WrapStyled>
                <LogoBlackIcon/>
                <FlexWrapper display={"flex"} flexDirection={"row"} width={"50%"} align_i={"center"}>
                    <SpanStyled>+91 12345 09876</SpanStyled>
                    <SpanStyled>info@example.com</SpanStyled>
                    <SocialMediaIcons/>
                </FlexWrapper>
            </WrapStyled>
            <FlexWrapper display={"flex"} flexDirection={"row"} justify={"space-between"}>
                <StyledHeaderMenu height={heightMenu.large}/>
                <SmallStyled>
                    Designed and built by
                    <Highlight1>&nbsp;Pavan MG&nbsp;</Highlight1>
                    with
                    <Highlight2>&nbsp;Love&nbsp;</Highlight2>
                    &
                    <Highlight3>&nbsp;Coffee</Highlight3>
                </SmallStyled>
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

const Highlight1 = styled.span`
    background: linear-gradient(to right, #139ef5, #587CDD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

const Highlight2 = styled.span`
    background: linear-gradient(to right, #587CDD, #A045C3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

const Highlight3 = styled.span`
    background: linear-gradient(to right, #A045C3, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;