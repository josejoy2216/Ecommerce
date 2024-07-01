import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "./assets/css/bgtxt.css";

import { EffectCoverflow, Pagination } from 'swiper/modules';


const Cards = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-book")
            .then((response) => response.json())
            .then((data) => {
                setBooks(data);
                console.log(data);
            });
    }, []);

    return (
        <div>
            <div className="row">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="myCard"
                >
                    {books.map((book, index) => (
                        <SwiperSlide className='swipers' key={index}>
                            <div className="col-md-12">
                                <div className="card cards">
                                    <img src={book.bookImage} className="card-img-top bookimg" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{book.bookName}</h5>
                                        <p className="card-text description">{book.bookDescription}</p>
                                        <Link to={`./Singlecard/${book._id}`} className="btn btn-primary">Know more</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Cards
