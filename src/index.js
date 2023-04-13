import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Joaom from './img/joao.jpg';
import styled from 'styled-components'

function Game(){

  const pStyle = {
    fontSize: '40px',
    textAlign: 'center',
    color: 'red'
  };
  return (
    <div style={pStyle}>
      <img src={Joaom} alt='joao'/>
      <p>Parabéns pra você<br/>
        Nesta data querida<br/>
        Muitas felicidades<br/>
        Muitos anos de vida<br/><br/><br/>

        É pique, é pique<br/>
        É pique, é pique, é pique<br/>
        É hora, é hora<br/>
        É hora, é hora, é hora<br/>
        Ra-tim-bum!</p>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
