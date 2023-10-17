namespace APILashes.Data
{
    public class BookingPortfolioDatabaseSettings : IBookingPortfolioDatabaseSettings
    {
        public string PortfolioBookingsCollectionName { get; set; } = String.Empty;
        public string ConnectionString { get; set; } = String.Empty;
        public string DatabaseName { get; set; } = String.Empty;
    }
}
