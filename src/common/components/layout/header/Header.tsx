import React from 'react';
import styled from "styled-components";
import logo from "../../../../assets/img/logo.png";
import { FlexWrapper } from '../../ui/flexWrapper/FlexWrapper';


export const Header = () => {
    return (
        <HeaderWrap>
            <Logo src={logo} alt={"Logo images"}/>
            <FlexWrapper>
                <FlexWrapper></FlexWrapper>
                <FlexWrapper></FlexWrapper>
            </FlexWrapper>
        </HeaderWrap>
    );
};

const HeaderWrap = styled.header`
    background-color: red;
`;

const Logo = styled.img`
`;

