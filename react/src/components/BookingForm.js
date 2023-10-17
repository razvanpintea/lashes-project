import React, { useEffect, useState } from 'react';
import '../styles/BookingForm.css';

function BookingForm(props) {

  // Define state variables for each form field
  const [firstName, setFirstName] = useState(props.formData.firstName);
  const [lastName, setLastName] = useState(props.formData.lastName);
  const [email, setEmail] = useState(props.formData.email);
  const [phone, setPhone] = useState(props.formData.phone);
  const [comments, setComments] = useState(props.formData.comments);
  const [silentTreatment, setSilentTreatment] = useState(props.formData.silentTreatment);
  const [loading, setLoading] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(false);
  const [time, setTime] = useState(props.selectedTimeFromModal);

  useEffect(() => {
    const updatedData = {
      firstName,
      lastName,
      email,
      phone,
      comments,
      silentTreatment,
    };
    props.handleFormData(updatedData);
  }, [firstName, lastName, email, phone, comments, silentTreatment]);

  useEffect(() => {
    console.log("date " + props.selectedDateFromModal)
  }, []);



  const formatSeparateDate = (date) => {
    const weekdayOptions = { weekday: 'long' };
    const monthOptions = { month: 'long' };
    const dayOptions = { day: 'numeric' };

    const formattedWeekday = date.toLocaleDateString(undefined, weekdayOptions);
    const formattedMonth = date.toLocaleDateString(undefined, monthOptions);
    const formattedDay = date.toLocaleDateString(undefined, dayOptions);

    return {
      weekday: formattedWeekday,
      month: formattedMonth,
      day: formattedDay,
    };
  };

  const handleSilentAppointmentChange = (e) => {
    const selectedValue = e.target.value;
    setSilentTreatment(selectedValue);
  };

    const emailContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Confirmation</title>
      <style>
        /* Add your email styles here */
        /* Example styles */
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
        }
        /* Add more styles as needed */
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Booking Confirmation</h1>
        <p>Your booking has been confirmed. Here are the details:</p>
        
        <div class="booking-info">
          <h2>Booking Details</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Date:</strong> ${formatSeparateDate(props.selectedDateFromModal).weekday}, ${formatSeparateDate(props.selectedDateFromModal).month} ${formatSeparateDate(props.selectedDateFromModal).day}</p>
          <p><strong>Time:</strong> ${props.selectedTimeFromModal}</p>
          <p><strong>Comments:</strong> ${comments}</p>
          <p><strong>Lash Set:</strong> ${props.selectedService.name}</p>
          <p><strong>Total Duration:</strong> ${props.selectedService.duration} minutes</p>
          <p><strong>Total Price:</strong> ${props.selectedService.price} £</p>
          <p><strong>Silent Treatment:</strong> ${silentTreatment}</p>
        </div>
            </div>
    </body>
    </html>
  `;

  //   const emailData = {
  //     to: email,
  //     subject: "Booking Confirmation",
  //     body: emailContent, // Use the constructed HTML template
  //   };
  //   fetch('https://apilashes.ew.r.appspot.com/api/email', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(emailData),
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         // Handle the error response here
  //         return response.json().then(errorData => {
  //           // 'errorData' should contain the error message from the server
  //           throw new Error(errorData.message);
  //         });
  //       }
  //       else
  //         console.log("email sent !! good");

  //       // Check if the response has content
  //       const contentType = response.headers.get('content-type');
  //       if (!contentType || !contentType.includes('application/json')) {
  //         // Handle cases where the response is not JSON (e.g., empty response)
  //         return null;
  //       }

  //       // If the response is OK and contains JSON data, parse it
  //       return response.json();
  //     })

  //     .catch(error => {
  //       // Handle network or other errors, or the error from the server response
  //       console.error('Error:', error.message);
  //     });

  // }

  const handleSubmit = (e) => {
    
    // e.preventDefault(); // Prevent the default form submission behavior
    const date = formatSeparateDate(props.selectedDateFromModal).weekday + ' ' +
      formatSeparateDate(props.selectedDateFromModal).month + ' ' +
      formatSeparateDate(props.selectedDateFromModal).day;
    // Check if any of the values are null or empty strings
    // Check if any of the values are null or empty strings
    const lashSetId = props.selectedService.id;
    if (
      firstName !== null && firstName.trim() !== '' &&
      lastName !== null && lastName.trim() !== '' &&
      email !== null && email.trim() !== '' &&
      phone !== null && phone.trim() !== '' &&
      lashSetId !== null && lashSetId.trim() !== '' &&
      silentTreatment !== null && silentTreatment.trim() !== ''
    ) {
      e.preventDefault();
      setLoading(true);
    const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("date", date);
      formData.append("time", time);
      formData.append("comments", comments);
      formData.append("lashSetId", lashSetId);
      formData.append("silentTreatment", silentTreatment);
      formData.append("emailContent", emailContent);


      // Make a POST request using the fetch API
      fetch("https://razwebdev.com/lashes/api/insertbookingportfolio",
      {
        method: 'POST',
        body: formData
      })
      .then(
        (response) => response.text()
      )
      .then(
        (json) => {
          setLoading(false);
          setConfirmedBooking(true);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setTime("");
          setComments("");
          setSilentTreatment("");  
          props.checkIfBookingConfirmed(true);       
          console.log(json);
        })
      .catch(
        (e) => {
          console.log(e.message)
        })
      }
  };

  return (
    <div>
      {!confirmedBooking && <p className='details-p'>Your Details</p>}

      {loading && <p>Loading....</p>}
      {!loading && !confirmedBooking &&

        <form className="booking-form">
          <div className='form-div'>
            <div className="name-fields">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  // handleFieldChange('First Name', e.target.value);
                }}
                required
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  // handleFieldChange('Last Name', e.target.value);
                }}
                required
              />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // handleFieldChange('Email', e.target.value);
              }}
              required
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                // handleFieldChange('Phone', e.target.value);
              }}
              required
            />
            <textarea
              id="comments"
              name="comments"
              placeholder="Comments"
              value={comments}
              onChange={(e) => {
                setComments(e.target.value);
                // handleFieldChange('Comments', e.target.value);
              }}
              required
            />
           

            <div className='lash-set-info'>
              <span style={{ marginLeft: '0.4rem', fontSize: "1.2rem", fontWeight: '600' }}>
                {formatSeparateDate(props.selectedDateFromModal).weekday},
                {' '}{formatSeparateDate(props.selectedDateFromModal).month}{' '}
                {formatSeparateDate(props.selectedDateFromModal).day}{' '}at{' '}{props.selectedTimeFromModal}
              </span>
              <p className='details-p-booking'>Total Duration: {props.selectedService.duration} minutes</p>

              <p className='details-p-booking-name'>{props.selectedService.name}</p>
              <div className='details-p-booking-total'>
                <p>Total</p>
                <p>{props.selectedService.price} £</p>
              </div>
            </div>
            <div>
              Please don't hesitate to ask for a silent appointment if you're anxious, tired, mentally drained, etc.
              and just want to avoid conversation and have some quiet time or just listen to music.
              There will be no judgment... there never is. Regardless of the reason, you are always welcome to utilize this option.
            </div>
            <div>
              <select
                id="silentAppointment"
                name="silentAppointment"
                value={silentTreatment}
                onChange={handleSilentAppointmentChange}
                required
              >
                <option value="" disabled selected hidden>Choose your preference</option>
                <option value="yes">Yes, I would like a silent appointment</option>
                <option value="no">No, I do not want a silent appointment</option>
                <option value="not_sure">I am not sure yet</option>
              </select>
            </div>
           
          </div>
          <button className='confirm-button' onClick={handleSubmit}>
            Confirm Booking
          </button>
       
        </form>
        
      }
      
      {confirmedBooking &&
        <div>
          <div style={{ padding: '10px', paddingBottom: "1rem", paddingTop: "3rem" }}>
            <h4>Congratulations, your booking has been confirmed</h4>
            <p> You will receive a confirmation email shortly</p>
            <p> Please make sure to check your spam folder as well</p>
          </div>
          <div className='lash-set-info'>
            <span style={{ marginLeft: '0.4rem', fontSize: "1.2rem", fontWeight: '600' }}>
              {formatSeparateDate(props.selectedDateFromModal).weekday},
              {' '}{formatSeparateDate(props.selectedDateFromModal).month}{' '}
              {formatSeparateDate(props.selectedDateFromModal).day}{' '}at{' '}{props.selectedTimeFromModal}
            </span>
            <p className='details-p-booking'>Total Duration: {props.selectedService.duration} minutes</p>

            <p className='details-p-booking-name'>{props.selectedService.name}</p>
            <div className='details-p-booking-total'>
              <p>Total</p>
              <p>{props.selectedService.price} $</p>
            </div>
          </div>
        </div>
      }

    </div>
  );
}

export default BookingForm;
