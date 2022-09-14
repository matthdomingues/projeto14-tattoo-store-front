import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import omega from "../assets/imagens/omega.png"

export default function SignUp() {

    // variaveis para formulario
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (age >= 18) {
            let userRequest = ({
                name: `${name}`,
                email: `${email}`,
                password: `${password}`,
                confirmPassword: `${confirmPassword}`,
            });
            console.log(userRequest);

            try {
                await axios.post("http://localhost:5000/sign-up", userRequest);
                alert('Cadastro feito com sucesso!');
                navigate("/");
            } catch (error) {
                alert('Falha no Cadastro! Tente novamente!');
                console.log(error);
            };
        } else {
            return console.log("É preciso ser maior de 18 anos para fazer um cadastro!")
        };
    };

    return (<>
        <Screen2>
            <Logo>
                <img alt="" src={omega}></img>
                <h1>mega Tattoos</h1>
            </Logo>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Insira seu nome" value={name} required></input>
                <input type="text" onChange={(e) => setAge(e.target.value)} placeholder="Insira sua idade" value={age} required></input>
                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Insira um e-mail válido" value={email} required></input>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Insira a senha" value={password} required></input>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme a sua senha" value={confirmPassword} required></input>
                <button type="submit">Cadastrar</button>
            </form>
            <Link1 to={"/"}>
                <h2>Já possui cadastro? Entre agora!</h2>
            </Link1>
        </Screen2>
        <Footer><h3>© Omega Tattoos. All Rights Reserved - 2022. Licensed</h3></Footer>
    </>)
}

const Link1 = styled(Link)`
    text-decoration: none ;
`

const Screen2 = styled.div`

    background-color: #000;
    height: 637px;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;  

    form {
    display: flex;
    flex-direction: column;

    input {
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
        padding-left: 10px;
        margin-bottom: 12px;
        margin-top: 15px;   
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
    }
    
    button {
        display: flex;
        width: 303px;
        height: 45px;        
        
        font-style: normal;
        font-weight: 400;        
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 15px; 
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

    }

    }

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
    line-height: 86px;
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