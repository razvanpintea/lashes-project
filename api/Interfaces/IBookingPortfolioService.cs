﻿using APILashes.Models;

namespace APILashes.Interfaces
{
    public interface IBookingPortfolioService
    {
         ICollection<Booking> GetBookings();
        //string GetBookings();
        Booking GetBooking(string id);
        // bool BookingExists(int id);
        Booking CreateBooking(Booking booking);
    }
}
