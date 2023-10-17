import React, { useState, useEffect } from 'react';
import '../styles/Reviews.css';
import star from '../images/star.png';
import BookingModal from './BookingModal.js';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <div>
            <div className='reviews-div'>
                <h2 className="reviews-title">Reviews</h2>

                <div className='stars'>
                    <img src={star} alt="star" className='star' />
                    <img src={star} alt="star" className='star' />
                    <img src={star} alt="star" className='star' />
                    <img src={star} alt="star" className='star' />
                    <img src={star} alt="star" className='star' />

                </div>
                <div className='individual-review'>
                    <div>
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                    </div>
                    <span style={{ fontWeight: 'bold' }}>Jane Doe</span>
                    <span>This place is amazing! Great service and friendly staff. I would definitely recommend it.</span>
                    <span style={{ fontWeight: '600' }}>15 January</span>
                </div>

                <div className='individual-review'>
                    <div >
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                    </div>
                    <span style={{ fontWeight: 'bold' }}>Jane Smith</span>
                    <span>Excellent service and a wonderful experience. I highly recommend this place to everyone.</span>
                    <span style={{ fontWeight: '600' }}>5 March</span>
                </div>

                <div className='individual-review'>
                    <div >
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                    </div>
                    <span style={{ fontWeight: 'bold' }}>Alice Johnson</span>
                    <span>Outstanding service and a relaxing atmosphere. I would definitely come back here.</span>
                    <span style={{ fontWeight: '600' }}>10 May</span>
                </div>

                <div className='individual-review'>
                    <div >
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                        <img src={star} alt="star" className='star-review' />
                    </div>
                    <span style={{ fontWeight: 'bold' }}>Alisson Smith</span>
                    <span>Amazing service! I had a great experience here. Highly recommended.</span>
                    <span style={{ fontWeight: '600' }}>20 August</span>
                </div>


                {isModalOpen && <BookingModal />}

            </div>


            <div style={{ textAlign: 'center', backgroundColor: "black", height: '5rem' }}>
                <p style={{ color: "white", paddingTop: "1rem" }}>Copyright</p>
            </div>
        </div>
    )
}
export default Reviews;