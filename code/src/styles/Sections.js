import styled from 'styled-components';
import startScreenBg from '../components/img/startScreen.png';
import cave from '../components/img/cave.gif';

export const StartScreenSection = styled.section`
background-color: green;
background-image: url(${startScreenBg});
height: 100vh;
display: flex;
flex-direction: column;
gap: 3%;
align-items: center;
justify-content: center;
`
export const GameScreenSection = styled.section`
background-color: green;
background-image: url(${cave});
background-size: cover;
height: 100vh;
display: flex;
flex-direction: column;
gap: 3%;
align-items: center;
justify-content: center;
`

export const GameSection = styled.section`
display: flex;
flex-direction: column;
gap: 10px;
font-family: "Press Start 2P";
font-size: 10px;
font-size: 1em;
line-height: 1.6em;
background: white;
border: 10px solid black;
align-self: center;
width: 60%;
margin-right: auto;
margin-left: auto;
padding: 2%;
margin-bottom: 2%;

@media (min-width: 770px) {
    width: 40%;
}`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`