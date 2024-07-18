import {UserSVG} from "../../../../assets/icons/user";
import styled from "styled-components";
import {FlexWrapper} from "../../ui/flexWrapper/FlexWrapper";
import userPhoto from "../../../../assets/img/userPhoto.jpg";
import Abstract from "../../../../assets/img/userPhoto.jpg";
import {myTheme} from "../../../../styles/Theme.styled";

const text  = "I’m Vasilenko"
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper display={"flex"} flexDirection={"column"} max_width={"630px"}>
                <StyledH1>a Front-End</StyledH1>
                <StyledH2>{text}</StyledH2>
            </FlexWrapper>
            <StyledIcon src={userPhoto} alt={"User photo"}></StyledIcon>
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
    color: ${myTheme.color.titel}
`
const StyledH2 = styled.h2`
    color: ${myTheme.color.titel}
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
