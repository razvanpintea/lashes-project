namespace APILashes.Data
{
    public class BookingDatabaseSettings : IBookingDatabaseSettings
    {
        public string BookingsCollectionName { get; set; } = String.Empty;
        public string ConnectionString { get; set; } = String.Empty;
        public string DatabaseName { get; set; } = String.Empty;
    }
}
