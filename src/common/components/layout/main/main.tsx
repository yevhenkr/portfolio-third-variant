import styled from "styled-components";
import {FlexWrapper} from "../../ui/flexWrapper/FlexWrapper";
import userPhoto from "../../../../assets/img/userPhoto.png";
import Abstract from "../../../../assets/img/abstract.png";
import {myTheme} from "../../../../styles/Theme.styled";
import Tilt from 'react-parallax-tilt';

export const Main = () => {
    return (
        <StyledMain id={'Home'}>
            <FlexWrapper display={"flex"} flexDirection={"column"} max_width={"630px"}>
                <StyledH2>Hi 👋, My name is Evgen I build things for web</StyledH2>
                <StyledH1>I’m Front-end Dev</StyledH1>
            </FlexWrapper>
            <Tilt>
                <StyledIcon src={userPhoto} alt={"User photo"}></StyledIcon>
            </Tilt>
        </StyledMain>
    );
};
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
`
const StyledH1 = styled.h1`
    font-weight: 500;
    background: linear-gradient(to right, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`
const StyledH2 = styled.h2`
    color: ${myTheme.color.title}
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
`
