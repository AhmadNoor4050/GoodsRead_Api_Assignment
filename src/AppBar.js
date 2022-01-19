import {useEffect} from'react'
import {useSelector} from 'react-redux'
import UseAutocomplete from './home'
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SingleBook from './SingleBook'
import AllBooks from './AllBooks';



export default function ButtonAppBar() {
  const navigate = useNavigate();

  const handelClick =(e)=>{
    e.preventDefault()
    navigate('/')
  }
  const users = useSelector(state=>state.authReducer.user)
  const loading = useSelector(state=>state.authReducer.loading)
  useEffect(() => {
  }, [loading])
  const Logout=()=>{
    window.location.reload(); 
    localStorage.removeItem("userlogined");
    console.log("users", users) 
    
  }
  const Logins = ()=>{
    navigate("/Login")
  }



  return (
    <div>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> News </Typography>
          <Button variant="contained" size="small" onClick={handelClick}> Home </Button>
          
            {loading ?
             <Button variant="contained" size="small" onClick={Logout} >
           Logout 
        </Button> : <Button variant="contained" size="small" onClick={Logins} >
          LogIn
        </Button>}
        

          </Toolbar>

      </AppBar>
    </Box>

    </div>
  );
}
