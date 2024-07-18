import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";

type ButtonType ={
    title: string
}

export const Button = (props: ButtonType) => {
    return (
        <ButtonStyled>
            {props.title? props.title : ""}
        </ButtonStyled>
    );
};

const ButtonStyled = styled.button`
    background-color: ${myTheme.color.buttonBG};
    color: ${myTheme.color.buttonText};
    border-radius: 100px;
    padding: 5px 20px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 9px;
    margin-bottom: 12px;
`