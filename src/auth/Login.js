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

function Login() {
  {/*Check Box*/}const [checked, setChecked] = React.useState(true);
  {/* Check Box*/}const Change = (event) => { setChecked(event.target.checked); };
  const paperStyle = {padding:20, height:'70vh', width:280, margin:"20px auto"}

  const dispatch = useDispatch()
  let navigator = useNavigate()

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    
    var auth = JSON.parse(localStorage.getItem("auth"));

 const handelLogin=(e)=>{
    e.preventDefault();
        const same = auth.filter(data=>data.username === username);

        if(same !==0 ){
           if( same[0].password===password){

               localStorage.setItem("userlogined" , username)
            setUsername("");
            setPassword("");
            navigator("/");
            dispatch(logUser(auth))
         

        }else{
               alert("wrong password")
           }
        }else{
            alert(username+ "user not exist!")
        }
      }

    
    
    
    // const users = useSelector(state=>state.authReducer.user)
    // console.log("users " , users)
    
    
    // let user = JSON.parse(localStorage.getItem("userlogined"))
    // console.log("Auth" , user)



 return(
<>
<Grid>
  <Paper elevation={10} style={paperStyle}>
    <Grid align='center'>
    <Avatar sx={{backgroundColor:"#1bbd7e"}}><LockOutlinedIcon/></Avatar>
    <Typography variant="h5"  >Signin</Typography>
    </Grid>


  <TextField label="Username" placeholder='Enter username'  fullWidth sx={{mt:6}} 
   onChange={e=>setUsername(e.target.value)} value={username}
  />


  <TextField label="password" 
  placeholder='Password' 
  // value={password} 
  type="password" 
  fullWidth 
  onChange  = {e=>setPassword(e.target.value)}
   sx={{mt:6 , mb:3}} />



  <Typography variant="p" >Do You have an Account ?
  <Link to="/Signup">Sign Up</Link>
  </Typography>
  <Grid sx={{ display: 'flex', justifyContent: 'center' , my:6}}>
  <Button onClick={handelLogin} >Sign In</Button>
  </Grid>
  </Paper>
</Grid>


</>
    )
}

export default Login
