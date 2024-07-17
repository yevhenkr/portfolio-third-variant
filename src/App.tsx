import styled from 'styled-components';
import {Main} from "./common/components/layout/main/main";
import {Header} from "./common/components/layout/header/Header";
import {About} from "./common/components/layout/sections/about/About";
import {Experiens} from "./common/components/layout/sections/experiens/Experiens";
import {TechStack} from "./common/components/layout/sections/techStack/TechStack";
import {Projects} from "./common/components/layout/sections/projects/Projects";


function App() {
    return (
        <AppWrapper>
            <Header/>
            <Main/>
            <About/>
            <Experiens/>
            <TechStack/>
            <Projects/>
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div``
