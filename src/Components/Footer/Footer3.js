import React from 'react'
import styled from 'styled-components';
import genius from './genius.svg'
import forums from './forums.svg'
import poww from './poww.svg'

const Footer3 = () => {
  return (
    <Container>
        <Wrapper>
            <Holder>
            <Col2>
            <Title>POPULAR TOPICS</Title>
            <a>Careers at GunBroker</a>
            <a>CZ-USA</a>
            <a>Gun Sights</a>
            <a>KEL-TEC</a>
            <a>Remington</a>
            <a>Scopes & Optics</a>
            </Col2>
            <Col2>
            <Title>POPULAR</Title>
                <a>Popular Searches</a>
                <a>Popular Gun Accessories</a>
                <a>Popular Ammo</a>
                <a>Gun Models</a>
            </Col2>
            <Col2>
            <Title>MANUFACTURERS</Title>
                <a>Gun Manufacturers</a>
                <a>Rifle Manufacturers</a>
                <a>Pistol Manufacturers</a>
                <a>Shotgun Manufacturers</a>
                <a>Parts/Accessories<br/>Manufacturers</a>
                <a>FFL/Dealer Services</a>
                <a>Dealer Store</a>
            </Col2>
            </Holder>

            <Holder>
            <Col2>
            <Title> <img src={genius}/> RELATED SITES</Title>
                <a>ATF FFL EZ Check</a>
                <a>Forums</a>
                <a>Gun Genius</a>
            </Col2>
            <Col2>
            <Title><img src={forums}/>AREAS OF INTEREST</Title>
                <a>The GunBroker Store</a>
                <a>Articles</a>
                <a>Stores</a>
                <a>Firearm Industry News</a>
                <a>Gold Membership</a>
                <a>Videos</a>
            </Col2>
            <Col2>
            <Title><img src={poww}/>INDUSTRY RELATIONS</Title>
                <a>Advertise with Us</a>
                <a>Investor and Media</a>
                <a>Relations</a>
            </Col2>
            </Holder>
        </Wrapper>
        <Hold>
            <HoldWrap>
                <nav>© 1999-2023 GunBroker.com All rights reserved worldwide. (01 7.0.34.3120)</nav>
                <Adiv>
                <a href=''>
                    Copyright & trademarks
                </a>
                <a href=''>
                    User Agreements
                </a>
                <a href=''>
                    Privacy Policy
                </a>
                <a href=''>
                    Accessibility
                </a>
                <a href=''>
                    Legal Terms
                </a>
                </Adiv>
            </HoldWrap>
        </Hold>
    </Container>
  )
};

export default Footer3;

const Holder = styled.div`
width: 48%;
display: flex;
justify-content: space-between;
margin: 1rem 0;

@media Screen and (max-width: 768px){
  width: 100%;
}
`;

const HoldWrap = styled.div`
width: 63%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
a{
    color: #006400;
    font-size: 11px;
    text-decoration: none;
}

nav{
    font-size: 12px;
    color: #555555;
    @media Screen and (max-width: 425px){
    flex-wrap: wrap;
    text-align: center;
}
}

@media Screen and (max-width: 768px){
    width: 90%;

    nav{
    width: 100%;
    }
}
`;

const Adiv = styled.div`
font-size: 12px;
color: #555555;
display:flex;
justify-content:space-between;
align-items:center;
width:45%;


@media Screen and (max-width: 768px){
    width: 100%;
}
@media Screen and (max-width: 425px){
    width: 95%;
    flex-wrap: wrap;
    text-align: center;
}
@media Screen and (max-width: 375px){
    width: 100%;
    flex-wrap: wrap;
    text-align: center;
}
@media Screen and (max-width: 320px){
    width: 100%;
    flex-wrap: wrap;
    text-align: center;
}
`;

const Hold = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border-top: 1px solid silver;
padding: 1rem 0;
height: 10vh;
background-color: white;
@media Screen and (max-width: 768px){
height: auto;
}
`;

const Container = styled.div`
width :100%;
height: 30vh;
background-color: whitesmoke;
border-top: 1px solid silver;
padding: 4rem 0 3rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
    height: auto;
}
`;
const Wrapper = styled.div`
width: 70%;
height: 100%;
/* background-color: blueviolet; */
display: flex;
justify-content: space-between;
padding: 20px 0 25px 0;
@media Screen and (max-width: 768px){
    flex-direction: column;
    width: 90%;
}
`;
const Title = styled.div`
margin-bottom: 15px;
font-size: 17px;
font-weight: 500;
display: flex;
align-items: center;
img{
    width: 30px;
    height: 30px;
}

@media Screen and (max-width: 768px){
    font-size: 12px;
}
`;

const Col2 = styled.div`
display: flex;
flex-direction: column;

a{
  color: #555555;
  font-size: 12px;
  cursor: pointer;
  margin: 4px 0;
  :hover{
    color: #006400;
    transition: all 350ms;
    text-decoration:1px underline #006400;
  }

  @media Screen and (max-width: 425px){
    font-size: 10px;
  }
}

@media Screen and (max-width: 425px){
    width: 30%;
    a{
        font-size: 10px;
    }
}

`;