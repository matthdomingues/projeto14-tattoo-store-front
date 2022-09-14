import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../assets/context/UserContext";
import styled from "styled-components";

import omega from "../assets/imagens/omega.png"
import bird from "../assets/imagens/Icons/Bird.png"
import keys from "../assets/imagens/Icons/Keys.png"
import mountains from "../assets/imagens/Icons/Mountains.png"
import sun from "../assets/imagens/Icons/Sun.png"

export default function Home() {
    return (<>
        <Screen1>
            <Logo>
                <img alt="" src={omega}></img>
                <h1>mega Tattoos</h1>
            </Logo>

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
        </Screen1>
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
    width: 285px;
    font-family: 'Marcellus', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    text-align: center;    
    color: white;
    cursor: pointer;
    }
`

const Logo = styled.div`   
    
    height: 30px;
    box-sizing: border-box;
    display: flex;    
    align-items: center;
    margin-top: 20px;
   
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

const Body = styled.div`

    height: 180px;
    width: 375px;
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