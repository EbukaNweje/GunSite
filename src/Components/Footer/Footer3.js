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
            <a href='https://www.gunbroker.com/c/p/careers/'>Careers at GunBroker</a>
            <a href='https://www.gunbroker.com/CZ-Firearms/search?Keywords=CZ'>CZ-USA</a>
            <a href='https://www.gunbroker.com/Gun-Sights/search'>Gun Sights</a>
            <a href='https://www.gunbroker.com/Kel-Tec-Firearms/search?Keywords=Kel%20Tec'>KEL-TEC</a>
            <a href='https://www.gunbroker.com/Remington-Guns/search?Keywords=Remington'>Remington</a>
            <a href='https://www.gunbroker.com/Scopes-Sights-Optics/search'>Scopes & Optics</a>
            </Col2>
            <Col2>
            <Title>POPULAR</Title>
                <a href='https://www.gunbroker.com/popular/searches'>Popular Searches</a>
                <a href='https://www.gunbroker.com/popular/gunaccessories'>Popular Gun Accessories</a>
                <a href='https://www.gunbroker.com/popular/ammo'>Popular Ammo</a>
                <a href='https://www.gunbroker.com/popular/gunmodels'>Gun Models</a>
            </Col2>
            <Col2>
            <Title>MANUFACTURERS</Title>
                <a href='https://www.gunbroker.com/manufacturers/gun'>Gun Manufacturers</a>
                <a href='https://www.gunbroker.com/manufacturers/rifle'>Rifle Manufacturers</a>
                <a href='https://www.gunbroker.com/manufacturers/pistol'>Pistol Manufacturers</a>
                <a href='https://www.gunbroker.com/manufacturers/shotgun'>Shotgun Manufacturers</a>
                <a href='https://www.gunbroker.com/manufacturers/partsandaccessories'>Parts/Accessories<br/>Manufacturers</a>
                <a href='https://www.gunbroker.com/user/login?ReturnUrl=/newregistration/signupdetails'>FFL/Dealer Services</a>
                <a href='https://www.gunbroker.com/user/login?ReturnUrl=/newregistration/signupdetails'>Dealer Store</a>
            </Col2>
            </Holder>

            <Holder>
            <Col2>
            <Title> <img alt='related sites' src={genius}/> GUN GENIUS</Title>
                <a href='https://www.gungenius.com/'>The world's most powerful firearm database</a>
            </Col2>
            <Col2>
            <Title><img alt='areas of interest' src={forums}/>GUN BROKERS.COM FORUMS</Title>
                <a href='https://forums.gunbroker.com/'>Discussion forums for for GunBroker.com users</a>
            </Col2>
            <Col2>
            <Title><img alt='industry relations' src={poww}/>OWN STOCK</Title>
                <a href='https://support.gunbroker.com/hc/en-us/articles/221733727'>Publicly traded on Nasdaq as poww</a>
            </Col2>
            </Holder>
        </Wrapper>
        <Hold>
            <HoldWrap>
                <nav>© 1999-2023 GunBroker.com All rights reserved worldwide. (01 7.0.34.3120)</nav>
                <Adiv>
                <a href='https://www.gunbroker.com/user/login?ReturnUrl=/newregistration/signupdetails'>
                    Copyright & trademarks
                </a>
                <a href='https://www.gunbroker.com/user/login?ReturnUrl=/newregistration/signupdetails'>
                    User Agreements
                </a>
                <a href='https://www.gunbroker.com/user/login?ReturnUrl=/newregistration/signupdetails'>
                    Privacy Policy
                </a>
                <a href='https://www.gunbroker.com/user/login?ReturnUrl=/newregistration/signupdetails'>
                    Accessibility
                </a>
                <a href='https://www.gunbroker.com/user/login?ReturnUrl=/newregistration/signupdetails'>
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
  text-decoration: none;
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