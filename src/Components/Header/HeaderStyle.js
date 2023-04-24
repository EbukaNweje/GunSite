import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuHold = styled.button`
display: none;
border: none;
background: none;
overflow-x: hidden;
transition: 0.5s;
cursor: pointer;

@media Screen and (max-width: 768px){
    display: block;
    color: #006400;
}
`;

export const NavDiv = styled.div`
    position: fixed;
    height: 50vh;
    width: 90%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 100px;
    top: 200px;
`;
export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
align-items: center;
position: fixed;
overflow: hidden;
z-index: 999;
top: 0;
padding-bottom: 10px;

@media Screen and (max-width: 425px){
    width: 100%;
}
@media Screen and (max-width: 375px){
    width: 100%;
}
@media Screen and (max-width: 320px){
    width: 100%;
}


`;
export const Wrapper = styled.div`
width: 70%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
/* align-items: center; */

@media Screen and (max-width: 768px){
    width: 90%;
    align-items: center;
}

`;
export const Header1 = styled.div`
width: 100%;
height: 10%;
display: flex;
justify-content: space-between;
align-items: center;

/* @media Screen and (max-width: 768px){
} */

`;
export const LogoHold = styled.div`
width: 10%;
/* background-color: aliceblue; */
height: 100%;
display: flex;
align-items: center;
img{
    width: 100px;
    height: 100px;
    cursor: pointer;

    @media Screen and (max-width: 425px){
    width: 75px;
    height: 75px;
}
}
@media Screen and (max-width: 768px){
    width: 80px;
    height: 80px;
}

`;
export const SearchHold = styled.div`
width: 70%;
/* background-color: purple; */
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 425px){
    width: 55%;
}
`;
export const Input = styled.input`
width: 60%;
padding: 0.65rem 0.5rem;
outline: 0;
border: 1px solid silver;
border-radius: 5px;
border-radius: 3px 0px 0px 3px;

:focus{
    border: 1px solid green;
    /* box-shadow: rgba(8, 67, 0, 0.72) 0px 3px 8px, rgba(8, 67, 0, 0.723) 0px 3px 6px; */
    box-shadow: rgba(8, 67, 0, 0.72) 0px 0px 0.1em, rgba(8, 67, 0, 0.72) 0px 0.2em 1em;
}

@media Screen and (max-width: 425px){
    width: 70%;
}

`;
// export const Input = styled.input`                                                                    ``;
export const Select = styled.select`
width: 20%;
/* background-color: cadetblue; */
padding:0.6rem 0.3rem;
outline: none;
border-top: 1px solid silver;
border-right: 1px solid silver;
border-bottom: 1px solid silver;
border-left: 0;

@media Screen and (max-width: 425px){
    display: none;
}
`;
export const SearchButton = styled.button`
padding: 0.75rem 1.4rem;
background-color: green;
border: none;
outline: none;
color: white;
cursor: pointer;

@media Screen and (max-width: 768px){
padding: 0.70rem 1.4rem;    
}
@media Screen and (max-width: 425px){
padding: 0.70rem 0.7rem;
}
@media Screen and (max-width: 375px){
padding: 0.70rem 0.5rem;    
}
`;
export const Advanced = styled(Link)`
color: green;
margin-left: 8px;
font-size: 12px;
cursor: pointer;
@media Screen and (max-width: 768px){
    display: none;
}
`;
export const Nav1 = styled(Link)`
cursor: pointer;
text-decoration: none;
color: green;

@media Screen and (max-width: 768px){
    display: none;
}
`
export const Nav1Hold = styled.div`
width: 12%;
display: flex;
justify-content: space-between;
align-items: center;
align-items: center;
color: #008000;


    @media Screen and (max-width: 768px){
        /* display: none; */
        span{
            display: none;
        }
    }
`;
export const Nav2Hold = styled.div`
width: 39%;
display: flex;
justify-content: space-between;
align-items: center;
align-items: center;
`;
export const Nav2 = styled.div`
color: #555555;
cursor: pointer;
a{
    color: #555555;
    text-decoration: none;

}
`;
export const Header2 = styled.div`
width: 100%;
height: 50%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width :768px){
    display: none;
}

`;
export const Select2 = styled.select`
width: auto;
border: none;
outline: none;
font-size: 17px;
color: green;
option{
    font-size: 20px;
}
`;

