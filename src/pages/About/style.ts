import styled from "styled-components";

export const Container = styled.div`
   padding: 0 16px;
   text-align:center;
   body {
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
    }
    
    html {
      box-sizing: border-box;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }

   section{
      padding: 50px;
      text-align: center;
      background-color: #474e5d;
      color: white;
    
   }
   h2{
     font-weight:800;
     font-size:1.2em; 
   }

   p{
      color: grey;
   }

   button{
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
   }
   .column {
      float: left;
      width: 33.3%;
      margin-bottom: 16px;
      padding: 0 8px;
    }
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: 8px;
    }
   
   img{
      width:80%;
   }

    button:hover {
      background-color: #555;
    }
  
    @media screen and (max-width: 650px) {
      .column {
        width: 100%;
        display: block;
      }
    }
`;