import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../assets/context/UserContext";
import styled from "styled-components";

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import omega from "../assets/imagens/omega.png"
import bird from "../assets/imagens/Icons/Bird.png"
import keys from "../assets/imagens/Icons/Keys.png"
import mountains from "../assets/imagens/Icons/Mountains.png"
import sun from "../assets/imagens/Icons/Sun.png"

export default function Home() {

    const a = "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";

    const fadeImages = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    ];



    return (<>
        <Screen1>
            <Logo>
                <img alt="" src={omega}></img>
                <h1>mega Tattoos</h1>
            </Logo>
            <Intro><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p></Intro>

            <Slideshow>
                <div className="slide-container">
                    <Fade>
                        {fadeImages.map((fadeImage, index) => (
                            <div className="each-fade" key={index}>
                                <div className="image-container">
                                    <img alt="" src={a} />
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </Slideshow>

            <h2>Escolha seu estilo:</h2>

            <Body>
                <Link1 to={"/artist1"}>
                    <div className="artist">
                        <img alt="" src={bird}></img>
                        <h1>Preto e Branco</h1>
                    </div>
                </Link1>
                <Link1 to={"/artist2"}><div className="artist">
                    <img alt="" src={keys}></img>
                    <h1>Preto e Branco</h1>
                </div></Link1>
                <Link1 to={"/artist3"}> <div className="artist">
                    <img alt="" src={mountains}></img>
                    <h1>Preto e Branco</h1>
                </div></Link1>
                <Link1 to={"/artist4"}><div className="artist">
                    <img alt="" src={sun}></img>
                    <h1>Preto e Branco</h1>
                </div></Link1>
            </Body>

            <h3>Em Breve:</h3>
            <h4>Piercings e Modificações Corporais</h4>

        </Screen1>
        <Footer><h3>© Omega Tattoos. All Rights Reserved - 2022. Licensed</h3></Footer>

    </>)
};

const Link1 = styled(Link)`
    text-decoration: none ;
`

const Screen1 = styled.div`
    
    background: #000;
    height: 637px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;       

    h2 {
    width: 330px;
    margin: 8px 0px;
    box-sizing: border-box;

    font-family: 'Marcellus', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-align: center;    
    color: white;
    }

    h3 {
    width: 330px;
    margin: 8px 0px;
    box-sizing: border-box;

    font-family: 'Marcellus', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-align: center;    
    color: white;
    }

    h4 {
    width: 330px;
    margin: 8px 0px;
    box-sizing: border-box;

    font-family: 'IM Fell DW Pica SC', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 17px;
    text-align: center;    
    color: white;
    }
`

const Logo = styled.div`   
    
    height: 70px;
    box-sizing: border-box;
    display: flex;    
    align-items: center;
    justify-content: center ;
   
    h1 {
    font-family: 'IM Fell DW Pica SC', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 42px;    
    text-align: center;
    color: white;
    padding-top: 26px;    
    box-sizing: border-box;
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 3px;
        box-sizing: border-box;
    }
`

const Intro = styled.div`

    height: 130px;
    width: 330px;
    display: flex;    
    align-items: center;
    justify-content: center;

    p {            
        font-family: 'Marcellus', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        text-align: justify;    
        color: white;
    }
`

const Slideshow = styled.div`

    height: 150px;
    width: 330px;     
    margin: 5px 0px;
    box-sizing: border-box;     

    img { 
    height: 150px;
    width: 330px;
    opacity: 0.7; 
    border-radius: 8px;        
}
`

const Body = styled.div`

    height: 120px;
    width: 350px;
    display: flex;
    align-items: center;    

    .artist {        

        display: flex;
        flex-direction: column;
        align-items: center;       

        h1 {
            margin-top: 5px;
            box-sizing: border-box;
            font-family: 'Marcellus', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 17px;
            text-align: center;    
            color: white;
        }
    }

    img {
        width: 60px;
        height: 60px;
    }

`

const Footer = styled.div`
    width: 375px;
    height: 30px;
    background: #000;
    display: flex;    
    align-items: center;
    justify-content: center; 

    h3{
    font-family: 'Marcellus', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 17px;
    text-align: center;    
    color: white;   
    }
`