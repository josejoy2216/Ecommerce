import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Card = () => {

    const [books , setbooks] = useState([])

    useEffect(()=>{
            fetch("http://localhost:5000/all-book")
            .then((response)=>
                response.json()
            ).then((data)=>{
                setbooks(data)
                console.log(data)
            })
    },[]) // added [] so that it does not refresh infanitly

  return (
    <div>
        <div className="row">
            {books.map((book , index)=>(
            <>

            <div className="col-md-4">
            <div className="card" >
                <img src={book.bookImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{book.bookName}</h5>
                        <p className="card-text">{book.bookDescription}</p>
                        <Link to={`./Singlecard/${book._id}`} className="btn btn-primary"> Know more </Link>
                    </div>
                </div>
            </div>
            <br/>

            </>
        ))}

        </div> 
    </div>
  )
}

export default Card
