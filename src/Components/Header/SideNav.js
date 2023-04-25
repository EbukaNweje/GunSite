import React from 'react'
import { BsX, BsArrowDown} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from "styled-components";


const SideNav = ({SetSideNav}) => {
  return (
    <Container>
        <Wrapper>
        <Button  onClick={()=>{
                SetSideNav(false);
            }}  style={{border: "none", background: "none", width: 50, height: 50}}>
            <BsX style={{width: 40, height: 40, color:"grey"}}/>
            </Button>
                <MidNav>
                    <Span to='/'>Sign In</Span>
                    <Span to='/register'>Register</Span>
                    <Span to='/register'>Advanced Sreach </Span>
                    <br/>
                    <Span to='/register'>My GunBroker </Span>
                    <Span to='/register'>Buying</Span>
                    <Span to='/register'>Selling</Span>
                    <br/>
                    <Span to='/register'>Watch List</Span>
                    <Span to='/register'>Saved Search</Span>
                    <Span to='/register'>Shipping</Span>
                    <Span2 to='/register'>Tool Box</Span2>
                    <br/>
                    <Span2 to='/register'>Account</Span2>
                    <Span3 to='/register'>Support</Span3>
                    <br/>
                    <Span3 to='/register'>Buy</Span3>
                    <Span3 to='/register'>Sell</Span3>
                    <Span3 to='/register'>Coupons</Span3>
                    <Span3 to='/register'>Stores</Span3>
                    <Span3 to='/register'>Articles</Span3>
                    <Span3 to='/register'>Videos</Span3>
                    <Span3 to='/register'>Help</Span3>
                    <br/>
                    <Span3 to='/register'>Browse Categories  <BsArrowDown style={{color:"#555555"}}/></Span3>
                </MidNav>
        </Wrapper>
    </Container>
  )
}

export default SideNav;


const Button = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  background: linear-gradient(#FFFFF9, #C6DDF2);
  /* background-color: #C6DDF2; */
  padding: 5px o;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  margin: 20px 100px 20px 5px;
  
  /* margin: 20px 10px 20px 35px; */
  cursor: pointer;

  :hover{
    opacity: 80%;
    transition: all 400ms;
    cursor: pointer;
  }

  @media Screen and (max-width: 768px){
    margin: 15px 0 15px 25px;
  }
`;

const Container = styled.div`
    width: 80%;
    position: fixed;
    min-height: 49px;
    z-index: 990;
    overflow-x: hidden;
    top: 110px;
    height: 70vh;
    background-color: white;
    padding-top: 10px;
    border-radius: 8px;
    transition: all .3s linear;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    transition: height ease 3s;
    margin-top: 20px;

    @media Screen and (max-width: 425px){
      width: 90%;
      left: 20px;
    }
    @media Screen and (max-width: 768px){
      width: 90%;
      left: 20px;
    }

    ::-webkit-scrollbar{
        background-color: whitesmoke;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #006400;
    }
    
`;
const Wrapper = styled.div`
    width: 100%;
    line-height: 35px;
    /* background-color: orange; */
    /* margin-top: 5px; */
`;

const MidNav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* margin-left: 10px; */
    /* height: 00px; */
    /* align-items: center; */
`;

const Span = styled(Link)`
width: 100%;
height: 60px;
/* background-color: red; */
border-bottom: 1px solid #e8e9ef;
color: #7f7f8b;
text-decoration: none;
/* color: silver; */
font-size: 18px;
padding-left: 40px;
font-weight: 400;
transition: font-size ease 1s;
display: flex;
justify-content: flex-start;
align-items: center;
      :hover{
            cursor: pointer;
            font-size: 20px;
            /* color: red; */
        }
`;
const Span2 = styled(Link)`
width: 100%;
height: 60px;
/* background-color: red; */
border-bottom: 1px solid #e8e9ef;
color: #7f7f8b;
text-decoration: none;
/* color: silver; */
font-size: 18px;
padding-left: 40px;
font-weight: 400;
transition: font-size ease 1s;
display: flex;
justify-content: flex-start;
align-items: center;
      :hover{
            cursor: pointer;
            font-size: 20px;
            /* color: red; */
        }
`;
const Span3 = styled(Link)`
width: 100%;
height: 60px;
/* background-color: red; */
border-bottom: 1px solid #e8e9ef;
color: #7f7f8b;
text-decoration: none;
/* color: silver; */
font-size: 18px;
padding-left: 40px;
font-weight: 400;
transition: font-size ease 1s;
display: flex;
justify-content: flex-start;
align-items: center;
      :hover{
            cursor: pointer;
            font-size: 20px;
            /* color: red; */
        }
`;


