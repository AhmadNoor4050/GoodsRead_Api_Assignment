import axios from 'axios'
import XMLParser from 'react-xml-parser'
import { GETBOOKS, GETBOOK, GETALLBOOKS} from './types'
let ScanData
let BooksScan

export const bookSearch = query => dispatch => {  
  axios.get(`https://www.goodreads.com/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${query}`)
    .then(response => {
      let jsonData = new XMLParser().parseFromString(response.data)
      let booksList = jsonData.children[1].children[6].children
      ScanData = booksList.map(book => {
          return {
            id: book.children[8].children[0].value,
            book: book.children[8].children[1].value,
            author: book.children[8].children[2].value
          } 
        })
        dispatch({
          type: GETBOOKS,
          payload: ScanData
        })

    })
    .catch(err => console.log(err))
}

export const bookFetchAPI = id => dispatch => {
  axios.get(`https://www.goodreads.com/book/show/${id}?key=FtRVHgmjzjpzKjCt3SUMw`)
    .then(response => {
      let jsonsData = new XMLParser().parseFromString(response.data)
      let bookList = jsonsData.children[1].children
      let bookFilter = {
        book: bookList[1],
        image: bookList[8],
        average_rating: bookList[18],
        small_image_url: bookList[9]
      }


      dispatch({
        type: GETBOOK,
        payload: bookFilter
      })
    })
    .catch(err => console.log(err))
}



export const AllBooksFetch = (query,page) => dispatch => {
axios.get(`https://www.goodreads.com/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${query}+&page=${page}`)
// axios.get(`https://www.goodreads.com/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${query}+&page=1&_limit=5`)
// axios.get(`https://www.goodreads.com/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${query}+&page=${page}?_page=1&_limit=20`)
.then(response => {
  let jsonData = new XMLParser().parseFromString(response.data)
  let AllbooksList = jsonData.children[1].children[6].children
  console.log("AllbooksList" , AllbooksList)

  BooksScan = AllbooksList.map(book => {
      return {
        book: book.children[8].children[1].value,
        id: book.children[8].children[0].value
      }
    })
    console.log("BooksScan" , BooksScan)
    dispatch({
      type: GETALLBOOKS,
      payload: BooksScan
    })

})
.catch((err) => console.log(err))
}

