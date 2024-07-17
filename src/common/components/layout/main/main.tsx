import {UserSVG} from "../../../../assets/icons/user";
import styled from "styled-components";
import {FlexWrapper} from "../../ui/flexWrapper/FlexWrapper";
import userPhoto from "../../../../assets/img/userPhoto.jpg";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper display={"flex"} flexDirection={"column"}>
                <StyledH1>a Front-End Developer</StyledH1>
                <StyledH2>I’m Muhamad Raul.</StyledH2>
            </FlexWrapper>
            <StyledIcon src={userPhoto} alt={"User photo"}></StyledIcon>
        </StyledMain>
    );
};
const StyledMain = styled.main`
    display: flex;
    flex-direction: row;
`
const StyledH1 = styled.h1``
const StyledH2 = styled.h2``
const StyledIcon = styled.img`
max-width: 350px;
width: 100%;
`
