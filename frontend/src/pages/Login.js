// Imports
import React from 'react'; // Importanto React.js
import logo from '../assets/logo.svg' // Importando logo
import './Login.css'; // Importando CSS

export default function Login() { // Componente de login
   // Utilzando "export default" na frente da "function " a mesma já ira ser exportada
   return (
      <div className="login-container">

            <form action="#">
               <img src={logo} alt="Tinder dlç" />
               <input type="text" placeholder="Informe seu login do git"/>
               <button>Enviar</button>



            </form>
      </div>
   );



}
