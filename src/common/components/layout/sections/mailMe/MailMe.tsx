import React from 'react';
import styled from "styled-components";

export const MailMe = () => {
    return (
        <MailMeSection>
            <MailMeText>For any questions please mail me:</MailMeText>
            <MailLink>hi@pavanmg.in</MailLink>
        </MailMeSection>
    );
};

const MailMeSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 200px;
`
const MailMeText = styled.h2``
const MailLink = styled.a``
