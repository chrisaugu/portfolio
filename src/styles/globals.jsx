import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body {
  box-sizing: border-box;
  background-color: #fc930a;
  height: 100%;
  margin: 0px;
  padding: 20px;
  font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
#root {
  height: 100%;
}
`
const ContainerWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'class hoc '
    'hook renderp';
`