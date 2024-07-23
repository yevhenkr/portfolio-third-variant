import styled from 'styled-components';
import {Main} from "./common/components/layout/main/main";
import {Header} from "./common/components/layout/header/Header";
import {About} from "./common/components/layout/sections/about/About";
import {TechStack} from "./common/components/layout/sections/techStack/TechStack";
import {Projects} from "./common/components/layout/sections/projects/Projects";
import {MailMe} from "./common/components/layout/sections/mailMe/MailMe";
import {Footer} from "./common/components/layout/footer/Footer";
import React from "react";
import {myTheme} from "./styles/Theme.styled";


function App() {
    return (
        <AppWrapper>
            <Header/>
            <Main/>
            <About/>
            <TechStack/>
            {/*<Projects/>*/}
            {/*<MailMe/>*/}
            {/*<Footer/>*/}
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: ${myTheme.screen.small}) {
        max-width: ${myTheme.screen.small};
        background-color: ${myTheme.color.backGround};
    }
`