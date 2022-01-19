import React, {useState} from 'react'
import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'
import { bookFetchAPI } from './Redux/actions'
import ListItem from '@mui/material/ListItem';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Navigate } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

export default function SingleBook() {
  const [value, setValue] = React.useState(2);
  const [isPending , setIsPending]= useState(true)

  let {id} = useParams()
  const dispatch = useDispatch()
  const SingleBook = useSelector(state => state.booksfetch.book)

  useEffect(() => {
    dispatch(bookFetchAPI(id))
    setTimeout(()=>{
    setIsPending(false)
  }, 2500)
  }, [])

  // const auth = useSelector(state => state.authReducer.user)

  // if (!auth) return <Navigate replace to="/Login" />
  return (
    <div>
      { isPending && <div>
        <Box sx={{ width: '100%' }}><LinearProgress /></Box>
        </div>}
      {
        <Grid container justify="center" sx={{ display: 'flex', justifyContent: 'center', mt: 10 }} >
          <Grid item xs={12} sm={8} lg={4} xl={1}>
            <Card  >
              <CardContent >

                <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center'}}>
                  {SingleBook && <Avatar src={SingleBook.small_image_url.value} />}
                </Stack>
                <Divider />
                <ListItem>

                  <Typography variant="h6" >
                    <Box ml={6}>
                      {SingleBook && SingleBook.book.value}
                    </Box>
                  </Typography>
                </ListItem>
                <Divider />
                <ListItem >
                  <Grid container sx={{ display: 'flex', justifyContent: 'center', mr: 10 }}>
                    <Box ml={8}>
                      {SingleBook && <img src={SingleBook.image.value} ></img>}
                    </Box>
                  </Grid>
                </ListItem>
                <Divider />

                <ListItem>
                  <Grid container sx={{ display: 'flex', justifyContent: 'center', mr: 10 }}>
                    <Typography variant="h6"  >
                      <Box ml={6}>
                        {SingleBook && SingleBook.average_rating.value}
                      </Box>
                    </Typography>
                  </Grid>
                </ListItem>
                <Box
                  sx={{ '& > legend': { mt: 2 }, }} >
                  <Grid container sx={{ display: 'flex', justifyContent: 'center', mr: 10 }}>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
      }
    </div>
  )
}

