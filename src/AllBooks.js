import React, { useRef , useEffect , useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { AllBooksFetch } from './Redux/actions'
import {  useParams, Navigate } from 'react-router-dom'
// import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from '@mui/material/Grid';
import { Waypoint } from 'react-waypoint';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// let all

export default function AllBooks () {
  let params = useParams()
  const dispatch = useDispatch()
  const AllBooks = useSelector(state => state.booksfetch.allbooks)
    const  [page , setpage] = useState(1)

    

console.log('AllBooks',AllBooks)


useEffect(() => {
   dispatch(AllBooksFetch(params.query , page))
}, [])



const handelEnter =()=>{  
  setpage(page+1)
  dispatch(AllBooksFetch(params.query , page))
     
  }
console.log("page" ,page)
  return (
    <div>

    {AllBooks.map(books => (
      
    <div key={books.id}>           
       {books.book}
      </div>
      
   ) )}



   
      <Waypoint onEnter={handelEnter}  >

      <Box  fullWidth >
      <Skeleton sx={{backgroundColor:"black"}} />
      <Skeleton  sx={{backgroundColor:"black"}} />
      <Skeleton  sx={{backgroundColor:"black"}} />
    </Box>




</Waypoint>
    
    </div>

  )
}



