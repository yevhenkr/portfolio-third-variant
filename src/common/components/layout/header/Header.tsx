import React from 'react';
import styled from "styled-components";
import logo from "../../../../assets/img/logo.png";
import { FlexWrapper } from '../../ui/flexWrapper/FlexWrapper';
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import SocialMediaIcons from "../footer/footerSocialMedia/socialMediaIcons";
import {myTheme} from "../../../../styles/Theme.styled";


export const Header = () => {
    return (
        <HeaderWrap flexDirection={"row"} display={"flex"}>
            <Logo src={logo} alt={"Logo images"}/>
            <FlexWrapper flexDirection={"row"} display={"flex"}>
                <HeaderMenu />
                <SocialMediaIcons/>
            </FlexWrapper>
        </HeaderWrap>
    );
};

const HeaderWrap = styled(FlexWrapper)`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    background-color: ${myTheme.color.white};
    z-index: 2;
`;

const Logo = styled.img`
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
`;

