import styled from 'styled-components';
import {Main} from "./common/components/layout/main/main";
import {Header} from "./common/components/layout/header/Header";
import {About} from "./common/components/layout/sections/about/About";


function App() {
    return (
        <AppWrapper>
            <Header/>
            <Main/>
            <About/>
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div``
