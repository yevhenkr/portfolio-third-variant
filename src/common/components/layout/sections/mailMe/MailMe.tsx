import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../../../../styles/Theme.styled";

export const MailMe = () => {
    return (
        <MailMeSection id={'Mail me'}>
            <MailMeText>For any questions please mail me:</MailMeText>
            <MailLink>hi@pavanmg.in</MailLink>
        </MailMeSection>
    );
};

const MailMeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 58px;
    font-family: DMSans,sans-serif;
    font-weight: bold;
    margin-bottom: 200px;
`
const MailMeText = styled.h2`
color: ${myTheme.color.title};
    font-size: 58px;
    font-family: DMSans,sans-serif;
    font-weight: bold;
`
const MailLink = styled.a`
    background: linear-gradient(to left, #E70FAA, #13B0F5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`
