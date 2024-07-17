import styled from 'styled-components';
import {Main} from "./common/components/layout/main/main";
import {Header} from "./common/components/layout/header/Header";


function App() {
    return (
        <AppWrapper>
            <Header/>
            <Main/>
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div``
