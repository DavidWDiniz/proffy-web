import React from "react";

import logoImg from "../../assets/images/logo.svg";
import backgroundImg from "../../assets/images/Background.svg";
import {Background, Content} from "./styles";
import Input from "../../components/Input";
import {Link} from "react-router-dom";

const Login: React.FC = () => {
    return (
      <>
          <Background>
              <img src={backgroundImg}  alt="backgroundImg"/>
              <img src={logoImg} alt="logoImg"/>
              <p><span>Sua plataforma de</span><span>estudos online</span></p>
          </Background>
          <Content>
              <h1>Fazer login</h1>
              <Input  placeholder="E-mail" label="" name="email" />
              <Input placeholder="Senha" label="" name="password" />
              <Link to="/give-classes">
                  Entrar
              </Link>
          </Content>
      </>
    );
}

export default Login;
