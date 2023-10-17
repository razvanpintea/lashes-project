import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Services.css';
import BookingModal from './BookingModal.js';



function Services() {
    const [services, setServices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('https://razwebdev.com/lashes/api/lashsetsportfolio')
            .then((response) => response.json())
            .then((json) => {
                setServices(json.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });

    }, []);

    const displayServices = services.map((service, index) => {
        // Check if it's the first service or the category has changed
        const isFirstService = index === 0 || service.category !== services[index - 1].category;

        return (
            <div key={service.id}>
                {isFirstService && 
                <h4 
                style={{ textAlign: 'left', border:"0px solid black", backgroundColor:"#d4af37", color:"black", marginTop:"2rem", width:'100.5%', paddingTop:"1px", paddingBottom:"1px" }}>
                    {service.category}
                    </h4>}
                <div className='service-info'>
                    <p style={{width:"11rem", textAlign:"left"}}>{service.name}</p>
                    <p>{service.price} £</p>
                    <p>{service.duration} minutes</p>
                </div>
            </div>
        );
    });

    const openModal = () => {
        setIsModalOpen(true);
      };


    return (
        <div style={{height:'100%', display:'flex', flexDirection:'column', justifyContent:"space-between"}}>
        <div className='services-div'>
            {loading && <p>Loading...</p>}
            {!loading && displayServices}
            </div>
            
                {/* <button
        onClick={() => setIsModalOpen(true)} // Open the modal when clicked

        style={{
          position: 'fixed',
          right: '6%',
          bottom: '20px',
          width: '15rem',
          height: '3rem',
          borderRadius: '10px',
        }}
      >
        BOOK appointment
      </button> */}
      <div style={{ textAlign: 'center', backgroundColor: "black", height: '5rem', marginTop:'1.9rem' }}>
                <p style={{ color: "white", paddingTop: "1rem" }}>Copyright</p>
            </div>
            {isModalOpen && <BookingModal/>}

        </div>
    );
}

export default Services;
