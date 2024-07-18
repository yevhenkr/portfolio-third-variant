import React from 'react';
import styled from "styled-components";
import logo from "../../../../assets/img/logo.png";
import { FlexWrapper } from '../../ui/flexWrapper/FlexWrapper';
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import SocialMediaIcons from "../footer/footerSocialMedia/socialMediaIcons";


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
    display: flex;
    background-color: red;
    margin: 0 200px;
`;

const Logo = styled.img`
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
`;

