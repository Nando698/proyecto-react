import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, price, units, shiping, subtotal) {
  return { name, price, units, shiping, subtotal };
}

const rows = [
  createData('Remera cazafantasmas', 2000, 1, "si", 2000),
  createData('Remera better luck', 2500, 1, "si", 2000),
  createData('Remera blanca nieves', 2800, 3, "si", 6400),
  createData('Remera princess', 3000, 3, "si", 9000),
  createData('', '','', 'SUBTOTAL', 5 )
  ];
export default function BasicTable() {
  return (
    <div className='tablaCart'>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Precio unitario</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Envio</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow key={row.name}>
            <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.units}</TableCell>
              <TableCell align="right">{row.shiping}</TableCell>
              <TableCell align="right">{row.price*row.units}</TableCell>
            </TableRow>

               

            
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
