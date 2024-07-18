import styled from 'styled-components'
import React from "react";
import {myTheme} from "../../../../styles/Theme.styled";

type TitleProps = {
  wordOne: string
  wordSecond?: string
}

export const TitleSection = (props: TitleProps) => {
  return (
      <StyledH2>
          <SpanFirst>{`${props.wordOne}`} </SpanFirst>
          {props.wordSecond ? <SpanSecond>{props.wordSecond}</SpanSecond>:""}
      </StyledH2>
  )
}

const StyledH2 = styled.h2`
    display: flex;
    align-items: flex-start;
    column-gap: 10px;
    flex-direction: row;
    position: relative;
    margin-top: 0;
    margin-bottom: 80px;

    @media (max-width: ${myTheme.screen.medium}) {
        margin-bottom: 30px;
    }
`
const SpanFirst = styled.span`
    font-weight: ${myTheme.font.weights.regular};
    font-size: 35px;
    color: ${myTheme.color.text};
`
const SpanSecond = styled.span`
    font-family: Poppins, sans-serif;
    font-weight: ${myTheme.font.weights.semiBold};
    font-size: 35px;
`
