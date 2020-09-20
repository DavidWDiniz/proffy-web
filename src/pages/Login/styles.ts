import styled from "styled-components";

export const Background = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  
  img:nth-child(1) {
    width: 480px;
    height: 600px;
  }
  
  img:nth-child(2) {
    height: 88px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform:translate(-50%,-50%);
    z-index: 9999;
  }
  
  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--color-text-in-primary);
    position: absolute;
    top:50%;
    transform:translate(-50%,-50%);
    z-index: 9999;
  
    span {
      display: block;
    }
  }
  
  @media(max-width: 800px) {
    display: none;
  }
  
`;

export const Content = styled.div`
  min-width: 550px;
  display: flex;
  padding: 2rem 10rem;
  flex-direction: column;

  
  h1 {
  margin-bottom: 3rem;
    color: var(--color-text-title);
  }
  
  //input{
  //  margin-top: 0;
  //  border-radius: 0.8rem 0.8rem 0 0;   
  //}
  
  a {
    margin-top: 1rem;
    
    height: 5.5rem;
    border-radius: 0.8rem;
    font: 700 2.0rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);
    background: var(--color-secundary);
    transition: background-color 0.2s;
  }
  
`;
