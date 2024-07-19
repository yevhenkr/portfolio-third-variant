import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import logo from "../../../../assets/img/logo.png";
import {FlexWrapper} from '../../ui/flexWrapper/FlexWrapper';
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import SocialMediaIcons from "../footer/footerSocialMedia/socialMediaIcons";
import {myTheme} from "../../../../styles/Theme.styled";


export const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState<number>(0);
    useEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.clientHeight;
            setHeaderHeight(height);
        }
    }, []);
    return (
        <HeaderWrap ref={headerRef} flexDirection={"row"} display={"flex"}>
            <Logo src={logo} alt={"Logo images"}/>
            <FlexWrapper flexDirection={"row"} display={"flex"}>
                <HeaderMenu height={headerHeight}/>
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
    padding-top: 40px;
    background-color: ${myTheme.color.white};
    z-index: 2;
`;

const Logo = styled.img`
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
`;

