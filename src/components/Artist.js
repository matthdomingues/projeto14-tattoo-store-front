import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext, useState, useEffect } from "react";
import UserContext from "../assets/context/UserContext";
import styled from 'styled-components'
import omega from "../assets/imagens/omega.png"

export default function Artist() {

    const navigate = useNavigate();
    const { user, counter, setCounter, cart, setCart } = useContext(UserContext);
    const { idArtista } = useParams();
    const [portfolio, setPortfolio] = useState([]);
    const [artist, setArtist] = useState({});

    if (!user) { alert("Usuário não identificado, logue-se ou registre-se!"); window.location.href = '/'; }

    useEffect(() => {
        const requisicao = axios.get(`${process.env.REACT_APP_BACK_END_URL}/portfolio/${idArtista}`);

        requisicao.then((res) =>
            setPortfolio(res.data)
        );
    }, [idArtista]);

    useEffect(() => {
        const requisicao = axios.get(`${process.env.REACT_APP_BACK_END_URL}/artist/${idArtista}`);

        requisicao.then((res) =>
            setArtist(res.data)
        );
    }, [idArtista]);


    function addtoChart(user, tattoo) {
        axios.post(`${process.env.REACT_APP_BACK_END_URL}/cart`,
            {
                id: user.id,
                artist: artist.name,
                photo: tattoo.photo,
                price: tattoo.price
            }
        );
    };

    useEffect(() => {

        const requisicao = axios.get(
            `${process.env.REACT_APP_BACK_END_URL}/cart/${user.id}`,
        );

        requisicao.then((res) => {
            setCart(res.data)
            setCounter(cart.length)
        });

    }, [cart, setCart, setCounter, user.id]);

    const avaliacoes = artist.star_1 + artist.star_2 + artist.star_3 + artist.star_4 + artist.star_5;
    const rating = (1 * artist.star_1 + 2 * artist.star_2 + 3 * artist.star_3 + 4 * artist.star_4 + 5 * artist.star_5) / avaliacoes;
    const estrelas = (rating).toFixed(2);

    return (
        <>
            <ArtistContainer>
                <Link1 to='/home'>
                    <Logo>
                        <img alt="" src={omega} />
                        <h1>mega Tattoos</h1>
                    </Logo>
                </Link1>
                <UserBar>
                    <>
                        <h5>Bem-vindo(a), {user.name}</h5>
                    </>
                    <>
                        <Cart onClick={() => { navigate("/checkout") }}>
                            <ion-icon name="cart-outline" color="light" ></ion-icon>
                            {counter === 0 ? <></> : <CartQuantity>
                                <p>{counter}</p>
                            </CartQuantity>}
                        </Cart>
                        <ion-icon name="home-outline" color="light" onClick={() => { navigate("/home") }}></ion-icon>
                        <ion-icon name="exit-outline" color="light" onClick={() => { navigate("/") }}></ion-icon>
                    </>
                </UserBar>
                <ArtistArea>
                    <img alt="" src={artist.photo} />
                    <ArtistDescription>
                        <h1>{artist.name}</h1>
                        <h1>{artist.description}</h1>
                        <h1>Especialidade: {artist.specialty}</h1>
                        <h1>{estrelas}/5 - {avaliacoes} Avaliações</h1>
                    </ArtistDescription>
                </ArtistArea>
                <PortfolioArea>
                    {portfolio.length ?
                        portfolio.map((tattoo) =>
                            <Product>
                                <img alt="" src={tattoo.photo} />
                                <h1>Preço: R${(tattoo.price / 100).toFixed(2)}</h1>
                                <Button onClick={() => addtoChart(user, tattoo)}>Adicionar no carrinho</Button>
                            </Product>
                        )
                        : "Não tem tatuagem aqui"
                    };

                </PortfolioArea>


            </ArtistContainer>
            <Footer><h3>© Omega Tattoos. All Rights Reserved - 2022. Licensed</h3></Footer>
        </>

    )
};

const Link1 = styled(Link)`
    text-decoration: none;
`

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
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: red;
  }
`

const Cart = styled.div`
  position: relative;
  cursor: pointer; 
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

const ArtistContainer = styled.div`
    background: #000;
    min-height: 637px;
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
    
    height: 70px;
    box-sizing: border-box;
    display: flex;    
    align-items: center;
   
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

const ArtistArea = styled.div`
    width: 340px;
    margin-top: 10px;
    display: flex; 
   
    h1 {
        font-family: 'Marcellus', sans-serif;
        font-size: 13px;
        color: white;
    }

    img{
        height: 150px;
        width: 150px;
        margin-right: 15px;
        box-sizing: border-box;
        border-radius: 5px;
        object-fit: cover;
    }

    ion-icon {
        cursor: pointer;
        width: 18px;
        height: 18px;
    }

`

const ArtistDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const PortfolioArea = styled.div`

    width: 340px;
    height: 365px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow-y: auto;

    h1 {
        font-family: 'Marcellus', sans-serif;
        font-size: 13px;
    }
`

const Button = styled.button`
        display: flex;
        width: 150px;
        height: 25px;        
        
        font-style: normal;
        font-weight: 700;        
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 5px;
        box-sizing: border-box;
        cursor: pointer;
        text-align: center;
        align-items: center;
        justify-content: center;

        border-style: solid;
        border-width: 1px;
        border-color: #fff;
        background-color: white;       
        font-family: 'Marcellus', sans-serif;
        color: #000;
        font-size: 10px;
        line-height: 1em;
        letter-spacing: 3.36px;
        text-transform: uppercase;

        &:disabled{
            opacity: 0.7;
        }
`

const Product = styled.div`
    margin-top: 30px;
  
    img {
        border-radius: 5px;
        width: 150px;
        height: 150px;
    }

    h1 {
        color: white;
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