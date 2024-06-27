import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Singlecard() {

    const [books , setbooks ] = useState(null)
    const {id} = useParams()
    const[loading , setLoading] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/filter-book/${id}`)
        .then((response)=> response.json()
        ).then((data)=>{
            setbooks(data)
            console.log(data)
            setLoading(false)
        })
    },[id])

    if(loading){
        return <div> ...loading </div>
    }
  return (
    <>
        {books.map((book , index)=>(
            <div className="row">
                <div className="col-md-6"><img src={book.bookImage} className="card-img-top" alt="..." /></div>
                <div className="col-md-6">{book.bookDescription}</div>
            </div>
        ))}
    </>
  )
}

export default Singlecard