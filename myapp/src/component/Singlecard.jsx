import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Singlecard() {

    const [books , setbooks ] = useState(null)
    const {id} = useParams()
    const[loading , setLoading] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/find-book/${id}`)
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
            <div className="row">
                <div className="col-md-6"><img src={books.bookImage} className="card-img-top" alt="..." /></div>
                <div className="col-md-6">{books.bookDescription}</div>
            </div>
    </>
  )
}

export default Singlecard