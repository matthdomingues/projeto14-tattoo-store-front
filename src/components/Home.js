import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../assets/context/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import omega from "../assets/imagens/omega.png"
import { tattoos } from "../assets/Images";


export default function Home() {

    const navigate = useNavigate();
    const { user, setUser, counter, setCounter, cart, setCart } = useContext(UserContext);
    const [artists, setArtists] = useState([]);

    useEffect(() => {

        const requisicao = axios.get(
            `${process.env.REACT_APP_BACK_END_URL}/artist`,
        );

        requisicao.then((res) =>
            setArtists(res.data)
        );

    }, []);

    useEffect(() => {

        const requisicao = axios.get(
            `${process.env.REACT_APP_BACK_END_URL}/cart/${user.id}`,
        );

        requisicao.then((res) => {
            setCart(res.data)
            setCounter(cart.length)
        });

    }, [cart, setCart, setCounter, user.id]);

    if (!user) { alert("Usuário não identificado, logue-se ou registre-se!"); navigate("/") }

    return (<>
        <Screen1>
            <Logo>
                <img alt="" src={omega}></img>
                <h1>mega Tattoos</h1>
            </Logo>
            <UserBar>
                <>
                    <h5>Bem-vindo(a), {user.name}!</h5>
                </>
                <>
                    <Cart onClick={() => { navigate("/checkout") }}>
                        <ion-icon name="cart-outline" color="light" ></ion-icon>
                        {counter === 0 ? <></> : <CartQuantity>
                            <p>{counter}</p>
                        </CartQuantity>}
                    </Cart>
                    <ion-icon name="exit-outline" color="light" onClick={() => { setUser(null); navigate("/") }}></ion-icon>
                </>
            </UserBar>

            <Intro>
                <p><strong>Omega Tattoos</strong> é um estúdio de tatuagens onde você pode explorar e decidir fazer quantas tatuagens quiser, todas com um preço fixo e dividida por especialidades dos nossos tatuadores!</p>
            </Intro>

            <Slideshow>
                <div className="slide-container">
                    <Fade>
                        {tattoos.map((fadeImage, index) => (
                            <div className="each-fade" key={index}>
                                <div className="image-container">
                                    <img alt="" src={fadeImage.photo} />
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </Slideshow>

            <h2>Escolha seu estilo:</h2>

            <Body>
                {artists.length ?
                    artists.map((artist) =>
                        <Link1 to={`/artist/${artist.id}`}>
                            <div className="artist">
                                <img alt="" src={artist.icon} />
                                <h1>{artist.specialty}</h1>
                            </div>
                        </Link1>
                    )
                    : "Não tem artista nenhum"
                }
            </Body>

            <h3>Em Breve:</h3>
            <h4>Piercings e Modificações Corporais</h4>

        </Screen1>
        <Footer><h3>© Omega Tattoos. All Rights Reserved - 2022. Licensed</h3></Footer>

    </>)
};

const CartQuantity = styled.div`  
  position: absolute;
  bottom: 18px;
  left: 10px;
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 5px;
  display:flex;
  align-items:center;
  justify-content:center;

  p {
    /* font-family: 'Fredoka One', cursive; */
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #EC665C;
  }
`

const Cart = styled.div`
  position: relative;
  cursor: pointer; 
`

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
    
    .buttons {
        height: 50px;
        width: 317px;
        margin: 5px 0px;
        box-sizing: border-box;
        display: flex;        
        justify-content: space-between;
    }

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

const UserBar = styled.div`
    height: 32px;
    width: 375px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;    
    padding: 0px 8px;

    ion-icon {
        width: 28px;
        height: 28px;
        cursor: pointer; 
    }    

    h5 {
    padding-right: 35px;
    font-family: 'Marcellus', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 17px;
    text-align: left;    
    color: #797979;
    }
`

const Intro = styled.div`

    height: 90px;
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

    height: 170px;
    width: 330px;     
    margin: 5px 0px;
    box-sizing: border-box;        

    img { 
    height: 170px;
    width: 330px;
    object-fit: cover;
    opacity: 0.6;    
    border-radius: 8px;      
    }
`

const Body = styled.div`

    height: 130px;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
       

    .artist {        
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 35px;
            box-sizing: border-box;

        h1 {
            width:69px;
            height: 69px;
            margin-top: 5px;
            box-sizing: border-box;
            font-family: 'Marcellus', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 17px;
            text-align: center;
            
            word-break: break-word;    
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