import React from 'react'
import { FiHome } from 'react-icons/fi';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { BsX, BsBarChartLine, BsFillPersonFill, BsPerson} from 'react-icons/bs';
import {MdQuestionMark,MdArticle,MdVideoFile,MdToken, MdOutlineCloudUpload, MdOutlineLibraryBooks, } from 'react-icons/md';
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
                    <Span to='/register'> <FiHome style={{color:"#FFBF00"}}/>  Home</Span>
                    <Span to='/register'> <MdOutlineLibraryBooks style={{color:"#FFBF00"}}/> Buy</Span>
                    <Span to='/register'> <BsBarChartLine style={{color:"#FFBF00"}}/> Sell </Span>
                    <Span to='/register'> <MdToken style={{color:"#FFBF00"}}/> Coupons </Span>
                    <Span to='/register'> <MdOutlineCloudUpload style={{color:"#FFBF00"}}/>Stores</Span>
                    <Span to='/register'> <MdArticle style={{color:"#FFBF00"}}/>Articles</Span>
                    <Span to='/register'><MdVideoFile style={{color:"#FFBF00"}}/>Videos</Span>
                    <Span to='/register'> <MdQuestionMark style={{color:"#FFBF00"}}/>FAQ</Span>
                    <Span to='/register'> <IoPersonCircleSharp style={{color:"#FFBF00"}}/>Sign In</Span>
                    <Span2 to='/register'> <BsFillPersonFill style={{color:"#FFBF00"}}/>Create Account</Span2>
                    <Span3 to='/register'> <BsPerson style={{color:"#FFBF00"}}/>Sign In</Span3>
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
    top: 150px;
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


