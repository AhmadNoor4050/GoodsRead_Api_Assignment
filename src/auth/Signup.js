//-----------------------------Start----------------------//
import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import {Link} from 'react-router-dom'

import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AllBooks from '../AllBooks';
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import {logUser } from '../authStores/authAction'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Signup() {
   
  let navigator = useNavigate()

const [username , setUsername] = useState("")
const [password1 , setPassword1] = useState("")
const [password2 , setPassword2] = useState("")
var auth = JSON.parse(localStorage.getItem("auth"));
const paperStyle = {padding:20, height:'80vh', width:280, margin:"20px auto"}
const handelSignup=(e)=>{
  e.preventDefault();
  if(auth === null){
      auth=[{"username" :"aaa", "password":"aaa"}];
  }
  if(password1===password2){

    const same = auth.filter(d=>d.username === username)
console.log("Same" ,same)
    if(same.length===0){
        auth = [...auth , {"username": username , "password" : password1}  ]
        localStorage.setItem("auth", JSON.stringify(auth));
        localStorage.setItem("userlogined" , username)
        setUsername("");
        setPassword1("");
        setPassword2("");
        // props.afterSignup(username);
        navigator("/Login")
    }else{
        alert("user exist!")
    }
}else{
    alert("password is not matching")
}
}




// let user = JSON.parse(localStorage.getItem("userlogined"))
// console.warn("Auth" , user)

//----------------------------------------------------------//
return (
 
<Grid>
  <Paper elevation={10} style={paperStyle}>
    <Grid align='center'>
    <Avatar sx={{backgroundColor:"#1bbd7e"}}><LockOutlinedIcon/></Avatar>
    <Typography variant="h5" sx={{mt:3}}  >Signin</Typography>
    </Grid>
  <TextField label="Username" placeholder='Enter username'  fullWidth sx={{mt:4}} 
   onChange={e=>setUsername(e.target.value)} value={username}
  />
  <TextField label="password" 
  placeholder='Password' 
  type="password" 
  fullWidth 
  onChange={e=>setPassword1(e.target.value)}
   sx={{mt:6 , mb:6}} />

<TextField label="password" 
  placeholder='Password' 
  
  type="password" 
  fullWidth 
  onChange={e=>setPassword2(e.target.value)}
   sx={{ mb:3}} />
  <Typography variant="p" >If You Have an Account ?
  <Link to="/Login">Sign In</Link>
  </Typography>
  <Grid sx={{ display: 'flex' , justifyContent: 'center' ,mt:2 }}>
<Button variant="outlined"  onClick={handelSignup}  >Sign Up</Button>
</Grid>
  </Paper>
</Grid>
    )
}

export default Signup
 