import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookSearch } from './Redux/actions'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



export default function Home () {
  const dispatch = useDispatch()
  const [query, setquery] = useState('')

  const bookData = useSelector(state => state.booksfetch.books)
  const navigate = useNavigate();

  const handleOptionChange = (e, data) => {
    navigate(`/SingleBook/${data.id}`)
  }
  const handleChange = e => {
    let input = e.target.value
    setquery(input)
    dispatch(bookSearch(query))
  }
  const handleClick = (e) => {
    e.preventDefault()
    navigate(`/AllBooks/${query}`)
    
  }
  return (
    <div>
<Grid container spacing={1} sx={{display: 'flex', justifyContent: 'center' , my:10}}  >
      <Grid item xs={6}  >
      <Autocomplete
        id='combo-box-demo'
        autoHighlight
        options={bookData}
        getOptionLabel={(option) => option.book}
        onChange={handleOptionChange}
        renderOption={(props, option) => (
          <Box component="li"  {...props}>
            {option.id} ({option.book}) 
          </Box>
        )}
 
        
    renderInput =  {(params) => ( <TextField {...params} onChange={handleChange}/>
        )}
      />
      
      </Grid>
        <Button onClick={handleClick} >
          Seacrh
        </Button>
      </Grid>
    </div>
  )
}


