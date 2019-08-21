import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormPost from './Form'

const useStyles = makeStyles(theme => ({
   root: {
     width: '50%',
     marginTop: theme.spacing(3),
     overflowX: 'auto',
     alignItems: 'center',
     alignContent: 'center',
     marginLeft: '20%'


   },
   table: {

     minWidth: 200,
     justifyContent:'center',


   },
 }));

 function createData(username,apelido) {
   return { username, apelido};
 }

 const rows = [
   createData(),
   createData(),
   createData(),
   createData(),
   createData(),
 ];

 export default function SimpleTable() {
   const classes = useStyles();

   return (
     <Paper className={classes.root}>
       <Table className={classes.table}>
         <TableHead>
           <TableRow>
             <TableCell align="lefth">Nome</TableCell>
             <TableCell align="lefth">apelido</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {rows.map(row => (
             <TableRow key={row.name}>
               <TableCell component="th" scope="row">
                 {row.name}
               </TableCell>
               <TableCell align="right">{row.username}</TableCell>
               <TableCell align="right">{row.apelido}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </Paper>
   );
 }

