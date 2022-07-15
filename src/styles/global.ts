import colors from './colors'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle `
    html, body {
        font-family: 'Heebo', sans-serif;
        margin: 70px;
        padding: 0;
        padding-bottom: 0;
        height: 100%;
        overflow-x: hidden;
        color: ${colors.PenguinBlack};
    }

`

export default GlobalStyles