import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../assets/context/UserContext";
import styled from "styled-components";

import omega from "../assets/imagens/omega.png"

export default function SignIn() {

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        let requestLogin = ({
            email: `${email}`,
            password: `${password}`
        });

        try {
            const response = await axios.post("http://localhost:5000/sign-in", requestLogin);
            setUser(response.data);
            navigate("/home");
        } catch (error) {
            alert('Falha no Login!');
            console.log(error.response);
        };
    };

    return (
        <>
            <Screen1>
                <Logo>
                    <img alt="" src={omega}></img>
                    <h1>mega Tattoos</h1>
                </Logo>
                <form onSubmit={handleSubmit}>
                    <Input1 type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Insira seu e-mail" value={email} required></Input1>
                    <Input2 type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Insira sua senha" value={password} required></Input2>
                    <Button1 type="submit">Entrar</Button1>
                </form>
                <Link1 to={"/sign-up"}>
                    <h2>Novo por aqui? Cadastre-se agora!</h2>
                </Link1>

            </Screen1>
            <Footer><h3>© Omega Tattoos. All Rights Reserved - 2022. Licensed</h3></Footer>
        </>
    );
};


// font-family: 'IM Fell DW Pica SC', serif;
// font-family: 'Marcellus', serif;
// font-family: 'Raleway', sans-serif;


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
    justify-content: center;    

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

    form {
    display: flex;
    flex-direction: column;           
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

const Logo = styled.div`   
    
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

const Input1 = styled.input`        
        width: 303px;
        height: 45px;
        border-style: none none solid;
        border-width: 1px;
        border-color: #000 #000 hsla(0, 0%, 100%, 0.7);
        background-color: transparent;
        font-family: 'Marcellus', sans-serif;
        color: #fff;
        font-size: 15px;
        line-height: 1.67;
        margin-bottom: 25px;
        margin-top: 33px;   
        padding-left: 10px;        
        box-sizing: border-box;
        cursor: pointer;

        ::placeholder {
        font-family: 'Marcellus', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23.48px;
        color: white;        
        }

        &:disabled{
            opacity: 0.7;
        }
`

const Input2 = styled.input`        
        width: 303px;
        height: 45px;
        border-style: none none solid;
        border-width: 1px;
        border-color: #000 #000 hsla(0, 0%, 100%, 0.7);
        background-color: transparent;
        font-family: 'Marcellus', sans-serif;
        color: #fff;
        font-size: 15px;
        line-height: 1.67;
        margin-bottom: 25px;
        padding-left: 10px;
        box-sizing: border-box;
        cursor: pointer;

        ::placeholder {
        font-family: 'Marcellus', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23.48px;
        color: white;        
        }

        &:disabled{
            opacity: 0.7;
        }
`

const Button1 = styled.button`
        display: flex;
        width: 303px;
        height: 45px;        
        
        font-style: normal;
        font-weight: 400;        
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 25px;
        box-sizing: border-box;
        cursor: pointer;
        text-align: center;
        align-items: center;
        justify-content: center;

        border-style: solid;
        border-width: 1px;
        border-color: #fff;
        background-color: transparent;       
        font-family: 'Marcellus', sans-serif;
        color: #fff;
        font-size: 14px;
        line-height: 1em;
        letter-spacing: 3.36px;
        text-transform: uppercase;

        &:disabled{
            opacity: 0.7;
        }
`

