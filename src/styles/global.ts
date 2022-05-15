import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  --background: #f2f0f5;
  --Principal: #FD0056;
  --Secundaria: #100727;
  --verde-claro: #03AFBA;

  --texto: #363F5F;
  --texto-claro: #969CB2;

  --branco:#FFFFFF;


}

* {
  margin:0;
  padding: 0%;
  box-sizing:border-box;
}

html{
  @media (max-width:1080px) {
    font-size: 93.75%;
  }

  @media (max-width:720px) {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

[disable] {
  opacity: 0.6;
  cursor: not-allowed;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.react-modal-overlay{
background: rgba(0,0,0,0.5);
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;
}

.react-modal-content{
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}

.react-modal-close {
  position: absolute;
  right: 3.2rem;
  top: 1.5rem;
  background: transparent;
  border: 0;
  transition: 0.3s;

  &:hover {
    filter: brightness(0.6);
  }

}

`