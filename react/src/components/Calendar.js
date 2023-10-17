import React, { useState, useEffect } from 'react';
import '../styles/Calendar.css';


function Calendar(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [daysUntilNextMonth, setDaysUntilNextMonth] = useState(35);
  const [selectedDate, setSelectedDate] = useState(props.selectedDateFromModal);
  const [bookings, setBookings] = useState(null);
  // const [filteredBookings, setFilteredBookings] = useState(null);
  const [filteredTimes, setFilteredTimes] = useState(null);


  useEffect(() => {

    fetch('https://razwebdev.com/lashes/api/bookingsportfolio')
      .then((response) => response.json())
      .then((json) => {
        setBookings(json.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, []);



  // Function to scroll the calendar forward
  const scrollForward = () => {

    let scrollContainer=document.querySelector(".dates");
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft +=455;
  };

  // Function to scroll the calendar backward
  const scrollBackward = () => {
    let scrollContainer = document.querySelector(".dates");
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 455; // Scroll left by 455 pixels
  };

  // Get the current date
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();

  //   const daysUntilNextMonth = 31;

  // Create an array of date objects for the current month
  const datesOfMonth = Array.from({ length: daysUntilNextMonth }, (_, index) => {
    const day = currentDay + index; // Adjusted for scrolling
    return new Date(today.getFullYear(), currentMonth, day);
  });

  // State to store the selected date

  // Function to handle date selection


  // Function to format the date as "Day, Month Name" (e.g., "Wednesday, September")
  const formatSeparateDate = (date) => {
    const weekdayOptions = { weekday: 'short' };
    const monthOptions = { month: 'long' };
    const dayOptions = { day: 'numeric' };

    const formattedWeekday = date.toLocaleDateString(undefined, weekdayOptions);
    const formattedMonth = date.toLocaleDateString(undefined, monthOptions);
    const formattedDay = date.toLocaleDateString(undefined, dayOptions);

    return {
      weekday: formattedWeekday,
      month: formattedMonth.slice(0, 3).toUpperCase(),
      day: formattedDay,
    };
  };


  const formatSeparateDateLong = (date) => {
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

  const handleDateClick = (date) => {
    setSelectedDate(date);
    props.mainDateSelected(date);
    const formattedDate = formatSeparateDateLong(date).weekday + ' ' + formatSeparateDateLong(date).month + ' ' + formatSeparateDateLong(date).day;

    const filteredBookings = bookings.filter(booking => {
      return booking.date === formattedDate;
    });
    
    const filteredTimes = filteredBookings.map(booking => booking.time);

    setFilteredTimes(filteredTimes);
    // console.log(filteredTimes)
  };
  useEffect(() => {
    // Scroll to the top when the scroll position changes
    document.querySelector('.dates').scrollTo(0, 0);
  }, [scrollPosition]);


  const timeSlots = [];
  const excludedTimes = new Set();

  if (filteredTimes !== null)
    for (const filteredTime of filteredTimes) {
      excludedTimes.add(filteredTime);
      const [hour, minute] = filteredTime.split(':').map(Number);
      if (minute === 0) {
        const beforeTime1 = `${hour - 1}:30`;
        const beforeTime2 = `${hour - 1}:${minute}${minute}`;
        const beforeTime3 = `${hour - 2}:30`;
        excludedTimes.add(beforeTime1);
        excludedTimes.add(beforeTime2);
        excludedTimes.add(beforeTime3);

        const afterTime1 = `${hour}:30`;
        const afterTime2 = `${hour + 1}:${minute}${minute}`;
        const afterTime3 = `${hour + 1}:30`;
        excludedTimes.add(afterTime1);
        excludedTimes.add(afterTime2);
        excludedTimes.add(afterTime3);

      }
     
      else {
        const beforeTime1 = `${hour}:00`;
        const beforeTime2 = `${hour - 1}:30`;
        const beforeTime3 = `${hour - 1}:00`;
        excludedTimes.add(beforeTime1);
        excludedTimes.add(beforeTime2);
        excludedTimes.add(beforeTime3);

        const afterTime1 = `${hour+1}:00`;
        const afterTime2 = `${hour + 1}:30`;
        const afterTime3 = `${hour + 2}:00`;
        excludedTimes.add(afterTime1);
        excludedTimes.add(afterTime2);
        excludedTimes.add(afterTime3);

      }






    }

  for (let hour = 10; hour <= 16; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour < 10 ? `0${hour}` : hour;
      const formattedMinute = minute === 0 ? '00' : minute;
      const timeSlot = `${formattedHour}:${formattedMinute}`;

      // Check if the timeSlot is not in excludedTimes
      if (!excludedTimes.has(timeSlot)) {
        timeSlots.push(timeSlot);
      }
    }
  }




  const handleTimeSlotClick = (time) => {
    // setSelectedTime(time);
    props.bookingModalTimeSelected(time);

  };
  return (
    <div className="calendar">
      <div className="dates">
        {datesOfMonth.map((date) => (
          <span
            key={date.toISOString()}
            className={`individual-date ${selectedDate && date.getTime() === selectedDate.getTime() ? 'selected' : ''}`}
            onClick={() => handleDateClick(date)}
          >
            <span className='date-and-month'>{formatSeparateDate(date).weekday}</span>
            <span className='day'>{formatSeparateDate(date).day}</span>
            <span className='date-and-month'>{formatSeparateDate(date).month}</span>
          </span>
        ))}
      </div>
      <p onClick={scrollBackward} className='navigation-button-back'>&lt;</p>
      <p onClick={scrollForward} className='navigation-button-forwards'>&gt;</p>
      {selectedDate &&
        <div className="times">
          <div className='times-list'>
            {timeSlots.map((time) => (
              <div
                key={time}
                className='time-div'
                onClick={() => handleTimeSlotClick(time)}
              >
                {time}
              </div>
            ))}
            {/* <p>
                    Selected Date: {formatSeparateDate(selectedDate).weekday}{' '}
                    {formatSeparateDate(selectedDate).month}{' '}
                    {formatSeparateDate(selectedDate).day}
                </p> */}
          </div>
        </div>}

    </div>
  );
}

export default Calendar;
