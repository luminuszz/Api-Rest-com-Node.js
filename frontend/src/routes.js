// imports
import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom' // Importanto "React-router-dom" para configurar as Rotas
import Login from './pages/Login'; // Importando pages
import Main from './pages/Main'; // Importando pages
import FormPost from './pages/Form';// Importando pages
import Tabela from './pages/Tabela'
export default function Routes() { // Configurando Rotas através "React-router-dom" utilizando "BrowerRouter"
   return(
    <BrowserRouter>
   <Route path="/" exact component={Login}></Route>
   <Route path="/form" exact component={FormPost}></Route>
   <Route path="/main" component={Main}></Route>
   <Route path="/tabela" component={Tabela}></Route>
   </BrowserRouter>

   );


 }

