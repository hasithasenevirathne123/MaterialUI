import logo from './logo.svg';
import './App.css';
import { Typography, Button, IconButton, Stack, TextField, InputAdornment, Radio } from '@mui/material';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { useState } from 'react';

function App() {
  const [data, setData]= useState('')
  return (
    <div className="App">
      {/* Typography */}

      <header className="App-header">
        <p>
          <Typography color='primary' gutterBottom variant='h1'>Hello world</Typography>
          <Typography color='secondary' gutterBottom variant='h2'>Hello world</Typography>
          <Typography color='red' variant='h3'>Hello world</Typography>
          <Typography variant='h4'>Hello world</Typography>
          <Typography variant='body1'>Hello world</Typography>
          <Typography variant='body2'>Hello world</Typography>
          <Typography variant='caption'>Caption</Typography>
        </p>
      </header>
     {/*Buttons */}
      <Button variant='text' href='mui.com' size='small'>Text</Button>
      <Button variant='contained' size='large' color='secondary'>Contained</Button>
      <Button variant='outlined' color='success'>outlined</Button>
      <Stack direction='row' spacing={2} justifyContent='center' margin={5}>

        <Button variant='contained' size='large' color='primary' onClick={()=>{alert('added')}} startIcon={<AddCircleIcon/>}>Add Contact</Button>
        <Button variant='contained' size='large' color='success' startIcon={<AddToHomeScreenIcon/>}>HomePage</Button>
        <Button variant='contained' size='large' color='secondary' startIcon={<AddLocationIcon/>}>AddLocation</Button>

        <IconButton aria-label='add-location' onClick={()=>{alert('location added')}} size='large' color='error'>
        
        <AddLocationIcon/>

        </IconButton>

        <TextField label="outlined" variant='outlined' color='success' size='large' required/>
        <TextField label="filled" variant='filled' />
        <TextField label="standard" variant='standard' helperText='Add something' type='password'/>

      </Stack>
      <Stack direction='row' spacing={2} justifyContent='center' margin={5}>
      
      <TextField label='Money' variant='outlined' InputProps={{
        endAdornment: <InputAdornment position='start'><AddLocationIcon/></InputAdornment>
      }}/>

      <TextField
       label="input"
       value={data}
       onChange={e=>setData(e.target.value)}
       error = {!data}
       helperText= {!data ? 'required': 'done'}
       variant='outlined'/>
      </Stack>


<Stack direction='row' spacing={2} justifyContent='center' margin={5}>

<Radio
 value= 'a'
 onChange={e=>setData(e.target.value)}
 checked={data === 'a'}/>

<Radio
 value= 'b'
 onChange={e=>setData(e.target.value)}
 checked={data === 'b'}/>

</Stack>

<Stack direction='row' spacing={2} justifyContent='center' margin={5}>
{data}
</Stack>




    </div>
  );
}

export default App;
