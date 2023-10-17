import '../styles/Contact.css';


function Contact() {
  
    const daysOfWeek = [
        { day: 'BUSINESS HOURS' },
        { day: 'Monday' },
        { day: 'Tuesday' },
        { day: 'Wednesday' },
        { day: 'Thursday' },
        { day: 'Friday' },
        { day: 'Saturday' },
        { day: 'Sunday' },
    ];

    const week1 = [
        { day: 'This Week' },
        { day: '10:00-18:00' },
        { day: '10:00-18:00' },
        { day: '10:00-18:00' },
        { day: '10:00-18:00' },
        { day: '10:00-18:00' },
        { day: 'closed' },
        { day: 'closed' },
    ];

    const week2 = [
        { day: 'Next Week' },
        { day: '10:00-18:00' },
        { day: '10:00-18:00' },
        { day: '10:00-18:00' },
        { day: '10:00-18:00' },
        { day: '10:00-18:00' },
        { day: 'closed' },
        { day: 'closed' },
    ];
    return (
        <div className='contact-div' >
            <div className='schedule' id='schedule'>

                <div className='days'>
                    {daysOfWeek.map((day, index) => (
                        <div key={index} className='day-div'>

                            <span className='p-day' style={{ fontWeight: index === 0 ? '600' : 'normal' }}>
                                {day.day}
                            </span>

                        </div>
                    ))}
                </div>

                <div className='week1'>
                    {week1.map((day, index) => (
                        <div key={index} className='day-div'>
                            <span className='p-day' style={{ fontWeight: index === 0 ? '600' : 'normal' }}>
                                {day.day}
                            </span>
                        </div>
                    ))}
                </div>

                <div className='week2'>
                    {week2.map((day, index) => (
                        <div key={index} className='day-div'>

                            <span className='p-day' style={{ fontWeight: index === 0 ? '600' : 'normal' }}>
                                {day.day}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='contact' id='contact' >
                <p style={{ fontWeight: "600" }}>CONTACT</p>
               <span> Newcastle Upon Tyne</span>
               <span> razvan.pintea6@gmail.com</span>
               <span> +44 772 303 1698</span>
            </div>
        </div>
    )

}
export default Contact;