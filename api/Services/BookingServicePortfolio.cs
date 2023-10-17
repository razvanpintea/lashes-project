using APILashes.Data;
using APILashes.Interfaces;
using APILashes.Models;
using MongoDB.Driver;

namespace APILashes.Services
{
    public class BookingServicePortfolio : IBookingPortfolioService
    {
        private readonly IMongoCollection<Booking> _bookings;
        private readonly string _that;

        public BookingServicePortfolio(IBookingPortfolioDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _bookings = database.GetCollection<Booking>(settings.PortfolioBookingsCollectionName);
        }

        public ICollection<Booking> GetBookings()
        {
            return _bookings.Find(student => true).ToList();
        }

        public Booking GetBooking(string id)
        {
            return _bookings.Find(student => student.Id == id).FirstOrDefault();
        }

        public Booking CreateBooking(Booking booking)
        {
            _bookings.InsertOne(booking);
            return booking;
        }


    }
}
