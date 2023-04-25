import styled from "styled-components";

export const Hold = styled.div`
width: 90%;
height: 80%;

div{
    margin: 5px 0;
    color: #555555;
    @media Screen and (max-width: 768px){
        margin: 10px 0;
    }
    @media Screen and (max-width: 425px){
        font-size: 13px;
    }
}
`;

export const Container = styled.div`
width: 100%;
background-color: whitesmoke;
height: 70vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 120px;

@media Screen and (max-width: 768px){
    height: auto;
    width: 90%;
}
@media Screen and (max-width: 425px){
    height: auto;
}
`;
export const Wrapper = styled.div`
background-color: white;
width: 30%;
height: 60%;
border: 1px solid silver;
border-radius: 3px;
display: flex;
flex-direction: column;
align-items: center;
padding: 5px 0;

@media Screen and (max-width: 768px){
width: 90%;
}

@media Screen and (max-width: 425px){
    margin-top: 40px;
}

`;
export const First = styled.div`
width: 90%;
height: 80%;
padding: 3px 1rem;
`;
export const H1 = styled.div`
font-weight: 500;
color: #555555;

@media Screen and (max-width: 768px){
    font-size: 14px;
}
`;
export const InputHold = styled.div`
width: 100%;
line-height: 30px;
margin: 2px 0;
`;
export const P = styled.div`
font-weight: 500;
color: #555555;
@media Screen and (max-width: 768px){
    font-size: 14px;
}
`;
export const Input = styled.input`
width: 98%;
padding: 0.4rem 5px;
border: none;
border-radius: 2px;
outline: none;
border: 1px solid silver;

@media Screen and (max-width: 425px){
padding: 0.4rem 0 0.4rem 5px;

}

`;
export const Div = styled.div`
width: 40%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px 0;
@media Screen and (max-width: 768px){
width: 35%;
}
@media Screen and (max-width: 425px){
width: 65%;
}
@media Screen and (max-width: 320px){
width: 85%;
}
`;
export const Info = styled.div`
font-size: 10px;
margin: 10px 0;
color: #555555;

a{
    color: #006400;
    text-decoration: 1px underline #006400;
}

`;
export const P2 = styled.div`
margin: 10px 0;
color: #006400;
@media Screen and (max-width: 425px){
    font-size: 13px;
}
`;
export const Button2 = styled.button`
background-color: #006400;
padding: 0.5rem 2rem;
border: none;
outline: none;
border-radius: 3px;
color: white;
width: 100px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;
export const Button = styled.button`
background-color: #006400;
padding: 0.5rem 2rem;
border: none;
outline: none;
border-radius: 3px;
color: white;
width: 100px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;
export const Bottom = styled.div`
background-color: white;
width: 30%;
height: 18%;
border: 1px solid silver;
border-radius: 3px;
display: flex;
flex-direction: column;
align-items: center;
padding: 5px 0;
margin-top: 5px;

@media Screen and (max-width: 768px){
width: 90%;
}
`;


