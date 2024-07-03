import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Manage = () => {

    const [books , setbooks] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        fetch("http://localhost:5000/all-book")
        .then((response)=>
            response.json()
        ).then((data)=>{
            setbooks(data)
            console.log(data)
        })
    },[]) // added [] so that it does not refresh infanitly

    const deleteBook = (id) => {
        fetch(`http://localhost:5000/delete-book/${id}`, {
            method: 'DELETE'
          }).then((response) => response.json())
          .then((data) =>{
            setbooks(books.filter(book =>book._id!= id))
          })
    };



  return (
    <div>
      <h2 className='font-bold'>Manage Book</h2>
      <hr />
        <table className='table table-striped'>
            <thead>
                    <tr>
                        <th>Sr No </th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Category</th>
                        <th colSpan={2} align='center'>Manage</th>
                    </tr>
            </thead>
            <tbody>
            {books.map((book , index)=>(
                <tr key = {book._id}>
                        <td> {index + 1} </td>
                        <td> {book.bookName} </td>
                        <td> {book.bookAuthor} </td>
                        <td> {book.category} </td>
                        <td> <button  onClick={() => deleteBook(book._id)} 
                        className='btn btn-outline-danger'> Delete  </button></td>
                        <td> <button  onClick={() => 90} 
                        className='btn btn-outline-success'> Edit  </button></td>
                    </tr>
             ))}
                    
            </tbody>
        </table>
    </div>
  )
}

export default Manage
