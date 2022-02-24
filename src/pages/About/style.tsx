import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  height: 100vh;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 700;
  }
`;

export const Header = styled.section`
  text-align: center;
  background-color: #474e5d;
  color: white;
  height: 120px;

  h1 {
    font-size: 2em;
    font-weight: 800;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  section {
    float: left;
    width: 100%;
    margin-bottom: 16px;
    padding: 0 8px;
  }

  article {
    box-shadow: 0 4px 8px 0 rgba(1, 1, 1, 1.2);
    margin: 8px;
  }
  img {
    width: 80%;
    margin-top: 2em;
  }
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 80%;
    margin: 0 auto 1em;
  }

  button:hover {
    background-color: #555;
  }
  @media screen and (max-width: 650px) {
     {
      width: 100%;
      display: block;
    }
  }
`;

export const Card = styled.div`
  padding: 0 16px;
  h2 {
    font-weight: 800;
    font-size: 1.2em;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
