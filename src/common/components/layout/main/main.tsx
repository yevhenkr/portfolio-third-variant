import styled from "styled-components";
import userPhoto from "../../../../assets/img/userPhoto.png";
import Abstract from "../../../../assets/img/abstract.png";
import {myTheme} from "../../../../styles/Theme.styled";
import Tilt from 'react-parallax-tilt';

export const Main = () => {
    return (
        <StyledMain id={'Home'}>
            <TitleWrap>
                <StyledH2>Hi 👋, My name is Evgen I build things for web</StyledH2>
                <StyledH1>I’m Front-end Dev</StyledH1>
            </TitleWrap>
            <Tilt>
                <StyledIcon src={userPhoto} alt={"User photo"}></StyledIcon>
            </Tilt>
        </StyledMain>
    );
};

const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 630px;
    @media (max-width: ${myTheme.screen.small}) {
        max-width: ${myTheme.screen.small};
        max-width: 290px;
        margin: auto 0;
    }
`


const StyledMain = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 60px;
    padding-top: 265px;
    padding-bottom: 200px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 40px;
    @media (max-width: ${myTheme.screen.small}) {
        max-width: calc(100vw - 20px);
        padding: 80px 10px 0 10px;
    }
`
const StyledH1 = styled.h1`
    font-weight: 500;
    background: linear-gradient(to right, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media (max-width: ${myTheme.screen.small}) {
        font-size: 20px;
`
const StyledH2 = styled.h2`
    color: ${myTheme.color.title};
    @media (max-width: ${myTheme.screen.small}) {
   font-size: 20px;
}
`
const StyledIcon = styled.img`
    max-width: 350px;
    width: 100%;
    position: relative;
    object-fit: contain;

    &::after {
        content: "";
        position: absolute;
        z-index: 12;
        width: 500px;
        height: 500px;
        max-height: 535px;
        background-image: url(${Abstract});
        background-repeat: no-repeat;
        background-size: 100%;
    }

    @media (max-width: ${myTheme.screen.small}) {
        max-width: 250px;
    }
`
