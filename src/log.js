import React,{useState} from 'react'
import Box from '@mui/material/Box';
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


function Login() {
 


  const dispatch = useDispatch()
  let navigae = useNavigate()

var auth = JSON.parse(localStorage.getItem("auth"));
const handelLogin=(e)=>{
    e.preventDefault();
        const same = auth.filter(d=>d.username === username);

        if(same.length!==0){
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
const SignUp =() =>{
  navigator("/Signup");
}



// const users = useSelector(state=>state.authReducer.user)
// console.log("users " , users)


// let user = JSON.parse(localStorage.getItem("userlogined"))
// console.log("Auth" , user)
//-----------------------------------------------------------------------//


    return (
        <div>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    mx: "auto"

                }}
            >
                <TextField fullWidth label="Name / Email" id="fullWidth" sx={{ mt: 10 }} 
                onChange={e=>setUsername(e.target.value)} value={username}
                />

<FormControl fullWidth variant="outlined" sx={{ mt: 10 }}>
          <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>

          <OutlinedInput
            id="outlined-adornment-password"
            type={value.showPassword ? 'text' : 'password'}
            // value={value.passwords}
            value={password}
      
             
            onChange  = {e=>setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {value.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

      <ButtonGroup variant="contained" aria-label="outlined primary button group" spacing={2} sx={{ display: 'flex', justifyContent: 'center' , my:6}}>
      <Button onClick={handelLogin}>Sign In</Button>
      <Button onClick={SignUp}>Sign Up</Button>
      </ButtonGroup>
            </Box>

        </div>
    )
}

export default Login