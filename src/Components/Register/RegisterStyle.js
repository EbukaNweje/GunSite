import styled from "styled-components";

export const Submit = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 1rem 0;
margin-top: 20px;
`;
export const Continue = styled.button`
padding: 0.7rem 2rem;
background-color: #006400;
color: white;
cursor: pointer;
border-radius: 5px;
border: none;
outline: none;
`;
export const Cancel = styled.div`
color: #006400;
margin: 0 55px 0 0;
cursor: pointer;
`;
export const Container = styled.div`
width: 100%;
height: auto;
background-color: whitesmoke;
margin-top: 150px;
border-top: 1px solid silver;
display: flex;
justify-content: center;
padding: 2rem 0 6rem 0;
`;
export const Wrapper = styled.div`
width: 70%;
display: flex;
flex-direction: column;

@media Screen and (max-width: 768px){
    width: 90%;
}
`;
export const First = styled.div`
width: 100%;
height: auto;
border-radius: 0.5rem;
border: 1px solid silver;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
margin: 10px 0;
padding: 0 0 1rem 0;
`;
export const H1 = styled.h1`
color: #006400;
`;
export const P = styled.p`
color: #555555;
`;
export const Div1 = styled.div`
width: 97.4%;
background-color: #006400;
padding: 0 1rem;
border-radius: 0.5rem 0.5rem 0rem 0;
height: 24%;
display: flex;
align-items: center;
color :white;

h4{
    font-weight: 500;
}
@media Screen and (max-width: 768px){
    width: 95.7%
}
@media Screen and (max-width: 425px){
    width: 93%
}
@media Screen and (max-width: 375px){
    width: 92%
}
@media Screen and (max-width: 320px){
    width: 91%
}
`;
export const DivHold2 = styled.div``;
export const DivHold = styled.div`
padding: 0 2rem;
width: 94.5%;
height: 84%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
export const Div = styled.div`
width: 48%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;

@media Screen and (max-width: 768px){
    width: 97%;
}
`;
export const DivTitle = styled.div`
font-size: 14px;
font-weight: 400;
color: #555555;
margin-bottom: 5px;
`;
export const DivLabel = styled.div`
display: flex;
align-items: center;
border: 1px solid silver;
border-radius: 5px;
`;
export const InputHold = styled.div`
width: 90%;
/* background-color: green; */
height: 100%;

`;
export const IconHold = styled.div`
width: 7%;
height: 100%;
background-color: #E0E0E0;
display: flex;
justify-content: center;
align-items: center;
padding: 0.3rem;
border-radius: 3px 0px 0px 3px;

@media Screen and (max-width: 768px){
    height: 80%;
    background: none;
    border-right: 1px solid silver;
}
`;
export const Input = styled.input`
border: none;
outline: none;
padding: 0 1rem;
background: none;
width: 90%;
::placeholder{
    color: #555555;
}
@media Screen and (max-width: 768px){
    height: 100%;
}

`;
export const AddBusinessInfo = styled.div`
width: 97.4%;
background-color: #006400;
border-radius: 0.3rem;
display: flex;
align-items: center;
padding: 0.3rem 1rem;
color: white;
cursor: pointer;

nav{
    margin-left: 10px;
}

@media Screen and (max-width: 768px){
    width :96%;
}
@media Screen and (max-width: 425px){
    width :93%;
}
@media Screen and (max-width: 375px){
    width :91%;
}
@media Screen and (max-width: 320px){
    width :90%;
}
`;
export const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;



