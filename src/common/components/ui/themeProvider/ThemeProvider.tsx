import {ReactNode, createContext, useEffect, useState} from 'react'
import {MoonIcon} from "../../../../assets/icons/moonIcon";
import {SunIcon} from "../../../../assets/icons/sunIcon";
import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";
import GlobalStyles from '../../../../styles/Theme.styled';

type Props = {
    children: ReactNode
}

export const ThemeContext = createContext<'dark' | 'light'>('dark')

export const ThemeProvider = ({children}: Props) => {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light'
        return savedTheme || 'dark'
    })

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'

        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={theme}>
            <StyledDiv >
                <StyledButton
                    id={'themeButton'}
                    onClick={toggleTheme}
                    title={theme === 'dark' ? 'Switch to light theme.' : 'Switch to dark theme.'}
                >
                    {theme === 'dark' ? <SunIcon/> : <MoonIcon/>}
                </StyledButton>
                <GlobalStyles />
                {children}
            </StyledDiv>
        </ThemeContext.Provider>
    )
}

const StyledDiv = styled.div`
    position: relative;
     background-color: ${myTheme.color.backGround};
`

const StyledButton = styled.button`
    all: unset;
    top: 120px;
    cursor: pointer;

    position: fixed;
    z-index: 999;
    right: 0;

    display: inline-flex;

    box-sizing: border-box;
    padding: 5px 3px;

    background-color: ${myTheme.color.text};
    color: ${myTheme.color.blackWhite};
    border: 1px solid black;
    border-right: 0;
    border-radius: 8px 0 0 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

    &:hover {
        background-color: ${myTheme.color.text};
        border: 1px solid black;;
        box-shadow: 0 0 10px 0 ${myTheme.color.text};
        transition: all 0.2s ease;
    }

    @media (max-width: ${myTheme.screen.small}) {
        position: fixed;
        width: 24px;
        right: 0;
    }
`