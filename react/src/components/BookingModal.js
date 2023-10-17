import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import '../styles/BookingModal.css';
import Calendar from './Calendar';
import BookingForm from './BookingForm';
function BookingModal() {
  const [showModal, setShowModal] = useState(false);
  const [services, setServices] = useState([]);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(-1);
  const [showTimes, setShowTimes] = useState(false);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [chosenTime, setChosenTime] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
    silentTreatment: '',
  });
  // Function to receive form data from BookingForm




  useEffect(() => {
    // Fetch services data
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

  const handleFormData = (data) => {
    setFormData(data);
    // You can perform any additional actions with the data here
  };

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Enable scrolling
    if (!chosenTime)
      setSelectedDate(false);

    if (isBookingConfirmed) {
      setChosenTime(null)
      setSelectedServiceIndex(null);
      setSelectedDate(null);
      setShowTimes(false);
      setSelectedService(null);
      setIsBookingConfirmed(false);
    }
  };




  const selectService = (index) => {
    setSelectedServiceIndex(index);
    setTotal(services[index].price);
    // console.log(services[index]);
    setSelectedService(services[index]);

  };

  const nextStep = () => {
    setShowTimes(true);
  };

  const backToSets = () => {
    setShowTimes(false);
    setSelectedDate(null);
    // 1000 milliseconds (1 second) delay
  };

  const backToCalendar = () => {
    setChosenTime(false);
    console.log(selectedDate);
  }

  useEffect(() => {
    if (selectedServiceIndex !== -1) {
      console.log(services[selectedServiceIndex]);
    }
  }, [selectedServiceIndex, services]);

  const displayServices = services.map((service, index) => {
    const isSelected = index === selectedServiceIndex;
    const isFirstService = index === 0 || service.category !== services[index - 1].category;


    return (
      <div key={service.id} style={{ backgroundColor: 'rgb(248, 246, 246)' }}>
        {isFirstService &&
          <p
            style={{
              textAlign: 'left',
              backgroundColor: "#d4af37",
              color: "black",
              width: '100%',
              paddingTop: "1px",
              paddingBottom: "1px",
              textTransform: "uppercase", // Set text-transform to "uppercase",
              paddingLeft: "1.5rem"
            }}
          >
            {service.category}
          </p>}
        <div className='booking-variants' onClick={() => selectService(index)}>
          <div className='box-name-and-duration'>
            <div className='box-and-name'>

              <label
                className={`round-checkbox ${isSelected ? 'selected' : ''}`}

              >
                {isSelected && <span style={{ fontSize: '20px', textAlign: 'center', marginLeft: "7px" }}>&#10003;</span>}
              </label>
              <span className='service-name'>{service.name}</span>
            </div>
            <span className='duration-p'>{service.duration} minutes</span>
          </div>
          <p style={{ width: '5rem', textAlign: 'center' }}>{service.price} £</p>
        </div>
      </div>
    );
  });

  const handleTimeSlotClick = (time) => {
    setChosenTime(true);
    setSelectedTime(time);
  }

  const checkIfBookingConfirmed = (bookingConfirmed) => {
    setIsBookingConfirmed(bookingConfirmed);

  }
  const handleDateSelection = (date) => {
    // console.log(date);
    setSelectedDate(date);
  };
  return (
    <>

      <button
        onClick={openModal}
        style={{
          position: 'fixed',
          right: '3%',
          bottom: '20px',
          width: '14rem',
          height: '3rem',
          borderRadius: '10px',
          border: 'none',
          backgroundColor: '#d4af37',
          color: "black",
          fontWeight: "450",
          fontSize: "1.1rem"
        }}
      >
        Book appointment
      </button>

      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        className='modal-form'
        contentLabel='Booking Form'
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        shouldFocusAfterRender={
          true
          /* Boolean indicating if the modal should be focused after render. */}

      >

          {showTimes && !chosenTime &&
            <div className='modal-title'>
              <p style={{ textAlign: 'center', marginTop: "2rem", fontSize: "1.3rem", fontWeight: '600' }}>Choose Times</p>
            </div>}
          {!chosenTime && !showTimes &&
            <div className='modal-title'>
              <p style={{ textAlign: 'center', marginTop: "2rem", fontSize: "1.3rem", fontWeight: '600' }} >Choose Services</p>
            </div>}

          {chosenTime &&
            <div className='modal-title'>
              <p style={{ textAlign: 'center', marginTop: "2rem", fontSize: "1.3rem", fontWeight: '600' }} >Confirm Booking</p>
            </div>}



          <button
            className='modal-close-button'
            onClick={closeModal}
            style={{
              position: 'absolute',
              right: '4%',
              border: 'none',
              backgroundColor: 'white',
              fontSize: '30px',
              top: '2%',
            }}
          >
            <span>&times;</span>
          </button>



          {chosenTime && !isBookingConfirmed && <p
            className='back-to-sets'
            onClick={backToCalendar}
          >
            &lt;
          </p>}

          {showTimes && !chosenTime && <p
            className='back-to-sets'
            onClick={backToSets}
          >
            &lt;
          </p>}
          {loading && <p style={{ position: 'absolute', top: '40%', left: '40%', fontSize: "20px" }}>Loading...</p>}

          {!showTimes && !loading &&

            <div className='display-services'>
              {displayServices}
            </div>
          }

          {!showTimes && !loading && <div className='choose-time-div'>
            <p style={{ textAlign: 'left', marginTop: "0.5rem", fontSize: "1.3rem", marginLeft: "2rem", color: "white" }}>Total: {total}$</p>
            {selectedServiceIndex !== -1 ? (
              <button
                className="choose-time-button"
                onClick={nextStep}
              >
                Choose Time
              </button>
            ) : null}
          </div>
          }

          {showTimes && !chosenTime && <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: "10px", height: '90%' }}>
            <Calendar bookingModalTimeSelected={handleTimeSlotClick} mainDateSelected={handleDateSelection} selectedDateFromModal={selectedDate} />
            <div className='choose-time-div' style={{ position: 'absolute', bottom: "0" }}>
              <p style={{ textAlign: 'left', marginTop: "0.5rem", fontSize: "1.3rem", marginLeft: "2rem", color: "white " }}>Total: {total}£</p>
            </div>
            {/* <p>{selectedDate && selectedDate.toLocaleDateString()}</p> */}

          </div>}

          {chosenTime && <BookingForm
            selectedService={selectedService}
            selectedDateFromModal={selectedDate}
            selectedTimeFromModal={selectedTime}
            checkIfBookingConfirmed={checkIfBookingConfirmed}
            handleFormData={handleFormData}
            formData={formData}
          />
          }
      </ReactModal>
    </>
  );
}

export default BookingModal;
