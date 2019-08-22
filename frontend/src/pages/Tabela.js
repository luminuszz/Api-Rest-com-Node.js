import React, { useState } from 'react'; // Importanto React.js
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormPost from './Form';
import api from '../services/api';
import { striped, bordered, condensed,Button } from 'react-bootstrap'



export default function Teste() {
   const [teste] = useState('');
   const [nome] = useState('');
   const [email] = useState('');
   async function getTeste(e) {
      e.preventDefault();

      const response = await api.get('https://jsonplaceholder.typicode.com/users');
      const teste = response.data
      for (let i = 0; i < teste.length; ++i) {
         const nome = teste[i].name;
         const email = teste[i].email;
         const davi = JSON.stringify(nome);
         const daviEmail = JSON.stringify(email);
         let lista = document.createElement('td');
         var textnode = document.createTextNode(davi);
         lista.appendChild(textnode);
         document.getElementById("mandar").appendChild(lista);

         console.log(davi);


         // document.getElementById("testeP").innerHTML= davi;
         //  document.getElementById("testeP2").innerHTML= daviEmail;



         //console.log(nome);


      }






   }
   return (

      <div >
          <Button bsStyle="primary" onClick={getTeste}>Puxar</Button  >
          <Table striped bordered condensed hover>
  <thead>
    <tr>
      <th>Nome</th>

    </tr>
  </thead>
  <tbody >
    <tr id="mandar">


    </tr>


  </tbody>
</Table>


      </div>

   )


}

